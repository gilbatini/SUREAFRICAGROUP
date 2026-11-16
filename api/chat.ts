import { GoogleGenAI } from '@google/genai';

/**
 * Sure Africa website assistant.
 * POST /api/chat  { messages: [{ role: 'user' | 'model', text: string }], lang?: 'en' | 'sw' }
 * Streams the reply back as plain text.
 *
 * Env: GEMINI_API_KEY (required), GEMINI_MODEL (optional, default gemini-flash-latest)
 */

const MAX_MESSAGES = 12;
const MAX_CHARS = 1500;

const SYSTEM_PROMPT = `You are the website assistant for Sure Africa Group (Tanzania) Limited ("Sure Africa"), a freight forwarding and logistics company registered in Dar es Salaam, Tanzania (BRELA, 2026).

WHAT SURE AFRICA DOES
- Ocean freight: full container (FCL) and shared container (LCL) shipping into Dar es Salaam and the Indian Ocean islands.
- Air freight into Julius Nyerere International Airport (DAR): urgent spares, fragile goods, aircraft-on-ground (AOG) parts.
- Road freight: bonded and domestic haulage across Tanzania and into Uganda, Rwanda, Zambia and DRC.
- Customs clearance: HS tariff advice, TANCIS lodgement with TRA, TBS/TMDA permits, port release.
- Warehousing & 3PL in Dar es Salaam: storage, stock visibility, palletising, last-mile dispatch.
- Direct LCL consolidation from the UAE (Jebel Ali/Dubai), China (Guangzhou, Ningbo, Yiwu) and India (Mundra, Nhava Sheva): pay only for the CBM you use.
- Sourcing & procurement support, project & heavy cargo, dangerous goods (IMDG/IATA), marine & yacht shipping (RoRo/LoLo), cross-docking and value-added services, export packaging and crating (ISPM-15).

ROUTES FROM DAR ES SALAAM
Zanzibar, Uganda (Kampala), Zambia (Lusaka/Copperbelt, via Tunduma), Rwanda (Kigali, via Rusumo), DRC (Lubumbashi/East), Comoros, Seychelles, Mauritius. Inbound from UAE, China and India.

USEFUL GUIDANCE
- LCL vs FCL: below roughly 13–15 CBM, LCL is usually cheaper; above that FCL often costs less per unit. Compare total landed cost.
- Common Tanzania import documents: commercial invoice, packing list, bill of lading or air waybill, certificate of origin, importer TIN; TBS Certificate of Conformity (PVoC) for regulated products; permits for restricted goods (e.g. TMDA, TPHPA). The team checks documents before arrival.
- Door-to-door from suppliers in the UAE, China or India is available. Marine cargo insurance is available on request.

HOW IT WORKS
1) Request a quote with origin, destination, cargo type, weight or CBM. 2) Book and schedule pickup. 3) Sure Africa ships and clears customs. 4) Delivered and tracked to proof of delivery.

WEBSITE PAGES you can point people to: Services, Ocean Freight, Book a Shipment (for quotes and bookings), Tracking, About, Contact.

RULES
- Never quote prices, rates, transit days, sailing dates, statistics, certifications, memberships or client names. These are not published yet. Say the team will confirm them and send the person to "Book a Shipment" or "Contact".
- Phone and WhatsApp: +256 703 487880 (WhatsApp link: https://wa.me/256703487880). Share it when someone wants to talk to the team. Never invent any other phone numbers, emails, addresses or staff names; other details are on the Contact page.
- You cannot see real shipments. For tracking, send people to the Tracking page with their reference number.
- For general customs or shipping questions, give short, practical, general guidance and suggest the team confirms specifics for their cargo.
- Stay on logistics and Sure Africa topics. Politely decline anything unrelated.
- Reply in the user's language: English or Swahili. Keep answers short (2–5 sentences or a few bullets), friendly and clear. Plain text, no markdown headings.`;

type ChatMessage = { role: 'user' | 'model'; text: string };

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });

export async function POST(request: Request): Promise<Response> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return json(503, { error: 'Chat is not configured yet.' });
  }

  let body: { messages?: unknown; lang?: unknown };
  try {
    body = await request.json();
  } catch {
    return json(400, { error: 'Invalid JSON.' });
  }

  const raw = Array.isArray(body.messages) ? body.messages : [];
  const messages: ChatMessage[] = raw
    .filter(
      (m): m is ChatMessage =>
        !!m &&
        typeof m === 'object' &&
        ((m as ChatMessage).role === 'user' || (m as ChatMessage).role === 'model') &&
        typeof (m as ChatMessage).text === 'string' &&
        (m as ChatMessage).text.trim().length > 0
    )
    .slice(-MAX_MESSAGES)
    .map((m) => ({ role: m.role, text: m.text.slice(0, MAX_CHARS) }));

  if (messages.length === 0 || messages[messages.length - 1].role !== 'user') {
    return json(400, { error: 'Send at least one user message.' });
  }

  const langHint =
    body.lang === 'sw' ? '\nThe website is currently shown in Swahili; prefer Swahili unless the user writes in English.' : '';

  try {
    const ai = new GoogleGenAI({ apiKey });
    const stream = await ai.models.generateContentStream({
      model: process.env.GEMINI_MODEL || 'gemini-flash-latest',
      contents: messages.map((m) => ({ role: m.role, parts: [{ text: m.text }] })),
      config: {
        systemInstruction: SYSTEM_PROMPT + langHint,
        temperature: 0.4,
        maxOutputTokens: 600,
      },
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.text;
            if (text) controller.enqueue(encoder.encode(text));
          }
        } catch (err) {
          console.error('chat stream error', err);
          controller.enqueue(
            encoder.encode('\n\nSorry, something went wrong. Please try again or use the Contact page.')
          );
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'cache-control': 'no-store',
      },
    });
  } catch (err) {
    console.error('chat error', err);
    return json(502, { error: 'The assistant is unavailable right now.' });
  }
}
