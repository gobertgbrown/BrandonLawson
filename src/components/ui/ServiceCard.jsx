import React, { useState } from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';

export default function ServiceCard({
  service,
  index,
  onSelectService,
}) {
  const [imgError, setImgError] = useState(false);

  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <article className="group bg-white rounded-[16px] border border-[rgba(18,24,21,0.08)] overflow-hidden shadow-[0_2px_8px_rgba(18,24,21,0.04)] hover:shadow-[0_12px_28px_-6px_rgba(18,24,21,0.08)] transition-all duration-300 flex flex-col h-full">
      {/* Image container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#f2f6f3]">
        {!imgError ? (
          <img
            src={service.image}
            alt={service.alt || service.title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#ebf3ee] text-[#184332]">
            <Zap className="w-8 h-8 mb-2 opacity-60" />
            <span className="text-xs uppercase tracking-wider font-semibold opacity-70">
              {service.title}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          {/* Natural Editorial Numbering without pill badge */}
          <div className="flex items-center justify-between text-xs font-semibold text-[#526058] tracking-widest uppercase mb-3">
            <span>{formattedIndex}. Service</span>
            {service.featured && (
              <span className="text-[#2e7d58] font-medium tracking-normal capitalize">
                Specialist
              </span>
            )}
          </div>

          <h3 className="text-xl font-semibold text-[#121815] group-hover:text-[#184332] transition-colors duration-200">
            {service.title}
          </h3>

          <p className="mt-2.5 text-[15px] sm:text-base text-[#526058] leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-[rgba(18,24,21,0.06)] flex items-center justify-between">
          <a
            href="#contact"
            onClick={() => onSelectService && onSelectService(service.title)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#184332] hover:text-[#0f2c21] group/link"
          >
            <span>Enquire about this</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
