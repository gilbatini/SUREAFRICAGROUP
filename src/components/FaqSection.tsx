import React, { useState } from 'react';
import { Check, Minus, Plus } from 'lucide-react';
import { FAQS, IMPORT_DOCUMENTS } from '../data/content';
import { Language, ViewportVariant } from '../types';
import { MonoLabel } from './BrandMark';

interface FaqSectionProps {
  variant: ViewportVariant;
  lang: Language;
  /** Show the import documents checklist beside the questions. */
  showDocuments?: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ variant, lang, showDocuments = false }) => {
  const isMobile = variant === 'mobile';
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = FAQS[lang];

  return (
    <section
      aria-labelledby="faq-heading"
      className={`border-b border-[#E2E5EB] ${isMobile ? 'px-4 py-10' : 'px-12 py-16'}`}
    >
      <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-12 gap-10'}`}>
        <div className={isMobile ? '' : 'col-span-4'}>
          <MonoLabel>{lang === 'sw' ? 'MASWALI YANAYOULIZWA' : 'FAQ'}</MonoLabel>
          <h2
            id="faq-heading"
            className={`mt-3 font-medium tracking-tight text-[#0B0D12] ${
              isMobile ? 'text-2xl' : 'text-[34px] leading-[1.15]'
            }`}
          >
            {lang === 'sw' ? 'Maswali kuhusu kusafirisha nasi' : 'Questions about shipping with us'}
          </h2>
          <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">
            {lang === 'sw'
              ? 'Majibu ya jumla. Timu yetu inathibitisha mahitaji ya mzigo wako mahususi.'
              : 'General answers. Our team confirms the exact requirements for your cargo.'}
          </p>

          {showDocuments && (
            <div className="mt-6 rounded-xl border border-[#E2E5EB] bg-[#F4F5F7] p-5">
              <MonoLabel tone="cobalt">
                {lang === 'sw' ? 'NYARAKA ZA KUINGIZA MIZIGO' : 'IMPORT DOCUMENTS CHECKLIST'}
              </MonoLabel>
              <ul className="mt-3 space-y-2">
                {IMPORT_DOCUMENTS.map((doc) => (
                  <li key={doc} className="flex items-start gap-2 text-[13px] text-[#0B0D12]">
                    <Check className="w-3.5 h-3.5 mt-0.5 text-[#1434CB] shrink-0" strokeWidth={2} />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className={`${isMobile ? '' : 'col-span-8'} border-t border-[#E2E5EB]`}>
          {faqs.map((item, i) => {
            const open = openIndex === i;
            const id = `faq-${i}`;
            return (
              <div key={item.q} className="border-b border-[#E2E5EB]">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={id}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-4 text-left cursor-pointer group"
                  >
                    <span
                      className={`text-[15px] font-medium ${
                        open ? 'text-[#1434CB]' : 'text-[#0B0D12] group-hover:text-[#1434CB]'
                      }`}
                    >
                      {item.q}
                    </span>
                    {open ? (
                      <Minus className="w-4 h-4 shrink-0 text-[#1434CB]" strokeWidth={1.5} />
                    ) : (
                      <Plus className="w-4 h-4 shrink-0 text-[#4B5563]" strokeWidth={1.5} />
                    )}
                  </button>
                </h3>
                {open && (
                  <p id={id} className="pb-5 pr-8 text-sm text-[#4B5563] leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
