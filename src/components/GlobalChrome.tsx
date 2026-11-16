import React, { useState } from 'react';
import { ArrowRight, Menu, MessageCircle, X } from 'lucide-react';
import { COPY } from '../data/content';
import { Language, PageId, ViewportVariant } from '../types';
import { SureAfricaLogo } from './BrandMark';

interface NavProps {
  variant: ViewportVariant;
  lang: Language;
  onToggleLang: (lang: Language) => void;
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  darkHero?: boolean;
}

export const FloatingNavbar: React.FC<NavProps> = ({
  variant,
  lang,
  onToggleLang,
  activePage,
  onNavigate,
  darkHero = false,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = COPY[lang];
  const isMobile = variant === 'mobile';

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'ocean-freight', label: 'OCEAN FREIGHT' },
    { id: 'tracking', label: t.nav.tracking },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <div className={`relative z-30 ${isMobile ? 'px-3 pt-3' : 'px-8 pt-5'}`}>
      <header
        className={`flex items-center justify-between gap-4 rounded-xl border px-4 py-2.5 transition-colors ${
          darkHero
            ? 'bg-white/95 backdrop-blur-md border-white/30'
            : 'bg-white border-[#E2E5EB]'
        }`}
      >
        {/* Left: Menu + Language Toggle (desktop) */}
        <div className="flex items-center gap-3 shrink-0">
          {!isMobile ? (
            <>
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[#E2E5EB] text-[#0B0D12] hover:bg-[#F4F5F7] transition-colors cursor-pointer"
              >
                {menuOpen ? (
                  <X className="w-4 h-4" strokeWidth={1.5} />
                ) : (
                  <Menu className="w-4 h-4" strokeWidth={1.5} />
                )}
              </button>
              <div
                className="inline-flex items-center rounded-lg border border-[#E2E5EB] bg-[#F4F5F7] p-0.5 font-mono text-[11px]"
                role="group"
                aria-label="Language switch"
              >
                <button
                  type="button"
                  onClick={() => onToggleLang('en')}
                  className={`px-2 py-1 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    lang === 'en'
                      ? 'bg-white text-[#0B0D12] font-medium'
                      : 'text-[#4B5563] hover:text-[#0B0D12]'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => onToggleLang('sw')}
                  className={`px-2 py-1 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    lang === 'sw'
                      ? 'bg-white text-[#0B0D12] font-medium'
                      : 'text-[#4B5563] hover:text-[#0B0D12]'
                  }`}
                >
                  SW
                </button>
              </div>
            </>
          ) : (
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="cursor-pointer focus:outline-none"
              aria-label="Go to homepage"
            >
              <SureAfricaLogo size="sm" showWordmark={true} />
            </button>
          )}
        </div>

        {/* Center: Logo (desktop) */}
        {!isMobile && (
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="cursor-pointer focus:outline-none shrink-0"
            aria-label="Sure Africa Home"
          >
            <SureAfricaLogo size="md" showWordmark={true} />
          </button>
        )}

        {/* Right: Book a Shipment CTA (desktop) / EN|SW + Hamburger (mobile) */}
        <div className="flex items-center gap-2 shrink-0">
          {isMobile ? (
            <>
              <div
                className="inline-flex items-center rounded-md border border-[#E2E5EB] bg-[#F4F5F7] p-0.5 font-mono text-[10px]"
                role="group"
                aria-label="Language switch"
              >
                <button
                  type="button"
                  onClick={() => onToggleLang('en')}
                  className={`px-1.5 py-0.5 rounded cursor-pointer ${
                    lang === 'en' ? 'bg-white text-[#0B0D12] font-medium' : 'text-[#4B5563]'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => onToggleLang('sw')}
                  className={`px-1.5 py-0.5 rounded cursor-pointer ${
                    lang === 'sw' ? 'bg-white text-[#0B0D12] font-medium' : 'text-[#4B5563]'
                  }`}
                >
                  SW
                </button>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[#E2E5EB] text-[#0B0D12] hover:bg-[#F4F5F7] cursor-pointer"
              >
                {menuOpen ? (
                  <X className="w-4 h-4" strokeWidth={1.5} />
                ) : (
                  <Menu className="w-4 h-4" strokeWidth={1.5} />
                )}
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => onNavigate('book')}
              className="px-4 py-2 rounded-lg bg-[#0B0D12] text-white text-[13px] font-medium hover:bg-[#1434CB] active:translate-y-px transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.nav.bookBtn}
            </button>
          )}
        </div>
      </header>

      {/* Dropdown Navigation Drawer */}
      {menuOpen && (
        <div className="mt-2 rounded-xl border border-[#E2E5EB] bg-white p-4 shadow-lg">
          <div
            className={`grid gap-2 ${
              isMobile ? 'grid-cols-1' : 'grid-cols-3'
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onNavigate(item.id);
                  setMenuOpen(false);
                }}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider text-left transition-colors cursor-pointer ${
                  activePage === item.id
                    ? 'bg-[#1434CB] text-white'
                    : 'bg-[#F4F5F7] text-[#0B0D12] hover:bg-[#E5E8EF]'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </button>
            ))}
          </div>
          {isMobile && (
            <button
              type="button"
              onClick={() => {
                onNavigate('book');
                setMenuOpen(false);
              }}
              className="mt-3 w-full py-2.5 rounded-lg bg-[#0B0D12] text-white text-xs font-medium text-center cursor-pointer"
            >
              {t.nav.bookBtn}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

interface FooterProps {
  variant: ViewportVariant;
  lang: Language;
  onNavigate: (page: PageId) => void;
}

export const GlobalFooter: React.FC<FooterProps> = ({
  variant,
  lang,
  onNavigate,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');
  const t = COPY[lang];
  const isMobile = variant === 'mobile';

  const footerLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'ocean-freight', label: t.nav.routes },
    { id: 'tracking', label: t.nav.tracking },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setError('Enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className={`bg-[#F4F5F7] border-t border-[#E2E5EB] ${isMobile ? 'px-4 py-8' : 'px-12 py-12'}`}>
      {/* Top mono nav row + social squares */}
      <div
        className={`flex ${
          isMobile ? 'flex-col gap-5' : 'items-center justify-between'
        } pb-8 border-b border-[#E2E5EB]`}
      >
        <nav
          aria-label="Footer navigation"
          className={`flex flex-wrap items-center ${isMobile ? 'gap-x-4 gap-y-2.5' : 'gap-7'}`}
        >
          {footerLinks.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-[#0B0D12] hover:text-[#1434CB] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 bg-[#0B0D12] inline-block" aria-hidden="true" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social icon squares */}
        <div className="flex items-center gap-2 shrink-0">
          {[
            { label: 'LinkedIn', glyph: 'in' },
            { label: 'X', glyph: '𝕏' },
            { label: 'Facebook', glyph: 'f' },
            { label: 'Instagram', glyph: 'IG' },
            { label: 'WhatsApp', glyph: 'WA' },
          ].map((soc) => (
            <button
              key={soc.label}
              type="button"
              onClick={() => onNavigate('contact')}
              aria-label={soc.label}
              className="w-8 h-8 rounded border border-[#D1D5DB] bg-white text-[#0B0D12] font-mono text-[11px] font-medium flex items-center justify-center hover:border-[#1434CB] hover:text-[#1434CB] transition-colors cursor-pointer"
            >
              {soc.glyph}
            </button>
          ))}
        </div>
      </div>

      {/* Main 2-column footer card grid */}
      <div
        className={`grid ${
          isMobile ? 'grid-cols-1 gap-4 mt-6' : 'grid-cols-12 gap-5 mt-8'
        }`}
      >
        {/* Left: Newsletter Card */}
        <div
          className={`${
            isMobile ? '' : 'col-span-6'
          } bg-white border border-[#E2E5EB] rounded-xl p-6 flex flex-col justify-between`}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#4B5563]">
            {t.footer.subscribeEyebrow}
          </p>

          <div className="mt-10">
            <h3 className="text-2xl font-medium tracking-tight text-[#0B0D12]">
              {t.footer.subscribeTitle}
            </h3>
            <form onSubmit={handleSubscribe} className="mt-4">
              <div className="flex items-center border border-[#D1D5DB] rounded-lg overflow-hidden bg-[#F4F5F7] focus-within:border-[#1434CB] focus-within:bg-white transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (subscribed) setSubscribed(false);
                  }}
                  placeholder={t.footer.emailPlaceholder}
                  aria-label="Email address for updates"
                  className="flex-1 bg-transparent px-3.5 py-2.5 text-sm text-[#0B0D12] placeholder-[#6B7280] focus:outline-none min-w-0"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="px-4 py-2.5 bg-[#0B0D12] text-white font-mono text-sm hover:bg-[#1434CB] transition-colors cursor-pointer shrink-0"
                >
                  ↳
                </button>
              </div>
              {error && (
                <p className="mt-2 text-xs text-[#DC2626]" role="alert">
                  {error}
                </p>
              )}
              {subscribed && (
                <p className="mt-2 text-xs text-[#15803D]">
                  {t.footer.subscribeSuccess}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Right: Contact & Head Office */}
        <div
          className={`${
            isMobile ? '' : 'col-span-6'
          } bg-white border border-[#E2E5EB] rounded-xl p-6 flex flex-col justify-between gap-6`}
        >
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-5' : 'grid-cols-2 gap-6'}`}>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#4B5563] mb-2">
                {t.footer.contactHeading}
              </p>
              <p className="text-sm text-[#0B0D12]">[info@sureafrica.co.tz]</p>
              <p className="text-sm text-[#0B0D12] mt-1 tabular-nums">[+255 XXX XXX XXX]</p>
              <p className="text-xs text-[#4B5563] mt-1">WhatsApp: [+255 XXX XXX XXX]</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#4B5563] mb-2">
                {t.footer.headOfficeHeading}
              </p>
              <p className="text-sm text-[#0B0D12]">[Office Address Placeholder]</p>
              <p className="text-sm text-[#0B0D12]">Dar es Salaam, Tanzania</p>
              <p className="text-xs text-[#4B5563] mt-1">BRELA Reg. (2026)</p>
            </div>
          </div>

          <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#4B5563] leading-relaxed border-t border-[#E2E5EB] pt-4">
            {t.footer.summary}
          </p>
        </div>
      </div>

      {/* Large Logo Mark + Bottom Legal */}
      <div className="mt-8 pt-6 border-t border-[#E2E5EB] flex items-end justify-between gap-4">
        <div>
          <SureAfricaLogo size="lg" showWordmark={false} />
          <p className="mt-3 text-xs text-[#4B5563]">{t.footer.copyright}</p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="text-xs text-[#4B5563] hover:text-[#0B0D12] underline underline-offset-4 cursor-pointer"
        >
          {t.footer.privacy}
        </button>
      </div>
    </footer>
  );
};

export const MobileWhatsAppFab: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <div className="sticky bottom-3 z-30 flex justify-end px-3 pointer-events-none">
    <button
      type="button"
      onClick={onClick}
      aria-label="Chat on WhatsApp"
      className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-[#0B0D12] text-white px-3.5 py-2.5 text-xs font-medium shadow-md border border-white/15 hover:bg-[#1434CB] transition-colors cursor-pointer"
    >
      <MessageCircle className="w-4 h-4 text-[#F2B705]" strokeWidth={1.5} />
      <span>WhatsApp</span>
    </button>
  </div>
);
