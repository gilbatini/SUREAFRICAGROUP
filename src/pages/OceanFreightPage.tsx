import React, { useState } from 'react';
import { Check, Minus, Play, Plus, ShieldCheck, Wallet } from 'lucide-react';
import {
  COPY,
  HOW_IT_WORKS_STEPS,
  IMAGES,
  OCEAN_KEY_BENEFITS,
} from '../data/content';
import { Language, PageId, ViewportVariant } from '../types';
import { MediaFrame, MonoLabel, ServiceIcon } from '../components/BrandMark';
import { FloatingNavbar, GlobalFooter, MobileWhatsAppFab } from '../components/GlobalChrome';

interface PageProps {
  variant: ViewportVariant;
  lang: Language;
  onToggleLang: (lang: Language) => void;
  onNavigate: (page: PageId) => void;
}

export const OceanFreightPage: React.FC<PageProps> = ({
  variant,
  lang,
  onToggleLang,
  onNavigate,
}) => {
  const isMobile = variant === 'mobile';
  const t = COPY[lang];
  const [activeStep, setActiveStep] = useState<number>(1);

  const partnerSlots = Array.from({ length: 12 }, (_, idx) => ({
    id: idx + 1,
    code: `PARTNER ${String(idx + 1).padStart(2, '0')}`,
  }));

  return (
    <div className="bg-white text-[#0B0D12] font-sans relative">
      {/* SPLIT HERO */}
      <div className="bg-[#F4F5F7] border-b border-[#E2E5EB]">
        <FloatingNavbar
          variant={variant}
          lang={lang}
          onToggleLang={onToggleLang}
          activePage="ocean-freight"
          onNavigate={onNavigate}
        />

        <div className={isMobile ? 'px-4 pt-6 pb-8' : 'px-12 pt-10 pb-12'}>
          <div
            className={`grid ${
              isMobile ? 'grid-cols-4 gap-5' : 'grid-cols-12 gap-8 items-stretch'
            }`}
          >
            {/* Left Copy */}
            <div className={`${isMobile ? 'col-span-4 order-2' : 'col-span-6 flex flex-col justify-between'}`}>
              <div>
                <MonoLabel>SEA FREIGHT</MonoLabel>
                <p className="mt-1 text-xs text-[#4B5563]">
                  FCL & LCL Shipping via Dar es Salaam
                </p>

                <h1
                  className={`mt-5 font-medium tracking-[-0.025em] leading-[1.08] text-[#0B0D12] ${
                    isMobile ? 'text-[30px]' : 'text-[48px]'
                  }`}
                >
                  Reliable <span className="text-[#1434CB]">Ocean Freight</span> From Global Hubs to East Africa
                </h1>

                <p className="mt-4 text-sm md:text-base text-[#4B5563] leading-relaxed max-w-xl">
                  Move full containers or consolidated LCL cargo from UAE, China, and India into Dar es Salaam, Zanzibar, and inland East African corridors.
                </p>

                <div
                  className={`mt-6 flex ${
                    isMobile ? 'flex-col gap-2.5' : 'flex-wrap items-center gap-3'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => onNavigate('book')}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#1434CB] text-white font-mono text-xs font-medium uppercase tracking-wider hover:bg-[#0E2594] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span className="w-1.5 h-1.5 bg-[#F2B705]" aria-hidden="true" />
                    <span>{t.hero.primaryCta}</span>
                    <span>↳</span>
                  </button>
                  <a
                    href={`#${variant}-ocean-process`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#D1D5DB] bg-white text-[#0B0D12] font-mono text-xs font-medium uppercase tracking-wider hover:border-[#0B0D12] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" strokeWidth={1.5} />
                    <span>{t.hero.secondaryCta}</span>
                  </a>
                </div>
              </div>

              {/* Mini Value Pair */}
              <div className="mt-8 pt-6 border-t border-[#E2E5EB] grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Wallet className="w-4 h-4 text-[#1434CB] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs font-medium text-[#0B0D12]">Cost Efficient</p>
                    <p className="text-[11px] text-[#4B5563]">Pay only for space booked</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#1434CB] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs font-medium text-[#0B0D12]">Secure Handling</p>
                    <p className="text-[11px] text-[#4B5563]">Verified seals & tallies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image + Stat Strip */}
            <div className={`${isMobile ? 'col-span-4 order-1' : 'col-span-6 flex flex-col gap-4'}`}>
              <MediaFrame
                src={IMAGES.darPort}
                alt="Container vessel berthed under gantry cranes at Dar es Salaam port"
                className={`rounded-xl border border-[#E2E5EB] ${
                  isMobile ? 'aspect-[16/10]' : 'flex-1 min-h-[290px]'
                }`}
                fallbackTitle="Dar es Salaam Container Terminal"
              />

              <div className="grid grid-cols-3 gap-3 mt-3 md:mt-0">
                {[
                  { label: 'Ocean lanes', value: '[XX+]' },
                  { label: 'Days avg transit', value: '[XX]' },
                  { label: 'On-time rate', value: '[XX%]' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white border border-[#E2E5EB] rounded-xl px-4 py-3.5"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#6B7280]">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-xl md:text-2xl font-medium text-[#0B0D12] tabular-nums">
                      {stat.value}
                    </p>
                    <p className="font-mono text-[9px] uppercase text-[#9CA3AF]">[Placeholder]</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ■ PARTNERS PLACEHOLDER STRIP */}
      <section className={`border-b border-[#E2E5EB] ${isMobile ? 'px-4 py-8' : 'px-12 py-12'}`}>
        <MonoLabel>{t.sections.partners}</MonoLabel>
        <div
          className={`mt-5 grid border-t border-l border-[#E2E5EB] ${
            isMobile ? 'grid-cols-2' : 'grid-cols-6'
          }`}
        >
          {partnerSlots.map((slot) => (
            <div
              key={slot.id}
              className="border-r border-b border-[#E2E5EB] h-16 flex items-center justify-center font-mono text-[10px] uppercase tracking-wider text-[#9CA3AF]"
            >
              [{slot.code}]
            </div>
          ))}
        </div>
      </section>

      {/* ■ OUR OCEAN FREIGHT SERVICES: FCL vs LCL */}
      <section className={`bg-[#F4F5F7] border-b border-[#E2E5EB] ${isMobile ? 'px-4 py-10' : 'px-12 py-16'}`}>
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-12 gap-8 items-end'}`}>
          <div className={isMobile ? '' : 'col-span-6'}>
            <MonoLabel>OUR OCEAN FREIGHT SERVICES</MonoLabel>
            <h2 className={`mt-2.5 font-medium tracking-[-0.02em] text-[#0B0D12] ${isMobile ? 'text-2xl' : 'text-[36px]'}`}>
              End-to-end ocean freight services
            </h2>
          </div>
          <div className={isMobile ? '' : 'col-span-6'}>
            <p className="text-sm text-[#4B5563] leading-relaxed max-w-md md:ml-auto">
              From port-to-port or door-to-door, we manage every stage of your sea shipment with reliable transit, TANCIS customs support, and regional delivery.
            </p>
          </div>
        </div>

        {/* FCL | Container Visual | LCL */}
        <div
          className={`mt-8 grid bg-white border border-[#E2E5EB] rounded-xl overflow-hidden ${
            isMobile ? 'grid-cols-1 divide-y divide-[#E2E5EB]' : 'grid-cols-12 divide-x divide-[#E2E5EB]'
          }`}
        >
          {/* FCL Card */}
          <div className={`${isMobile ? '' : 'col-span-4'} p-6 md:p-8 flex flex-col justify-between`}>
            <div>
              <div className="w-9 h-9 rounded-lg border border-[#E2E5EB] bg-[#F4F5F7] flex items-center justify-center text-[#1434CB]">
                <ServiceIcon name="ship" className="w-4 h-4" />
              </div>
              <h3 className="mt-8 text-base font-medium uppercase tracking-wide text-[#0B0D12]">
                FULL CONTAINER LOAD (FCL)
              </h3>
              <p className="mt-2.5 text-sm text-[#4B5563] leading-relaxed">
                Dedicated container space—your cargo loads directly with no sharing. Suited to commercial volumes over 15 CBM.
              </p>
            </div>
            <ul className="mt-6 space-y-2 text-xs text-[#4B5563]">
              {['20ft, 40ft, and 40HC containers', 'Port-to-port or door-to-door', 'Dedicated seal & manifest'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#1434CB] shrink-0" strokeWidth={1.75} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Container Photo */}
          <div className={`${isMobile ? 'order-first' : 'col-span-4'} p-4 bg-[#F9FAFB] flex items-center`}>
            <MediaFrame
              src={IMAGES.heroContainer}
              alt="Sure Africa cobalt shipping container for FCL and LCL operations"
              className="rounded-lg w-full aspect-[4/3]"
              fallbackTitle="Sure Africa FCL & LCL Container"
            />
          </div>

          {/* LCL Card */}
          <div className={`${isMobile ? '' : 'col-span-4'} p-6 md:p-8 flex flex-col justify-between`}>
            <div>
              <div className="w-9 h-9 rounded-lg border border-[#E2E5EB] bg-[#F4F5F7] flex items-center justify-center text-[#1434CB]">
                <ServiceIcon name="boxes" className="w-4 h-4" />
              </div>
              <h3 className="mt-8 text-base font-medium uppercase tracking-wide text-[#0B0D12]">
                LESS CONTAINER LOAD (LCL)
              </h3>
              <p className="mt-2.5 text-sm text-[#4B5563] leading-relaxed">
                Share container space with scheduled consolidations from UAE, China, and India. Pay strictly for the CBM you ship.
              </p>
            </div>
            <ul className="mt-6 space-y-2 text-xs text-[#4B5563]">
              {['Direct Dar es Salaam consolidation', 'Regular scheduled sailings', 'Ideal for SMEs & replenishment'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#1434CB] shrink-0" strokeWidth={1.75} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ■ KEY BENEFITS BENTO GRID */}
      <section className={`border-b border-[#E2E5EB] ${isMobile ? 'px-4 py-10' : 'px-12 py-16'}`}>
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-12 gap-8 items-end'}`}>
          <div className={isMobile ? '' : 'col-span-6'}>
            <MonoLabel>{t.sections.keyBenefits}</MonoLabel>
            <h2 className={`mt-2.5 font-medium tracking-[-0.02em] text-[#0B0D12] ${isMobile ? 'text-2xl' : 'text-[36px]'}`}>
              Benefits of our ocean freight services
            </h2>
          </div>
          <div className={isMobile ? '' : 'col-span-6'}>
            <p className="text-sm text-[#4B5563] leading-relaxed max-w-md md:ml-auto">
              Structured documentation, predictable port clearance, and responsive Dar es Salaam support keep your supply chain moving.
            </p>
          </div>
        </div>

        {/* 2-row asymmetric Bento matching reference */}
        <div className={`mt-8 grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-12 gap-4'}`}>
          {/* Top-left wide photo */}
          <div className={isMobile ? '' : 'col-span-6'}>
            <MediaFrame
              src={IMAGES.darPort}
              alt="Cargo ship berthed at Dar es Salaam port"
              className="rounded-xl border border-[#E2E5EB] h-full min-h-[220px]"
              fallbackTitle="Ocean Vessel Operations"
            />
          </div>

          {/* Top-right 2 benefit cards */}
          {OCEAN_KEY_BENEFITS.slice(0, 2).map((b) => (
            <div
              key={b.title}
              className={`${
                isMobile ? '' : 'col-span-3'
              } bg-[#F4F5F7] border border-[#E2E5EB] rounded-xl p-5 flex flex-col justify-between min-h-[220px]`}
            >
              <div className="w-9 h-9 rounded-lg bg-white border border-[#E2E5EB] flex items-center justify-center text-[#1434CB]">
                <ServiceIcon name={b.icon} className="w-4 h-4" />
              </div>
              <div className="mt-8">
                <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-[#0B0D12]">
                  {b.title}
                </h3>
                <p className="mt-2 text-xs text-[#4B5563] leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>
          ))}

          {/* Bottom-left 2 benefit cards */}
          {OCEAN_KEY_BENEFITS.slice(2, 4).map((b) => (
            <div
              key={b.title}
              className={`${
                isMobile ? '' : 'col-span-3'
              } bg-[#F4F5F7] border border-[#E2E5EB] rounded-xl p-5 flex flex-col justify-between min-h-[220px]`}
            >
              <div className="w-9 h-9 rounded-lg bg-white border border-[#E2E5EB] flex items-center justify-center text-[#1434CB]">
                <ServiceIcon name={b.icon} className="w-4 h-4" />
              </div>
              <div className="mt-8">
                <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-[#0B0D12]">
                  {b.title}
                </h3>
                <p className="mt-2 text-xs text-[#4B5563] leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>
          ))}

          {/* Bottom-right wide photo */}
          <div className={isMobile ? '' : 'col-span-6'}>
            <MediaFrame
              src={IMAGES.warehouse}
              alt="Port container deconsolidation and 3PL warehouse"
              className="rounded-xl border border-[#E2E5EB] h-full min-h-[220px]"
              fallbackTitle="Port Deconsolidation Hub"
            />
          </div>
        </div>
      </section>

      {/* ■ OUR PROCESS ACCORDION */}
      <section
        id={`${variant}-ocean-process`}
        className={`border-b border-[#E2E5EB] ${isMobile ? 'px-4 py-10' : 'px-12 py-16'}`}
      >
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-12 gap-10 items-start'}`}>
          <div className={isMobile ? '' : 'col-span-5'}>
            <MonoLabel>{t.sections.ourProcess}</MonoLabel>
            <h2 className={`mt-3 font-medium tracking-[-0.02em] leading-[1.15] text-[#0B0D12] ${isMobile ? 'text-2xl' : 'text-[36px]'}`}>
              How Our Ocean Freight Works
            </h2>
            <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">
              A simple step-by-step process to move your sea cargo safely and cleanly from origin port to Dar es Salaam and beyond.
            </p>
          </div>

          <div className={`${isMobile ? '' : 'col-span-7'} flex flex-col gap-3`}>
            {HOW_IT_WORKS_STEPS.map((item, idx) => {
              const isOpen = activeStep === idx;
              return (
                <div
                  key={item.step}
                  className={`rounded-xl border transition-colors ${
                    isOpen
                      ? 'bg-[#0B0D12] border-[#0B0D12] text-white'
                      : 'bg-white border-[#E2E5EB] text-[#0B0D12]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveStep(isOpen ? -1 : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer"
                  >
                    <span className="font-mono text-xs uppercase tracking-wider">
                      {item.step} — {item.title}
                    </span>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-white/75" strokeWidth={1.5} />
                    ) : (
                      <Plus className="w-4 h-4 text-[#4B5563]" strokeWidth={1.5} />
                    )}
                  </button>

                  {isOpen && (
                    <div className={`px-6 pb-6 pt-1 grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-12 items-center'}`}>
                      <div className={isMobile ? '' : 'col-span-7'}>
                        <h3 className="text-lg font-medium">{item.title}</h3>
                        <p className="mt-2 text-xs leading-relaxed text-white/80">
                          {item.description}
                        </p>
                      </div>
                      <div className={`${isMobile ? '' : 'col-span-5'} rounded-lg bg-white text-[#0B0D12] p-3.5`}>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-[#1434CB]">
                          {item.previewTitle}
                        </p>
                        <p className="mt-1 text-xs font-medium">{item.previewDetail}</p>
                        <div className="mt-3 grid grid-cols-7 gap-1 text-center font-mono text-[9px] text-[#6B7280]">
                          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                            <span
                              key={i}
                              className={`py-1 rounded ${
                                i === 3 ? 'bg-[#1434CB] text-white' : 'bg-[#F4F5F7]'
                              }`}
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUOTE CTA */}
      <section className={`bg-[#0B0D12] text-white ${isMobile ? 'px-4 py-10' : 'px-12 py-12'}`}>
        <div className={`flex ${isMobile ? 'flex-col gap-5' : 'items-center justify-between gap-6'}`}>
          <div>
            <MonoLabel tone="gold">BOOK OCEAN FREIGHT</MonoLabel>
            <h2 className="mt-2 text-2xl md:text-3xl font-medium">
              Need an FCL or LCL rate into Dar es Salaam?
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('book')}
            className="px-5 py-3 rounded-lg bg-[#1434CB] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#0E2594] transition-colors cursor-pointer self-start sm:self-auto whitespace-nowrap"
          >
            ■ REQUEST OCEAN QUOTE ↳
          </button>
        </div>
      </section>

      <GlobalFooter variant={variant} lang={lang} onNavigate={onNavigate} />
      {isMobile && <MobileWhatsAppFab onClick={() => onNavigate('contact')} />}
    </div>
  );
};
