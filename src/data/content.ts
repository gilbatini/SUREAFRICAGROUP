import { Language, PageId, RouteLane, ServiceItem, TrackingStage } from '../types';

export const IMAGES = {
  heroContainer: '/src/assets/images/hero_sure_africa_container_1794837491173.jpg',
  highwayTruck: '/src/assets/images/highway_freight_truck_1794837491896.jpg',
  darPort: '/src/assets/images/dar_port_vessels_1794837491533.jpg',
  warehouse: '/src/assets/images/warehouse_fulfillment_1794837493483.jpg',
  nightTruck: '/src/assets/images/night_highway_truck_1794837493151.jpg',
} as const;

export const CONTACT = {
  companyName: 'Sure Africa Group Tanzania Ltd.',
  email: 'info@africangroup.com',
  emailHref: 'mailto:info@africangroup.com',
  addressLines: [
    'Jeelan Building, 5th Floor',
    'Kariakoo, Livingstone & Udowe Streets',
    'Dar es Salaam, Tanzania',
  ],
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Jeelan Building, Livingstone Street, Kariakoo, Dar es Salaam, Tanzania'),
  phoneDisplay: '+256 703 487880',
  phoneTel: 'tel:+256703487880',
  whatsappUrl:
    'https://wa.me/256703487880?text=' +
    encodeURIComponent('Hello Sure Africa, I would like a shipping quote.'),
} as const;

export const PAGE_METADATA: { id: PageId; code: string; label: string; shortLabel: string }[] = [
  { id: 'home', code: '01', label: '01: HOMEPAGE', shortLabel: '01 Homepage' },
  { id: 'services', code: '02', label: '02: SERVICES', shortLabel: '02 Services' },
  {
    id: 'ocean-freight',
    code: '03',
    label: '03: SERVICE DETAILS — OCEAN FREIGHT',
    shortLabel: '03 Ocean Freight',
  },
  { id: 'routes', code: '03B', label: '03B: ROUTES', shortLabel: '03B Routes' },
  { id: 'book', code: '04', label: '04: BOOK A SHIPMENT', shortLabel: '04 Book Shipment' },
  { id: 'tracking', code: '05', label: '05: SHIPMENT TRACKING', shortLabel: '05 Tracking' },
  { id: 'about', code: '06', label: '06: ABOUT', shortLabel: '06 About' },
  { id: 'contact', code: '07', label: '07: CONTACT', shortLabel: '07 Contact' },
  { id: 'style-guide', code: '08', label: '08: STYLE GUIDE', shortLabel: '08 Style Guide' },
];

export const TAGLINES = {
  primary: "Moving Africa's trade, surely.",
  alternatives: [
    "East Africa's steady trade link.",
    'Dar es Salaam to the world, without friction.',
    'Cargo cleared. Corridors connected.',
  ],
};

export const COPY: Record<
  Language,
  {
    nav: {
      home: string;
      about: string;
      services: string;
      routes: string;
      tracking: string;
      contact: string;
      bookBtn: string;
      menu: string;
    };
    hero: {
      titleStart: string;
      titleAccent: string;
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
      registeredNote: string;
    };
    sections: {
      whatWeDo: string;
      whatWeDoHeadline: string;
      routesWeServe: string;
      routesHeadline: string;
      industries: string;
      industriesHeadline: string;
      partners: string;
      howItWorks: string;
      howItWorksHeadline: string;
      testimonials: string;
      servicesHeroLabel: string;
      servicesHeroHeadline: string;
      keyBenefits: string;
      ourProcess: string;
      whyTanzania: string;
      ourValues: string;
      leadership: string;
    };
    footer: {
      subscribeEyebrow: string;
      subscribeTitle: string;
      emailPlaceholder: string;
      subscribeSuccess: string;
      contactHeading: string;
      headOfficeHeading: string;
      summary: string;
      copyright: string;
      privacy: string;
    };
  }
> = {
  en: {
    nav: {
      home: 'HOME',
      about: 'ABOUT',
      services: 'SERVICES',
      routes: 'ROUTES',
      tracking: 'TRACKING',
      contact: 'CONTACT',
      bookBtn: 'Book a Shipment',
      menu: 'Menu',
    },
    hero: {
      titleStart: 'Simplifying Trade Across',
      titleAccent: 'East Africa',
      subtitle:
        'Freight forwarding, customs clearance, warehousing, and consolidated LCL shipping via Dar es Salaam.',
      primaryCta: 'REQUEST A QUOTE',
      secondaryCta: 'SEE HOW IT WORKS',
      registeredNote: 'Sure Africa Group Tanzania Ltd. · Kariakoo, Dar es Salaam',
    },
    sections: {
      whatWeDo: 'WHAT WE DO',
      whatWeDoHeadline:
        'We connect East Africa and the Indian Ocean islands to global trade hubs with clear documentation and dependable transit.',
      routesWeServe: 'ROUTES WE SERVE',
      routesHeadline: 'Port, road, and consolidation corridors through Dar es Salaam and Mombasa.',
      industries: 'INDUSTRIES',
      industriesHeadline: 'Cargo handling tailored to East African trade sectors.',
      partners: 'SURE AFRICA NETWORK & PARTNERS',
      howItWorks: 'HOW IT WORKS',
      howItWorksHeadline: 'Four clear steps from quote to final delivery.',
      testimonials: 'CLIENT FEEDBACK',
      servicesHeroLabel: 'SUPPLY CHAIN SERVICES',
      servicesHeroHeadline: 'One partner for every step of your supply chain.',
      keyBenefits: 'KEY BENEFITS',
      ourProcess: 'OUR PROCESS',
      whyTanzania: 'WHY TANZANIA',
      ourValues: 'OUR VALUES',
      leadership: 'LEADERSHIP',
    },
    footer: {
      subscribeEyebrow: 'TRADE & SCHEDULE DISPATCHES',
      subscribeTitle: 'Subscribe to our updates',
      emailPlaceholder: 'Email address',
      subscribeSuccess: 'Subscribed. Route updates will be sent to your inbox.',
      contactHeading: 'CONTACT US',
      headOfficeHeading: 'HEAD OFFICE',
      summary:
        'FREIGHT FORWARDING, CUSTOMS CLEARANCE, WAREHOUSING & LCL CONSOLIDATION FROM DAR ES SALAAM.',
      copyright: '© 2026 Sure Africa Group Tanzania Ltd.',
      privacy: 'Privacy Policy',
    },
  },
  sw: {
    nav: {
      home: 'MWANZO',
      about: 'KUHUSU',
      services: 'HUDUMA',
      routes: 'NJIA',
      tracking: 'UFUATILIAJI',
      contact: 'MAWASILIANO',
      bookBtn: 'Weka Usafirishaji',
      menu: 'Menyu',
    },
    hero: {
      titleStart: 'Kurahisisha Biashara Katika',
      titleAccent: 'Afrika Mashariki',
      subtitle:
        'Usafirishaji wa mizigo, uondoshaji wa forodha, uhifadhi wa maghala na usafirishaji wa pamoja (LCL) kupitia Bandari ya Dar es Salaam.',
      primaryCta: 'OMBA BEI',
      secondaryCta: 'ONA JINSI INAVYOFANYA KAZI',
      registeredNote: 'Sure Africa Group Tanzania Ltd. · Kariakoo, Dar es Salaam',
    },
    sections: {
      whatWeDo: 'TUNACHOFANYA',
      whatWeDoHeadline:
        'Tunaunganisha Afrika Mashariki na visiwa vya Bahari ya Hindi na masoko ya kimataifa kwa uwazi na uhakika.',
      routesWeServe: 'NJIA TUNAZOHUDUMIA',
      routesHeadline: 'Njia za bandari, barabara na mizigo ya pamoja kupitia Dar es Salaam na Mombasa.',
      industries: 'SEKTA TUNAZOHUDUMIA',
      industriesHeadline: 'Utunzaji wa mizigo unaolingana na mahitaji ya biashara za Afrika Mashariki.',
      partners: 'WASHIRIKA WA SURE AFRICA',
      howItWorks: 'JINSI INAVYOFANYA KAZI',
      howItWorksHeadline: 'Hatua nne wazi kutoka ombi la bei hadi mzigo kufika.',
      testimonials: 'MAONI YA WATEJA',
      servicesHeroLabel: 'HUDUMA ZA UGAVI',
      servicesHeroHeadline: 'Mshirika mmoja kwa kila hatua ya mnyororo wako wa ugavi.',
      keyBenefits: 'FAIDA KUU',
      ourProcess: 'MCHAKATO WETU',
      whyTanzania: 'KWA NINI TANZANIA',
      ourValues: 'MAADILI YETU',
      leadership: 'UONGOZI',
    },
    footer: {
      subscribeEyebrow: 'TAARIFA ZA SAFARI NA RATIBA',
      subscribeTitle: 'Jiandikishe kupata taarifa',
      emailPlaceholder: 'Barua pepe yako',
      subscribeSuccess: 'Umejiandikisha. Utapokea ratiba na taarifa za usafirishaji.',
      contactHeading: 'WASILIANA NASI',
      headOfficeHeading: 'OFISI KUU',
      summary:
        'USAFIRISHAJI WA MIZIGO, FORODHA, MAGHALA NA LCL KUTOKA DAR ES SALAAM.',
      copyright: '© 2026 Sure Africa Group Tanzania Ltd.',
      privacy: 'Sera ya Faragha',
    },
  },
};

export const HOME_STATS = [
  { value: '12', label: 'Services', note: 'Sea · air · road · customs' },
  { value: '14', label: 'Trade lanes', note: 'Africa · UAE · China · India · Japan' },
  { value: '6 days', label: 'Ops desk', note: 'Mon–Sat · 08:00–18:00 EAT' },
];

export const CORE_PILLARS = [
  {
    id: 'forwarding',
    title: 'Freight Forwarding',
    description:
      'Ocean, air, and cross-border road movements coordinated from origin supplier to final receiver.',
    iconName: 'ship' as const,
  },
  {
    id: 'warehousing',
    title: 'Warehousing & Distribution',
    description:
      'Secure storage, pallet handling, deconsolidation, and regional dispatch in Dar es Salaam.',
    iconName: 'warehouse' as const,
  },
  {
    id: 'customs',
    title: 'Customs Clearance',
    description:
      'TRA and TANCIS entries prepared accurately to prevent port delays and unexpected demurrage.',
    iconName: 'file-check' as const,
  },
];

export const ROUTE_LANES: RouteLane[] = [
  {
    id: 'tz-znz',
    origin: 'Dar es Salaam',
    destination: 'Zanzibar',
    corridorType: 'islands',
    mode: 'Coastal Sea / Barge',
    transitPlaceholder: '≈1–2 days',
    notes: 'Regular island feeder & LCL dispatch.',
  },
  {
    id: 'tz-ug',
    origin: 'Dar es Salaam',
    destination: 'Uganda (Kampala) via Mutukula',
    corridorType: 'regional',
    mode: 'Road · Central Corridor (≈1,715 km)',
    transitPlaceholder: '≈4–7 days',
    notes: 'Bonded transit via Morogoro, Dodoma, Singida, Nzega, Bukoba and the Mutukula OSBP.',
  },
  {
    id: 'tz-zm',
    origin: 'Dar es Salaam',
    destination: 'Zambia (Lusaka / Copperbelt)',
    corridorType: 'regional',
    mode: 'Road Corridor (TAZARA Link)',
    transitPlaceholder: '≈5–8 days',
    notes: 'Tunduma border clearance & bonded haulage.',
  },
  {
    id: 'tz-rw',
    origin: 'Dar es Salaam',
    destination: 'Rwanda (Kigali)',
    corridorType: 'regional',
    mode: 'Road Corridor',
    transitPlaceholder: '≈4–6 days',
    notes: 'Rusumo border transit documentation.',
  },
  {
    id: 'tz-drc',
    origin: 'Dar es Salaam',
    destination: 'DRC (Lubumbashi / East)',
    corridorType: 'regional',
    mode: 'Road Corridor',
    transitPlaceholder: '≈8–12 days',
    notes: 'Project cargo, mining supplies & general freight.',
  },
  {
    id: 'tz-km',
    origin: 'Dar es Salaam',
    destination: 'Comoros (Moroni)',
    corridorType: 'islands',
    mode: 'Indian Ocean Sea / Air',
    transitPlaceholder: '≈5–10 days',
    notes: 'Consolidated LCL and commercial parcels.',
  },
  {
    id: 'tz-sc',
    origin: 'Dar es Salaam',
    destination: 'Seychelles (Victoria)',
    corridorType: 'islands',
    mode: 'Indian Ocean Sea / Air',
    transitPlaceholder: '≈7–12 days',
    notes: 'Temperature-sensitive & retail replenishment.',
  },
  {
    id: 'tz-mu',
    origin: 'Dar es Salaam',
    destination: 'Mauritius (Port Louis)',
    corridorType: 'islands',
    mode: 'Ocean FCL / LCL',
    transitPlaceholder: '≈10–15 days',
    notes: 'Direct feeder connection across the Indian Ocean.',
  },
  {
    id: 'ae-tz',
    origin: 'UAE (Jebel Ali / Dubai)',
    destination: 'Dar es Salaam (Inbound)',
    corridorType: 'inbound',
    mode: 'Ocean LCL / FCL & Air',
    transitPlaceholder: '≈14–21 days',
    notes: 'Consolidation hub for Gulf & re-export goods.',
  },
  {
    id: 'cn-tz',
    origin: 'China (Guangzhou / Ningbo / Yiwu)',
    destination: 'Dar es Salaam (Inbound)',
    corridorType: 'inbound',
    mode: 'Ocean LCL / FCL & Air',
    transitPlaceholder: '≈25–35 days',
    notes: 'Supplier pickup, consolidation & pre-clearance.',
  },
  {
    id: 'in-tz',
    origin: 'India (Mundra / Nhava Sheva)',
    destination: 'Dar es Salaam (Inbound)',
    corridorType: 'inbound',
    mode: 'Ocean LCL / FCL & Air',
    transitPlaceholder: '≈14–20 days',
    notes: 'Pharmaceuticals, spares, machinery & FMCG.',
  },
];

export const INDUSTRIES = [
  { name: 'Manufacturing', icon: 'factory' },
  { name: 'Retail & eCommerce', icon: 'shopping-bag' },
  { name: 'Automotive & Spare Parts', icon: 'wrench' },
  { name: 'Electronics', icon: 'cpu' },
  { name: 'Food & Beverage', icon: 'utensils' },
  { name: 'Pharmaceuticals', icon: 'pill' },
  { name: 'Construction', icon: 'hard-hat' },
  { name: 'Oil & Gas', icon: 'flame' },
  { name: 'Agriculture', icon: 'sprout' },
  { name: 'High-value Goods', icon: 'shield' },
  { name: 'Fashion & Apparel', icon: 'shirt' },
  { name: 'Chemicals & Hazardous', icon: 'flask' },
  { name: 'Marine & Yachts', icon: 'anchor' },
  { name: 'Mining & Minerals', icon: 'pickaxe' },
  { name: 'NGOs & Humanitarian', icon: 'heart-handshake' },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 'STEP 01',
    title: 'Request a quote',
    description:
      'Share your origin, destination, cargo weight or CBM, and timeline. Receive a clear itemised rate breakdown with port and clearance estimates.',
    previewTitle: 'Route & Rate Estimate',
    previewDetail: 'Origin → Dar es Salaam → Final Destination',
  },
  {
    step: 'STEP 02',
    title: 'Book & schedule pickup',
    description:
      'Confirm your booking online. We coordinate supplier collection or receiving at our consolidation warehouse in UAE, China, India, or Dar es Salaam.',
    previewTitle: 'Pickup Scheduled',
    previewDetail: 'Booking confirmed · Warehouse gate slot reserved',
  },
  {
    step: 'STEP 03',
    title: 'We ship & clear customs',
    description:
      'Our operations team manages vessel loading, bill of lading checks, TRA/TANCIS pre-lodgement, and border transit bonds without handoff gaps.',
    previewTitle: 'TANCIS Pre-Lodgement',
    previewDetail: 'Manifest verified · Port & customs clearance active',
  },
  {
    step: 'STEP 04',
    title: 'Delivered & tracked',
    description:
      'Follow milestone updates from departure through final delivery to your warehouse, shop, or regional border depot.',
    previewTitle: 'Proof of Delivery',
    previewDetail: 'Signed POD · Final milestone logged',
  },
];


export const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'ocean-freight',
    title: 'Ocean Freight',
    titleSw: 'Usafirishaji wa Bahari',
    shortDesc:
      'Full container (FCL) and consolidated (LCL) sea freight connecting global ports to Dar es Salaam and Indian Ocean islands.',
    category: 'CORE FREIGHT',
    iconName: 'ship',
    featured: true,
  },
  {
    id: 'air-freight',
    title: 'Air Freight',
    titleSw: 'Usafirishaji wa Anga',
    shortDesc:
      'Time-sensitive air cargo into Julius Nyerere International Airport (DAR), including urgent spares, fragile goods and aircraft-on-ground (AOG) parts.',
    category: 'PRIORITY CARGO',
    iconName: 'plane',
  },
  {
    id: 'road-freight',
    title: 'Road Freight',
    titleSw: 'Usafirishaji wa Barabara',
    shortDesc:
      'Bonded and domestic road haulage across Tanzania and into Uganda, Rwanda, Zambia, and DRC.',
    category: 'INLAND CORRIDOR',
    iconName: 'truck',
  },
  {
    id: 'customs-clearance',
    title: 'Customs Clearance',
    titleSw: 'Uondoshaji wa Forodha',
    shortDesc:
      'HS tariff advice before you ship, TANCIS lodgement, TBS/TMDA permits, and port release coordination.',
    category: 'COMPLIANCE',
    iconName: 'file-check',
  },
  {
    id: 'warehousing-3pl',
    title: 'Warehousing & 3PL',
    titleSw: 'Maghala na 3PL',
    shortDesc:
      'Short-term and contract storage, live stock visibility, palletisation, inventory counts, and last-mile dispatch from Dar es Salaam.',
    category: 'STORAGE',
    iconName: 'warehouse',
  },
  {
    id: 'direct-lcl',
    title: 'Direct LCL Consolidation',
    titleSw: 'Mizigo ya Pamoja (LCL)',
    shortDesc:
      'Cost-effective shared container space from UAE, China, and India—pay strictly for the CBM your cargo occupies.',
    category: 'CONSOLIDATION',
    iconName: 'boxes',
  },
  {
    id: 'sourcing-procurement',
    title: 'Sourcing & Procurement',
    titleSw: 'Ununuzi na Ukaguzi',
    shortDesc:
      'Supplier verification, cargo readiness checks, and pre-shipment consolidation before export.',
    category: 'ADVISORY',
    iconName: 'search',
  },
  {
    id: 'project-cargo',
    title: 'Project & Special Cargo',
    titleSw: 'Mizigo Maalum na Miradi',
    shortDesc:
      'Out-of-gauge machinery, breakbulk loads, and route surveys for infrastructure and energy developments.',
    category: 'HEAVY LIFT',
    iconName: 'package-plus',
  },
  {
    id: 'dangerous-goods',
    title: 'Dangerous Goods Handling',
    titleSw: 'Mizigo Hatari',
    shortDesc:
      'Classified chemicals, batteries, and flammables moved with correct IMDG/IATA declarations, labelling, and segregation.',
    category: 'SPECIAL HANDLING',
    iconName: 'alert-triangle',
  },
  {
    id: 'marine-yacht',
    title: 'Marine & Yacht Logistics',
    titleSw: 'Usafirishaji wa Boti na Yoti',
    shortDesc:
      'RoRo and LoLo shipping for boats and yachts, cradle fabrication, and coordinated delivery to Dar es Salaam and Zanzibar.',
    category: 'MARINE',
    iconName: 'anchor',
  },
  {
    id: 'cross-docking',
    title: 'Cross-docking & Value-Added Services',
    titleSw: 'Huduma za Ziada Ghalani',
    shortDesc:
      'Fast transfer between inbound and outbound loads, plus labelling, repacking, kitting, and quality checks before dispatch.',
    category: 'FULFILMENT',
    iconName: 'repeat',
  },
  {
    id: 'packaging',
    title: 'Packaging & Crating',
    titleSw: 'Ufungashaji wa Mizigo',
    shortDesc:
      'Export-grade wooden crates, shrink-wrapping, and fumigated pallets that meet ISPM-15 and protect cargo on long routes.',
    category: 'CARGO CARE',
    iconName: 'package',
  },
];

export const OCEAN_KEY_BENEFITS = [
  {
    title: 'Insurance Cover',
    description:
      'All-risk marine cargo cover options arranged per shipment value so goods stay protected from port of loading to final warehouse.',
    icon: 'shield' as const,
  },
  {
    title: 'On-time Delivery',
    description:
      'Proactive vessel sailing checks and pre-arrival customs filing designed to keep cargo moving on scheduled windows.',
    icon: 'clock' as const,
  },
  {
    title: '24/7 Support',
    description:
      'Direct access to our Dar es Salaam operations desk via phone, email, and WhatsApp for urgent shipment updates.',
    icon: 'headphones' as const,
  },
  {
    title: 'Paperless Documentation',
    description:
      'Digital bills of lading, packing lists, and commercial invoice checks handled centrally with clear audit trails.',
    icon: 'file' as const,
  },
];

export const SAMPLE_TRACKING_SHIPMENT = {
  trackingNumber: 'SA-TZ-2026-0104',
  origin: 'Jebel Ali Port, UAE',
  destination: 'Dar es Salaam, Tanzania',
  serviceMode: 'Ocean LCL Consolidation',
  cargoSummary: '6.4 CBM · 48 cartons · General commercial goods',
  vesselPlaceholder: 'Sample vessel · Voy. 2611E',
  etaPlaceholder: '28 Nov 2026 · Est.',
  stages: [
    {
      id: 'booked',
      label: 'Booked',
      labelSw: 'Imewekwa',
      location: 'Dar es Salaam Desk',
      timestampPlaceholder: '03 Nov · 10:15 EAT',
      status: 'completed',
      detail: 'Booking reference issued and shipping instructions verified.',
    },
    {
      id: 'picked-up',
      label: 'Picked up',
      labelSw: 'Imepokelewa',
      location: 'Jebel Ali Consolidation Hub, UAE',
      timestampPlaceholder: '07 Nov · 14:30 GST',
      status: 'completed',
      detail: 'Cargo received, measured, and tallied at origin warehouse.',
    },
    {
      id: 'origin-port',
      label: 'At origin port',
      labelSw: 'Bandari ya Asili',
      location: 'Jebel Ali Terminal',
      timestampPlaceholder: '10 Nov · 09:00 GST',
      status: 'completed',
      detail: 'Stuffed into consolidated container and gated into export terminal.',
    },
    {
      id: 'in-transit',
      label: 'In transit',
      labelSw: 'Safarini',
      location: 'Indian Ocean Maritime Lane',
      timestampPlaceholder: '13 Nov · In progress',
      status: 'current',
      detail: 'Vessel en route to Dar es Salaam Port. Pre-arrival manifest submitted.',
    },
    {
      id: 'customs-cleared',
      label: 'Customs cleared',
      labelSw: 'Forodha Imekamilika',
      location: 'Dar es Salaam Port (TANCIS)',
      timestampPlaceholder: 'Expected 28 Nov',
      status: 'upcoming',
      detail: 'TRA assessment, port release, and deconsolidation gate pass.',
    },
    {
      id: 'out-for-delivery',
      label: 'Out for delivery',
      labelSw: 'Njiani Kufikishwa',
      location: 'Dar es Salaam Metro',
      timestampPlaceholder: 'Expected 01 Dec',
      status: 'upcoming',
      detail: 'Dispatched via dedicated delivery vehicle to receiver address.',
    },
    {
      id: 'delivered',
      label: 'Delivered',
      labelSw: 'Imefikishwa',
      location: 'Receiver Warehouse',
      timestampPlaceholder: 'Expected 02 Dec',
      status: 'upcoming',
      detail: 'Signed proof of delivery uploaded to client record.',
    },
  ] as TrackingStage[],
};

export const ABOUT_VALUES = [
  {
    code: '01',
    title: 'Plain Accountability',
    description:
      'One named coordinator owns your shipment from quote to proof of delivery—no fragmented handoffs.',
  },
  {
    code: '02',
    title: 'Compliance First',
    description:
      'Accurate HS codes, verified packing lists, and pre-lodged TANCIS entries before vessels berth.',
  },
  {
    code: '03',
    title: 'Transparent Pricing',
    description:
      'Itemised freight, port handling, and customs disbursement estimates agreed upfront without hidden surcharges.',
  },
  {
    code: '04',
    title: 'East African Grounding',
    description:
      'Built in Dar es Salaam for Tanzanian importers, exporters, and regional transit corridors.',
  },
];

export const LEADERSHIP_PLACEHOLDERS = [
  {
    initials: 'MG',
    name: 'Management',
    role: 'Commercial & client accounts',
    location: 'Kariakoo, Dar es Salaam',
    bio: 'Rates, contracts and one point of contact for every client account, from first quote to final invoice.',
  },
  {
    initials: 'CC',
    name: 'Customs & Compliance',
    role: 'Clearance & regulatory affairs',
    location: 'Dar es Salaam Port',
    bio: 'TANCIS entries, HS classification, permits and transit bonds for Tanzania and onward to Uganda, Zambia, Rwanda and DRC.',
  },
  {
    initials: 'OP',
    name: 'Operations',
    role: 'Consolidation & dispatch',
    location: 'Dar es Salaam · Mombasa corridor',
    bio: 'LCL consolidation from the UAE, China and India, truck dispatch and milestone updates until proof of delivery.',
  },
];

/** What each service includes (shown on the Services page detail panel). */
export const SERVICE_INCLUDES: Record<string, string[]> = {
  'ocean-freight': [
    'FCL (20ft, 40ft, 40ft HC) and shared-container LCL',
    'Door-to-door or port-to-port, with origin pickup',
    'Export and import customs handled in one booking',
    'Reefer, out-of-gauge and dangerous goods on request',
  ],
  'air-freight': [
    'Express and economy options into DAR and regional airports',
    'Urgent spares, fragile, high-value and AOG parts',
    'Sea–air combinations to balance cost and speed',
    'Airport clearance and same-day dispatch in Dar es Salaam',
  ],
  'road-freight': [
    'Full and part truckloads within Tanzania',
    'Bonded transit to Uganda, Rwanda, Zambia and DRC',
    'Border documentation at Tunduma, Rusumo and Mutukula',
    'Milestone updates from loading to proof of delivery',
  ],
  'customs-clearance': [
    'Document check before cargo arrives',
    'HS code classification and tariff advice',
    'TANCIS lodgement, duty assessment and port release',
    'Permits for regulated goods (TBS, TMDA, TPHPA and others)',
  ],
  'warehousing-3pl': [
    'Short-term and contract storage in Dar es Salaam',
    'Stock visibility with regular inventory reports',
    'Pick, pack, labelling and order dispatch',
    'Storage that scales with seasonal demand',
  ],
  'direct-lcl': [
    'Consolidation hubs in the UAE, China and India',
    'Pay only for the CBM your cargo occupies',
    'Insurance and destination clearance available',
    'Ideal for small, frequent or multi-supplier orders',
  ],
  'sourcing-procurement': [
    'Supplier search and background checks',
    'Price and delivery-term negotiation',
    'Purchase order follow-up and quality inspections',
    'Consolidation of several suppliers into one shipment',
  ],
  'project-cargo': [
    'Route surveys and permits for oversized loads',
    'Breakbulk, flat-rack and low-bed transport',
    'Lifting and site delivery planning',
    'For construction, mining and energy projects',
  ],
  'dangerous-goods': [
    'Classification and IMDG / IATA declarations',
    'Correct packing, marking and labelling',
    'Segregated handling and storage',
    'Permits for chemicals and restricted cargo',
  ],
  'marine-yacht': [
    'RoRo, LoLo and flat-rack shipping for boats',
    'Custom cradles and secure lashing',
    'Import clearance and marine-registry paperwork support',
    'Delivery to Dar es Salaam and Zanzibar',
  ],
  'cross-docking': [
    'Direct transfer from inbound to outbound trucks',
    'Labelling, repacking and kitting',
    'Quality and quantity checks before dispatch',
    'Returns handling (reverse logistics)',
  ],
  packaging: [
    'Export wooden crates and ISPM-15 fumigated pallets',
    'Shrink-wrapping and moisture protection',
    'Fragile and high-value packing',
    'Marking and labelling to carrier standards',
  ],
};

/** Common import documents for Tanzania (general guidance). */
export const IMPORT_DOCUMENTS = [
  'Commercial invoice',
  'Packing list',
  'Bill of lading or air waybill',
  'Certificate of origin',
  'Importer TIN and business registration',
  'Certificate of Conformity (TBS PVoC) for regulated products',
  'Permits or licences for restricted goods (e.g. TMDA, TPHPA)',
  'Insurance certificate, if cargo is insured',
];

export const FAQS: Record<Language, { q: string; a: string }[]> = {
  en: [
    {
      q: 'What is LCL shipping?',
      a: 'LCL (less than container load) means your cargo shares a container with other shippers. You pay only for the space you use, which makes it the cheaper option for smaller or frequent shipments.',
    },
    {
      q: 'Should I choose LCL or FCL?',
      a: 'As a rough guide, under about 13–15 CBM LCL is usually cheaper; above that a full container (FCL) often costs less per unit and is handled less. Compare the total landed cost, not just the ocean freight. We can price both for you.',
    },
    {
      q: 'Which documents do I need to import into Tanzania?',
      a: 'Usually a commercial invoice, packing list, bill of lading or air waybill, certificate of origin and your TIN. Some products also need a TBS Certificate of Conformity or permits from regulators such as TMDA. We check your documents before the cargo arrives.',
    },
    {
      q: 'How long does customs clearance take?',
      a: 'It depends on the goods, the documents and any inspections. Correct paperwork lodged before arrival is the biggest factor. Our team will give you an estimate for your specific shipment.',
    },
    {
      q: 'Do you deliver to Uganda, Rwanda, Zambia and DRC?',
      a: 'Yes. We move cargo from Dar es Salaam port by road under transit bond to Kampala, Kigali, Lusaka, the Copperbelt and eastern DRC, and handle the border paperwork.',
    },
    {
      q: 'Do you offer door-to-door service?',
      a: 'Yes. We can collect from your supplier in the UAE, China or India, ship, clear customs and deliver to your warehouse, shop or site.',
    },
    {
      q: 'Can you ship dangerous or temperature-sensitive goods?',
      a: 'Yes, with the right declarations, packing and permits. Tell us the product and its classification when you request a quote.',
    },
    {
      q: 'Is my cargo insured?',
      a: 'Marine cargo insurance is available for every shipment based on its value. We recommend it, especially for LCL and high-value goods.',
    },
  ],
  sw: [
    {
      q: 'Usafirishaji wa LCL ni nini?',
      a: 'LCL ni pale mzigo wako unaposhiriki kontena moja na wasafirishaji wengine. Unalipia nafasi unayotumia tu, hivyo ni nafuu kwa mizigo midogo au ya mara kwa mara.',
    },
    {
      q: 'Nichague LCL au FCL?',
      a: 'Kwa ujumla, chini ya takriban CBM 13–15 LCL huwa nafuu zaidi; zaidi ya hapo kontena zima (FCL) mara nyingi huwa nafuu kwa kila kipimo. Linganisha gharama zote hadi mzigo kufika. Tunaweza kukupa bei za zote mbili.',
    },
    {
      q: 'Ni nyaraka gani zinahitajika kuingiza mizigo Tanzania?',
      a: 'Kwa kawaida ankara ya biashara, orodha ya ufungashaji, hati ya usafirishaji (B/L au AWB), cheti cha asili na TIN yako. Bidhaa nyingine zinahitaji cheti cha TBS au vibali vya TMDA. Tunakagua nyaraka zako kabla mzigo haujafika.',
    },
    {
      q: 'Uondoshaji wa forodha huchukua muda gani?',
      a: 'Inategemea bidhaa, nyaraka na ukaguzi. Nyaraka sahihi zilizowasilishwa mapema ndizo husaidia zaidi. Timu yetu itakupa makadirio ya mzigo wako.',
    },
    {
      q: 'Mnafikisha mizigo Uganda, Rwanda, Zambia na DRC?',
      a: 'Ndiyo. Tunasafirisha kutoka Bandari ya Dar es Salaam kwa barabara chini ya dhamana ya transit hadi Kampala, Kigali, Lusaka, Copperbelt na mashariki mwa DRC.',
    },
    {
      q: 'Mnatoa huduma ya mlango hadi mlango?',
      a: 'Ndiyo. Tunachukua mzigo kwa msambazaji wako UAE, China au India, tunasafirisha, tunatoa forodha na kufikisha ghalani, dukani au eneo la mradi.',
    },
    {
      q: 'Mnasafirisha mizigo hatari au inayohitaji ubaridi?',
      a: 'Ndiyo, kwa matamko, ufungashaji na vibali sahihi. Tuambie aina ya bidhaa unapoomba bei.',
    },
    {
      q: 'Mzigo wangu una bima?',
      a: 'Bima ya mizigo inapatikana kwa kila usafirishaji kulingana na thamani. Tunaishauri hasa kwa LCL na bidhaa za thamani kubwa.',
    },
  ],
};


