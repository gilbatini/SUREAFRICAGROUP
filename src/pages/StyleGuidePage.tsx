import React, { useState } from 'react';
import {
  ArrowRight,
  Clock,
  FileCheck,
  MapPin,
  Package,
  Phone,
  Plane,
  ShieldCheck,
  Ship,
  Truck,
  Warehouse,
} from 'lucide-react';
import { TAGLINES } from '../data/content';
import { ViewportVariant } from '../types';
import { MonoLabel, SureAfricaLogo } from '../components/BrandMark';

interface StyleGuideProps {
  variant: ViewportVariant;
}

export const StyleGuidePage: React.FC<StyleGuideProps> = ({ variant }) => {
  const isMobile = variant === 'mobile';
  const [demoPressed, setDemoPressed] = useState(false);

  const colors = [
    {
      name: 'Deep Cobalt (Primary)',
      hex: '#1434CB',
      role: 'Primary CTAs, key headline emphasis, active route nodes',
      textClass: 'text-white',
    },
    {
      name: 'Savanna Gold (Accent)',
      hex: '#F2B705',
      role: 'Used sparingly: active step square, logo accent, current tracking badge',
      textClass: 'text-[#0B0D12]',
    },
    {
      name: 'Ink (Primary Dark)',
      hex: '#0B0D12',
      role: 'Body headlines, Book/Submit actions, expanded accordion surface',
      textClass: 'text-white',
    },
    {
      name: 'Surface Grey',
      hex: '#F4F5F7',
      role: 'Page canvas, secondary panels, stat tile backgrounds',
      textClass: 'text-[#0B0D12]',
    },
    {
      name: 'Crisp White',
      hex: '#FFFFFF',
      role: 'Primary cards, floating navbar, form surfaces',
      textClass: 'text-[#0B0D12]',
    },
  ];

  const icons = [
    { name: 'Ship', Icon: Ship },
    { name: 'Plane', Icon: Plane },
    { name: 'Truck', Icon: Truck },
    { name: 'Warehouse', Icon: Warehouse },
    { name: 'FileCheck', Icon: FileCheck },
    { name: 'ShieldCheck', Icon: ShieldCheck },
    { name: 'Package', Icon: Package },
    { name: 'MapPin', Icon: MapPin },
    { name: 'Clock', Icon: Clock },
    { name: 'Phone', Icon: Phone },
  ];

  return (
    <div className="bg-white text-[#0B0D12] font-sans">
      {/* Header */}
      <div className={`bg-[#F4F5F7] border-b border-[#E2E5EB] ${isMobile ? 'px-4 py-8' : 'px-12 py-12'}`}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <MonoLabel>SURE AFRICA DESIGN SYSTEM · 08</MonoLabel>
            <h1 className={`mt-3 font-medium tracking-[-0.025em] ${isMobile ? 'text-3xl' : 'text-[44px]'}`}>
              One-Page Style Guide
            </h1>
            <p className="mt-2 text-sm text-[#4B5563] max-w-2xl">
              Visual tokens, editorial typography scale, 8px spacing grid, interactive states, and 1.5px stroke iconography for Sure Africa Group Tanzania Ltd.
            </p>
          </div>
          <div className="bg-white border border-[#E2E5EB] rounded-xl px-5 py-3.5 shrink-0">
            <SureAfricaLogo size="md" />
          </div>
        </div>
      </div>

      <div className={`space-y-12 ${isMobile ? 'px-4 py-8' : 'px-12 py-12'}`}>
        {/* 1. TAGLINE DIRECTION & ALTERNATIVES */}
        <section className="pb-10 border-b border-[#E2E5EB]">
          <MonoLabel>BRAND VOICE & TAGLINE DIRECTION</MonoLabel>
          <div className={`mt-5 grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-12 gap-5'}`}>
            <div className={`${isMobile ? '' : 'col-span-5'} rounded-xl bg-[#1434CB] text-white p-6`}>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#F2B705]">
                PRIMARY DIRECTION
              </span>
              <p className="mt-3 text-2xl font-medium tracking-tight">
                &ldquo;{TAGLINES.primary}&rdquo;
              </p>
              <p className="mt-2 text-xs text-white/80">
                Direct, grounded in the company name, calm confidence.
              </p>
            </div>
            <div className={`${isMobile ? '' : 'col-span-7'} grid grid-cols-1 gap-3`}>
              {TAGLINES.alternatives.map((alt, idx) => (
                <div
                  key={alt}
                  className="rounded-xl border border-[#E2E5EB] bg-[#F4F5F7] px-5 py-3.5 flex items-center justify-between gap-4"
                >
                  <span className="font-mono text-[11px] uppercase text-[#6B7280]">
                    ALT 0{idx + 1}
                  </span>
                  <span className="text-sm font-medium text-[#0B0D12] flex-1">
                    &ldquo;{alt}&rdquo;
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. COLOUR PALETTE */}
        <section className="pb-10 border-b border-[#E2E5EB]">
          <MonoLabel>COLOUR SYSTEM (60 / 30 / 10 DISCIPLINE)</MonoLabel>
          <div className={`mt-5 grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-5 gap-4'}`}>
            {colors.map((c) => (
              <div key={c.hex} className="rounded-xl border border-[#E2E5EB] overflow-hidden bg-white">
                <div
                  className={`h-24 p-3 flex items-end justify-between border-b border-[#E2E5EB] ${c.textClass}`}
                  style={{ backgroundColor: c.hex }}
                >
                  <span className="font-mono text-xs font-medium">{c.hex}</span>
                </div>
                <div className="p-3.5">
                  <p className="text-xs font-medium text-[#0B0D12]">{c.name}</p>
                  <p className="mt-1 text-[11px] text-[#4B5563] leading-snug">{c.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. TYPOGRAPHY SCALE */}
        <section className="pb-10 border-b border-[#E2E5EB]">
          <MonoLabel>TYPOGRAPHY SCALE · RUBIK + JETBRAINS MONO</MonoLabel>
          <div className="mt-5 divide-y divide-[#E2E5EB] border border-[#E2E5EB] rounded-xl bg-white">
            <div className="p-5 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <span className="font-mono text-[11px] text-[#6B7280] w-44 shrink-0">
                H1 · RUBIK 500 · 56PX
              </span>
              <p className={`${isMobile ? 'text-3xl' : 'text-[44px]'} font-medium tracking-[-0.025em] leading-none flex-1`}>
                Simplifying Trade Across <span className="text-[#1434CB]">East Africa</span>
              </p>
            </div>
            <div className="p-5 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <span className="font-mono text-[11px] text-[#6B7280] w-44 shrink-0">
                H2 · RUBIK 500 · 34PX
              </span>
              <p className="text-2xl md:text-[32px] font-medium tracking-[-0.02em] flex-1">
                One partner for every step of your supply chain.
              </p>
            </div>
            <div className="p-5 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <span className="font-mono text-[11px] text-[#6B7280] w-44 shrink-0">
                BODY · RUBIK 400 · 16PX
              </span>
              <p className="text-base font-normal text-[#4B5563] leading-relaxed flex-1">
                Freight forwarding, customs clearance, warehousing, and consolidated LCL shipping via Dar es Salaam.
              </p>
            </div>
            <div className="p-5 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <span className="font-mono text-[11px] text-[#6B7280] w-44 shrink-0">
                MONO LABEL · 11PX
              </span>
              <div className="flex-1">
                <MonoLabel>WHAT WE DO · SA-TZ-2026-0104 · [XX+ SHIPMENTS]</MonoLabel>
              </div>
            </div>
          </div>
        </section>

        {/* 4. BUTTONS & STATES + INPUTS & STATES */}
        <section className="pb-10 border-b border-[#E2E5EB]">
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-8' : 'grid-cols-12 gap-8'}`}>
            {/* Buttons */}
            <div className={isMobile ? '' : 'col-span-6'}>
              <MonoLabel>BUTTONS & INTERACTIVE STATES</MonoLabel>
              <div className="mt-4 rounded-xl border border-[#E2E5EB] bg-[#F4F5F7] p-5 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setDemoPressed((p) => !p)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1434CB] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#0E2594] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 bg-[#F2B705]" />
                    <span>Primary Default / Hover</span>
                    <span>↳</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0E2594] ring-2 ring-[#1434CB]/30 text-white font-mono text-xs uppercase tracking-wider cursor-pointer"
                  >
                    <span>{demoPressed ? 'Active Pressed' : 'Focus / Pressed'}</span>
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0B0D12] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#1434CB] transition-colors cursor-pointer"
                  >
                    <span>Book / Submit</span>
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#D1D5DB] bg-white text-[#0B0D12] font-mono text-xs uppercase tracking-wider hover:border-[#0B0D12] transition-colors cursor-pointer"
                  >
                    <span>Secondary Outline</span>
                  </button>
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#E5E7EB] text-[#9CA3AF] font-mono text-xs uppercase tracking-wider cursor-not-allowed"
                  >
                    <span>Disabled</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Inputs */}
            <div className={isMobile ? '' : 'col-span-6'}>
              <MonoLabel>INPUTS & FORM STATES</MonoLabel>
              <div className="mt-4 rounded-xl border border-[#E2E5EB] bg-[#F4F5F7] p-5 space-y-3">
                <input
                  type="text"
                  readOnly
                  value="Dar es Salaam Port → Kampala"
                  aria-label="Default input sample"
                  className="w-full rounded-lg border border-[#D1D5DB] bg-white px-3.5 py-2 text-sm text-[#0B0D12]"
                />
                <input
                  type="text"
                  readOnly
                  value="Focused cobalt input"
                  aria-label="Focused input sample"
                  className="w-full rounded-lg border-2 border-[#1434CB] bg-white px-3.5 py-2 text-sm text-[#0B0D12]"
                />
                <div>
                  <input
                    type="text"
                    readOnly
                    value="invalid-email@"
                    aria-label="Error input sample"
                    className="w-full rounded-lg border border-[#DC2626] bg-white px-3.5 py-2 text-sm text-[#DC2626]"
                  />
                  <p className="mt-1 text-[11px] text-[#DC2626]">
                    Enter a valid business email address.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CARDS & 1.5PX STROKE ICONS */}
        <section>
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-8' : 'grid-cols-12 gap-8'}`}>
            <div className={isMobile ? '' : 'col-span-6'}>
              <MonoLabel>CARDS & SURFACES (1PX HAIRLINE GRID)</MonoLabel>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#E2E5EB] bg-white p-4">
                  <p className="font-mono text-[10px] uppercase text-[#6B7280]">WHITE HAIRLINE</p>
                  <p className="mt-2 text-sm font-medium">Standard Editorial Card</p>
                </div>
                <div className="rounded-xl border border-[#0B0D12] bg-[#0B0D12] text-white p-4">
                  <p className="font-mono text-[10px] uppercase text-[#F2B705]">DARK EXPANDED</p>
                  <p className="mt-2 text-sm font-medium">Active Accordion Step</p>
                </div>
              </div>
            </div>

            <div className={isMobile ? '' : 'col-span-6'}>
              <MonoLabel>ICONS · 1.5PX STROKE WEIGHT</MonoLabel>
              <div className="mt-4 grid grid-cols-5 border-t border-l border-[#E2E5EB] rounded-lg overflow-hidden">
                {icons.map(({ name, Icon }) => (
                  <div
                    key={name}
                    className="border-r border-b border-[#E2E5EB] bg-white py-3.5 flex flex-col items-center justify-center gap-1.5"
                  >
                    <Icon className="w-4 h-4 text-[#0B0D12]" strokeWidth={1.5} />
                    <span className="font-mono text-[9px] text-[#6B7280]">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
