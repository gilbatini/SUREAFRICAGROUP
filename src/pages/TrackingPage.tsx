import React, { useState } from 'react';
import {
  AlertTriangle,
  Check,
  Loader2,
  PackageSearch,
  Search,
  Ship,
} from 'lucide-react';
import { SAMPLE_TRACKING_SHIPMENT, CONTACT } from '../data/content';
import { Language, PageId, ViewportVariant } from '../types';
import { MonoLabel } from '../components/BrandMark';
import { FloatingNavbar, GlobalFooter, MobileWhatsAppFab } from '../components/GlobalChrome';

type TrackingUIState = 'result' | 'empty' | 'loading' | 'error';

interface PageProps {
  variant: ViewportVariant;
  lang: Language;
  onToggleLang: (lang: Language) => void;
  onNavigate: (page: PageId) => void;
}

export const TrackingPage: React.FC<PageProps> = ({
  variant,
  lang,
  onToggleLang,
  onNavigate,
}) => {
  const isMobile = variant === 'mobile';
  const [query, setQuery] = useState(SAMPLE_TRACKING_SHIPMENT.trackingNumber);
  const [uiState, setUiState] = useState<TrackingUIState>('result');

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = query.trim().toUpperCase();
    if (!cleaned) {
      setUiState('empty');
      return;
    }
    setUiState('loading');
    window.setTimeout(() => {
      if (cleaned === SAMPLE_TRACKING_SHIPMENT.trackingNumber) {
        setUiState('result');
      } else {
        setUiState('error');
      }
    }, 550);
  };

  return (
    <div className="bg-white text-[#0B0D12] font-sans relative">
      {/* HEADER + LARGE TRACKING INPUT */}
      <div className="bg-[#F4F5F7] border-b border-[#E2E5EB]">
        <FloatingNavbar
          variant={variant}
          lang={lang}
          onToggleLang={onToggleLang}
          activePage="tracking"
          onNavigate={onNavigate}
        />

        <div className={isMobile ? 'px-4 pt-8 pb-8' : 'px-12 pt-12 pb-12'}>
          <div className="max-w-4xl">
            <MonoLabel>SHIPMENT TRACKING</MonoLabel>
            <h1
              className={`mt-3 font-medium tracking-[-0.025em] leading-[1.08] text-[#0B0D12] ${
                isMobile ? 'text-[30px]' : 'text-[48px]'
              }`}
            >
              Track your <span className="text-[#1434CB]">shipment</span> milestone by milestone
            </h1>
            <p className="mt-3 text-sm md:text-base text-[#4B5563]">
              Enter your Sure Africa booking or waybill reference (e.g.{' '}
              <button
                type="button"
                onClick={() => {
                  setQuery(SAMPLE_TRACKING_SHIPMENT.trackingNumber);
                  setUiState('result');
                }}
                className="font-mono text-xs text-[#1434CB] underline cursor-pointer"
              >
                {SAMPLE_TRACKING_SHIPMENT.trackingNumber}
              </button>
              ).
            </p>

            {/* Large Tracking Input */}
            <form onSubmit={handleTrackSubmit} className="mt-6">
              <div
                className={`flex ${
                  isMobile ? 'flex-col gap-2' : 'flex-row items-stretch gap-2'
                } bg-white border border-[#D1D5DB] focus-within:border-[#1434CB] rounded-xl p-2`}
              >
                <div className="flex items-center gap-3 flex-1 px-3">
                  <Search className="w-5 h-5 text-[#6B7280] shrink-0" strokeWidth={1.5} />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter Tracking Reference (e.g. SA-TZ-2026-0104)"
                    aria-label="Tracking reference number"
                    className="w-full py-2.5 font-mono text-sm md:text-base text-[#0B0D12] placeholder-[#9CA3AF] focus:outline-none uppercase"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-[#1434CB] text-white font-mono text-xs font-medium uppercase tracking-wider hover:bg-[#0E2594] transition-colors cursor-pointer whitespace-nowrap"
                >
                  ■ TRACK SHIPMENT ↳
                </button>
              </div>
            </form>

            <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-[#6B7280]">
              Live tracking is coming soon. Meanwhile, send your reference on WhatsApp for a same-day update.
            </p>
          </div>
        </div>
      </div>

      {/* TRACKING OUTPUT AREA */}
      <section className={isMobile ? 'px-4 py-8' : 'px-12 py-12'}>
        {/* EMPTY STATE */}
        {uiState === 'empty' && (
          <div className="max-w-3xl mx-auto rounded-xl border border-dashed border-[#D1D5DB] bg-[#F4F5F7] p-10 text-center">
            <PackageSearch className="w-8 h-8 text-[#6B7280] mx-auto" strokeWidth={1.5} />
            <h2 className="mt-4 text-lg font-medium text-[#0B0D12]">
              No tracking reference entered
            </h2>
            <p className="mt-1.5 text-sm text-[#4B5563] max-w-md mx-auto">
              Enter your Sure Africa waybill or consolidation reference above to view live milestone checkpoints.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery(SAMPLE_TRACKING_SHIPMENT.trackingNumber);
                setUiState('result');
              }}
              className="mt-5 px-4 py-2 rounded-lg bg-[#0B0D12] text-white font-mono text-xs uppercase tracking-wider cursor-pointer"
            >
              Load Sample Reference
            </button>
          </div>
        )}

        {/* LOADING STATE */}
        {uiState === 'loading' && (
          <div className="max-w-4xl mx-auto rounded-xl border border-[#E2E5EB] bg-white p-8">
            <div className="flex items-center gap-3 text-[#1434CB]">
              <Loader2 className="w-5 h-5 animate-spin" strokeWidth={1.5} />
              <span className="font-mono text-xs uppercase tracking-wider">
                Fetching shipment milestones…
              </span>
            </div>
            <div className="mt-6 space-y-4">
              <div className="h-14 rounded-lg bg-[#F4F5F7] animate-pulse" />
              <div className="h-10 rounded-lg bg-[#F4F5F7] animate-pulse w-3/4" />
              <div className="h-10 rounded-lg bg-[#F4F5F7] animate-pulse w-5/6" />
            </div>
          </div>
        )}

        {/* ERROR STATE */}
        {uiState === 'error' && (
          <div className="max-w-3xl mx-auto rounded-xl border border-[#1434CB]/25 bg-[#EEF2FF] p-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#1434CB] mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-[#1434CB]">
                  TRACKING VIA WHATSAPP
                </p>
                <h2 className="mt-1 text-lg font-medium text-[#0B0D12]">
                  Live online tracking for &ldquo;{query || 'that reference'}&rdquo; is not available yet
                </h2>
                <p className="mt-1.5 text-sm text-[#4B5563]">
                  Send your reference on WhatsApp ({CONTACT.phoneDisplay}) and the operations desk will reply with the latest milestone.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setQuery(SAMPLE_TRACKING_SHIPMENT.trackingNumber);
                      setUiState('result');
                    }}
                    className="px-4 py-2 rounded-lg bg-[#0B0D12] text-white font-mono text-xs uppercase tracking-wider cursor-pointer"
                  >
                    View Sample Shipment
                  </button>
                  <button
                    type="button"
                    onClick={() => window.open(CONTACT.whatsappUrl, '_blank', 'noopener')}
                    className="px-4 py-2 rounded-lg border border-[#D1D5DB] bg-white text-[#0B0D12] font-mono text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Ask on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* RESULT STATE WITH 7-STAGE VERTICAL TIMELINE */}
        {uiState === 'result' && (
          <div
            className={`grid ${
              isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-12 gap-8 items-start'
            }`}
          >
            {/* Left Summary Card */}
            <div className={isMobile ? '' : 'col-span-5'}>
              <div className="rounded-xl border border-[#E2E5EB] bg-[#F4F5F7] p-6">
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#E2E5EB]">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#6B7280]">
                      SAMPLE SHIPMENT · DEMO DATA
                    </p>
                    <p className="mt-1 font-mono text-base font-medium text-[#0B0D12] tabular-nums">
                      {SAMPLE_TRACKING_SHIPMENT.trackingNumber}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#1434CB] text-white font-mono text-[10px] uppercase tracking-wider">
                    In Transit
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-[#6B7280]">Origin</span>
                    <span className="font-medium text-[#0B0D12] text-right">
                      {SAMPLE_TRACKING_SHIPMENT.origin}
                    </span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#6B7280]">Destination</span>
                    <span className="font-medium text-[#0B0D12] text-right">
                      {SAMPLE_TRACKING_SHIPMENT.destination}
                    </span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#6B7280]">Mode</span>
                    <span className="font-medium text-[#0B0D12] text-right">
                      {SAMPLE_TRACKING_SHIPMENT.serviceMode}
                    </span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#6B7280]">Cargo</span>
                    <span className="font-mono text-xs text-[#4B5563] text-right">
                      {SAMPLE_TRACKING_SHIPMENT.cargoSummary}
                    </span>
                  </div>
                  <div className="flex justify-between gap-3 pt-3 border-t border-[#E2E5EB]">
                    <span className="text-[#6B7280]">Estimated Arrival</span>
                    <span className="font-mono text-xs font-medium text-[#1434CB] tabular-nums">
                      {SAMPLE_TRACKING_SHIPMENT.etaPlaceholder}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7-Stage Vertical Timeline */}
            <div className={isMobile ? '' : 'col-span-7'}>
              <div className="rounded-xl border border-[#E2E5EB] bg-white p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <MonoLabel>TRANSIT TIMELINE (7 CHECKPOINTS)</MonoLabel>
                  <Ship className="w-4 h-4 text-[#1434CB]" strokeWidth={1.5} />
                </div>

                <ol className="relative space-y-0">
                  {SAMPLE_TRACKING_SHIPMENT.stages.map((stage, idx) => {
                    const isLast = idx === SAMPLE_TRACKING_SHIPMENT.stages.length - 1;
                    const isCompleted = stage.status === 'completed';
                    const isCurrent = stage.status === 'current';
                    return (
                      <li key={stage.id} className="relative flex gap-4 pb-6 last:pb-0">
                        {/* Vertical Connector Line */}
                        {!isLast && (
                          <span
                            aria-hidden="true"
                            className={`absolute left-[13px] top-7 bottom-0 w-[1.5px] ${
                              isCompleted ? 'bg-[#1434CB]' : 'bg-[#E2E5EB]'
                            }`}
                          />
                        )}

                        {/* Node Marker */}
                        <div className="relative z-10 shrink-0 mt-0.5">
                          {isCompleted ? (
                            <span className="w-7 h-7 rounded-full bg-[#1434CB] text-white flex items-center justify-center">
                              <Check className="w-3.5 h-3.5" strokeWidth={2} />
                            </span>
                          ) : isCurrent ? (
                            <span className="w-7 h-7 rounded-full bg-[#F2B705] text-[#0B0D12] border-2 border-[#0B0D12] flex items-center justify-center font-mono text-[10px] font-medium">
                              {idx + 1}
                            </span>
                          ) : (
                            <span className="w-7 h-7 rounded-full bg-[#F4F5F7] border border-[#D1D5DB] text-[#6B7280] flex items-center justify-center font-mono text-[10px]">
                              {idx + 1}
                            </span>
                          )}
                        </div>

                        {/* Stage Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <h3
                              className={`text-sm font-medium ${
                                isCurrent
                                  ? 'text-[#1434CB]'
                                  : isCompleted
                                  ? 'text-[#0B0D12]'
                                  : 'text-[#6B7280]'
                              }`}
                            >
                              {lang === 'sw' ? stage.labelSw : stage.label}
                              {isCurrent && (
                                <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-[#0B0D12] bg-[#F2B705]/30 px-1.5 py-0.5 rounded">
                                  Current Stage
                                </span>
                              )}
                            </h3>
                            <span className="font-mono text-[11px] text-[#6B7280] tabular-nums">
                              {stage.timestampPlaceholder}
                            </span>
                          </div>
                          <p className="font-mono text-[11px] text-[#4B5563] mt-0.5">
                            {stage.location}
                          </p>
                          <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                            {stage.detail}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        )}
      </section>

      <GlobalFooter variant={variant} lang={lang} onNavigate={onNavigate} />
      {isMobile && <MobileWhatsAppFab onClick={() => onNavigate('contact')} />}
    </div>
  );
};
