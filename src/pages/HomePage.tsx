import React, { useState } from 'react';
import { ArrowRight, Play, Plus, Minus, ArrowUpRight } from 'lucide-react';
import {
  COPY,
  CORE_PILLARS,
  HOME_STATS,
  HOW_IT_WORKS_STEPS,
  IMAGES,
  INDUSTRIES,
  ROUTE_LANES,
  TESTIMONIALS,
} from '../data/content';
import { Language, PageId, ViewportVariant } from '../types';
import { MediaFrame, MonoLabel, ServiceIcon } from '../components/BrandMark';
import { FloatingNavbar, GlobalFooter, MobileWhatsAppFab } from '../components/GlobalChrome';
import { FaqSection } from '../components/FaqSection';

interface PageProps {
  variant: ViewportVariant;
  lang: Language;
  onToggleLang: (lang: Language) => void;
  onNavigate: (page: PageId, prefillRoute?: string) => void;
}

export const HomePage: React.FC<PageProps> = ({
  variant,
  lang,
  onToggleLang,
  onNavigate,
}) => {
  const isMobile = variant === 'mobile';
  const t = COPY[lang];
  const [routeFilter, setRouteFilter] = useState<'all' | 'regional' | 'islands' | 'inbound'>('all');
  const [activeStep, setActiveStep] = useState<number>(1); // Default Step 2 dark expanded like reference

  const filteredRoutes =
    routeFilter === 'all'
      ? ROUTE_LANES
      : ROUTE_LANES.filter((r) => r.corridorType === routeFilter);

  const partnerSlots = Array.from({ length: 12 }, (_, idx) => ({
    id: idx + 1,
    code: `PARTNER ${String(idx + 1).padStart(2, '0')}`,
  }));

  return (
    <div className="bg-white text-[#0B0D12] font-sans relative">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-b from-[#F4F5F7] via-[#F7F8FA] to-white border-b border-[#E2E5EB]">
        <FloatingNavbar
          variant={variant}
          lang={lang}
          onToggleLang={onToggleLang}
          activePage="home"
          onNavigate={(p) => onNavigate(p)}
        />

        <div className={isMobile ? 'px-4 pt-6 pb-8' : 'px-12 pt-10 pb-14'}>
          {/* 12-col Desktop Hero / 4-col Mobile */}
          <div className={`grid ${isMobile ? 'grid-cols-4 gap-5' : 'grid-cols-12 gap-8 items-center'}`}>
            {/* Left Copy */}
            <div className={isMobile ? 'col-span-4' : 'col-span-6'}>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#4B5563] mb-3">
                {t.hero.registeredNote}
              </p>

              <h1
                className={`font-medium tracking-[-0.025em] leading-[1.05] text-[#0B0D12] ${
                  isMobile ? 'text-[34px]' : 'text-[56px]'
                }`}
              >
                {t.hero.titleStart}{' '}
                <span className="text-[#1434CB]">{t.hero.titleAccent}</span>
              </h1>

              <p
                className={`mt-4 text-[#4B5563] leading-[1.6] ${
                  isMobile ? 'text-sm' : 'text-base max-w-xl'
                }`}
              >
                {t.hero.subtitle}
              </p>

              {/* CTA Pair */}
              <div
                className={`mt-6 flex ${
                  isMobile ? 'flex-col gap-2.5' : 'flex-wrap items-center gap-3'
                }`}
              >
                <button
                  type="button"
                  onClick={() => onNavigate('book')}
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg bg-[#1434CB] text-white font-mono text-xs font-medium uppercase tracking-[0.08em] hover:bg-[#0E2594] active:translate-y-px transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 bg-[#F2B705]" aria-hidden="true" />
                  <span>{t.hero.primaryCta}</span>
                  <span>↳</span>
                </button>
                <a
                  href={`#${variant}-how-it-works`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#D1D5DB] bg-white text-[#0B0D12] font-mono text-xs font-medium uppercase tracking-[0.08em] hover:border-[#0B0D12] transition-colors cursor-pointer whitespace-nowrap"
                >
                  <Play className="w-3.5 h-3.5 fill-current" strokeWidth={1.5} />
                  <span>{t.hero.secondaryCta}</span>
                </a>
              </div>

              {/* 3 Stat Tiles (Placeholders clearly marked) */}
              <div
                className={`mt-8 grid grid-cols-3 gap-2.5 ${
                  isMobile ? '' : 'max-w-lg'
                }`}
              >
                {HOME_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white border border-[#E2E5EB] rounded-lg px-3.5 py-3"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#6B7280]">
                      {stat.label}
                    </p>
                    <p
                      className={`mt-1 font-medium tracking-tight text-[#0B0D12] tabular-nums ${
                        isMobile ? 'text-lg' : 'text-2xl'
                      }`}
                    >
                      {stat.value}
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-[#9CA3AF] mt-0.5">
                      [{stat.note}]
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual: Branded Sure Africa Container Lifted at Port */}
            <div className={isMobile ? 'col-span-4 mt-2' : 'col-span-6'}>
              <div className="relative rounded-xl border border-[#E2E5EB] bg-white p-2">
                <MediaFrame
                  src={IMAGES.heroContainer}
                  alt="Cobalt Sure Africa shipping container suspended by crane over Dar es Salaam port"
                  className={`rounded-lg ${isMobile ? 'aspect-[4/3]' : 'aspect-[16/10]'}`}
                  fallbackTitle="Sure Africa Container — Dar es Salaam Port"
                />
                <div className="mt-2 px-2 py-1 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#4B5563]">
                  <span>Dar es Salaam Port Gateway</span>
                  <span className="text-[#1434CB]">TZ · BRELA 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ■ WHAT WE DO */}
      <section className={`border-b border-[#E2E5EB] ${isMobile ? 'px-4 py-10' : 'px-12 py-16'}`}>
        <div className={`grid ${isMobile ? 'grid-cols-4 gap-4' : 'grid-cols-12 gap-8 items-start'}`}>
          <div className={isMobile ? 'col-span-4' : 'col-span-4'}>
            <MonoLabel>{t.sections.whatWeDo}</MonoLabel>
          </div>
          <div className={isMobile ? 'col-span-4' : 'col-span-8'}>
            <h2
              className={`font-medium tracking-[-0.02em] leading-[1.2] text-[#0B0D12] ${
                isMobile ? 'text-xl' : 'text-[30px]'
              }`}
            >
              {t.sections.whatWeDoHeadline}
            </h2>
          </div>
        </div>

        {/* 3 Service Cards beside large Truck/Port Photo */}
        <div
          className={`mt-8 grid ${
            isMobile ? 'grid-cols-4 gap-4' : 'grid-cols-12 gap-6 items-stretch'
          }`}
        >
          <div
            className={`${
              isMobile ? 'col-span-4 order-2 grid grid-cols-1 gap-3' : 'col-span-4 flex flex-col gap-3'
            }`}
          >
            {CORE_PILLARS.map((pillar) => (
              <button
                key={pillar.id}
                type="button"
                onClick={() => onNavigate('services')}
                className="flex-1 text-left bg-[#F4F5F7] hover:bg-white border border-[#E2E5EB] hover:border-[#1434CB] rounded-xl p-5 transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#E2E5EB] flex items-center justify-center text-[#0B0D12] group-hover:text-[#1434CB]">
                    <ServiceIcon name={pillar.iconName} className="w-4 h-4" />
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#6B7280] group-hover:text-[#1434CB]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mt-4 text-base font-medium text-[#0B0D12]">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#4B5563]">
                  {pillar.description}
                </p>
              </button>
            ))}
          </div>

          <div className={isMobile ? 'col-span-4 order-1' : 'col-span-8'}>
            <MediaFrame
              src={IMAGES.highwayTruck}
              alt="Sure Africa freight truck along a Tanzanian highway corridor"
              className={`rounded-xl border border-[#E2E5EB] ${
                isMobile ? 'aspect-[16/10]' : 'h-full min-h-[420px]'
              }`}
              fallbackTitle="Tanzanian Highway Corridor"
            />
          </div>
        </div>
      </section>

      {/* ■ ROUTES WE SERVE */}
      <section className={`bg-[#F4F5F7] border-b border-[#E2E5EB] ${isMobile ? 'px-4 py-10' : 'px-12 py-16'}`}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <MonoLabel>{t.sections.routesWeServe}</MonoLabel>
            <h2
              className={`mt-3 font-medium tracking-[-0.02em] text-[#0B0D12] ${
                isMobile ? 'text-2xl' : 'text-[34px]'
              }`}
            >
              {t.sections.routesHeadline}
            </h2>
          </div>

          {/* Interactive Corridor Filter */}
          <div
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-white border border-[#E2E5EB] rounded-lg self-start"
            role="group"
            aria-label="Filter corridors"
          >
            {[
              { id: 'all', label: 'All Lanes' },
              { id: 'regional', label: 'East & Central Africa' },
              { id: 'islands', label: 'Indian Ocean Islands' },
              { id: 'inbound', label: 'UAE · China · India' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setRouteFilter(tab.id as typeof routeFilter)}
                className={`px-3 py-1.5 rounded-md font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                  routeFilter === tab.id
                    ? 'bg-[#0B0D12] text-white'
                    : 'text-[#4B5563] hover:text-[#0B0D12]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stylised Corridor Network Visual + Route List */}
        <div
          className={`mt-8 grid ${
            isMobile ? 'grid-cols-4 gap-4' : 'grid-cols-12 gap-6 items-start'
          }`}
        >
          {/* Left: Clean Stylised Hub Diagram */}
          <div
            className={`${
              isMobile ? 'col-span-4' : 'col-span-5'
            } bg-[#0B0D12] text-white rounded-xl p-6 border border-[#0B0D12]`}
          >
            <div className="flex items-center justify-between mb-4">
              <MonoLabel tone="gold">DAR ES SALAAM HUB</MonoLabel>
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/60">
                [Transit Times Est.]
              </span>
            </div>

            <svg
              viewBox="0 0 420 270"
              className="w-full h-auto"
              role="img"
              aria-label="Stylised trade corridor diagram centred on Dar es Salaam"
            >
              {/* Grid lines */}
              <line x1="20" y1="135" x2="400" y2="135" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
              <line x1="210" y1="20" x2="210" y2="250" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />

              {/* Inbound Global Lanes */}
              <path d="M 355 45 Q 290 75 215 135" stroke="#F2B705" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
              <path d="M 375 110 Q 300 120 215 135" stroke="#F2B705" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
              <path d="M 340 165 Q 275 150 215 135" stroke="#F2B705" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />

              {/* Regional Inland Lanes */}
              <path d="M 215 135 L 125 65" stroke="#4F73FF" strokeWidth="1.75" fill="none" />
              <path d="M 215 135 L 95 105" stroke="#4F73FF" strokeWidth="1.75" fill="none" />
              <path d="M 215 135 L 65 155" stroke="#4F73FF" strokeWidth="1.75" fill="none" />
              <path d="M 215 135 L 105 210" stroke="#4F73FF" strokeWidth="1.75" fill="none" />

              {/* Island Feeder Lanes */}
              <path d="M 215 135 L 255 110" stroke="#FFFFFF" strokeWidth="1.25" fill="none" />
              <path d="M 215 135 L 270 185" stroke="#FFFFFF" strokeWidth="1.25" fill="none" />
              <path d="M 215 135 L 330 220" stroke="#FFFFFF" strokeWidth="1.25" fill="none" />
              <path d="M 215 135 L 365 242" stroke="#FFFFFF" strokeWidth="1.25" fill="none" />

              {/* Nodes: Inland */}
              {[
                { x: 125, y: 65, label: 'UGANDA' },
                { x: 95, y: 105, label: 'RWANDA' },
                { x: 65, y: 155, label: 'DRC' },
                { x: 105, y: 210, label: 'ZAMBIA' },
              ].map((n) => (
                <g key={n.label}>
                  <circle cx={n.x} cy={n.y} r="4.5" fill="#1434CB" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x={n.x - 8} y={n.y - 10} fill="#E5E7EB" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
                    {n.label}
                  </text>
                </g>
              ))}

              {/* Nodes: Islands */}
              {[
                { x: 255, y: 110, label: 'ZANZIBAR' },
                { x: 270, y: 185, label: 'COMOROS' },
                { x: 330, y: 220, label: 'SEYCHELLES' },
                { x: 365, y: 242, label: 'MAURITIUS' },
              ].map((n) => (
                <g key={n.label}>
                  <circle cx={n.x} cy={n.y} r="3.5" fill="#FFFFFF" />
                  <text x={n.x + 8} y={n.y + 3} fill="#D1D5DB" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
                    {n.label}
                  </text>
                </g>
              ))}

              {/* Nodes: Global Inbound */}
              {[
                { x: 355, y: 45, label: 'UAE (DUBAI)' },
                { x: 375, y: 110, label: 'CHINA' },
                { x: 340, y: 165, label: 'INDIA' },
              ].map((n) => (
                <g key={n.label}>
                  <rect x={n.x - 4} y={n.y - 4} width="8" height="8" fill="#F2B705" />
                  <text x={n.x - 28} y={n.y - 9} fill="#F2B705" fontSize="9" fontFamily="JetBrains Mono, monospace">
                    {n.label}
                  </text>
                </g>
              ))}

              {/* Dar es Salaam Central Hub */}
              <circle cx="215" cy="135" r="10" fill="#1434CB" stroke="#F2B705" strokeWidth="2.5" />
              <text x="172" y="160" fill="#FFFFFF" fontSize="10.5" fontWeight="500" fontFamily="JetBrains Mono, monospace">
                DAR ES SALAAM
              </text>
            </svg>

            <div className="mt-4 pt-4 border-t border-white/15 flex flex-wrap gap-4 text-[11px] font-mono text-white/75">
              <span>■ Blue: Regional Corridors</span>
              <span>■ White: Ocean Islands</span>
              <span className="text-[#F2B705]">■ Gold: Inbound Hubs</span>
            </div>
          </div>

          {/* Right: Route Table Cards with Transit Chips */}
          <div className={`${isMobile ? 'col-span-4' : 'col-span-7'} grid grid-cols-1 gap-2.5`}>
            {filteredRoutes.map((lane) => (
              <div
                key={lane.id}
                className="bg-white border border-[#E2E5EB] rounded-lg px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-[#1434CB] transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium text-[#0B0D12]">
                    <span>{lane.origin}</span>
                    <span className="text-[#1434CB]">↔</span>
                    <span>{lane.destination}</span>
                  </div>
                  <p className="text-xs text-[#4B5563] mt-0.5">
                    {lane.mode} · {lane.notes}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#F4F5F7] border border-[#E2E5EB] text-[#0B0D12] tabular-nums">
                    {lane.transitPlaceholder}
                  </span>
                  <button
                    type="button"
                    onClick={() => onNavigate('book', `${lane.origin} → ${lane.destination}`)}
                    className="font-mono text-[11px] uppercase tracking-wider text-[#1434CB] hover:underline cursor-pointer whitespace-nowrap"
                  >
                    Quote ↳
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ■ INDUSTRIES (10 Tiles) */}
      <section className={`border-b border-[#E2E5EB] ${isMobile ? 'px-4 py-10' : 'px-12 py-16'}`}>
        <MonoLabel>{t.sections.industries}</MonoLabel>
        <h2
          className={`mt-3 font-medium tracking-[-0.02em] text-[#0B0D12] ${
            isMobile ? 'text-2xl' : 'text-[34px]'
          }`}
        >
          {t.sections.industriesHeadline}
        </h2>

        <div
          className={`mt-8 grid border-t border-l border-[#E2E5EB] ${
            isMobile ? 'grid-cols-2' : 'grid-cols-5'
          }`}
        >
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.name}
              className="border-r border-b border-[#E2E5EB] p-5 bg-white hover:bg-[#F4F5F7] transition-colors flex flex-col justify-between min-h-[116px]"
            >
              <div className="text-[#1434CB]">
                <ServiceIcon name={ind.icon} className="w-5 h-5" />
              </div>
              <p className="mt-4 text-sm font-medium text-[#0B0D12] leading-snug">
                {ind.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ■ PARTNERS (Empty Placeholder Slots) */}
      <section className={`bg-[#F4F5F7] border-b border-[#E2E5EB] ${isMobile ? 'px-4 py-10' : 'px-12 py-14'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <MonoLabel>{t.sections.partners}</MonoLabel>
          <span className="font-mono text-[11px] text-[#6B7280]">
            [Placeholder slots — awaiting verified carrier & client logos]
          </span>
        </div>

        <div
          className={`grid bg-white border-t border-l border-[#E2E5EB] ${
            isMobile ? 'grid-cols-2' : 'grid-cols-6'
          }`}
        >
          {partnerSlots.map((slot) => (
            <div
              key={slot.id}
              className="border-r border-b border-[#E2E5EB] h-20 flex flex-col items-center justify-center px-3"
            >
              <div className="w-5 h-5 rounded border border-dashed border-[#CBD5E1] mb-1.5" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#9CA3AF]">
                [{slot.code}]
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ■ HOW IT WORKS (4-step Accordion with Dark Expanded Step) */}
      <section
        id={`${variant}-how-it-works`}
        className={`border-b border-[#E2E5EB] ${isMobile ? 'px-4 py-10' : 'px-12 py-16'}`}
      >
        <div
          className={`grid ${
            isMobile ? 'grid-cols-4 gap-6' : 'grid-cols-12 gap-10 items-start'
          }`}
        >
          <div className={isMobile ? 'col-span-4' : 'col-span-4'}>
            <MonoLabel>{t.sections.howItWorks}</MonoLabel>
            <h2
              className={`mt-3 font-medium tracking-[-0.02em] leading-[1.15] text-[#0B0D12] ${
                isMobile ? 'text-2xl' : 'text-[36px]'
              }`}
            >
              {t.sections.howItWorksHeadline}
            </h2>
            <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">
              Every shipment follows a single documented chain from booking to customs release and signed delivery.
            </p>
          </div>

          <div className={`${isMobile ? 'col-span-4' : 'col-span-8'} flex flex-col gap-3`}>
            {HOW_IT_WORKS_STEPS.map((item, idx) => {
              const isOpen = activeStep === idx;
              return (
                <div
                  key={item.step}
                  className={`rounded-xl border transition-colors ${
                    isOpen
                      ? 'bg-[#0B0D12] border-[#0B0D12] text-white'
                      : 'bg-white border-[#E2E5EB] text-[#0B0D12] hover:border-[#9CA3AF]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveStep(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-[11px] uppercase tracking-wider ${
                          isOpen ? 'text-[#F2B705]' : 'text-[#6B7280]'
                        }`}
                      >
                        {item.step}
                      </span>
                      <span className="text-base font-medium">{item.title}</span>
                    </div>
                    {isOpen ? (
                      <Minus className="w-4 h-4 shrink-0 text-white/80" strokeWidth={1.5} />
                    ) : (
                      <Plus className="w-4 h-4 shrink-0 text-[#4B5563]" strokeWidth={1.5} />
                    )}
                  </button>

                  {isOpen && (
                    <div
                      className={`px-6 pb-6 pt-1 grid gap-4 ${
                        isMobile ? 'grid-cols-1' : 'grid-cols-12 items-center'
                      }`}
                    >
                      <div className={isMobile ? '' : 'col-span-7'}>
                        <p className="text-sm text-white/80 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div
                        className={`${
                          isMobile ? '' : 'col-span-5'
                        } rounded-lg bg-white/10 border border-white/15 p-3.5`}
                      >
                        <p className="font-mono text-[10px] uppercase tracking-wider text-[#F2B705]">
                          {item.previewTitle}
                        </p>
                        <p className="mt-1 text-xs text-white/90">{item.previewDetail}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FaqSection variant={variant} lang={lang} />

      {/* ■ TESTIMONIALS (3 Placeholder Cards) */}
      <section className={`border-b border-[#E2E5EB] ${isMobile ? 'px-4 py-10' : 'px-12 py-16'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
          <MonoLabel>{t.sections.testimonials}</MonoLabel>
          <span className="font-mono text-[11px] text-[#6B7280]">
            [Placeholder quotes — verified client reviews added post-delivery]
          </span>
        </div>

        <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-3 gap-5'}`}>
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="bg-[#F4F5F7] border border-[#E2E5EB] rounded-xl p-6 flex flex-col justify-between"
            >
              <p className="text-sm leading-relaxed text-[#0B0D12]">{item.quote}</p>
              <div className="mt-6 pt-4 border-t border-[#E2E5EB]">
                <p className="text-sm font-medium text-[#0B0D12]">{item.author}</p>
                <p className="text-xs text-[#4B5563] mt-0.5">{item.role}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#1434CB] mt-2">
                  {item.route}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className={`bg-[#1434CB] text-white ${isMobile ? 'px-4 py-10' : 'px-12 py-14'}`}>
        <div
          className={`flex ${
            isMobile ? 'flex-col gap-5' : 'items-center justify-between gap-8'
          }`}
        >
          <div>
            <MonoLabel tone="gold">SURE AFRICA GROUP (TANZANIA) LIMITED</MonoLabel>
            <h2
              className={`mt-2 font-medium tracking-[-0.02em] ${
                isMobile ? 'text-2xl' : 'text-[36px]'
              }`}
            >
              Moving Africa&apos;s trade, surely.
            </h2>
            <p className="mt-2 text-sm text-white/80 max-w-xl">
              Request a rate for ocean FCL, consolidated LCL, air freight, or Dar es Salaam customs clearance.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('book')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0B0D12] text-white font-mono text-xs font-medium uppercase tracking-wider hover:bg-white hover:text-[#0B0D12] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Book a Shipment</span>
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('tracking')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/30 text-white font-mono text-xs font-medium uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Track Cargo</span>
            </button>
          </div>
        </div>
      </section>

      <GlobalFooter variant={variant} lang={lang} onNavigate={(p) => onNavigate(p)} />
      {isMobile && <MobileWhatsAppFab onClick={() => onNavigate('contact')} />}
    </div>
  );
};
