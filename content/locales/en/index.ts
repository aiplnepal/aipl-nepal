import { home } from './home';
import { about } from './about';
import { products } from './products';
import { quality } from './quality';
import { resources } from './resources';
import { career } from './career';
import { contact } from './contact';
import { seo } from './seo';

export default {
  common: {
    languageOptions: {
      en: 'English',
      ne: 'नेपाली',
    },
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      quality: 'Quality & Impact',
      resources: 'Resources',
      career: 'Career',
      contact: 'Contact',
    },
    footer: {
      description: 'Agricultural Investment Pvt. Ltd. (AIPL) is a leading agricultural company in Nepal, committed to farmer empowerment and sustainable agricultural development through modern, biological farming solutions.',
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      rights: 'All Rights Reserved.',
    },
    buttons: {
      learnMore: 'Learn More',
      viewAll: 'View All',
      viewAllProducts: 'View All Products',
      submit: 'Submit',
      readMore: 'Read More',
    },
    productLayout: {
      breadcrumbHome: 'Home',
      breadcrumbProducts: 'Products',
      badge: 'Product Detail',
      makeEnquiry: 'Make a Product Enquiry',
      exploreAll: 'Explore All Products',
      biologicalFormulation: 'AIPL Biological Formulation',
      overview: 'Overview',
      agriculturalPurpose: 'Agricultural Purpose',
      intendedOutcomes: 'Intended Outcomes',
      applicationInformation: 'Application Information',
      applicationGuidance: 'Application guidance is provided according to crop type, product formulation, and specific field conditions. For exact dosage instructions, dilution ratios, and optimal application timing, please consult with an AIPL agricultural expert or refer to the official product packaging.',
      safetyNote: 'Safety & Verification Note',
      biologicalComposition: 'Biological Composition',
      integratedSystem: 'AIPL Integrated System',
      systemDescription: 'Our products are designed to work together within the AIPL ecosystem. Integrating this solution with our complete range of biological treatments can maximize soil health, plant resilience, and overall agricultural productivity.',
      relatedProducts: 'Related Biological Solutions',
      viewDetails: 'View Details',
      bestFor: 'Best For',
      aiplApproach: 'The AIPL Approach',
      approachDescription: 'Our products are part of a broader commitment to sustainable agriculture, combining indigenous resources with advanced technology.',
      learnImpact: 'Learn about our impact',
      relatedSolutions: 'Related Agricultural Solutions',
      viewProduct: 'View Product',
    },
    productCard: {
      badge: 'Agricultural Input',
      activeComponents: 'Active Components',
      more: 'more',
      viewProfile: 'View Scientific Profile'
    },
    locationSelector: {
      province: 'Province',
      selectProvince: 'Select province',
      district: 'District',
      selectProvinceFirst: 'Select province first',
      selectDistrict: 'Select district',
      localLevel: 'Local Level',
      selectDistrictFirst: 'Select district first',
      selectLocalLevel: 'Select local level',
      ward: 'Ward',
      selectLocalLevelFirst: 'Select local level first',
      selectWard: 'Select ward',
      wardPrefix: 'Ward '
    }
  },
  home,
  about,
  products,
  quality,
  resources,
  career,
  contact,
  seo,
} as const;
