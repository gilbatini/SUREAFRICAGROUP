import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ROUTES } from '../data/routes';
import { Language, PageId, ViewportVariant } from '../types';
import { MediaFrame, MonoLabel } from '../components/BrandMark';
import { FloatingNavbar, GlobalFooter, MobileWhatsAppFab } from '../components/GlobalChrome';
import { RouteMap } from './RoutePage';

interface PageProps {
  variant: ViewportVariant;
  lang: Language;
  onToggleLang: (lang: Language) => void;
  onNavigate: (page: PageId, prefillRoute?: string) => void;
}

export const RoutesIndexPage: React.FC<PageProps> = ({ variant, lang, onToggleLang, onNavigate }) => {
  const isMobile = variant === 'mobile';
  const pad = isMobile ? 'px-4' : 'px-12';

  return (
    <div className="bg-white text-[#0B0D12] font-sans relative">
      <div className="bg-[#F4F5F7] border-b border-[#E2E5EB]">
        <FloatingNavbar
          variant={variant}
          lang={lang}
          onToggleLang={onToggleLang}
          activePage="routes"
          onNavigate={onNavigate}
        />
        <div className={`${pad} ${isMobile ? 'pt-6 pb-8' : 'pt-10 pb-12'}`}>
          <MonoLabel>{lang === 'sw' ? 'NJIA ZETU' : 'ROUTES'}</MonoLabel>
          <h1
            className={`mt-4 font-medium tracking-[-0.025em] leading-[1.08] max-w-3xl ${
              isMobile ? 'text-[30px]' : 'text-[48px]'
            }`}
          >
            Every way into <span className="text-[#1434CB]">Uganda</span>, planned end to end
          </h1>
          <p className="mt-4 text-sm md:text-base text-[#4B5563] leading-relaxed max-w-2xl">
            Through Dar es Salaam and the Mutukula border, or through Mombasa and Malaba. From China, the UAE
            and Japan. Pick a route to see the stops, the border and the documents.
          </p>
        </div>
      </div>

      <section className={`${pad} ${isMobile ? 'py-10' : 'py-14'}`}>
        <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
          {ROUTES.map((r) => (
            <article
              key={r.slug}
              className="group border border-[#E2E5EB] rounded-xl overflow-hidden bg-white hover:border-[#1434CB] transition-colors"
            >
              <button
                type="button"
                onClick={() => onNavigate(`route:${r.slug}`)}
                className="block w-full text-left cursor-pointer"
                aria-label={`View route: ${r.short}`}
              >
                <div className="grid grid-cols-2">
                  <div className="bg-[#0B0D12]">
                    <RouteMap route={r} />
                  </div>
                  <MediaFrame
                    src={r.images.hero}
                    alt={r.images.heroAlt}
                    className="w-full h-full min-h-[140px]"
                    imgClassName="w-full h-full object-cover"
                    fallbackTitle={r.short}
                  />
                </div>
                <div className="p-5">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#4B5563]">
                    {r.modes.join(' · ')}
                  </p>
                  <h2 className="mt-2 text-xl font-medium group-hover:text-[#1434CB]">{r.short}</h2>
                  <p className="mt-2 text-sm text-[#4B5563] leading-relaxed">{r.lane.notes}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {r.facts.slice(1, 3).map((f) => (
                      <span
                        key={f.label}
                        className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-[#F4F5F7] border border-[#E2E5EB]"
                      >
                        {f.label}: {f.value}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[#1434CB]">
                    View route <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </button>
            </article>
          ))}
        </div>
      </section>

      <GlobalFooter variant={variant} lang={lang} onNavigate={onNavigate} />
      {isMobile && <MobileWhatsAppFab />}
    </div>
  );
};
