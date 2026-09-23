import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

export default function Testimonials() {
  // Testimonials are rendered ONLY if real content is provided in business.js
  if (!business.testimonials || business.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section-padding bg-[#f2f6f3]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Homeowner Feedback"
          title="What local clients say"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {business.testimonials.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-[16px] bg-white border border-[rgba(18,24,21,0.08)] shadow-[0_2px_8px_rgba(18,24,21,0.04)] flex flex-col justify-between"
            >
              <blockquote className="text-base text-[#121815] italic leading-relaxed mb-6">
                “{item.quote}”
              </blockquote>
              <div className="pt-4 border-t border-[rgba(18,24,21,0.06)] flex items-center justify-between text-xs text-[#526058]">
                <span className="font-semibold text-[#121815]">{item.author}</span>
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
