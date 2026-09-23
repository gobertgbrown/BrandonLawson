import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import SectionHeading from './ui/SectionHeading.jsx';

export default function Contact({ selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: selectedService || 'Electric Vehicle Charging Installation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Update service if prop changes
  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate instantaneous client-side submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section id="contact" className="section-padding bg-[#fafcf9]">
      <div className="container-custom">
        <SectionHeading
          eyebrow={business.contact.eyebrow}
          title={business.contact.heading}
          description={business.contact.intro}
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Details & Direct Actions (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Direct Communication Cards */}
              <div className="space-y-3">
                {/* Phone Call */}
                <a
                  href={`tel:${business.phone}`}
                  className="flex items-center gap-4 p-5 rounded-[12px] bg-white border border-[rgba(18,24,21,0.08)] shadow-sm hover:border-[#184332] hover:shadow transition-all group"
                >
                  <div className="w-12 h-12 rounded-[8px] bg-[#ebf3ee] text-[#184332] flex items-center justify-center shrink-0 group-hover:bg-[#184332] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-[#526058]">
                      Phone
                    </div>
                    <div className="text-lg font-bold text-[#121815]">
                      {business.phoneDisplay}
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                {business.whatsapp && (
                  <a
                    href={`https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-[12px] bg-white border border-[rgba(18,24,21,0.08)] shadow-sm hover:border-[#25D366] hover:shadow transition-all group"
                  >
                    <div className="w-12 h-12 rounded-[8px] bg-[#dcfce7] text-[#16a34a] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider font-semibold text-[#526058]">
                        WhatsApp
                      </div>
                      <div className="text-lg font-bold text-[#121815]">
                        Message Directly
                      </div>
                    </div>
                  </a>
                )}

                {/* Email */}
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-4 p-5 rounded-[12px] bg-white border border-[rgba(18,24,21,0.08)] shadow-sm hover:border-[#184332] hover:shadow transition-all group"
                >
                  <div className="w-12 h-12 rounded-[8px] bg-[#ebf3ee] text-[#184332] flex items-center justify-center shrink-0 group-hover:bg-[#184332] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-[#526058]">
                      Email
                    </div>
                    <div className="text-base sm:text-lg font-semibold text-[#121815] break-all">
                      {business.email}
                    </div>
                  </div>
                </a>
              </div>

              {/* Address & Directions */}
              <div className="p-6 rounded-[16px] bg-[#f2f6f3] border border-[rgba(18,24,21,0.06)]">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-[#2e7d58] shrink-0 mt-1" />
                  <div>
                    <div className="text-sm font-bold text-[#121815] uppercase tracking-wide mb-1">
                      Location & Workshop
                    </div>
                    <p className="text-sm text-[#526058] leading-relaxed mb-0">
                      {business.fullAddress}
                    </p>
                  </div>
                </div>
                <Button
                  href={business.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                  className="w-full text-xs font-semibold tracking-wide uppercase mt-2 bg-white"
                >
                  {business.ctas.directions}
                </Button>
              </div>

              {/* Opening Hours */}
              {business.contact.openingHours && (
                <div className="p-6 rounded-[16px] bg-white border border-[rgba(18,24,21,0.08)] shadow-sm">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#526058] mb-3">
                    <Clock className="w-4 h-4 text-[#2e7d58]" />
                    <span>Operating Hours</span>
                  </div>
                  <div className="space-y-2 text-sm text-[#121815]">
                    {business.contact.openingHours.map((schedule, idx) => (
                      <div key={idx} className="flex justify-between items-center py-1 border-b border-[rgba(18,24,21,0.04)] last:border-0">
                        <span className="text-[#526058]">{schedule.days}</span>
                        <span className="font-medium text-right">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Styled Usable Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[16px] bg-white border border-[rgba(18,24,21,0.08)] shadow-[0_2px_8px_rgba(18,24,21,0.04)]">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#ebf3ee] text-[#184332] flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#121815] mb-2">
                    Enquiry Received
                  </h3>
                  <p className="text-base text-[#526058] max-w-[45ch] mb-6">
                    Thank you, {formData.name || 'there'}. Brandon will review your details and respond shortly to discuss your electrical project.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        service: 'Electric Vehicle Charging Installation',
                        message: '',
                      });
                    }}
                    variant="outline"
                    size="sm"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-[rgba(18,24,21,0.06)] pb-4">
                    <h3 className="text-xl font-bold text-[#121815] mb-1">
                      Request a Consultation or Quote
                    </h3>
                    <p className="text-sm text-[#526058] mb-0">
                      {business.contact.formNotice}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#121815] mb-2">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Henderson"
                        className="w-full px-4 py-3 rounded-[8px] border border-[rgba(18,24,21,0.15)] bg-[#fafcf9] text-[#121815] placeholder:text-[#9ca3af] focus:bg-white text-base transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#121815] mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 07800 123456"
                        className="w-full px-4 py-3 rounded-[8px] border border-[rgba(18,24,21,0.15)] bg-[#fafcf9] text-[#121815] placeholder:text-[#9ca3af] focus:bg-white text-base transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#121815] mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                        className="w-full px-4 py-3 rounded-[8px] border border-[rgba(18,24,21,0.15)] bg-[#fafcf9] text-[#121815] placeholder:text-[#9ca3af] focus:bg-white text-base transition-colors"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-[#121815] mb-2">
                        Required Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-[8px] border border-[rgba(18,24,21,0.15)] bg-[#fafcf9] text-[#121815] focus:bg-white text-base transition-colors"
                      >
                        {business.services.map((svc) => (
                          <option key={svc.id} value={svc.title}>
                            {svc.title}
                          </option>
                        ))}
                        <option value="General Enquiry">Other Domestic Enquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#121815] mb-2">
                      Project Details or Questions *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please mention your address or location in Lisburn, property type, and what electrical work you require..."
                      className="w-full px-4 py-3 rounded-[8px] border border-[rgba(18,24,21,0.15)] bg-[#fafcf9] text-[#121815] placeholder:text-[#9ca3af] focus:bg-white text-base transition-colors resize-y"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={loading}
                    className="w-full sm:w-auto font-semibold"
                    icon={Send}
                    iconPosition="right"
                  >
                    {loading ? 'Submitting...' : 'Submit Request'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
