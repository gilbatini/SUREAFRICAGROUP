import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { CONTACT, IMAGES, MUTUKULA_CORRIDOR } from '../data/content';
import { Language, PageId, ViewportVariant } from '../types';
import { MediaFrame, MonoLabel } from '../components/BrandMark';
import { FloatingNavbar, GlobalFooter, MobileWhatsAppFab } from '../components/GlobalChrome';

interface PageProps {
  variant: ViewportVariant;
  lang: Language;
  onToggleLang: (lang: Language) => void;
  onNavigate: (page: PageId) => void;
}

/** Schematic (not to scale) map of the Dar es Salaam → Mutukula → Kampala corridor. */
const CorridorMap: React.FC = () => {
  // Points laid out roughly west/north-west of Dar es Salaam.
  const pts: { name: string; x: number; y: number; major?: boolean; anchor?: 'start' | 'end' }[] = [
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
    { name: 'Mutukula', x: 118, y: 70, major: true },
    { name: 'Masaka', x: 95, y: 48 },
    { name: 'Kampala', x: 120, y: 20, major: true },
  ];
  const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const borderIdx = pts.findIndex((p) => p.name === 'Mutukula');

  return (
    <svg
      viewBox="0 0 620 400"
      className="w-full h-auto"
      role="img"
      aria-label="Schematic map of the road corridor from Dar es Salaam through Dodoma, Singida, Nzega and Bukoba to the Mutukula border and on to Kampala"
    >
      <rect width="620" height="400" fill="#0B0D12" />
      {/* grid */}
      {Array.from({ length: 12 }, (_, i) => (
        <line key={`v${i}`} x1={i * 52} y1="0" x2={i * 52} y2="400" stroke="#1F2430" strokeWidth="1" />
      ))}
      {Array.from({ length: 8 }, (_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 52} x2="620" y2={i * 52} stroke="#1F2430" strokeWidth="1" />
      ))}
      {/* Lake Victoria (schematic) */}
      <path
        d="M 165 40 C 230 20, 300 40, 300 95 C 300 150, 240 170, 190 150 C 160 138, 150 90, 165 40 Z"
        fill="#15224A"
        stroke="#1434CB"
        strokeOpacity="0.5"
      />
      <text x="232" y="98" fill="#6B7BB8" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">
        LAKE VICTORIA
      </text>
      {/* Indian Ocean edge */}
      <text x="600" y="392" fill="#6B7BB8" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="end">
        INDIAN OCEAN →
      </text>
      {/* TZ / UG border */}
      <line x1="40" y1="62" x2="210" y2="62" stroke="#F2B705" strokeWidth="1" strokeDasharray="4 4" />
      <text x="44" y="58" fill="#F2B705" fontSize="9" fontFamily="JetBrains Mono, monospace">
        UGANDA
      </text>
      <text x="44" y="76" fill="#F2B705" fontSize="9" fontFamily="JetBrains Mono, monospace">
        TANZANIA
      </text>
      {/* route */}
      <path d={path} fill="none" stroke="#1434CB" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
      <path d={path} fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2 6" strokeLinecap="round" />
      {pts.map((p, i) => (
        <g key={p.name}>
          <circle
            cx={p.x}
            cy={p.y}
            r={p.major ? 6 : 3.5}
            fill={i === borderIdx ? '#F2B705' : p.major ? '#FFFFFF' : '#1434CB'}
            stroke={i === borderIdx ? '#F2B705' : '#FFFFFF'}
            strokeWidth="1.5"
          />
          <text
            x={p.anchor === 'end' ? p.x - 10 : p.x + 10}
            y={p.y + 4}
            textAnchor={p.anchor ?? 'start'}
            fill={i === borderIdx ? '#F2B705' : p.major ? '#FFFFFF' : '#9CA3AF'}
            fontSize={p.major ? 12 : 10}
            fontWeight={p.major ? 600 : 400}
            fontFamily="Rubik, sans-serif"
          >
            {p.name}
            {i === borderIdx ? ' OSBP' : ''}
          </text>
        </g>
      ))}
      <text x="16" y="392" fill="#6B7280" fontSize="9" fontFamily="JetBrains Mono, monospace">
        SCHEMATIC · NOT TO SCALE
      </text>
    </svg>
  );
};

export const RouteMutukulaPage: React.FC<PageProps> = ({ variant, lang, onToggleLang, onNavigate }) => {
  const isMobile = variant === 'mobile';
  const pad = isMobile ? 'px-4' : 'px-12';
  const c = MUTUKULA_CORRIDOR;

  return (
    <div className="bg-white text-[#0B0D12] font-sans relative">
      {/* HERO */}
      <div className="bg-[#F4F5F7] border-b border-[#E2E5EB]">
        <FloatingNavbar
          variant={variant}
          lang={lang}
          onToggleLang={onToggleLang}
          activePage="route-mutukula"
          onNavigate={onNavigate}
        />
        <div className={`${pad} ${isMobile ? 'pt-6 pb-8' : 'pt-10 pb-12'}`}>
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-12 gap-8 items-center'}`}>
            <div className={isMobile ? '' : 'col-span-6'}>
              <MonoLabel>ROAD CORRIDOR · TANZANIA → UGANDA</MonoLabel>
              <h1
                className={`mt-4 font-medium tracking-[-0.025em] leading-[1.08] ${
                  isMobile ? 'text-[30px]' : 'text-[48px]'
                }`}
              >
                Dar es Salaam to <span className="text-[#1434CB]">Mutukula</span> and on to Kampala
              </h1>
              <p className="mt-4 text-sm md:text-base text-[#4B5563] leading-relaxed max-w-xl">
                Bonded road transit from Dar es Salaam port along the Central Corridor, through Dodoma,
                Singida, Nzega and Bukoba, crossing into Uganda at the Mutukula one-stop border post.
                One team handles the port, the bond, the trucks and the border.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('book')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#1434CB] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#0E2594] cursor-pointer"
                >
                  ■ Request a quote <span>↳</span>
                </button>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#D1D5DB] bg-white text-xs font-mono uppercase tracking-wider hover:border-[#1434CB] hover:text-[#1434CB]"
                >
                  WhatsApp {CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
            <div className={isMobile ? '' : 'col-span-6'}>
              <div className="rounded-xl overflow-hidden border border-[#E2E5EB] bg-white p-2">
                <MediaFrame
                  src={IMAGES.highwayTruck}
                  alt="Container truck on a paved highway across open savanna"
                  className={`w-full rounded-lg ${isMobile ? 'h-56' : 'h-[340px]'}`}
                  imgClassName="w-full h-full object-cover"
                  fallbackTitle="Central Corridor"
                />
                <div className="flex justify-between px-1 pt-2 font-mono text-[10px] uppercase tracking-wider text-[#4B5563]">
                  <span>Central Corridor · northern branch</span>
                  <span className="text-[#1434CB]">TZ → UG</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key facts */}
          <div className={`mt-8 grid gap-3 ${isMobile ? 'grid-cols-2' : 'grid-cols-4'}`}>
            {c.facts.map((f) => (
              <div key={f.label} className="bg-white border border-[#E2E5EB] rounded-xl p-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#4B5563]">{f.label}</p>
                <p className={`mt-2 font-medium tabular-nums ${isMobile ? 'text-xl' : 'text-2xl'}`}>{f.value}</p>
                <p className="mt-1 text-xs text-[#6B7280]">{f.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-[#6B7280]">
            Distances are approximate road distances. Transit time depends on port release, border and load.
          </p>
        </div>
      </div>

      {/* MAP + STOPS */}
      <section className={`${pad} ${isMobile ? 'py-10' : 'py-16'} border-b border-[#E2E5EB]`}>
        <MonoLabel>THE ROUTE</MonoLabel>
        <h2 className={`mt-3 font-medium tracking-tight ${isMobile ? 'text-2xl' : 'text-[34px]'}`}>
          Thirteen stops from quay to Kampala
        </h2>
        <div className={`mt-8 grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-12 gap-8 items-start'}`}>
          <div className={`${isMobile ? '' : 'col-span-7 sticky top-6'} rounded-xl overflow-hidden border border-[#1F2430] bg-[#0B0D12]`}>
            <CorridorMap />
          </div>
          <ol className={`${isMobile ? '' : 'col-span-5'} relative`}>
            {c.stops.map((s, i) => {
              const border = s.name.includes('Mutukula');
              const end = i === 0 || i === c.stops.length - 1;
              return (
                <li key={s.name} className="relative flex gap-4 pb-4 last:pb-0">
                  {i < c.stops.length - 1 && (
                    <span className="absolute left-[7px] top-4 bottom-0 w-px bg-[#D5D8DF]" aria-hidden="true" />
                  )}
                  <span
                    className={`relative mt-1 w-[15px] h-[15px] rounded-full border-2 shrink-0 ${
                      border
                        ? 'bg-[#F2B705] border-[#F2B705]'
                        : end
                        ? 'bg-[#1434CB] border-[#1434CB]'
                        : 'bg-white border-[#1434CB]'
                    }`}
                    aria-hidden="true"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className={`text-sm ${end || border ? 'font-medium' : ''}`}>{s.name}</p>
                      {s.km && <span className="font-mono text-[11px] text-[#1434CB] tabular-nums">{s.km}</span>}
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#6B7280]">{s.region}</p>
                    {s.note && <p className="mt-0.5 text-xs text-[#4B5563]">{s.note}</p>}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* BORDER */}
      <section className={`bg-[#0B0D12] text-white ${pad} ${isMobile ? 'py-10' : 'py-16'}`}>
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-12 gap-10 items-center'}`}>
          <div className={isMobile ? '' : 'col-span-5'}>
            <MediaFrame
              src={IMAGES.nightTruck}
              alt="Freight truck with headlights on a highway at dusk"
              className={`w-full rounded-xl ${isMobile ? 'h-56' : 'h-[320px]'}`}
              imgClassName="w-full h-full object-cover"
              fallbackTitle="Mutukula OSBP"
            />
          </div>
          <div className={isMobile ? '' : 'col-span-7'}>
            <MonoLabel tone="gold">THE BORDER · MUTUKULA OSBP</MonoLabel>
            <h2 className={`mt-3 font-medium tracking-tight ${isMobile ? 'text-2xl' : 'text-[34px] leading-tight'}`}>
              One stop at the border, not two
            </h2>
            <p className="mt-4 text-sm text-white/75 leading-relaxed max-w-2xl">
              Mutukula has been a one-stop border post since 2017. Tanzania Revenue Authority and Uganda
              Revenue Authority officers clear transit cargo together under one roof, so trucks stop once
              instead of at both sides. We lodge documents ahead so your truck is ready when it arrives.
            </p>
            <div className={`mt-6 grid gap-3 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
              {c.handles.map((h) => (
                <div key={h} className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/5 p-3">
                  <Check className="w-4 h-4 mt-0.5 text-[#F2B705] shrink-0" strokeWidth={2} />
                  <span className="text-[13px]">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTS + ORIGIN */}
      <section className={`${pad} ${isMobile ? 'py-10' : 'py-16'} border-b border-[#E2E5EB]`}>
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-12 gap-10'}`}>
          <div className={isMobile ? '' : 'col-span-6'}>
            <MonoLabel>DOCUMENTS FOR TRANSIT TO UGANDA</MonoLabel>
            <h2 className={`mt-3 font-medium tracking-tight ${isMobile ? 'text-2xl' : 'text-[28px]'}`}>
              What to have ready
            </h2>
            <ul className="mt-5 space-y-2.5">
              {c.documents.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 mt-0.5 text-[#1434CB] shrink-0" strokeWidth={2} />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-[#6B7280]">
              General guidance. We confirm the exact list for your cargo before it sails.
            </p>
          </div>
          <div className={isMobile ? '' : 'col-span-6'}>
            <MediaFrame
              src={IMAGES.darPort}
              alt="Container vessels and cranes at a port"
              className={`w-full rounded-xl ${isMobile ? 'h-52' : 'h-full min-h-[300px]'}`}
              imgClassName="w-full h-full object-cover"
              fallbackTitle="Dar es Salaam Port"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`bg-[#1434CB] text-white ${pad} ${isMobile ? 'py-10' : 'py-12'}`}>
        <div className={`flex ${isMobile ? 'flex-col gap-5' : 'items-center justify-between gap-6'}`}>
          <div>
            <MonoLabel tone="light">DAR → MUTUKULA → KAMPALA</MonoLabel>
            <h2 className={`mt-2 font-medium ${isMobile ? 'text-2xl' : 'text-3xl'}`}>Moving cargo to Uganda?</h2>
            <p className="mt-2 text-sm text-white/80 max-w-xl">
              Send the cargo details and delivery town. We reply with a rate and the transit plan.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('book')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0B0D12] text-white text-xs font-mono uppercase tracking-wider hover:bg-black cursor-pointer"
            >
              Book a shipment <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('tracking')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/40 text-white text-xs font-mono uppercase tracking-wider hover:bg-white/10 cursor-pointer"
            >
              Track cargo
            </button>
          </div>
        </div>
      </section>

      <GlobalFooter variant={variant} lang={lang} onNavigate={onNavigate} />
      {isMobile && <MobileWhatsAppFab />}
    </div>
  );
};
