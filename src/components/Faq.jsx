import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  if (!business.faq || !business.faq.questions || business.faq.questions.length === 0) {
    return null;
  }

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section-padding bg-[#f2f6f3] border-t border-[rgba(18,24,21,0.06)]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow={business.faq.eyebrow}
            title={business.faq.heading}
            align="center"
          />

          <div className="space-y-4">
            {business.faq.questions.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-[16px] bg-white border border-[rgba(18,24,21,0.08)] overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleQuestion(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-semibold text-[#121815]">
                      {item.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full bg-[#ebf3ee] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#184332] text-white' : 'text-[#184332]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-[#526058] text-[15px] sm:text-base leading-relaxed border-t border-[rgba(18,24,21,0.04)]">
                      <p className="mb-0">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
