import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { business } from '../config/business.js';

export default function Footer() {
  return (
    <footer className="bg-[#0f2c21] text-white border-t border-white/10 pt-16 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand & Purpose (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span
              className="text-2xl font-bold tracking-tight text-white block"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {business.name}
            </span>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-[45ch]">
              {business.footer.note}
            </p>
            <div className="text-xs uppercase tracking-widest text-[#86efac] font-medium pt-2">
              {business.tagline}
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-white/50 mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm text-white/80">
              {business.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-white/50 mb-4">
              Contact & Location
            </div>
            <div className="space-y-3 text-sm text-white/80">
              <a
                href={`tel:${business.phone}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#86efac] shrink-0" />
                <span>{business.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#86efac] shrink-0" />
                <span>{business.email}</span>
              </a>
              <div className="flex items-start gap-2.5 text-white/70">
                <MapPin className="w-4 h-4 text-[#86efac] shrink-0 mt-0.5" />
                <span>{business.fullAddress}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Quiet Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p className="mb-0">
            © {business.footer.copyrightYear} {business.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Domestic Electrical & EV Charging</span>
            <span>Lisburn, Northern Ireland</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
