import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ALL_SERVICES, COPY, IMAGES, SERVICE_INCLUDES } from '../data/content';
import { Language, PageId, ViewportVariant } from '../types';
import { MediaFrame, MonoLabel, ServiceIcon } from '../components/BrandMark';
import { FloatingNavbar, GlobalFooter, MobileWhatsAppFab } from '../components/GlobalChrome';

interface PageProps {
  variant: ViewportVariant;
  lang: Language;
  onToggleLang: (lang: Language) => void;
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<PageProps> = ({
  variant,
  lang,
  onToggleLang,
  onNavigate,
}) => {
  const isMobile = variant === 'mobile';
  const t = COPY[lang];
  const [selectedServiceId, setSelectedServiceId] = useState<string>('ocean-freight');

  const selectedService =
    ALL_SERVICES.find((s) => s.id === selectedServiceId) || ALL_SERVICES[0];

  return (
    <div className="bg-white text-[#0B0D12] font-sans relative">
      {/* DARK FULL-BLEED HERO WITH FROSTED SERVICE CARDS (matches tablet reference) */}
      <div className="relative bg-[#0B0D12] text-white overflow-hidden">
        <div className="absolute inset-0">
          <MediaFrame
            src={IMAGES.warehouse}
            alt="Sure Africa logistics hub and freight warehouse interior"
            className="w-full h-full opacity-55"
            fallbackTitle="Sure Africa Supply Chain Hub"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#0B0D12]/80 via-[#0B0D12]/70 to-[#0B0D12]"
            aria-hidden="true"
          />
        </div>

        <FloatingNavbar
          variant={variant}
          lang={lang}
          onToggleLang={onToggleLang}
          activePage="services"
          onNavigate={onNavigate}
          darkHero={true}
        />

        <div className={`relative z-10 ${isMobile ? 'px-4 pt-8 pb-10' : 'px-12 pt-14 pb-16'}`}>
          <MonoLabel tone="light">{t.sections.servicesHeroLabel}</MonoLabel>
          <h1
            className={`mt-4 font-medium tracking-[-0.025em] leading-[1.08] max-w-3xl ${
              isMobile ? 'text-[30px]' : 'text-[52px]'
            }`}
          >
            {t.sections.servicesHeroHeadline}
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/75 max-w-2xl leading-relaxed">
            End-to-end freight forwarding, customs brokerage, warehousing, and consolidated LCL shipping from Dar es Salaam across East Africa and global sourcing hubs.
          </p>

          {/* Frosted Service Cards */}
          <div
            className={`mt-10 grid ${
              isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-4 gap-3.5'
            }`}
          >
            {ALL_SERVICES.map((svc) => {
              const isSelected = svc.id === selectedServiceId;
              return (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => {
                    setSelectedServiceId(svc.id);
                    if (svc.id === 'ocean-freight') {
                      onNavigate('ocean-freight');
                    }
                  }}
                  className={`text-left rounded-xl p-5 backdrop-blur-md border transition-colors cursor-pointer flex flex-col justify-between min-h-[190px] ${
                    isSelected
                      ? 'bg-white/20 border-[#F2B705]'
                      : 'bg-white/10 border-white/15 hover:bg-white/15 hover:border-white/35'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg border border-white/20 bg-white/10 flex items-center justify-center text-white">
                      <ServiceIcon name={svc.iconName} className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/60">
                      {svc.category}
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center justify-between gap-2">
                      <h2 className="text-base font-medium uppercase tracking-[0.02em] text-white">
                        {lang === 'sw' ? svc.titleSw : svc.title}
                      </h2>
                      <ArrowUpRight className="w-4 h-4 text-white/70 shrink-0" strokeWidth={1.5} />
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-white/75">
                      {svc.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* SELECTED SERVICE DETAIL STRIP + OCEAN FREIGHT LINK */}
      <section className={`bg-[#F4F5F7] border-b border-[#E2E5EB] ${isMobile ? 'px-4 py-8' : 'px-12 py-12'}`}>
        <div
          className={`bg-white border border-[#E2E5EB] rounded-xl p-6 md:p-8 flex ${
            isMobile ? 'flex-col gap-5' : 'items-center justify-between gap-8'
          }`}
        >
          <div>
            <MonoLabel tone="cobalt">SELECTED CAPABILITY · {selectedService.category}</MonoLabel>
            <h3 className="mt-2 text-2xl font-medium text-[#0B0D12]">
              {selectedService.title}
            </h3>
            <p className="mt-2 text-sm text-[#4B5563] max-w-2xl leading-relaxed">
              {selectedService.shortDesc}
            </p>
            {SERVICE_INCLUDES[selectedService.id] && (
              <ul
                className={`mt-4 grid gap-x-6 gap-y-2 max-w-2xl ${
                  isMobile ? 'grid-cols-1' : 'grid-cols-2'
                }`}
              >
                {SERVICE_INCLUDES[selectedService.id].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-[#0B0D12]">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-[#1434CB] shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('ocean-freight')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#D1D5DB] bg-white text-xs font-mono uppercase tracking-wider text-[#0B0D12] hover:border-[#1434CB] hover:text-[#1434CB] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>View Ocean Freight Spec</span>
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('book')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1434CB] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#0E2594] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Request a Quote</span>
              <span>↳</span>
            </button>
          </div>
        </div>
      </section>

      <GlobalFooter variant={variant} lang={lang} onNavigate={onNavigate} />
      {isMobile && <MobileWhatsAppFab onClick={() => onNavigate('contact')} />}
    </div>
  );
};
