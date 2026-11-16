import React, { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { Language, PageId, ViewportVariant } from '../types';
import { MonoLabel } from '../components/BrandMark';
import { FloatingNavbar, GlobalFooter, MobileWhatsAppFab } from '../components/GlobalChrome';

interface PageProps {
  variant: ViewportVariant;
  lang: Language;
  onToggleLang: (lang: Language) => void;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<PageProps> = ({
  variant,
  lang,
  onToggleLang,
  onNavigate,
}) => {
  const isMobile = variant === 'mobile';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Freight Enquiry');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.includes('@') || !message.trim()) {
      setError('Please complete your name, a valid email address, and your enquiry message.');
      return;
    }
    setError('');
    setSent(true);
  };

  return (
    <div className="bg-white text-[#0B0D12] font-sans relative">
      {/* HEADER */}
      <div className="bg-[#F4F5F7] border-b border-[#E2E5EB]">
        <FloatingNavbar
          variant={variant}
          lang={lang}
          onToggleLang={onToggleLang}
          activePage="contact"
          onNavigate={onNavigate}
        />

        <div className={isMobile ? 'px-4 pt-8 pb-8' : 'px-12 pt-12 pb-10'}>
          <MonoLabel>CONTACT DAR ES SALAAM DESK</MonoLabel>
          <h1
            className={`mt-3 font-medium tracking-[-0.025em] text-[#0B0D12] ${
              isMobile ? 'text-[30px]' : 'text-[48px]'
            }`}
          >
            Speak directly with our <span className="text-[#1434CB]">operations</span> team
          </h1>
          <p className="mt-3 text-sm md:text-base text-[#4B5563] max-w-2xl">
            Reach our Dar es Salaam office for customs clearance support, LCL consolidation schedules, or cross-border road enquiries.
          </p>
        </div>
      </div>

      {/* MAP PLACEHOLDER + OFFICE CARD + CONTACT FORM */}
      <section className={isMobile ? 'px-4 py-8' : 'px-12 py-12'}>
        <div
          className={`grid ${
            isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-12 gap-8 items-start'
          }`}
        >
          {/* Left: Map Placeholder + Office Details Card */}
          <div className={`${isMobile ? '' : 'col-span-6'} space-y-5`}>
            {/* Map Placeholder */}
            <div className="rounded-xl border border-[#E2E5EB] bg-[#F4F5F7] overflow-hidden">
              <div className="px-4 py-2.5 border-b border-[#E2E5EB] bg-white flex items-center justify-between">
                <MonoLabel>DAR ES SALAAM LOCATION MAP</MonoLabel>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#6B7280]">
                  [Map Placeholder]
                </span>
              </div>
              <div className="relative h-56 md:h-64 bg-[#EAECEF] flex items-center justify-center p-6">
                {/* Clean Architectural Grid Vector Map Placeholder */}
                <svg
                  viewBox="0 0 480 220"
                  className="absolute inset-0 w-full h-full opacity-60"
                  aria-hidden="true"
                >
                  <path d="M0 55 H480 M0 110 H480 M0 165 H480" stroke="#D1D5DB" strokeWidth="1" />
                  <path d="M80 0 V220 M180 0 V220 M280 0 V220 M380 0 V220" stroke="#D1D5DB" strokeWidth="1" />
                  <path d="M350 0 C330 70, 360 150, 390 220 L480 220 L480 0 Z" fill="#DBEAFE" />
                  <path d="M40 180 Q 170 120 345 105" stroke="#1434CB" strokeWidth="2" strokeDasharray="5 4" fill="none" />
                </svg>

                <div className="relative z-10 bg-white border border-[#0B0D12] rounded-xl px-4 py-3 shadow-sm flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1434CB] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#1434CB]">
                      DAR ES SALAAM PORT CORRIDOR
                    </p>
                    <p className="text-xs font-medium text-[#0B0D12]">
                      [Office Address Placeholder — Map Embed Slot]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Card */}
            <div className="rounded-xl border border-[#E2E5EB] bg-white p-6 space-y-4">
              <div>
                <MonoLabel tone="cobalt">HEAD OFFICE · TANZANIA</MonoLabel>
                <h2 className="mt-2 text-lg font-medium text-[#0B0D12]">
                  Sure Africa Group (Tanzania) Limited
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#E2E5EB]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#1434CB] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#6B7280]">
                      Address
                    </p>
                    <p className="text-sm text-[#0B0D12] mt-0.5">
                      [Plot / Building Placeholder]
                      <br />
                      Dar es Salaam, Tanzania
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#1434CB] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#6B7280]">
                      Operating Hours
                    </p>
                    <p className="text-sm text-[#0B0D12] mt-0.5 tabular-nums">
                      Mon–Sat, 08:00–18:00 EAT
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#1434CB] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#6B7280]">
                      Phone
                    </p>
                    <p className="text-sm text-[#0B0D12] mt-0.5 tabular-nums">
                      [+255 XXX XXX XXX]
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-[#1434CB] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#6B7280]">
                      WhatsApp Desk
                    </p>
                    <p className="text-sm text-[#0B0D12] mt-0.5 tabular-nums">
                      [+255 XXX XXX XXX]
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:col-span-2">
                  <Mail className="w-4 h-4 text-[#1434CB] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#6B7280]">
                      Email
                    </p>
                    <p className="text-sm text-[#0B0D12] mt-0.5">
                      [info@sureafrica.co.tz]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className={isMobile ? '' : 'col-span-6'}>
            <div className="rounded-xl border border-[#E2E5EB] bg-[#F4F5F7] p-6 md:p-8">
              <MonoLabel>SEND A MESSAGE</MonoLabel>
              <h2 className="mt-2 text-2xl font-medium text-[#0B0D12]">
                Enquiry Form
              </h2>
              <p className="mt-1.5 text-sm text-[#4B5563]">
                For urgent shipment quotes, use our{' '}
                <button
                  type="button"
                  onClick={() => onNavigate('book')}
                  className="text-[#1434CB] underline cursor-pointer"
                >
                  Book a Shipment
                </button>{' '}
                form.
              </p>

              {sent ? (
                <div className="mt-6 rounded-xl border border-[#15803D]/30 bg-white p-6">
                  <CheckCircle2 className="w-6 h-6 text-[#15803D]" strokeWidth={1.5} />
                  <h3 className="mt-3 text-lg font-medium text-[#0B0D12]">
                    Message Received
                  </h3>
                  <p className="mt-1.5 text-sm text-[#4B5563]">
                    Thank you, {name}. Our Dar es Salaam team will reply to {email} during business hours (Mon–Sat, 08:00–18:00 EAT).
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setMessage('');
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-[#0B0D12] text-white font-mono text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor={`${variant}-contact-name`}
                      className="block font-mono text-[10px] uppercase tracking-wider text-[#4B5563] mb-1.5"
                    >
                      Full Name / Company
                    </label>
                    <input
                      id={`${variant}-contact-name`}
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name or business"
                      className="w-full rounded-lg border border-[#D1D5DB] bg-white px-3.5 py-2.5 text-sm text-[#0B0D12] focus:outline-none focus:border-[#1434CB]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor={`${variant}-contact-email`}
                      className="block font-mono text-[10px] uppercase tracking-wider text-[#4B5563] mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id={`${variant}-contact-email`}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.co.tz"
                      className="w-full rounded-lg border border-[#D1D5DB] bg-white px-3.5 py-2.5 text-sm text-[#0B0D12] focus:outline-none focus:border-[#1434CB]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor={`${variant}-contact-subject`}
                      className="block font-mono text-[10px] uppercase tracking-wider text-[#4B5563] mb-1.5"
                    >
                      Enquiry Topic
                    </label>
                    <select
                      id={`${variant}-contact-subject`}
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full rounded-lg border border-[#D1D5DB] bg-white px-3.5 py-2.5 text-sm text-[#0B0D12] focus:outline-none focus:border-[#1434CB]"
                    >
                      <option>General Freight Enquiry</option>
                      <option>LCL Consolidation (UAE / China / India)</option>
                      <option>Customs Clearance (TRA / TANCIS)</option>
                      <option>Warehousing & Distribution</option>
                      <option>Regional Corridor Transit</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor={`${variant}-contact-msg`}
                      className="block font-mono text-[10px] uppercase tracking-wider text-[#4B5563] mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id={`${variant}-contact-msg`}
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can our team assist with your cargo?"
                      className="w-full rounded-lg border border-[#D1D5DB] bg-white px-3.5 py-2.5 text-sm text-[#0B0D12] focus:outline-none focus:border-[#1434CB]"
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-[#DC2626]" role="alert">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#0B0D12] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#1434CB] transition-colors cursor-pointer"
                  >
                    ■ SEND ENQUIRY ↳
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <GlobalFooter variant={variant} lang={lang} onNavigate={onNavigate} />
      {isMobile && <MobileWhatsAppFab onClick={() => onNavigate('book')} />}
    </div>
  );
};
