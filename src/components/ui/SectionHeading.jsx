import React from 'react';

/**
 * Consistent Section Heading adhering to the design constitution:
 * Small caps accent eyebrow -> H2 with text-wrap: balance -> optional subtext (max ~65ch).
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left', // 'left' | 'center'
  className = '',
  light = false,
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
  const descAlignClass = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`flex flex-col mb-12 md:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <span
          className={`eyebrow tracking-widest text-xs uppercase font-semibold mb-3 ${
            light ? 'text-[#86efac]' : 'text-[#2e7d58]'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-semibold tracking-tight text-3xl sm:text-4xl md:text-5xl ${
          light ? 'text-white' : 'text-[#121815]'
        }`}
        style={{ textWrap: 'balance' }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg max-w-[65ch] leading-relaxed ${descAlignClass} ${
            light ? 'text-[#d1d5db]' : 'text-[#526058]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
