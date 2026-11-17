/**
 * Route corridors. Every route page, the /routes index, the Home lane links and
 * the design boards are generated from this list — add a route here and it
 * appears everywhere.
 *
 * Distances are approximate road distances from public corridor sources.
 * Transit times stay placeholders until Sure Africa confirms them.
 */
import { IMAGES } from './content';

export type RouteSlug =
  | 'dar-es-salaam-mutukula'
  | 'china-mombasa-uganda'
  | 'uae-mombasa-uganda'
  | 'japan-mombasa-uganda';

export type StopKind = 'origin' | 'sea' | 'port' | 'stop' | 'border' | 'destination';

export interface RouteStop {
  name: string;
  region: string;
  kind: StopKind;
  km?: string;
  note?: string;
}

export interface MapPoint {
  name: string;
  x: number;
  y: number;
  major?: boolean;
  border?: boolean;
  anchor?: 'start' | 'end';
  /** Put the label under the dot instead of beside it. */
  below?: boolean;
}

export interface RouteDef {
  slug: RouteSlug;
  /** Short label for cards and nav, e.g. "China → Mombasa → Uganda". */
  short: string;
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  titleTail: string;
  summary: string;
  modes: string[];
  facts: { label: string; value: string; note: string }[];
  stops: RouteStop[];
  border: { label: string; title: string; body: string };
  handles: string[];
  documents: string[];
  /** Optional extra panel, e.g. vehicle import rules. */
  notice?: { label: string; title: string; points: string[] };
  images: { hero: string; heroAlt: string; border: string; borderAlt: string; docs: string; docsAlt: string };
  map: {
    points: MapPoint[];
    /** Dashed sea leg drawn from the right edge into the first port. */
    seaFrom?: string;
    water?: { d: string; label: string; lx: number; ly: number }[];
    borderLine?: { x1: number; y1: number; x2: number; y2: number; above: string; below: string };
    coastLabel?: string;
  };
  /** Text for the Home route list. */
  lane: { origin: string; destination: string; mode: string; notes: string };
}

/* Shared Kenya → Uganda road leg (Northern Corridor via Malaba). */
const NORTHERN_CORRIDOR_STOPS: RouteStop[] = [
  { name: 'Port of Mombasa', region: 'Kenya', kind: 'port', km: '0 km', note: 'Discharge; Uganda entry lodged with URA under the Single Customs Territory' },
  { name: 'Voi', region: 'Kenya', kind: 'stop' },
  { name: 'Nairobi', region: 'Kenya', kind: 'stop', note: 'Road, or SGR rail to Nairobi / Naivasha ICD' },
  { name: 'Nakuru', region: 'Kenya', kind: 'stop' },
  { name: 'Eldoret', region: 'Kenya', kind: 'stop' },
  { name: 'Malaba OSBP', region: 'KE / UG border', kind: 'border', km: '≈930 km', note: 'One-stop border post; Busia is the alternative crossing' },
  { name: 'Tororo', region: 'Uganda', kind: 'stop' },
  { name: 'Jinja', region: 'Uganda', kind: 'stop', note: 'Source of the Nile bridge' },
  { name: 'Kampala', region: 'Uganda', kind: 'destination', km: '≈1,170 km', note: 'Delivery, bonded warehouse or inland container depot' },
];

const NORTHERN_CORRIDOR_MAP: RouteDef['map'] = {
  points: [
    { name: 'Mombasa', x: 540, y: 340, major: true, anchor: 'end' },
    { name: 'Voi', x: 480, y: 290 },
    { name: 'Nairobi', x: 400, y: 215, major: true },
    { name: 'Nakuru', x: 330, y: 175 },
    { name: 'Eldoret', x: 270, y: 140 },
    { name: 'Malaba', x: 215, y: 120, border: true },
    { name: 'Tororo', x: 180, y: 112, below: true },
    { name: 'Jinja', x: 135, y: 105, below: true },
    { name: 'Kampala', x: 85, y: 95, major: true, anchor: 'end' },
  ],
  water: [
    {
      d: 'M 70 135 C 110 125, 170 140, 205 170 C 225 205, 190 250, 140 255 C 90 255, 55 220, 60 180 Z',
      label: 'LAKE VICTORIA',
      lx: 135,
      ly: 200,
    },
  ],
  borderLine: { x1: 215, y1: 40, x2: 215, y2: 160, above: 'UGANDA', below: 'KENYA' },
  coastLabel: 'INDIAN OCEAN',
};

const NORTHERN_CORRIDOR_BORDER: RouteDef['border'] = {
  label: 'THE BORDER · MALABA OSBP',
  title: 'Cleared before it reaches the border',
  body:
    'Uganda-bound cargo through Mombasa moves under the EAC Single Customs Territory: one customs declaration is lodged with the Uganda Revenue Authority, taxes are settled while the cargo is still at the port, and it travels under one regional bond with electronic cargo tracking. Malaba and Busia then handle light checks instead of a full clearance.',
};

const NORTHERN_CORRIDOR_HANDLES = [
  'Ocean booking and origin pickup',
  'Single Customs Territory entry with URA',
  'Port release at Mombasa',
  'Regional transit bond and electronic cargo tracking',
  'Trucking or SGR rail to Nairobi / Naivasha, then road to Malaba',
  'Delivery to Kampala, Jinja or your site',
];

export const ROUTES: RouteDef[] = [
  {
    slug: 'dar-es-salaam-mutukula',
    short: 'Dar es Salaam → Mutukula → Kampala',
    eyebrow: 'ROAD CORRIDOR · TANZANIA → UGANDA',
    titleLead: 'Dar es Salaam to',
    titleAccent: 'Mutukula',
    titleTail: 'and on to Kampala',
    summary:
      'Bonded road transit from Dar es Salaam port along the Central Corridor, through Dodoma, Singida, Nzega and Bukoba, crossing into Uganda at the Mutukula one-stop border post. One team handles the port, the bond, the trucks and the border.',
    modes: ['Road', 'Central Corridor'],
    facts: [
      { label: 'Dar es Salaam → Mutukula', value: '≈1,470 km', note: 'Road distance' },
      { label: 'Dar es Salaam → Kampala', value: '≈1,715 km', note: 'Road distance' },
      { label: 'Border crossing', value: 'Mutukula OSBP', note: 'One-stop TRA + URA clearance' },
      { label: 'Transit time', value: '≈4–7 days', note: 'Road, after port release · indicative' },
    ],
    stops: [
      { name: 'Dar es Salaam Port', region: 'Dar es Salaam', kind: 'port', km: '0 km', note: 'Discharge, TANCIS transit entry, bond' },
      { name: 'Morogoro', region: 'Morogoro', kind: 'stop', note: 'Central Corridor trunk road west' },
      { name: 'Dodoma', region: 'Dodoma', kind: 'stop', km: '≈451 km', note: 'Capital; route turns north-west' },
      { name: 'Manyoni', region: 'Singida', kind: 'stop' },
      { name: 'Singida', region: 'Singida', kind: 'stop' },
      { name: 'Nzega', region: 'Tabora', kind: 'stop', note: 'Junction for Mwanza and Rusumo roads' },
      { name: 'Kahama', region: 'Shinyanga', kind: 'stop' },
      { name: 'Biharamulo', region: 'Kagera', kind: 'stop', note: 'Into Kagera Region' },
      { name: 'Muleba', region: 'Kagera', kind: 'stop' },
      { name: 'Bukoba', region: 'Kagera', kind: 'stop', note: 'Lake Victoria shore' },
      { name: 'Mutukula OSBP', region: 'TZ / UG border', kind: 'border', km: '≈1,470 km', note: 'Single stop for customs and immigration' },
      { name: 'Masaka', region: 'Uganda', kind: 'stop' },
      { name: 'Kampala', region: 'Uganda', kind: 'destination', km: '≈1,715 km', note: 'Delivery or Uganda import clearance' },
    ],
    border: {
      label: 'THE BORDER · MUTUKULA OSBP',
      title: 'One stop at the border, not two',
      body:
        'Mutukula has been a one-stop border post since 2017. Tanzania Revenue Authority and Uganda Revenue Authority officers clear transit cargo together under one roof, so trucks stop once instead of at both sides. We lodge documents ahead so your truck is ready when it arrives.',
    },
    handles: [
      'Port release and transit entry at Dar es Salaam',
      'Bonded transit (customs bond) through Tanzania',
      'Truck dispatch with GPS tracking and milestone updates',
      'Border clearance at the Mutukula one-stop border post',
      'Uganda import entry with URA, or onward transit',
      'Delivery to Masaka, Kampala or your site, and empty container return',
    ],
    documents: [
      'Original bill of lading (or telex release)',
      'Commercial invoice and packing list',
      'Certificate of origin (EAC or COMESA where it applies)',
      'Transit declaration and customs bond',
      'Uganda import entry and any URA / UNBS permits',
      'Truck and driver documents for cross-border haulage',
    ],
    images: {
      hero: IMAGES.highwayTruck,
      heroAlt: 'Container truck on a paved highway across open savanna',
      border: IMAGES.nightTruck,
      borderAlt: 'Freight truck with headlights on a highway at dusk',
      docs: IMAGES.darPort,
      docsAlt: 'Container vessels and cranes at a port',
    },
    map: {
      points: [
        { name: 'Dar es Salaam', x: 560, y: 360, major: true, anchor: 'end' },
        { name: 'Morogoro', x: 470, y: 330 },
        { name: 'Dodoma', x: 390, y: 285, major: true },
        { name: 'Manyoni', x: 335, y: 262 },
        { name: 'Singida', x: 310, y: 225 },
        { name: 'Nzega', x: 255, y: 205 },
        { name: 'Kahama', x: 215, y: 185 },
        { name: 'Biharamulo', x: 165, y: 160 },
        { name: 'Muleba', x: 150, y: 128 },
        { name: 'Bukoba', x: 140, y: 100 },
        { name: 'Mutukula', x: 118, y: 70, major: true, border: true },
        { name: 'Masaka', x: 95, y: 48 },
        { name: 'Kampala', x: 120, y: 20, major: true },
      ],
      water: [
        {
          d: 'M 165 40 C 230 20, 300 40, 300 95 C 300 150, 240 170, 190 150 C 160 138, 150 90, 165 40 Z',
          label: 'LAKE VICTORIA',
          lx: 232,
          ly: 98,
        },
      ],
      borderLine: { x1: 40, y1: 62, x2: 210, y2: 62, above: 'UGANDA', below: 'TANZANIA' },
      coastLabel: 'INDIAN OCEAN',
    },
    lane: {
      origin: 'Dar es Salaam',
      destination: 'Uganda (Kampala) via Mutukula',
      mode: 'Road · Central Corridor (≈1,715 km)',
      notes: 'Bonded transit via Dodoma, Singida, Nzega, Bukoba and the Mutukula OSBP.',
    },
  },
  {
    slug: 'china-mombasa-uganda',
    short: 'China → Mombasa → Uganda',
    eyebrow: 'SEA + ROAD · CHINA → KENYA → UGANDA',
    titleLead: 'China to',
    titleAccent: 'Uganda',
    titleTail: 'through the Port of Mombasa',
    summary:
      'FCL and consolidated LCL from Chinese ports to Mombasa, then by road along the Northern Corridor through Nairobi and Eldoret to the Malaba border and Kampala. Supplier pickup, sea freight, Uganda customs and delivery in one booking.',
    modes: ['Sea', 'Road', 'Northern Corridor'],
    facts: [
      { label: 'Origin ports', value: 'Shanghai · Ningbo · Shenzhen · Guangzhou', note: 'Plus Yiwu consolidation' },
      { label: 'Mombasa → Kampala', value: '≈1,170 km', note: 'Road via Malaba' },
      { label: 'Border crossing', value: 'Malaba OSBP', note: 'Busia as alternative' },
      { label: 'Transit time', value: '≈30–40 days', note: 'Sea + road, door to Kampala · indicative' },
    ],
    stops: [
      { name: 'Supplier pickup', region: 'China', kind: 'origin', note: 'Factory collection, export customs, LCL consolidation' },
      { name: 'Ocean freight', region: 'Indian Ocean', kind: 'sea', note: 'FCL 20ft / 40ft / 40ft HC or shared LCL' },
      ...NORTHERN_CORRIDOR_STOPS,
    ],
    border: NORTHERN_CORRIDOR_BORDER,
    handles: [
      'Supplier verification and factory pickup',
      'LCL consolidation in China (pay per CBM)',
      ...NORTHERN_CORRIDOR_HANDLES.slice(1),
    ],
    documents: [
      'Commercial invoice and packing list',
      'Bill of lading',
      'Certificate of origin',
      'UNBS PVoC certificate for regulated products',
      'Uganda import entry (URA) and TIN',
      'Permits for restricted goods',
    ],
    images: {
      hero: IMAGES.heroContainer,
      heroAlt: 'Branded container lifted by a port crane',
      border: IMAGES.highwayTruck,
      borderAlt: 'Container truck on a paved highway',
      docs: IMAGES.warehouse,
      docsAlt: 'Warehouse with racked cargo',
    },
    map: { ...NORTHERN_CORRIDOR_MAP, seaFrom: 'FROM CHINA' },
    lane: {
      origin: 'China (Shanghai / Ningbo / Guangzhou)',
      destination: 'Uganda via Mombasa',
      mode: 'Ocean FCL / LCL + Road (Northern Corridor)',
      notes: 'Mombasa port, Single Customs Territory entry, Malaba border, Kampala delivery.',
    },
  },
  {
    slug: 'uae-mombasa-uganda',
    short: 'UAE → Mombasa → Uganda',
    eyebrow: 'SEA + ROAD · UAE → KENYA → UGANDA',
    titleLead: 'Dubai to',
    titleAccent: 'Uganda',
    titleTail: 'through the Port of Mombasa',
    summary:
      'Consolidation from Jebel Ali for traders buying in Dubai: general merchandise, electronics, spare parts and re-exports. Shipped to Mombasa, cleared for Uganda under the Single Customs Territory and trucked to Kampala via Malaba.',
    modes: ['Sea', 'Road', 'Northern Corridor'],
    facts: [
      { label: 'Origin', value: 'Jebel Ali · Dubai', note: 'Consolidation and supplier pickup' },
      { label: 'Mombasa → Kampala', value: '≈1,170 km', note: 'Road via Malaba' },
      { label: 'Border crossing', value: 'Malaba OSBP', note: 'Busia as alternative' },
      { label: 'Transit time', value: '≈18–25 days', note: 'Sea + road, door to Kampala · indicative' },
    ],
    stops: [
      { name: 'Jebel Ali / Dubai', region: 'UAE', kind: 'origin', note: 'Supplier pickup, consolidation, export documents' },
      { name: 'Ocean freight', region: 'Arabian Sea · Indian Ocean', kind: 'sea', note: 'Shared LCL or full containers' },
      ...NORTHERN_CORRIDOR_STOPS,
    ],
    border: NORTHERN_CORRIDOR_BORDER,
    handles: [
      'Collection from Dubai suppliers and Deira traders',
      'LCL consolidation in Jebel Ali (pay per CBM)',
      ...NORTHERN_CORRIDOR_HANDLES.slice(1),
    ],
    documents: [
      'Commercial invoice and packing list',
      'Bill of lading',
      'Certificate of origin (UAE)',
      'UNBS PVoC certificate for regulated products',
      'Uganda import entry (URA) and TIN',
      'Permits for restricted goods',
    ],
    images: {
      hero: IMAGES.warehouse,
      heroAlt: 'Warehouse with racked cargo ready for consolidation',
      border: IMAGES.nightTruck,
      borderAlt: 'Freight truck on a highway at dusk',
      docs: IMAGES.heroContainer,
      docsAlt: 'Branded container lifted by a port crane',
    },
    map: { ...NORTHERN_CORRIDOR_MAP, seaFrom: 'FROM UAE' },
    lane: {
      origin: 'UAE (Jebel Ali / Dubai)',
      destination: 'Uganda via Mombasa',
      mode: 'Ocean LCL / FCL + Road (Northern Corridor)',
      notes: 'Dubai consolidation, Mombasa port, Malaba border, Kampala delivery.',
    },
  },
  {
    slug: 'japan-mombasa-uganda',
    short: 'Japan → Mombasa → Uganda',
    eyebrow: 'RORO / CONTAINER + ROAD · JAPAN → KENYA → UGANDA',
    titleLead: 'Japan to',
    titleAccent: 'Uganda',
    titleTail: 'for vehicles and spare parts',
    summary:
      'Used vehicles shipped RoRo or in containers from Japanese ports to Mombasa, plus spare parts and machinery. We check the import rules before you buy, arrange the pre-export inspection, then clear and drive or truck the cargo to Kampala.',
    modes: ['RoRo', 'Container', 'Road'],
    facts: [
      { label: 'Origin ports', value: 'Yokohama · Nagoya · Osaka · Kobe', note: 'RoRo or container' },
      { label: 'Mombasa → Kampala', value: '≈1,170 km', note: 'Road via Malaba' },
      { label: 'Vehicle age limit', value: 'Under 15 years', note: 'Check with URA before buying' },
      { label: 'Transit time', value: '≈35–50 days', note: 'RoRo + road, port to Kampala · indicative' },
    ],
    stops: [
      { name: 'Auction / dealer in Japan', region: 'Japan', kind: 'origin', note: 'Purchase, de-registration, pre-export roadworthiness inspection' },
      { name: 'RoRo or container vessel', region: 'Indian Ocean', kind: 'sea', note: 'Vehicles RoRo; parts and machinery in containers' },
      ...NORTHERN_CORRIDOR_STOPS,
    ],
    border: NORTHERN_CORRIDOR_BORDER,
    handles: [
      'Import-rule check before you buy (age, steering, levies)',
      'Pre-export inspection booking in Japan',
      ...NORTHERN_CORRIDOR_HANDLES.slice(1, 4),
      'Car carrier, driven transit or container trucking to Malaba',
      'URA clearance and vehicle registration support in Kampala',
    ],
    documents: [
      'Japanese export certificate (de-registration)',
      'Certificate of Road Worthiness (UNBS PVoC) from Japan',
      'Commercial invoice / auction sheet',
      'Bill of lading',
      'Importer TIN and ID',
      'Uganda import entry (URA)',
    ],
    notice: {
      label: 'VEHICLE IMPORT RULES · CHECK BEFORE BUYING',
      title: 'Know these before you bid',
      points: [
        'Right-hand-drive vehicles only.',
        'URA guidance in 2026: vehicles 15 years old or older cannot be imported for registration.',
        'A Certificate of Road Worthiness from a UNBS-approved inspector in Japan is required before shipping.',
        'Older vehicles attract an environmental levy on top of import duty, excise duty and VAT.',
        'Rules change. We confirm the current position with URA and UNBS before you pay.',
      ],
    },
    images: {
      hero: IMAGES.nightTruck,
      heroAlt: 'Truck on a highway at dusk',
      border: IMAGES.highwayTruck,
      borderAlt: 'Truck on a paved highway',
      docs: IMAGES.heroContainer,
      docsAlt: 'Branded container lifted by a port crane',
    },
    map: { ...NORTHERN_CORRIDOR_MAP, seaFrom: 'FROM JAPAN' },
    lane: {
      origin: 'Japan (Yokohama / Nagoya / Osaka)',
      destination: 'Uganda via Mombasa',
      mode: 'RoRo / Container + Road (Northern Corridor)',
      notes: 'Used vehicles and spare parts; PVoC inspection, Mombasa, Malaba, Kampala.',
    },
  },
];

export const routeBySlug = (slug: string) => ROUTES.find((r) => r.slug === slug);
