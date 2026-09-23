import React, { useState } from 'react';
import { ArrowDown, Phone, MessageSquare } from 'lucide-react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#0f2c21]">
      {/* Background Image with Tonal Overlay */}
      <div className="absolute inset-0 z-0">
        {!imgError ? (
          <img
            src={business.hero.image}
            alt={business.hero.imageAlt}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center"
            priority="true"
          />
        ) : (
          <div className="w-full h-full bg-[#184332]" />
        )}
        {/* Single Tonal Scrim for Uncompromising Contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0a1e16]/95 via-[#0f2c21]/85 to-[#0a1e16]/75"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#86efac] mb-4 sm:mb-6">
            {business.hero.eyebrow}
          </span>

          {/* Headline H1 */}
          <h1
            className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] mb-6 text-balance"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {business.hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-white/85 text-lg sm:text-xl leading-relaxed mb-8 max-w-[62ch]">
            {business.hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Button
              href="#contact"
              variant="white"
              size="lg"
              className="text-[#0f2c21] font-semibold"
            >
              {business.ctas.primary}
            </Button>
            <Button
              href="#services"
              variant="outline"
              size="lg"
              className="!border-white/30 !text-white hover:!bg-white/10 hover:!border-white/60"
            >
              {business.ctas.secondary}
            </Button>
            <a
              href={`https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-[8px] bg-[#25D366]/20 hover:bg-[#25D366]/30 text-white border border-[#25D366]/30 text-sm font-medium transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#4ade80]" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Quiet Trust Line */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#86efac] animate-pulse" />
              <span>Available for Lisburn & Surrounding Areas</span>
            </div>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>40 Crescent Business Park, BT28 2GN</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
