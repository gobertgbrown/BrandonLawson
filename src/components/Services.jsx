import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import ServiceCard from './ui/ServiceCard.jsx';

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="section-padding bg-[#fafcf9]">
      <div className="container-custom">
        <SectionHeading
          eyebrow={business.servicesEyebrow}
          title={business.servicesHeading}
          description={business.servicesIntro}
          align="left"
        />

        {/* 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {business.services.map((service, index) => (
            <ServiceCard
              key={service.id || index}
              service={service}
              index={index}
              onSelectService={onSelectService}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
