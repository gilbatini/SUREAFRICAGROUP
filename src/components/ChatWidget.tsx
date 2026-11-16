import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp, MessageSquare, X } from 'lucide-react';
import { Language, PageId, ViewportVariant } from '../types';

type Msg = { role: 'user' | 'model'; text: string };

const COPY = {
  en: {
    open: 'Ask Sure Africa',
    title: 'Sure Africa Assistant',
    subtitle: 'Freight, customs & routes',
    greeting:
      "Hi! I can answer questions about our freight, customs clearance, warehousing and routes from Dar es Salaam. What are you shipping?",
    placeholder: 'Type your question…',
    suggestions: [
      'How does LCL shipping from China work?',
      'Can you clear my cargo at Dar es Salaam port?',
      'Do you deliver to Kampala?',
    ],
    book: 'Book a shipment',
    track: 'Track cargo',
    unavailable:
      "The assistant isn't available right now. Please use the Contact page and our team will reply.",
    contact: 'Go to Contact',
    disclaimer: 'AI assistant · our team confirms rates and timings',
  },
  sw: {
    open: 'Uliza Sure Africa',
    title: 'Msaidizi wa Sure Africa',
    subtitle: 'Mizigo, forodha na njia',
    greeting:
      'Habari! Naweza kujibu maswali kuhusu usafirishaji wa mizigo, forodha, maghala na njia kutoka Dar es Salaam. Unasafirisha nini?',
    placeholder: 'Andika swali lako…',
    suggestions: [
      'Usafirishaji wa LCL kutoka China unafanyaje kazi?',
      'Mnaweza kutoa mzigo wangu bandarini Dar es Salaam?',
      'Mnafikisha mizigo Kampala?',
    ],
    book: 'Weka usafirishaji',
    track: 'Fuatilia mzigo',
    unavailable:
      'Msaidizi haupatikani kwa sasa. Tafadhali tumia ukurasa wa Mawasiliano na timu yetu itakujibu.',
    contact: 'Nenda Mawasiliano',
    disclaimer: 'Msaidizi wa AI · timu yetu huthibitisha bei na muda',
  },
};

interface ChatWidgetProps {
  lang: Language;
  variant: ViewportVariant;
  onNavigate: (page: PageId) => void;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ lang, variant, onNavigate }) => {
  const t = COPY[lang];
  const isMobile = variant === 'mobile';
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, busy]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const send = async (text: string) => {
    const q = text.trim();
    if (!q || busy) return;
    const history: Msg[] = [...messages, { role: 'user', text: q }];
    setMessages([...history, { role: 'model', text: '' }]);
    setInput('');
    setBusy(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: history, lang }),
      });
      if (!res.ok || !res.body) {
        setUnavailable(true);
        setMessages(history);
        return;
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let answer = '';
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        const shown = answer;
        setMessages([...history, { role: 'model', text: shown }]);
      }
    } catch {
      setUnavailable(true);
      setMessages(history);
    } finally {
      setBusy(false);
    }
  };

  const go = (page: PageId) => {
    onNavigate(page);
    if (isMobile) setOpen(false);
  };

  return (
    <>
      {/* Launcher */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={t.open}
          className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#1434CB] text-white pl-3.5 pr-4 py-3 text-sm font-medium shadow-lg hover:bg-[#0F2AA8] active:translate-y-px transition-colors cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-[#F2B705]" strokeWidth={1.75} />
          {!isMobile && <span>{t.open}</span>}
        </button>
      )}

      {/* Panel */}
      {open && (
        <section
          role="dialog"
          aria-label={t.title}
          className={`fixed z-50 flex flex-col bg-white border border-[#E2E5EB] shadow-2xl ${
            isMobile
              ? 'inset-x-2 bottom-2 top-16 rounded-2xl'
              : 'bottom-4 right-4 w-[380px] h-[560px] max-h-[calc(100vh-2rem)] rounded-2xl'
          }`}
        >
          {/* Header */}
          <header className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[#E2E5EB] bg-[#0B0D12] text-white rounded-t-2xl">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#1434CB] font-medium">
                S
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium leading-tight truncate">{t.title}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-white/60">
                  ■ {t.subtitle}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/10 cursor-pointer"
            >
              <X className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </header>

          {/* Messages */}
          <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#F4F5F7]">
            <Bubble role="model" text={t.greeting} />
            {messages.length === 0 && (
              <div className="flex flex-col items-start gap-2 pt-1">
                {t.suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="text-left text-[13px] px-3 py-2 rounded-lg border border-[#D5D8DF] bg-white hover:border-[#1434CB] hover:text-[#1434CB] transition-colors cursor-pointer"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            {messages.map((m, i) =>
              m.role === 'model' && !m.text ? (
                <TypingDots key={i} />
              ) : (
                <Bubble key={i} role={m.role} text={m.text} />
              )
            )}
            {unavailable && (
              <div className="rounded-xl border border-[#F2B705]/60 bg-[#FFF9E6] p-3 text-[13px] text-[#0B0D12]">
                <p>{t.unavailable}</p>
                <button
                  type="button"
                  onClick={() => go('contact')}
                  className="mt-2 font-mono text-[11px] uppercase tracking-wider text-[#1434CB] cursor-pointer"
                >
                  {t.contact} →
                </button>
              </div>
            )}
          </div>

          {/* Quick actions */}
          <div className="flex gap-2 px-4 pt-3 bg-white">
            <button
              type="button"
              onClick={() => go('book')}
              className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1.5 rounded-md bg-[#0B0D12] text-white hover:bg-[#1434CB] cursor-pointer"
            >
              ■ {t.book}
            </button>
            <button
              type="button"
              onClick={() => go('tracking')}
              className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1.5 rounded-md border border-[#D5D8DF] text-[#0B0D12] hover:border-[#1434CB] hover:text-[#1434CB] cursor-pointer"
            >
              {t.track}
            </button>
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-end gap-2 px-4 pt-2 pb-2 bg-white"
          >
            <label htmlFor="sa-chat-input" className="sr-only">
              {t.placeholder}
            </label>
            <textarea
              id="sa-chat-input"
              ref={inputRef}
              rows={1}
              value={input}
              maxLength={1500}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              placeholder={t.placeholder}
              className="flex-1 resize-none max-h-28 rounded-lg border border-[#D5D8DF] px-3 py-2.5 text-sm focus:outline-none focus:border-[#1434CB] focus:ring-2 focus:ring-[#1434CB]/15"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#1434CB] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#0F2AA8] cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" strokeWidth={2} />
            </button>
          </form>
          <p className="px-4 pb-3 bg-white rounded-b-2xl font-mono text-[9.5px] uppercase tracking-wider text-[#6B7280]">
            {t.disclaimer}
          </p>
        </section>
      )}
    </>
  );
};

const Bubble: React.FC<Msg> = ({ role, text }) => (
  <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
    <p
      className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-relaxed ${
        role === 'user'
          ? 'bg-[#1434CB] text-white rounded-br-md'
          : 'bg-white text-[#0B0D12] border border-[#E2E5EB] rounded-bl-md'
      }`}
    >
      {text.replace(/\*\*(.+?)\*\*/g, '$1')}
    </p>
  </div>
);

const TypingDots: React.FC = () => (
  <div className="flex justify-start" aria-label="Assistant is typing">
    <div className="flex gap-1 rounded-2xl rounded-bl-md bg-white border border-[#E2E5EB] px-3.5 py-3">
      {[0, 150, 300].map((d) => (
        <span
          key={d}
          className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF] animate-bounce"
          style={{ animationDelay: `${d}ms` }}
        />
      ))}
    </div>
  </div>
);
