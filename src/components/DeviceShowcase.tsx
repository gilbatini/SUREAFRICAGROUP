import React, { useEffect, useRef, useState } from 'react';
import { Maximize2, Wifi } from 'lucide-react';
import { PageId, ViewportVariant } from '../types';
import { MonoLabel } from './BrandMark';

interface ScaledFrameProps {
  designWidth: number;
  children: React.ReactNode;
  className?: string;
}

const ScaledFrame: React.FC<ScaledFrameProps> = ({
  designWidth,
  children,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState<number>(800);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const updateMetrics = () => {
      const availableW = container.clientWidth;
      if (availableW > 0) {
        const nextScale = Math.min(1, availableW / designWidth);
        setScale(nextScale);
      }
      setContentHeight(content.scrollHeight);
    };

    updateMetrics();

    const ro = new ResizeObserver(() => {
      updateMetrics();
    });
    ro.observe(container);
    ro.observe(content);

    return () => ro.disconnect();
  }, [designWidth]);

  return (
    <div
      ref={containerRef}
      className={`w-full relative overflow-hidden ${className}`}
      style={{ height: `${Math.ceil(contentHeight * scale)}px` }}
    >
      <div
        ref={contentRef}
        style={{
          width: `${designWidth}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  );
};

interface DeviceShowcaseProps {
  pageId: PageId;
  codeLabel: string;
  onExpandLive: (pageId: PageId) => void;
  renderScreen: (variant: ViewportVariant) => React.ReactNode;
}

export const DeviceShowcase: React.FC<DeviceShowcaseProps> = ({
  pageId,
  codeLabel,
  onExpandLive,
  renderScreen,
}) => {
  return (
    <section
      id={`board-${pageId}`}
      className="py-12 md:py-16 border-b border-[#D5D8DF] last:border-b-0"
    >
      {/* Presentation Board Header matching reference */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <MonoLabel tone="dark">DESIGN BREAKDOWN · DESKTOP 1440PX & MOBILE 390PX</MonoLabel>
          <h2 className="mt-2 text-2xl md:text-3xl font-medium tracking-tight text-[#0B0D12]">
            {codeLabel}
          </h2>
        </div>
        <button
          type="button"
          onClick={() => onExpandLive(pageId)}
          className="inline-flex items-center gap-2 self-start sm:self-auto px-3.5 py-2 rounded-lg border border-[#D1D5DB] bg-white text-xs font-mono uppercase tracking-wider text-[#0B0D12] hover:border-[#1434CB] hover:text-[#1434CB] transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          <Maximize2 className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span>Open Live 1440px</span>
        </button>
      </div>

      {/* Side-by-side Desktop (1440px) + Mobile (390px) frames */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Desktop 1440px Canvas */}
        <div className="lg:col-span-9">
          <div className="flex items-center justify-between mb-2.5 px-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#4B5563]">
              Desktop Frame · 1440px (12-Col Grid)
            </span>
            <span className="font-mono text-[11px] text-[#6B7280]">Interactive</span>
          </div>
          <div className="bg-white border border-[#D5D8DF] rounded-lg overflow-hidden shadow-xs">
            <ScaledFrame designWidth={1440}>
              {renderScreen('desktop')}
            </ScaledFrame>
          </div>
        </div>

        {/* Mobile 390px Phone Frame */}
        <div className="lg:col-span-3 max-w-[390px] w-full mx-auto lg:mx-0">
          <div className="flex items-center justify-between mb-2.5 px-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#4B5563]">
              Mobile · 390px (4-Col)
            </span>
            <span className="font-mono text-[11px] text-[#6B7280]">iOS Shell</span>
          </div>
          <div className="rounded-[28px] border-[6px] border-[#0B0D12] bg-[#0B0D12] overflow-hidden shadow-md">
            {/* iPhone Status Bar */}
            <div className="bg-white px-5 pt-2.5 pb-1.5 flex items-center justify-between text-[11px] font-medium text-[#0B0D12]">
              <span className="tabular-nums">9:41</span>
              <div className="w-20 h-4 bg-[#0B0D12] rounded-full" aria-hidden="true" />
              <div className="flex items-center gap-1.5">
                <Wifi className="w-3 h-3" strokeWidth={2} />
                <div className="w-4 h-2.5 border border-[#0B0D12] rounded-[2px] p-[1px]">
                  <div className="w-full h-full bg-[#0B0D12]" />
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden">
              <ScaledFrame designWidth={390}>
                {renderScreen('mobile')}
              </ScaledFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
