import React from 'react';
import { Anchor, ArrowRight, Compass } from 'lucide-react';
import {
  ABOUT_VALUES,
  COPY,
  IMAGES,
  LEADERSHIP_PLACEHOLDERS,
} from '../data/content';
import { Language, PageId, ViewportVariant } from '../types';
import { MediaFrame, MonoLabel } from '../components/BrandMark';
import { FloatingNavbar, GlobalFooter, MobileWhatsAppFab } from '../components/GlobalChrome';

interface PageProps {
  variant: ViewportVariant;
  lang: Language;
  onToggleLang: (lang: Language) => void;
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<PageProps> = ({
  variant,
  lang,
  onToggleLang,
  onNavigate,
}) => {
  const isMobile = variant === 'mobile';
  const t = COPY[lang];

  return (
    <div className="bg-white text-[#0B0D12] font-sans relative">
      {/* HERO: WHO WE ARE */}
      <div className="bg-[#F4F5F7] border-b border-[#E2E5EB]">
        <FloatingNavbar
          variant={variant}
          lang={lang}
          onToggleLang={onToggleLang}
          activePage="about"
          onNavigate={onNavigate}
        />

        <div className={isMobile ? 'px-4 pt-8 pb-10' : 'px-12 pt-12 pb-14'}>
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-12 gap-10 items-center'}`}>
            <div className={isMobile ? '' : 'col-span-6'}>
              <MonoLabel>ABOUT SURE AFRICA</MonoLabel>
              <h1
                className={`mt-3 font-medium tracking-[-0.025em] leading-[1.08] text-[#0B0D12] ${
                  isMobile ? 'text-[30px]' : 'text-[48px]'
                }`}
              >
                Built in <span className="text-[#1434CB]">Dar es Salaam</span> to move East Africa&apos;s trade cleanly
              </h1>
              <p className="mt-4 text-sm md:text-base text-[#4B5563] leading-relaxed">
                Sure Africa Group Tanzania Ltd. is a registered Tanzanian freight forwarding and logistics company (BRELA, 2026). We coordinate ocean, air, and road cargo, customs clearance, warehousing, and direct LCL consolidation from Dar es Salaam to East and Central Africa, the Indian Ocean islands, and global trade hubs.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 px-3.5 py-2 rounded-lg bg-white border border-[#E2E5EB] font-mono text-[11px] text-[#0B0D12]">
                <span className="w-2 h-2 bg-[#1434CB]" aria-hidden="true" />
                <span>Incorporated in Dar es Salaam, Tanzania · BRELA 2026</span>
              </div>
            </div>

            <div className={isMobile ? '' : 'col-span-6'}>
              <MediaFrame
                src={IMAGES.darPort}
                alt="Dar es Salaam port cranes and container terminal"
                className="rounded-xl border border-[#E2E5EB] aspect-[16/10]"
                fallbackTitle="Dar es Salaam Maritime Gateway"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ■ WHY TANZANIA */}
      <section className={`border-b border-[#E2E5EB] ${isMobile ? 'px-4 py-10' : 'px-12 py-16'}`}>
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-12 gap-10 items-start'}`}>
          <div className={isMobile ? '' : 'col-span-4'}>
            <MonoLabel>{t.sections.whyTanzania}</MonoLabel>
            <h2 className={`mt-3 font-medium tracking-[-0.02em] text-[#0B0D12] ${isMobile ? 'text-2xl' : 'text-[34px]'}`}>
              Dar es Salaam as East & Central Africa&apos;s gateway port
            </h2>
          </div>

          <div className={`${isMobile ? '' : 'col-span-8'} grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-2 gap-5'}`}>
            <div className="rounded-xl border border-[#E2E5EB] bg-[#F4F5F7] p-6">
              <Anchor className="w-5 h-5 text-[#1434CB]" strokeWidth={1.5} />
              <h3 className="mt-4 text-base font-medium text-[#0B0D12]">
                Maritime Access for Landlocked Corridors
              </h3>
              <p className="mt-2 text-sm text-[#4B5563] leading-relaxed">
                Dar es Salaam Port serves Tanzania alongside landlocked trade routes into Uganda, Rwanda, Zambia, and the Democratic Republic of Congo—making accurate port clearance and transit bond execution essential.
              </p>
            </div>

            <div className="rounded-xl border border-[#E2E5EB] bg-[#F4F5F7] p-6">
              <Compass className="w-5 h-5 text-[#1434CB]" strokeWidth={1.5} />
              <h3 className="mt-4 text-base font-medium text-[#0B0D12]">
                Direct Link to Indian Ocean & Inbound Hubs
              </h3>
              <p className="mt-2 text-sm text-[#4B5563] leading-relaxed">
                Positioned along the Indian Ocean coast, Dar es Salaam links Zanzibar, Comoros, Seychelles, and Mauritius while receiving regular inbound consolidations from UAE (Dubai), China, and India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ■ OUR VALUES */}
      <section className={`bg-[#F4F5F7] border-b border-[#E2E5EB] ${isMobile ? 'px-4 py-10' : 'px-12 py-16'}`}>
        <MonoLabel>{t.sections.ourValues}</MonoLabel>
        <h2 className={`mt-3 font-medium tracking-[-0.02em] text-[#0B0D12] ${isMobile ? 'text-2xl' : 'text-[34px]'}`}>
          How we operate every shipment
        </h2>

        <div className={`mt-8 grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-4 gap-4'}`}>
          {ABOUT_VALUES.map((val) => (
            <div
              key={val.code}
              className="bg-white border border-[#E2E5EB] rounded-xl p-6 flex flex-col justify-between"
            >
              <span className="font-mono text-xs text-[#1434CB]">{val.code}</span>
              <div className="mt-8">
                <h3 className="text-base font-medium text-[#0B0D12]">{val.title}</h3>
                <p className="mt-2 text-xs text-[#4B5563] leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ■ TEAM */}
      <section className={`border-b border-[#E2E5EB] ${isMobile ? 'px-4 py-10' : 'px-12 py-16'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
          <MonoLabel>{t.sections.leadership}</MonoLabel>

        </div>

        <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-3 gap-5'}`}>
          {LEADERSHIP_PLACEHOLDERS.map((leader) => (
            <article
              key={leader.initials}
              className="border border-[#E2E5EB] rounded-xl p-6 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F4F5F7] border border-[#E2E5EB] flex items-center justify-center font-mono text-sm font-medium text-[#1434CB]">
                  {leader.initials}
                </div>
                <h3 className="mt-4 text-base font-medium text-[#0B0D12]">
                  {leader.name}
                </h3>
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#4B5563] mt-1">
                  {leader.role} · {leader.location}
                </p>
                <p className="mt-3 text-xs text-[#4B5563] leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-xl bg-[#0B0D12] text-white p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#F2B705]">
              WORK WITH SURE AFRICA
            </p>
            <p className="mt-1 text-lg font-medium">
              Moving Africa&apos;s trade, surely.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1434CB] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#0E2594] transition-colors cursor-pointer self-start sm:self-auto whitespace-nowrap"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </button>
        </div>
      </section>

      <GlobalFooter variant={variant} lang={lang} onNavigate={onNavigate} />
      {isMobile && <MobileWhatsAppFab onClick={() => onNavigate('contact')} />}
    </div>
  );
};
