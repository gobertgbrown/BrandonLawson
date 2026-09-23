import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-padding bg-[#fafcf9]">
      <div className="container-custom">
        <SectionHeading
          eyebrow={business.whyChooseUs.eyebrow}
          title={business.whyChooseUs.heading}
          description={business.whyChooseUs.subheading}
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {business.whyChooseUs.points.map((point, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-[16px] bg-white border border-[rgba(18,24,21,0.08)] shadow-[0_2px_8px_rgba(18,24,21,0.04)] hover:border-[#184332]/30 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="block text-2xl font-bold text-[#2e7d58] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {point.number}
                </span>
                <h3 className="text-lg font-semibold text-[#121815] mb-2">
                  {point.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#526058] leading-relaxed">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
