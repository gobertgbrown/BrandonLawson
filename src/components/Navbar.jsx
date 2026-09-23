import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-[#0f2c21] text-white border-b ${
        scrolled ? 'border-white/15 shadow-lg' : 'border-white/10'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-[#86efac] transition-colors whitespace-nowrap"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {business.name}
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/85">
            {business.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#86efac]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#86efac]" />
              <span>{business.phoneDisplay}</span>
            </a>
            <Button
              href="#contact"
              variant="white"
              size="sm"
              className="font-semibold text-xs tracking-wide uppercase !py-2.5 !px-5"
            >
              {business.ctas.primary}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href={`tel:${business.phone}`}
              aria-label="Call now"
              className="p-2 text-white/90 hover:text-white rounded-[8px] bg-white/10"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-white rounded-[8px] bg-white/10 hover:bg-white/20 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a1e16] border-b border-white/15 px-6 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-3">
            {business.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-base font-medium text-white/90 hover:text-white py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-4 flex flex-col gap-3">
            <a
              href={`tel:${business.phone}`}
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-[8px] bg-white/10 text-white font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-[#86efac]" />
              <span>Call {business.phoneDisplay}</span>
            </a>
            <Button
              href="#contact"
              variant="white"
              size="md"
              onClick={closeMenu}
              className="w-full text-center font-semibold"
            >
              {business.ctas.primary}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
