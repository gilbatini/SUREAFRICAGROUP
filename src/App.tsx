import React, { useEffect, useState } from 'react';
import { Layers, Monitor } from 'lucide-react';
import { PAGE_METADATA as BASE_PAGE_METADATA } from './data/content';
import { Language, PageId, ViewportVariant } from './types';
import { SureAfricaLogo } from './components/BrandMark';
import { DeviceShowcase } from './components/DeviceShowcase';
import { ChatWidget } from './components/ChatWidget';
import { RoutePage } from './pages/RoutePage';
import { RoutesIndexPage } from './pages/RoutesIndexPage';
import { ROUTES, routeBySlug } from './data/routes';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { OceanFreightPage } from './pages/OceanFreightPage';
import { BookShipmentPage } from './pages/BookShipmentPage';
import { TrackingPage } from './pages/TrackingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { StyleGuidePage } from './pages/StyleGuidePage';

// Design boards: base pages plus one board per route, inserted after the Routes index.
const PAGE_METADATA = BASE_PAGE_METADATA.flatMap((m) =>
  m.id === 'routes'
    ? [
        m,
        ...ROUTES.map((r, i) => ({
          id: `route:${r.slug}` as PageId,
          code: `03${String.fromCharCode(67 + i)}`,
          label: `03${String.fromCharCode(67 + i)}: ROUTE — ${r.short.toUpperCase()}`,
          shortLabel: `03${String.fromCharCode(67 + i)} ${r.short}`,
        })),
      ]
    : [m]
);

const PAGE_PATHS = {
  home: '/',
  services: '/services',
  'ocean-freight': '/services/ocean-freight',
  routes: '/routes',
  ...Object.fromEntries(ROUTES.map((r) => [`route:${r.slug}`, `/routes/${r.slug}`])),
  book: '/book',
  tracking: '/tracking',
  about: '/about',
  contact: '/contact',
  'style-guide': '/design/style-guide',
} as Record<PageId, string>;

const PAGE_TITLES = {
  home: 'Freight Forwarding & Logistics, Tanzania & Uganda',
  services: 'Logistics Services',
  'ocean-freight': 'Ocean Freight (FCL & LCL)',
  routes: 'Routes into Uganda & East Africa',
  ...Object.fromEntries(ROUTES.map((r) => [`route:${r.slug}`, `${r.short} Freight`])),
  book: 'Book a Shipment',
  tracking: 'Track a Shipment',
  about: 'About Us',
  contact: 'Contact Us',
  'style-guide': 'Style Guide',
} as Record<PageId, string>;

const pageFromPath = (path: string): PageId => {
  const clean = path.replace(/\/+$/, '') || '/';
  const match = (Object.keys(PAGE_PATHS) as PageId[]).find(
    (id) => PAGE_PATHS[id] === clean
  );
  return match ?? 'home';
};

const isDesignPath = (path: string) => path === '/design' || path === '/design/';

export default function App() {
  const [viewMode, setViewMode] = useState<'boards' | 'live'>(() =>
    isDesignPath(window.location.pathname) ? 'boards' : 'live'
  );
  const [boardFilter, setBoardFilter] = useState<'all' | PageId>('all');
  const [activeLivePage, setActiveLivePage] = useState<PageId>(() =>
    pageFromPath(window.location.pathname)
  );
  const [lang, setLang] = useState<Language>('en');
  const [prefillRoute, setPrefillRoute] = useState<string>('');
  const [liveVariant, setLiveVariant] = useState<ViewportVariant>('desktop');

  useEffect(() => {
    const syncVariant = () => {
      setLiveVariant(window.innerWidth < 1024 ? 'mobile' : 'desktop');
    };
    syncVariant();
    window.addEventListener('resize', syncVariant);
    return () => window.removeEventListener('resize', syncVariant);
  }, []);

  // Browser back/forward
  useEffect(() => {
    const onPop = () => {
      const path = window.location.pathname;
      if (isDesignPath(path)) {
        setViewMode('boards');
      } else {
        setViewMode('live');
        setActiveLivePage(pageFromPath(path));
      }
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Keep URL + document title in sync with the live page
  useEffect(() => {
    if (viewMode !== 'live') {
      document.title = 'Design System — Sure Africa Group Tanzania-Uganda Ltd.';
      return;
    }
    const path = PAGE_PATHS[activeLivePage];
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    document.title =
      activeLivePage === 'home'
        ? `Sure Africa Group Tanzania-Uganda Ltd. — ${PAGE_TITLES.home}`
        : `${PAGE_TITLES[activeLivePage]} — Sure Africa Group`;
  }, [viewMode, activeLivePage]);

  const handleNavigate = (page: PageId, routeHint?: string) => {
    if (routeHint) {
      setPrefillRoute(routeHint);
    }
    if (viewMode === 'live') {
      setActiveLivePage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setBoardFilter('all');
      const target = document.getElementById(`board-${page}`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleExpandLive = (page: PageId) => {
    setActiveLivePage(page);
    setViewMode('live');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = (pageId: PageId, variant: ViewportVariant) => {
    if (pageId.startsWith('route:')) {
      const route = routeBySlug(pageId.slice('route:'.length));
      if (route) {
        return (
          <RoutePage
            key={route.slug}
            route={route}
            variant={variant}
            lang={lang}
            onToggleLang={setLang}
            onNavigate={handleNavigate}
          />
        );
      }
    }
    switch (pageId) {
      case 'home':
        return (
          <HomePage
            variant={variant}
            lang={lang}
            onToggleLang={setLang}
            onNavigate={handleNavigate}
          />
        );
      case 'services':
        return (
          <ServicesPage
            variant={variant}
            lang={lang}
            onToggleLang={setLang}
            onNavigate={handleNavigate}
          />
        );
      case 'ocean-freight':
        return (
          <OceanFreightPage
            variant={variant}
            lang={lang}
            onToggleLang={setLang}
            onNavigate={handleNavigate}
          />
        );
      case 'routes':
        return (
          <RoutesIndexPage
            variant={variant}
            lang={lang}
            onToggleLang={setLang}
            onNavigate={handleNavigate}
          />
        );
      case 'book':
        return (
          <BookShipmentPage
            variant={variant}
            lang={lang}
            onToggleLang={setLang}
            onNavigate={handleNavigate}
            prefillRoute={prefillRoute}
          />
        );
      case 'tracking':
        return (
          <TrackingPage
            variant={variant}
            lang={lang}
            onToggleLang={setLang}
            onNavigate={handleNavigate}
          />
        );
      case 'about':
        return (
          <AboutPage
            variant={variant}
            lang={lang}
            onToggleLang={setLang}
            onNavigate={handleNavigate}
          />
        );
      case 'contact':
        return (
          <ContactPage
            variant={variant}
            lang={lang}
            onToggleLang={setLang}
            onNavigate={handleNavigate}
          />
        );
      case 'style-guide':
        return <StyleGuidePage variant={variant} />;
    }
  };

  const visibleBoards =
    boardFilter === 'all'
      ? PAGE_METADATA
      : PAGE_METADATA.filter((b) => b.id === boardFilter);

  // Public website: the live pages only, no design-review chrome
  if (viewMode === 'live') {
    return (
      <div className="min-h-screen bg-white text-[#0B0D12]">
        <main className="w-full max-w-[1440px] mx-auto">
          {renderPage(activeLivePage, liveVariant)}
        </main>
        <ChatWidget lang={lang} variant={liveVariant} onNavigate={handleNavigate} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EAECEF] text-[#0B0D12]">
      {/* Studio Toolbar (design review at /design) */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#D5D8DF]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-14 flex items-center justify-between gap-6">
          {/* Left: Brand */}
          <button
            type="button"
            onClick={() => {
              setViewMode('boards');
              setBoardFilter('all');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="shrink-0 cursor-pointer"
            aria-label="Sure Africa UI System Home"
          >
            <SureAfricaLogo size="sm" showWordmark={true} />
          </button>

          {/* Center: Screen Index */}
          <nav
            aria-label="Screen directory"
            className="hidden xl:flex items-center gap-1 overflow-x-auto"
          >
            {viewMode === 'boards' && (
              <button
                type="button"
                onClick={() => setBoardFilter('all')}
                className={`px-2.5 py-1 rounded-md font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  boardFilter === 'all'
                    ? 'bg-[#0B0D12] text-white'
                    : 'text-[#4B5563] hover:text-[#0B0D12] hover:bg-[#F4F5F7]'
                }`}
              >
                All (08)
              </button>
            )}
            {PAGE_METADATA.map((item) => {
              const isActive =
                viewMode === 'boards'
                  ? boardFilter === item.id
                  : activeLivePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    if (viewMode === 'boards') {
                      setBoardFilter(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      setActiveLivePage(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`px-2.5 py-1 rounded-md font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#1434CB] text-white'
                      : 'text-[#4B5563] hover:text-[#0B0D12] hover:bg-[#F4F5F7]'
                  }`}
                >
                  {item.shortLabel}
                </button>
              );
            })}
          </nav>

          {/* Right: Presentation Mode Switch */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="inline-flex items-center rounded-lg border border-[#D5D8DF] bg-[#F4F5F7] p-0.5">
              <button
                type="button"
                onClick={() => setViewMode('boards')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                  viewMode === 'boards'
                    ? 'bg-white text-[#0B0D12] shadow-2xs font-medium'
                    : 'text-[#4B5563] hover:text-[#0B0D12]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span>Desktop + Mobile</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('live')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                  (viewMode as string) === 'live'
                    ? 'bg-[#1434CB] text-white font-medium'
                    : 'text-[#4B5563] hover:text-[#0B0D12]'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span>Live 1440px</span>
              </button>
            </div>
          </div>
        </div>

        {/* Compact Mobile / Tablet Screen Jumper */}
        <div className="xl:hidden border-t border-[#E2E5EB] px-4 py-2 flex items-center gap-1.5 overflow-x-auto">
          {viewMode === 'boards' && (
            <button
              type="button"
              onClick={() => setBoardFilter('all')}
              className={`px-2.5 py-1 rounded font-mono text-[10px] uppercase tracking-wider shrink-0 cursor-pointer ${
                boardFilter === 'all' ? 'bg-[#0B0D12] text-white' : 'bg-[#F4F5F7] text-[#4B5563]'
              }`}
            >
              All (08)
            </button>
          )}
          {PAGE_METADATA.map((item) => {
            const isActive =
              viewMode === 'boards'
                ? boardFilter === item.id
                : activeLivePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  if (viewMode === 'boards') {
                    setBoardFilter(item.id);
                  } else {
                    setActiveLivePage(item.id);
                  }
                }}
                className={`px-2.5 py-1 rounded font-mono text-[10px] uppercase tracking-wider shrink-0 cursor-pointer ${
                  isActive ? 'bg-[#1434CB] text-white' : 'bg-[#F4F5F7] text-[#4B5563]'
                }`}
              >
                {item.shortLabel}
              </button>
            );
          })}
        </div>
      </header>

      {/* MAIN WORKSPACE */}
      {viewMode === 'boards' ? (
        <main className="max-w-[1440px] mx-auto px-4 md:px-8 pb-20">
          {/* Presentation Intro Strip */}
          <div className="pt-10 pb-4 border-b border-[#D5D8DF] flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#4B5563]">
                ■ SURE AFRICA GROUP (TANZANIA) LIMITED · BRELA 2026
              </p>
              <h1 className="mt-2 text-3xl md:text-4xl font-medium tracking-tight text-[#0B0D12]">
                Web Design System — Desktop (1440px) &amp; Mobile (390px)
              </h1>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#6B7280]">
              All frames are live &amp; interactive · EN / SW supported
            </p>
          </div>

          {visibleBoards.map((board) => (
            <DeviceShowcase
              key={board.id}
              pageId={board.id}
              codeLabel={board.label}
              onExpandLive={handleExpandLive}
              renderScreen={(variant) => renderPage(board.id, variant)}
            />
          ))}
        </main>
      ) : (
        <main className="max-w-[1440px] mx-auto bg-white shadow-sm">
          {renderPage(activeLivePage, liveVariant)}
        </main>
      )}
    </div>
  );
}
