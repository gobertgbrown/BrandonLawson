/**
 * Central configuration for Brandon Lawson
 * Domestic Electrical Services & Electric Vehicle Charging Stations
 * 
 * Non-technical owner notice:
 * Every piece of business text, color, contact detail, service,
 * and image URL is configured in this single file.
 */

import heroImage from '../assets/images/hero_ev_domestic_charger_1790147926798.jpg';
import evChargingImage from '../assets/images/service_ev_charging_1790147946157.jpg';
import fuseboardImage from '../assets/images/service_fuseboard_upgrade_1790147963262.jpg';
import lightingImage from '../assets/images/service_domestic_lighting_1790147980569.jpg';
import emergencyRepairsImage from '../assets/images/service_emergency_repairs_1790148412818.jpg';
import rewiringImage from '../assets/images/service_rewiring_1790148428701.jpg';
import testingInspectionImage from '../assets/images/service_testing_inspection_1790148445294.jpg';
import socketsSwitchesImage from '../assets/images/service_sockets_switches_1790148461411.jpg';

export const business = {
  // Identity & Core Information
  name: "Brandon Lawson",
  shortName: "Brandon Lawson",
  businessType: "Electric vehicle charging station",
  tagline: "Domestic Electrical Services",
  brandStyle: "Domestic Electrical Services",
  city: "Lisburn, Northern Ireland",
  serviceArea: "Lisburn & surrounding Northern Ireland areas",
  fullAddress: "40 Crescent Business Park, Lisburn, Northern Ireland, BT28 2GN",
  
  // Contact Details
  phone: "+447846466201",
  phoneDisplay: "07846 466201",
  whatsapp: "+447846466201",
  email: "info@BrandonLawson.com",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=40+Crescent+Business+Park,+Lisburn,+BT28+2GN",

  // Theme Colors
  colors: {
    primary: "#184332",       // Deep forest green
    primaryDark: "#0F2C21",   // Dark evergreen ink
    primaryLight: "#255D46",
    accent: "#2E7D58",        // Refined botanical accent
    secondary: "#24332C",     // Warm charcoal slate
    background: "#FAFCF9",    // Soft clean canvas
    backgroundAlt: "#F2F6F3", // Gentle contrast container
    text: "#121815",          // Near-black ink
    textMuted: "#526058",     // Balanced secondary text
  },

  // Navigation Links
  navigation: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  // Call to Actions
  ctas: {
    primary: "Request a Quote",
    secondary: "View Services",
    callNow: "Call 07846 466201",
    whatsappAction: "Message on WhatsApp",
    emailAction: "Send an Email",
    directions: "Get Directions",
  },

  // Hero Section
  hero: {
    eyebrow: "Lisburn, Northern Ireland · Domestic Electrical Services",
    headline: "Reliable Domestic Electrical & EV Charging Installations",
    subheadline: "Based at Crescent Business Park, providing professional domestic electrical repairs, certified fuse board upgrades, and dedicated home EV charger installations across Lisburn.",
    trustItem: "Local, fully insured electrician serving homeowners throughout Lisburn and surrounding communities.",
    image: heroImage,
    imageAlt: "Domestic EV charging point installed on home exterior in Lisburn",
  },

  // About Section
  about: {
    eyebrow: "About Brandon Lawson",
    heading: "Practical electrical solutions for your home",
    descriptionParagraphs: [
      "Operating from 40 Crescent Business Park in Lisburn, Brandon Lawson delivers domestic electrical services focused on safety, neat workmanship, and clear communication.",
      "Whether you are preparing your home for an electric vehicle with a dedicated wallbox charging point, resolving an electrical fault, or upgrading an aging fuse board, each project is carried out with meticulous care and compliance with current standards.",
      "Homeowners across Lisburn and neighboring areas rely on a straightforward, local service where you deal directly with the tradesperson doing the work."
    ],
    highlights: [
      "Based locally at Crescent Business Park, Lisburn",
      "Specialist domestic EV charger installations",
      "Comprehensive fault finding and testing",
      "Clear, upfront quotes with zero pressure"
    ],
    image: lightingImage,
    imageAlt: "Professional domestic lighting and electrical work in a modern home",
  },

  // Services
  servicesEyebrow: "Core Services",
  servicesHeading: "Domestic electrical and EV charging solutions",
  servicesIntro: "All domestic electrical work is completed to current wiring standards, ensuring your home electrical system is safe, efficient, and built for modern demands.",
  
  services: [
    {
      id: "ev-charging",
      title: "Electric Vehicle Charging Installation",
      description: "Dedicated home EV charging station installations tailored to your property's electrical capacity for safe, fast domestic charging.",
      image: evChargingImage,
      alt: "Home EV wallbox charging point installation",
      featured: true,
    },
    {
      id: "emergency-repairs",
      title: "Emergency Electrical Repairs",
      description: "Prompt troubleshooting and repairs for power outages, tripped circuits, and urgent domestic electrical faults.",
      image: emergencyRepairsImage,
      alt: "Electrician carrying out diagnostic testing",
      featured: false,
    },
    {
      id: "fault-finding",
      title: "Electrical Fault Finding",
      description: "Thorough diagnostic testing to pinpoint hidden wiring faults, nuisance tripping, and intermittent electrical issues.",
      image: testingInspectionImage,
      alt: "Electrical diagnostic equipment and testing",
      featured: false,
    },
    {
      id: "fuse-board",
      title: "Fuse Board Upgrades",
      description: "Modern consumer unit replacements equipped with sensitive RCD protection and surge protection for enhanced household safety.",
      image: fuseboardImage,
      alt: "Modern domestic consumer unit fuse board installation",
      featured: true,
    },
    {
      id: "rewiring",
      title: "Rewiring Services",
      description: "Full and partial domestic rewires for property renovations, aging installations, or home extensions.",
      image: rewiringImage,
      alt: "Neat domestic wiring and cable routing",
      featured: false,
    },
    {
      id: "lighting",
      title: "Lighting Installation (Indoor & Outdoor)",
      description: "Energy-efficient LED downlights, architectural mood lighting, security sensors, and garden illumination.",
      image: lightingImage,
      alt: "Contemporary home lighting installation",
      featured: false,
    },
    {
      id: "sockets-switches",
      title: "Socket & Switch Installation",
      description: "Adding new power points, USB-integrated sockets, cooker connections, and updating switch faceplates.",
      image: socketsSwitchesImage,
      alt: "Modern switches and sockets installation",
      featured: false,
    },
    {
      id: "testing-inspection",
      title: "Electrical Testing & Inspection",
      description: "Thorough electrical condition checks, safety reports, and verification for landlords and homeowners.",
      image: testingInspectionImage,
      alt: "Electrical testing meter and inspection checklist",
      featured: false,
    },
    {
      id: "smoke-alarms",
      title: "Smoke Alarm Installation",
      description: "Mains-powered, interconnected smoke, heat, and carbon monoxide alarm installations complying with safety regulations.",
      image: emergencyRepairsImage,
      alt: "Interlinked domestic smoke alarm safety system",
      featured: false,
    }
  ],

  // Why Choose Us
  whyChooseUs: {
    eyebrow: "Why Choose Us",
    heading: "Dependable electrical craft in Lisburn",
    subheading: "Simple, honest service built on local accountability and attention to detail.",
    points: [
      {
        number: "01",
        title: "Local to Lisburn",
        text: "Based right at Crescent Business Park, ensuring fast response times and dependable local accountability."
      },
      {
        number: "02",
        title: "Domestic & EV Focus",
        text: "Specialized in home installations, from electric car chargers to fuse boards, keeping your home running smoothly."
      },
      {
        number: "03",
        title: "Clean, Tidy Workmanship",
        text: "We treat your home with care, using dust extraction where appropriate and leaving work areas clean and neat."
      },
      {
        number: "04",
        title: "Direct Owner Contact",
        text: "You discuss your job directly with Brandon, ensuring clear guidance, realistic timelines, and transparent pricing."
      }
    ]
  },

  // Testimonials (Omitted if empty, rendered only if testimonials exist)
  testimonials: [],

  // FAQ Section
  faq: {
    eyebrow: "Frequently Asked Questions",
    heading: "Common questions about home electrical and EV chargers",
    questions: [
      {
        question: "Can an EV charging station be installed on my home's electrical supply?",
        answer: "In most cases, yes. Standard domestic homes in Northern Ireland typically support a dedicated 7.4kW single-phase home charger. We assess your incoming supply, main fuse, and consumer unit to ensure the installation is safe and compliant before proceeding."
      },
      {
        question: "What is involved in a fuse board upgrade?",
        answer: "A fuse board upgrade replaces an outdated consumer unit with a modern board containing Residual Current Devices (RCDs) and Surge Protection Devices (SPDs). We test all connected circuits before and after the replacement to verify full safety."
      },
      {
        question: "Do you offer emergency callouts for sudden power loss or tripped circuits?",
        answer: "Yes, we handle emergency electrical repairs and fault finding across Lisburn. Call 07846 466201 directly for immediate advice and fast dispatch."
      },
      {
        question: "How do I get a quote for my electrical work?",
        answer: "Simply get in touch via phone, WhatsApp, email, or our contact form. For straightforward jobs, we can often provide an estimate with photos; for larger projects or EV installations, we arrange a site visit to assess your setup."
      }
    ]
  },

  // Contact Details
  contact: {
    eyebrow: "Get In Touch",
    heading: "Speak with Brandon about your electrical project",
    intro: "Whether you need a dedicated EV charger, an urgent repair, or advice on upgrading your home's wiring, get in touch today.",
    openingHours: [
      { days: "Monday – Sunday", hours: "07:00 AM – 10:30 PM" }
    ],
    formNotice: "Messages sent through this form receive a response within 24 business hours.",
  },

  // Footer Information
  footer: {
    note: "Professional domestic electrical contractor & EV charging station installations serving Lisburn, Northern Ireland, and surrounding districts.",
    copyrightYear: 2026,
  }
};
