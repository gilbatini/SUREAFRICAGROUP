import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { CONTACT } from '../data/content';
import { RouteDef, ROUTES } from '../data/routes';
import { Language, PageId, ViewportVariant } from '../types';
import { MediaFrame, MonoLabel } from '../components/BrandMark';
import { FloatingNavbar, GlobalFooter, MobileWhatsAppFab } from '../components/GlobalChrome';

interface PageProps {
  route: RouteDef;
  variant: ViewportVariant;
  lang: Language;
  onToggleLang: (lang: Language) => void;
  onNavigate: (page: PageId, prefillRoute?: string) => void;
}

/** Schematic (not to scale) corridor map, drawn from route data. */
export const RouteMap: React.FC<{ route: RouteDef }> = ({ route }) => {
  const { points, water = [], borderLine, seaFrom, coastLabel } = route.map;
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const first = points[0];
  const mono = 'JetBrains Mono, monospace';

  return (
    <svg
      viewBox="0 0 620 400"
      className="w-full h-auto"
      role="img"
      aria-label={`Schematic map of the ${route.short} route through ${points.map((p) => p.name).join(', ')}`}
    >
      <rect width="620" height="400" fill="#0B0D12" />
      {Array.from({ length: 12 }, (_, i) => (
        <line key={`v${i}`} x1={i * 52} y1="0" x2={i * 52} y2="400" stroke="#1F2430" strokeWidth="1" />
      ))}
      {Array.from({ length: 8 }, (_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 52} x2="620" y2={i * 52} stroke="#1F2430" strokeWidth="1" />
      ))}
      {water.map((w) => (
        <g key={w.label}>
          <path d={w.d} fill="#15224A" stroke="#1434CB" strokeOpacity="0.5" />
          <text x={w.lx} y={w.ly} fill="#6B7BB8" fontSize="10" fontFamily={mono} textAnchor="middle">
            {w.label}
          </text>
        </g>
      ))}
      {coastLabel && (
        <text x="600" y="392" fill="#6B7BB8" fontSize="10" fontFamily={mono} textAnchor="end">
          {coastLabel} →
        </text>
      )}
      {borderLine && (
        <g>
          <line
            x1={borderLine.x1}
            y1={borderLine.y1}
            x2={borderLine.x2}
            y2={borderLine.y2}
            stroke="#F2B705"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          {borderLine.y1 === borderLine.y2 ? (
            <>
              <text x={borderLine.x1 + 4} y={borderLine.y1 - 4} fill="#F2B705" fontSize="9" fontFamily={mono}>
                {borderLine.above}
              </text>
              <text x={borderLine.x1 + 4} y={borderLine.y1 + 14} fill="#F2B705" fontSize="9" fontFamily={mono}>
                {borderLine.below}
              </text>
            </>
          ) : (
            <>
              <text x={borderLine.x1 - 6} y={borderLine.y1 + 10} fill="#F2B705" fontSize="9" fontFamily={mono} textAnchor="end">
                {borderLine.above}
              </text>
              <text x={borderLine.x1 + 6} y={borderLine.y1 + 10} fill="#F2B705" fontSize="9" fontFamily={mono}>
                {borderLine.below}
              </text>
            </>
          )}
        </g>
      )}
      {seaFrom && (
        <g>
          <path
            d={`M 620 ${first.y + 30} Q ${first.x + 50} ${first.y + 40}, ${first.x + 6} ${first.y + 4}`}
            fill="none"
            stroke="#F2B705"
            strokeWidth="2"
            strokeDasharray="6 5"
          />
          <text x="612" y={first.y - 12} fill="#F2B705" fontSize="10" fontFamily={mono} textAnchor="end">
            {seaFrom} ⟶
          </text>
        </g>
      )}
      <path d={path} fill="none" stroke="#1434CB" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
      <path d={path} fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2 6" strokeLinecap="round" />
      {points.map((p) => (
        <g key={p.name}>
          <circle
            cx={p.x}
            cy={p.y}
            r={p.major || p.border ? 6 : 3.5}
            fill={p.border ? '#F2B705' : p.major ? '#FFFFFF' : '#1434CB'}
            stroke={p.border ? '#F2B705' : '#FFFFFF'}
            strokeWidth="1.5"
          />
          <text
            x={p.below ? p.x : p.anchor === 'end' ? p.x - 10 : p.x + 10}
            y={p.below ? p.y + 18 : p.y + 4}
            textAnchor={p.below ? 'middle' : p.anchor ?? 'start'}
            fill={p.border ? '#F2B705' : p.major ? '#FFFFFF' : '#9CA3AF'}
            fontSize={p.major || p.border ? 12 : 10}
            fontWeight={p.major || p.border ? 600 : 400}
            fontFamily="Rubik, sans-serif"
          >
            {p.name}
            {p.border ? ' OSBP' : ''}
          </text>
        </g>
      ))}
      <text x="16" y="392" fill="#6B7280" fontSize="9" fontFamily={mono}>
        SCHEMATIC · NOT TO SCALE
      </text>
    </svg>
  );
};

export const RoutePage: React.FC<PageProps> = ({ route, variant, lang, onToggleLang, onNavigate }) => {
  const isMobile = variant === 'mobile';
  const pad = isMobile ? 'px-4' : 'px-12';
  const c = route;
  const others = ROUTES.filter((r) => r.slug !== route.slug);

  return (
    <div className="bg-white text-[#0B0D12] font-sans relative">
      {/* HERO */}
      <div className="bg-[#F4F5F7] border-b border-[#E2E5EB]">
        <FloatingNavbar
          variant={variant}
          lang={lang}
          onToggleLang={onToggleLang}
          activePage={`route:${route.slug}`}
          onNavigate={onNavigate}
        />
        <div className={`${pad} ${isMobile ? 'pt-6 pb-8' : 'pt-10 pb-12'}`}>
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-12 gap-8 items-center'}`}>
            <div className={isMobile ? '' : 'col-span-6'}>
              <MonoLabel>{c.eyebrow}</MonoLabel>
              <h1
                className={`mt-4 font-medium tracking-[-0.025em] leading-[1.08] ${
                  isMobile ? 'text-[30px]' : 'text-[48px]'
                }`}
              >
                {c.titleLead} <span className="text-[#1434CB]">{c.titleAccent}</span> {c.titleTail}
              </h1>
              <p className="mt-4 text-sm md:text-base text-[#4B5563] leading-relaxed max-w-xl">
                {c.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('book', c.short)}
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
                  src={c.images.hero}
                  alt={c.images.heroAlt}
                  className={`w-full rounded-lg ${isMobile ? 'h-56' : 'h-[340px]'}`}
                  imgClassName="w-full h-full object-cover"
                  fallbackTitle={c.short}
                />
                <div className="flex justify-between px-1 pt-2 font-mono text-[10px] uppercase tracking-wider text-[#4B5563]">
                  <span>{c.modes.join(' · ')}</span>
                  <span className="text-[#1434CB]">{c.short}</span>
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
          {c.stops.length} steps from origin to {c.stops[c.stops.length - 1].name}
        </h2>
        <div className={`mt-8 grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-12 gap-8 items-start'}`}>
          <div className={`${isMobile ? '' : 'col-span-7 sticky top-6'} rounded-xl overflow-hidden border border-[#1F2430] bg-[#0B0D12]`}>
            <RouteMap route={c} />
          </div>
          <ol className={`${isMobile ? '' : 'col-span-5'} relative`}>
            {c.stops.map((s, i) => {
              const border = s.kind === 'border';
              const sea = s.kind === 'sea';
              const end = s.kind === 'origin' || s.kind === 'port' || s.kind === 'destination';
              return (
                <li key={s.name} className="relative flex gap-4 pb-4 last:pb-0">
                  {i < c.stops.length - 1 && (
                    <span className="absolute left-[7px] top-4 bottom-0 w-px bg-[#D5D8DF]" aria-hidden="true" />
                  )}
                  <span
                    className={`relative mt-1 w-[15px] h-[15px] rounded-full border-2 shrink-0 ${
                      border
                        ? 'bg-[#F2B705] border-[#F2B705]'
                        : sea
                        ? 'bg-white border-[#F2B705] border-dashed'
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
              src={c.images.border}
              alt={c.images.borderAlt}
              className={`w-full rounded-xl ${isMobile ? 'h-56' : 'h-[320px]'}`}
              imgClassName="w-full h-full object-cover"
              fallbackTitle={c.border.label}
            />
          </div>
          <div className={isMobile ? '' : 'col-span-7'}>
            <MonoLabel tone="gold">{c.border.label}</MonoLabel>
            <h2 className={`mt-3 font-medium tracking-tight ${isMobile ? 'text-2xl' : 'text-[34px] leading-tight'}`}>
              {c.border.title}
            </h2>
            <p className="mt-4 text-sm text-white/75 leading-relaxed max-w-2xl">
              {c.border.body}
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
            <MonoLabel>DOCUMENTS FOR THIS ROUTE</MonoLabel>
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
              src={c.images.docs}
              alt={c.images.docsAlt}
              className={`w-full rounded-xl ${isMobile ? 'h-52' : 'h-full min-h-[300px]'}`}
              imgClassName="w-full h-full object-cover"
              fallbackTitle={c.short}
            />
          </div>
        </div>
      </section>

      {/* NOTICE (route-specific rules) */}
      {c.notice && (
        <section className={`bg-[#FFF9E6] border-y border-[#F2B705]/50 ${pad} ${isMobile ? 'py-10' : 'py-12'}`}>
          <MonoLabel tone="dark">{c.notice.label}</MonoLabel>
          <h2 className={`mt-3 font-medium tracking-tight ${isMobile ? 'text-2xl' : 'text-[28px]'}`}>
            {c.notice.title}
          </h2>
          <ul className={`mt-5 grid gap-3 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
            {c.notice.points.map((pt) => (
              <li key={pt} className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 bg-[#F2B705] shrink-0" aria-hidden="true" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* OTHER ROUTES */}
      <section className={`${pad} ${isMobile ? 'py-10' : 'py-12'} border-b border-[#E2E5EB] bg-[#F4F5F7]`}>
        <div className="flex items-end justify-between gap-4">
          <div>
            <MonoLabel>OTHER ROUTES</MonoLabel>
            <h2 className={`mt-2 font-medium ${isMobile ? 'text-xl' : 'text-2xl'}`}>More ways into Uganda</h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('routes')}
            className="font-mono text-[11px] uppercase tracking-wider text-[#1434CB] hover:underline cursor-pointer whitespace-nowrap"
          >
            All routes →
          </button>
        </div>
        <div className={`mt-5 grid gap-3 ${isMobile ? 'grid-cols-1' : 'grid-cols-3'}`}>
          {others.map((r) => (
            <button
              key={r.slug}
              type="button"
              onClick={() => onNavigate(`route:${r.slug}`)}
              className="text-left bg-white border border-[#E2E5EB] rounded-xl p-4 hover:border-[#1434CB] transition-colors cursor-pointer"
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-[#4B5563]">{r.modes.join(' · ')}</p>
              <p className="mt-2 font-medium">{r.short}</p>
              <p className="mt-1 text-xs text-[#4B5563]">{r.lane.notes}</p>
            </button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={`bg-[#1434CB] text-white ${pad} ${isMobile ? 'py-10' : 'py-12'}`}>
        <div className={`flex ${isMobile ? 'flex-col gap-5' : 'items-center justify-between gap-6'}`}>
          <div>
            <MonoLabel tone="light">{c.short.toUpperCase()}</MonoLabel>
            <h2 className={`mt-2 font-medium ${isMobile ? 'text-2xl' : 'text-3xl'}`}>Moving cargo on this route?</h2>
            <p className="mt-2 text-sm text-white/80 max-w-xl">
              Send the cargo details and delivery town. We reply with a rate and the transit plan.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('book', c.short)}
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
