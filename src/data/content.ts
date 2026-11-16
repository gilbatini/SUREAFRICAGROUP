import { Language, PageId, RouteLane, ServiceItem, TrackingStage } from '../types';

export const IMAGES = {
  heroContainer: '/src/assets/images/hero_sure_africa_container_1794837491173.jpg',
  highwayTruck: '/src/assets/images/highway_freight_truck_1794837491896.jpg',
  darPort: '/src/assets/images/dar_port_vessels_1794837491533.jpg',
  warehouse: '/src/assets/images/warehouse_fulfillment_1794837493483.jpg',
  nightTruck: '/src/assets/images/night_highway_truck_1794837493151.jpg',
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
      registeredNote: 'Registered in Dar es Salaam, Tanzania (BRELA, 2026)',
    },
    sections: {
      whatWeDo: 'WHAT WE DO',
      whatWeDoHeadline:
        'We connect East Africa and the Indian Ocean islands to global trade hubs with clear documentation and dependable transit.',
      routesWeServe: 'ROUTES WE SERVE',
      routesHeadline: 'Direct port, road, and consolidation corridors from Dar es Salaam.',
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
      copyright: '© 2026 Sure Africa Group (Tanzania) Limited.',
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
      registeredNote: 'Imesajiliwa Dar es Salaam, Tanzania (BRELA, 2026)',
    },
    sections: {
      whatWeDo: 'TUNACHOFANYA',
      whatWeDoHeadline:
        'Tunaunganisha Afrika Mashariki na visiwa vya Bahari ya Hindi na masoko ya kimataifa kwa uwazi na uhakika.',
      routesWeServe: 'NJIA TUNAZOHUDUMIA',
      routesHeadline: 'Njia za moja kwa moja za bandari, barabara na mizigo ya pamoja kutoka Dar es Salaam.',
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
      copyright: '© 2026 Sure Africa Group (Tanzania) Limited.',
      privacy: 'Sera ya Faragha',
    },
  },
};

export const HOME_STATS = [
  { value: '[XX+]', label: 'Shipments', note: 'Placeholder' },
  { value: '[XX]', label: 'Destinations', note: 'Placeholder' },
  { value: '[XX%]', label: 'On-time', note: 'Placeholder' },
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
    transitPlaceholder: '[XX–XX Days · Est.]',
    notes: 'Regular island feeder & LCL dispatch.',
  },
  {
    id: 'tz-ug',
    origin: 'Dar es Salaam',
    destination: 'Uganda (Kampala)',
    corridorType: 'regional',
    mode: 'Road / Lake Corridor',
    transitPlaceholder: '[XX–XX Days · Est.]',
    notes: 'Transit bond clearance via Central Corridor.',
  },
  {
    id: 'tz-zm',
    origin: 'Dar es Salaam',
    destination: 'Zambia (Lusaka / Copperbelt)',
    corridorType: 'regional',
    mode: 'Road Corridor (TAZARA Link)',
    transitPlaceholder: '[XX–XX Days · Est.]',
    notes: 'Tunduma border clearance & bonded haulage.',
  },
  {
    id: 'tz-rw',
    origin: 'Dar es Salaam',
    destination: 'Rwanda (Kigali)',
    corridorType: 'regional',
    mode: 'Road Corridor',
    transitPlaceholder: '[XX–XX Days · Est.]',
    notes: 'Rusumo border transit documentation.',
  },
  {
    id: 'tz-drc',
    origin: 'Dar es Salaam',
    destination: 'DRC (Lubumbashi / East)',
    corridorType: 'regional',
    mode: 'Road Corridor',
    transitPlaceholder: '[XX–XX Days · Est.]',
    notes: 'Project cargo, mining supplies & general freight.',
  },
  {
    id: 'tz-km',
    origin: 'Dar es Salaam',
    destination: 'Comoros (Moroni)',
    corridorType: 'islands',
    mode: 'Indian Ocean Sea / Air',
    transitPlaceholder: '[XX–XX Days · Est.]',
    notes: 'Consolidated LCL and commercial parcels.',
  },
  {
    id: 'tz-sc',
    origin: 'Dar es Salaam',
    destination: 'Seychelles (Victoria)',
    corridorType: 'islands',
    mode: 'Indian Ocean Sea / Air',
    transitPlaceholder: '[XX–XX Days · Est.]',
    notes: 'Temperature-sensitive & retail replenishment.',
  },
  {
    id: 'tz-mu',
    origin: 'Dar es Salaam',
    destination: 'Mauritius (Port Louis)',
    corridorType: 'islands',
    mode: 'Ocean FCL / LCL',
    transitPlaceholder: '[XX–XX Days · Est.]',
    notes: 'Direct feeder connection across the Indian Ocean.',
  },
  {
    id: 'ae-tz',
    origin: 'UAE (Jebel Ali / Dubai)',
    destination: 'Dar es Salaam (Inbound)',
    corridorType: 'inbound',
    mode: 'Ocean LCL / FCL & Air',
    transitPlaceholder: '[XX–XX Days · Est.]',
    notes: 'Weekly consolidation hub for Gulf & re-export goods.',
  },
  {
    id: 'cn-tz',
    origin: 'China (Guangzhou / Ningbo / Yiwu)',
    destination: 'Dar es Salaam (Inbound)',
    corridorType: 'inbound',
    mode: 'Ocean LCL / FCL & Air',
    transitPlaceholder: '[XX–XX Days · Est.]',
    notes: 'Supplier pickup, consolidation & pre-clearance.',
  },
  {
    id: 'in-tz',
    origin: 'India (Mundra / Nhava Sheva)',
    destination: 'Dar es Salaam (Inbound)',
    corridorType: 'inbound',
    mode: 'Ocean LCL / FCL & Air',
    transitPlaceholder: '[XX–XX Days · Est.]',
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

export const TESTIMONIALS = [
  {
    id: 't1',
    quote:
      '[Client testimonial placeholder — to be populated with verified shipper feedback on Dar es Salaam customs clearance and LCL consolidation timelines.]',
    author: '[Client Name Placeholder]',
    role: '[Operations Manager · Importer]',
    route: 'Dubai → Dar es Salaam',
  },
  {
    id: 't2',
    quote:
      '[Client testimonial placeholder — to be populated with verified feedback from regional cross-border trade partners along the Central Corridor.]',
    author: '[Client Name Placeholder]',
    role: '[Supply Chain Lead · Distributor]',
    route: 'Dar es Salaam → Kampala',
  },
  {
    id: 't3',
    quote:
      '[Client testimonial placeholder — to be populated with verified feedback on Indian Ocean island feeder reliability and documentation accuracy.]',
    author: '[Client Name Placeholder]',
    role: '[Procurement Director · Retail]',
    route: 'Guangzhou → Zanzibar',
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
      'Time-sensitive air cargo into Julius Nyerere International Airport (DAR) and regional East African gateways.',
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
      'Harmonised tariff classification, TANCIS lodgement, TBS/TMDA permits, and port release coordination.',
    category: 'COMPLIANCE',
    iconName: 'file-check',
  },
  {
    id: 'warehousing-3pl',
    title: 'Warehousing & 3PL',
    titleSw: 'Maghala na 3PL',
    shortDesc:
      'Short-term and contract storage, palletisation, inventory counts, and last-mile dispatch from Dar es Salaam.',
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
  cargoSummary: '[XX CBM · XX Cartons · General Commercial Goods]',
  vesselPlaceholder: '[Vessel / Voyage Placeholder]',
  etaPlaceholder: '[DD MMM 2026 · Est.]',
  stages: [
    {
      id: 'booked',
      label: 'Booked',
      labelSw: 'Imewekwa',
      location: 'Dar es Salaam Desk',
      timestampPlaceholder: '[DD MMM · HH:MM EAT]',
      status: 'completed',
      detail: 'Booking reference issued and shipping instructions verified.',
    },
    {
      id: 'picked-up',
      label: 'Picked up',
      labelSw: 'Imepokelewa',
      location: 'Jebel Ali Consolidation Hub, UAE',
      timestampPlaceholder: '[DD MMM · HH:MM GST]',
      status: 'completed',
      detail: 'Cargo received, measured, and tallied at origin warehouse.',
    },
    {
      id: 'origin-port',
      label: 'At origin port',
      labelSw: 'Bandari ya Asili',
      location: 'Jebel Ali Terminal',
      timestampPlaceholder: '[DD MMM · HH:MM GST]',
      status: 'completed',
      detail: 'Stuffed into consolidated container and gated into export terminal.',
    },
    {
      id: 'in-transit',
      label: 'In transit',
      labelSw: 'Safarini',
      location: 'Indian Ocean Maritime Lane',
      timestampPlaceholder: '[DD MMM · In Progress]',
      status: 'current',
      detail: 'Vessel en route to Dar es Salaam Port. Pre-arrival manifest submitted.',
    },
    {
      id: 'customs-cleared',
      label: 'Customs cleared',
      labelSw: 'Forodha Imekamilika',
      location: 'Dar es Salaam Port (TANCIS)',
      timestampPlaceholder: '[Pending]',
      status: 'upcoming',
      detail: 'TRA assessment, port release, and deconsolidation gate pass.',
    },
    {
      id: 'out-for-delivery',
      label: 'Out for delivery',
      labelSw: 'Njiani Kufikishwa',
      location: 'Dar es Salaam Metro',
      timestampPlaceholder: '[Pending]',
      status: 'upcoming',
      detail: 'Dispatched via dedicated delivery vehicle to receiver address.',
    },
    {
      id: 'delivered',
      label: 'Delivered',
      labelSw: 'Imefikishwa',
      location: 'Receiver Warehouse',
      timestampPlaceholder: '[Pending]',
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
    initials: '[MD]',
    name: '[Managing Director — Name Placeholder]',
    role: 'Managing Director',
    location: 'Dar es Salaam, Tanzania',
    bio: '[Executive biography placeholder — commercial leadership, regional trade partnerships, and governance under BRELA registration.]',
  },
  {
    initials: '[HC]',
    name: '[Head of Customs & Compliance — Name Placeholder]',
    role: 'Head of Customs & Regulatory Affairs',
    location: 'Dar es Salaam Port',
    bio: '[Biography placeholder — TANCIS clearance operations, tariff advisory, and regional transit bond management.]',
  },
  {
    initials: '[OL]',
    name: '[Operations Lead — Name Placeholder]',
    role: 'Operations & Consolidation Lead',
    location: 'Dar es Salaam, Tanzania',
    bio: '[Biography placeholder — LCL consolidation schedules from UAE, China, and India plus East African corridor dispatch.]',
  },
];
