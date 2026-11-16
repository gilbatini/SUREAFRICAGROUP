import React, { useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../data/content';
import { Language, PageId, ViewportVariant } from '../types';
import { MediaFrame, MonoLabel } from '../components/BrandMark';
import { FloatingNavbar, GlobalFooter, MobileWhatsAppFab } from '../components/GlobalChrome';

interface PageProps {
  variant: ViewportVariant;
  lang: Language;
  onToggleLang: (lang: Language) => void;
  onNavigate: (page: PageId) => void;
  prefillRoute?: string;
}

export const BookShipmentPage: React.FC<PageProps> = ({
  variant,
  lang,
  onToggleLang,
  onNavigate,
  prefillRoute = '',
}) => {
  const isMobile = variant === 'mobile';
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [origin, setOrigin] = useState(prefillRoute.split('→')[0]?.trim() || '');
  const [destination, setDestination] = useState(prefillRoute.split('→')[1]?.trim() || '');
  const [cargoType, setCargoType] = useState('');
  const [weightCbm, setWeightCbm] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateAndSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!name.trim()) nextErrors.name = 'Enter your full name or company.';
    if (!phone.trim()) nextErrors.phone = 'Enter a contact phone number.';
    if (!email.trim() || !email.includes('@')) nextErrors.email = 'Enter a valid email address.';
    if (!origin.trim()) nextErrors.origin = 'Specify origin city or port.';
    if (!destination.trim()) nextErrors.destination = 'Specify destination city or port.';
    if (!cargoType) nextErrors.cargoType = 'Select a cargo type.';
    if (!agreed) nextErrors.agreed = 'Please agree to the privacy notice.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setStep(3);
      setSubmitted(true);
    }
  };

  const triggerErrorPreview = () => {
    setErrors({
      email: 'Enter a valid business email address.',
      origin: 'Specify origin city or port (e.g. Dubai, Guangzhou, Dar es Salaam).',
    });
    setSubmitted(false);
  };

  const steps = [
    { num: 1 as const, label: 'Shipment Info.' },
    { num: 2 as const, label: 'Schedule' },
    { num: 3 as const, label: 'Agree & Confirm' },
  ];

  return (
    <div className="bg-white text-[#0B0D12] font-sans relative">
      {/* FULL-BLEED DARK NIGHT TRUCK HERO + WHITE FORM CARD (matches Reference 06) */}
      <div className="relative bg-[#0B0D12] overflow-hidden">
        <div className="absolute inset-0">
          <MediaFrame
            src={IMAGES.nightTruck}
            alt="Heavy freight truck operating at dusk on an East African corridor"
            className="w-full h-full opacity-75"
            fallbackTitle="Night Freight Dispatch"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0B0D12]/90 via-[#0B0D12]/35 to-[#0B0D12]/60"
            aria-hidden="true"
          />
        </div>

        <FloatingNavbar
          variant={variant}
          lang={lang}
          onToggleLang={onToggleLang}
          activePage="book"
          onNavigate={onNavigate}
          darkHero={true}
        />

        <div className={`relative z-10 ${isMobile ? 'px-4 pt-20 pb-8' : 'px-12 pt-10 pb-14'}`}>
          <div
            className={`grid ${
              isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-12 gap-10 items-end'
            }`}
          >
            {/* Bottom-Left Contact Prompt */}
            <div className={`${isMobile ? '' : 'col-span-6 pb-4'} text-white`}>
              <p className="font-mono text-xs text-white/85">
                ↳ [info@sureafrica.co.tz]
              </p>
              <h1
                className={`mt-2 font-medium tracking-[-0.025em] ${
                  isMobile ? 'text-[34px]' : 'text-[52px]'
                }`}
              >
                Contact Us
              </h1>
              <p className="mt-2 text-sm text-white/75 max-w-md">
                Share your route, cargo dimensions, and preferred collection window. Our Dar es Salaam desk prepares your quote directly.
              </p>
            </div>

            {/* Right White Form Card */}
            <div className={isMobile ? '' : 'col-span-6'}>
              <div className="bg-white rounded-xl border border-[#E2E5EB] p-6 md:p-8 shadow-sm">
                <div className="flex items-center justify-between gap-2">
                  <MonoLabel>LET&apos;S GET STARTED</MonoLabel>
                  <button
                    type="button"
                    onClick={triggerErrorPreview}
                    className="font-mono text-[10px] uppercase tracking-wider text-[#6B7280] hover:text-[#DC2626] underline cursor-pointer"
                  >
                    Test Error State
                  </button>
                </div>

                <h2 className="mt-2 text-2xl md:text-[28px] font-medium tracking-tight text-[#0B0D12]">
                  Book A Shipment
                </h2>

                {/* 3-Step Interactive Stepper */}
                <div className="mt-5 pb-4 border-b border-[#E2E5EB] flex items-center justify-between gap-2">
                  {steps.map((s) => {
                    const isDone = step > s.num || submitted;
                    const isActive = step === s.num && !submitted;
                    return (
                      <button
                        key={s.num}
                        type="button"
                        onClick={() => {
                          setStep(s.num);
                          setSubmitted(false);
                        }}
                        className="inline-flex items-center gap-1.5 text-left cursor-pointer"
                      >
                        <span
                          className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-mono ${
                            isActive || isDone
                              ? 'bg-[#1434CB] text-white'
                              : 'border border-[#D1D5DB] text-[#6B7280]'
                          }`}
                        >
                          {isDone ? '✓' : s.num}
                        </span>
                        <span
                          className={`text-[11px] font-medium whitespace-nowrap ${
                            isActive || isDone ? 'text-[#0B0D12]' : 'text-[#6B7280]'
                          }`}
                        >
                          {s.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {submitted ? (
                  <div className="mt-6 rounded-xl border border-[#15803D]/30 bg-[#F0FDF4] p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#15803D] mt-0.5 shrink-0" strokeWidth={1.5} />
                      <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-[#15803D]">
                          BOOKING REQUEST RECEIVED
                        </p>
                        <h3 className="mt-1 text-lg font-medium text-[#0B0D12]">
                          Reference [SA-REQ-2026-TEMP]
                        </h3>
                        <p className="mt-2 text-sm text-[#4B5563]">
                          Thank you, {name}. Our Dar es Salaam operations desk has received your route details ({origin} → {destination}) and will respond within a few hours during business hours.
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setSubmitted(false);
                            setStep(1);
                          }}
                          className="mt-4 px-4 py-2 rounded-lg bg-[#0B0D12] text-white font-mono text-xs uppercase tracking-wider cursor-pointer"
                        >
                          Submit Another Request
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={validateAndSubmit} noValidate className="mt-5 space-y-4">
                    {/* Name */}
                    <div>
                      <label htmlFor={`${variant}-name`} className="sr-only">
                        Your Name
                      </label>
                      <input
                        id={`${variant}-name`}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name / Company"
                        className={`w-full border-b py-2.5 text-sm text-[#0B0D12] placeholder-[#6B7280] focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-[#DC2626]'
                            : 'border-[#E2E5EB] focus:border-[#1434CB]'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-[#DC2626] flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" strokeWidth={1.5} />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor={`${variant}-phone`} className="sr-only">
                          Phone
                        </label>
                        <input
                          id={`${variant}-phone`}
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone (+255 ...)"
                          className={`w-full border-b py-2.5 text-sm text-[#0B0D12] placeholder-[#6B7280] focus:outline-none ${
                            errors.phone
                              ? 'border-[#DC2626]'
                              : 'border-[#E2E5EB] focus:border-[#1434CB]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-[11px] text-[#DC2626]">{errors.phone}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor={`${variant}-email`} className="sr-only">
                          Email
                        </label>
                        <input
                          id={`${variant}-email`}
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          className={`w-full border-b py-2.5 text-sm text-[#0B0D12] placeholder-[#6B7280] focus:outline-none ${
                            errors.email
                              ? 'border-[#DC2626]'
                              : 'border-[#E2E5EB] focus:border-[#1434CB]'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-[11px] text-[#DC2626]">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Origin & Destination */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor={`${variant}-origin`} className="sr-only">
                          Origin City/Port
                        </label>
                        <input
                          id={`${variant}-origin`}
                          type="text"
                          value={origin}
                          onChange={(e) => setOrigin(e.target.value)}
                          placeholder="Origin City/Port"
                          className={`w-full border-b py-2.5 text-sm text-[#0B0D12] placeholder-[#6B7280] focus:outline-none ${
                            errors.origin
                              ? 'border-[#DC2626]'
                              : 'border-[#E2E5EB] focus:border-[#1434CB]'
                          }`}
                        />
                        {errors.origin && (
                          <p className="mt-1 text-[11px] text-[#DC2626]">{errors.origin}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor={`${variant}-dest`} className="sr-only">
                          Destination City/Port
                        </label>
                        <input
                          id={`${variant}-dest`}
                          type="text"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          placeholder="Destination City/Port"
                          className={`w-full border-b py-2.5 text-sm text-[#0B0D12] placeholder-[#6B7280] focus:outline-none ${
                            errors.destination
                              ? 'border-[#DC2626]'
                              : 'border-[#E2E5EB] focus:border-[#1434CB]'
                          }`}
                        />
                        {errors.destination && (
                          <p className="mt-1 text-[11px] text-[#DC2626]">{errors.destination}</p>
                        )}
                      </div>
                    </div>

                    {/* Cargo Type & Weight/CBM */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor={`${variant}-cargo`} className="sr-only">
                          Select Cargo Type
                        </label>
                        <select
                          id={`${variant}-cargo`}
                          value={cargoType}
                          onChange={(e) => {
                            setCargoType(e.target.value);
                            if (step < 2) setStep(2);
                          }}
                          className={`w-full border-b py-2.5 text-sm bg-white focus:outline-none ${
                            cargoType ? 'text-[#0B0D12]' : 'text-[#6B7280]'
                          } ${
                            errors.cargoType
                              ? 'border-[#DC2626]'
                              : 'border-[#E2E5EB] focus:border-[#1434CB]'
                          }`}
                        >
                          <option value="">Select Cargo Type</option>
                          <option value="ocean-fcl">Ocean Freight — FCL (20ft/40ft)</option>
                          <option value="ocean-lcl">Ocean Freight — Consolidated LCL</option>
                          <option value="air">Air Freight</option>
                          <option value="road">Cross-Border Road Freight</option>
                          <option value="customs">Customs Clearance Only (TANCIS)</option>
                          <option value="warehouse">Warehousing & 3PL</option>
                        </select>
                        {errors.cargoType && (
                          <p className="mt-1 text-[11px] text-[#DC2626]">{errors.cargoType}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor={`${variant}-weight`} className="sr-only">
                          Weight / CBM
                        </label>
                        <input
                          id={`${variant}-weight`}
                          type="text"
                          value={weightCbm}
                          onChange={(e) => setWeightCbm(e.target.value)}
                          placeholder="Weight (kg) / Volume (CBM)"
                          className="w-full border-b border-[#E2E5EB] py-2.5 text-sm text-[#0B0D12] placeholder-[#6B7280] focus:outline-none focus:border-[#1434CB]"
                        />
                      </div>
                    </div>

                    {/* Pickup Date & Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor={`${variant}-date`}
                          className="block font-mono text-[10px] uppercase tracking-wider text-[#6B7280]"
                        >
                          Pickup Date
                        </label>
                        <input
                          id={`${variant}-date`}
                          type="date"
                          value={pickupDate}
                          onChange={(e) => {
                            setPickupDate(e.target.value);
                            if (step < 2) setStep(2);
                          }}
                          className="w-full border-b border-[#E2E5EB] py-2 text-sm text-[#0B0D12] focus:outline-none focus:border-[#1434CB]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`${variant}-time`}
                          className="block font-mono text-[10px] uppercase tracking-wider text-[#6B7280]"
                        >
                          Pickup Time (EAT)
                        </label>
                        <select
                          id={`${variant}-time`}
                          value={pickupTime}
                          onChange={(e) => setPickupTime(e.target.value)}
                          className="w-full border-b border-[#E2E5EB] py-2 text-sm bg-white text-[#0B0D12] focus:outline-none focus:border-[#1434CB]"
                        >
                          <option value="">Select window</option>
                          <option value="morning">Morning (08:00 – 12:00 EAT)</option>
                          <option value="afternoon">Afternoon (12:00 – 16:00 EAT)</option>
                          <option value="late">Late Afternoon (16:00 – 18:00 EAT)</option>
                        </select>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div>
                      <label htmlFor={`${variant}-info`} className="sr-only">
                        Additional Information
                      </label>
                      <input
                        id={`${variant}-info`}
                        type="text"
                        value={additionalInfo}
                        onChange={(e) => setAdditionalInfo(e.target.value)}
                        placeholder="Additional Information (HS code, packaging, incoterms)"
                        className="w-full border-b border-[#E2E5EB] py-2.5 text-sm text-[#0B0D12] placeholder-[#6B7280] focus:outline-none focus:border-[#1434CB]"
                      />
                    </div>

                    {/* Privacy Checkbox */}
                    <div className="pt-2">
                      <label className="inline-flex items-center gap-2.5 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={agreed}
                          onChange={(e) => {
                            setAgreed(e.target.checked);
                            if (e.target.checked) setStep(3);
                          }}
                          className="w-4 h-4 accent-[#0B0D12] rounded"
                        />
                        <span className="text-xs text-[#4B5563]">
                          I agree to Sure Africa&apos;s Privacy Policy.
                        </span>
                      </label>
                      {errors.agreed && (
                        <p className="mt-1 text-[11px] text-[#DC2626]">{errors.agreed}</p>
                      )}
                    </div>

                    {/* Submit Button + Note */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-lg bg-[#0B0D12] text-white font-mono text-xs font-medium uppercase tracking-[0.1em] hover:bg-[#1434CB] active:translate-y-px transition-colors cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-white" aria-hidden="true" />
                        <span>SUBMIT</span>
                        <span>↳</span>
                      </button>
                      <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-wider text-[#6B7280]">
                        We respond within a few hours during business hours.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <GlobalFooter variant={variant} lang={lang} onNavigate={onNavigate} />
      {isMobile && <MobileWhatsAppFab onClick={() => onNavigate('contact')} />}
    </div>
  );
};
