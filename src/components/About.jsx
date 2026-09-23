import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section-padding bg-[#f2f6f3] border-y border-[rgba(18,24,21,0.06)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-[16px] overflow-hidden shadow-[0_12px_28px_-6px_rgba(18,24,21,0.08)] bg-white border border-[rgba(18,24,21,0.08)]">
                {!imgError ? (
                  <img
                    src={business.about.image}
                    alt={business.about.imageAlt}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-[#184332] flex items-center justify-center p-8 text-white">
                    <span className="text-sm font-medium opacity-80">{business.name}</span>
                  </div>
                )}
              </div>

              {/* Quiet Architectural Location Card */}
              <div className="mt-4 p-4 rounded-[12px] bg-white border border-[rgba(18,24,21,0.08)] shadow-sm flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2e7d58] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-semibold text-[#121815]">Workshop & Base</div>
                  <div className="text-[#526058]">{business.fullAddress}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Copywriting Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <span className="eyebrow tracking-widest text-xs uppercase font-semibold text-[#2e7d58] mb-3">
              {business.about.eyebrow}
            </span>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#121815] mb-6"
              style={{ textWrap: 'balance' }}
            >
              {business.about.heading}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#526058] leading-relaxed mb-8">
              {business.about.descriptionParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Quiet Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {business.about.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm sm:text-base font-medium text-[#121815]">
                  <CheckCircle2 className="w-5 h-5 text-[#2e7d58] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="#contact" variant="primary" size="md">
                {business.ctas.primary}
              </Button>
              <Button href={`tel:${business.phone}`} variant="outline" size="md">
                {business.ctas.callNow}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
