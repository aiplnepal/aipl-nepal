const fs = require('fs');

function replaceFileContent(file, replacements) {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf-8');
  let newContent = content;
  replacements.forEach(([search, replace]) => {
    newContent = newContent.replace(search, replace);
  });
  if (newContent !== content) {
    fs.writeFileSync(file, newContent);
    console.log(`Updated ${file}`);
  }
}

// Update index exports
replaceFileContent('content/locales/en/index.ts', [
  [`import { products } from './products';`, `import { products } from './products';\nimport { quality } from './quality';`],
  [`  products,\n} as const;`, `  products,\n  quality,\n} as const;`]
]);

replaceFileContent('content/locales/ne/index.ts', [
  [`import { products } from './products';`, `import { products } from './products';\nimport { quality } from './quality';`],
  [`  products,\n} as const;`, `  products,\n  quality,\n} as const;`]
]);

// 1. QualityHero
replaceFileContent('components/quality/QualityHero.tsx', [
  [/Quality & Impact/g, '{dict.quality.hero.label}'],
  [/Bridging Agricultural Science and Farmer Action\./g, '{dict.quality.hero.title}'],
  [/Integrating robust biological research, modern IoT technology, and comprehensive farmer education to build sustainable agricultural systems across Nepal\./g, '{dict.quality.hero.description}']
]);

// 2. AgriculturalApproach
replaceFileContent('components/quality/AgriculturalApproach.tsx', [
  [/Valuing indigenous knowledge while embracing modern agricultural technology\./g, '{dict.quality.agriculturalApproach.title}'],
  [/At AIPL, our core purpose is the economic empowerment of marginalized and economically disadvantaged populations through active participation in agricultural systems\. We treat soil health, natural resources, and indigenous knowledge as highly valuable assets\./g, '{dict.quality.agriculturalApproach.p1}'],
  [/By transforming these resources into sustainable economic opportunities, we empower farmers to achieve better market prices\. We encourage sustainable organic farming practices supported by continuous education, while introducing cutting-edge agricultural technologies to improve efficiency and yield\./g, '{dict.quality.agriculturalApproach.p2}']
]);

// 3. SmartFarmingSystem
replaceFileContent('components/quality/SmartFarmingSystem.tsx', [
  [/Systems & Infrastructure/g, '{dict.quality.smartFarming.label}'],
  [/Smart Farming Management System \(SFMS\)\./g, '{dict.quality.smartFarming.title}'],
  [/AIPL integrates Internet of Things \(IoT\) technology through our Smart Farming Management System to optimize agricultural productivity\. The goal is to improve resource utilization, reduce operational costs, and minimize environmental impact\./g, '{dict.quality.smartFarming.p1}'],
  [/By processing environmental and soil data, the system can provide actionable insights directly to the farmer\. This includes weekly weather updates via SMS, notifications for optimal planting and harvesting times, and alerts indicating when crops require irrigation\./g, '{dict.quality.smartFarming.p2}'],
  [/1\. THE FIELD/g, '{dict.quality.smartFarming.steps[0].step}'],
  [/Soil & Crop Environment/g, '{dict.quality.smartFarming.steps[0].desc}'],
  [/2\. DATA COLLECTION/g, '{dict.quality.smartFarming.steps[1].step}'],
  [/Sensors & Monitors/g, '{dict.quality.smartFarming.steps[1].desc}'],
  [/3\. ANALYSIS/g, '{dict.quality.smartFarming.steps[2].step}'],
  [/SFMS Software/g, '{dict.quality.smartFarming.steps[2].desc}'],
  [/4\. RECOMMENDATION/g, '{dict.quality.smartFarming.steps[3].step}'],
  [/SMS Alerts & Updates/g, '{dict.quality.smartFarming.steps[3].desc}'],
  [/5\. FARMER ACTION/g, '{dict.quality.smartFarming.steps[4].step}'],
  [/Optimized Interventions/g, '{dict.quality.smartFarming.steps[4].desc}']
]);

// 4. IoTArchitecture
replaceFileContent('components/quality/IoTArchitecture.tsx', [
  [/IoT Architecture/g, '{dict.quality.iotArchitecture.label}'],
  [/Technology Areas Investigated by AIPL\./g, '{dict.quality.iotArchitecture.title}'],
  [/We continuously evaluate and develop modern Internet of Things \(IoT\) technologies to support precision agriculture\. Our framework is designed to encompass several critical monitoring capabilities\./g, '{dict.quality.iotArchitecture.description}'],
  [/\* Note: Specific operational deployment metrics for the capabilities below are pending technical verification\./g, '{dict.quality.iotArchitecture.footnote}'],
  [
    `const capabilities = [
    {
      icon: Droplets,
      title: "Smart Irrigation",
      description: "Systems designed to control water application based on soil moisture, weather data, and crop conditions.",
    },
    {
      icon: Activity,
      title: "Soil Quality Monitoring",
      description: "Sensor frameworks to measure soil moisture, pH levels, temperature, and nutrient content.",
    },
    {
      icon: CloudSun,
      title: "Environmental Monitoring",
      description: "Data collection on temperature, humidity, wind, and rainfall to detect potential pest or disease risks.",
    },
    {
      icon: ScanEye,
      title: "Crop Health Monitoring",
      description: "Conceptual integrations using cameras and sensors to monitor crop conditions and detect disease early.",
    },
    {
      icon: GitMerge,
      title: "Hardware Integration",
      description: "Architectures exploring the use of soil sensors, weather stations, and drone technologies for agricultural application.",
    }
  ];`,
    `const getCapabilities = (dict: any) => [
    {
      icon: Droplets,
      title: dict.quality.iotArchitecture.capabilities[0].title,
      description: dict.quality.iotArchitecture.capabilities[0].description,
    },
    {
      icon: Activity,
      title: dict.quality.iotArchitecture.capabilities[1].title,
      description: dict.quality.iotArchitecture.capabilities[1].description,
    },
    {
      icon: CloudSun,
      title: dict.quality.iotArchitecture.capabilities[2].title,
      description: dict.quality.iotArchitecture.capabilities[2].description,
    },
    {
      icon: ScanEye,
      title: dict.quality.iotArchitecture.capabilities[3].title,
      description: dict.quality.iotArchitecture.capabilities[3].description,
    },
    {
      icon: GitMerge,
      title: dict.quality.iotArchitecture.capabilities[4].title,
      description: dict.quality.iotArchitecture.capabilities[4].description,
    }
  ];`
  ],
  [
    `{capabilities.map((cap, i) => (`,
    `{getCapabilities(dict).map((cap: any, i: number) => (`
  ]
]);

// 5. SoilHealthSection
replaceFileContent('components/quality/SoilHealthSection.tsx', [
  [/The Foundation/g, '{dict.quality.soilHealth.label}'],
  [/Soil Health is Agricultural Wealth\./g, '{dict.quality.soilHealth.title}'],
  [/Soil is the primary asset of any agricultural system\. AIPL's approach centers on understanding and improving soil health as the prerequisite for high-yield, sustainable farming\./g, '{dict.quality.soilHealth.p1}'],
  [/By testing soil nutrient status, we can deliver precise recommendations on suitable crops for specific soil and climate conditions\. This data-driven approach allows us to recommend appropriate organic fertilizers and biological treatments that support long-term soil vitality, rather than depleting it\./g, '{dict.quality.soilHealth.p2}'],
  [/<span>Scientific soil testing and nutrient analysis<\/span>/g, '<span>{dict.quality.soilHealth.points[0]}</span>'],
  [/<span>Climate-appropriate crop recommendations<\/span>/g, '<span>{dict.quality.soilHealth.points[1]}</span>'],
  [/<span>Targeted organic fertilizer application<\/span>/g, '<span>{dict.quality.soilHealth.points[2]}</span>']
]);

// 6. TechnicalServices
replaceFileContent('components/quality/TechnicalServices.tsx', [
  [/Comprehensive Support/g, '{dict.quality.technicalServices.label}'],
  [/Agricultural Technical Services\./g, '{dict.quality.technicalServices.title}'],
  [/We provide a complete ecosystem of services designed to support farmers from pre-planting preparation to post-harvest market management\./g, '{dict.quality.technicalServices.description}'],
  [
    `const services = [
    {
      icon: TestTube2,
      title: "Soil Testing",
      description: "Conducting localized soil testing on farmers' land to identify nutrient profiles and determine appropriate interventions.",
    },
    {
      icon: Sprout,
      title: "Organic Farming Support",
      description: "Encouraging the transition to organic practices by providing technical expertise on natural disease control and bio-fertilizer application.",
    },
    {
      icon: Hammer,
      title: "Processing & Training",
      description: "Providing hands-on training for farmers to properly process their yields, including flowers, fruits, and wild herbs.",
    },
    {
      icon: ShoppingCart,
      title: "Market Management",
      description: "Assisting farmers in selling products and seeds at retail prices, helping bring goods from high Himalayan regions to broader markets.",
    },
    {
      icon: Briefcase,
      title: "Agricultural Tools",
      description: "Improving on-farm efficiency by supplying farmers with access to modern agricultural tools and equipment.",
    },
    {
      icon: SearchCode,
      title: "Seed Supply",
      description: "Sourcing and supplying reliable indigenous and hybrid seeds tailored to specific regional climates.",
    }
  ];`,
    `const getServices = (dict: any) => [
    {
      icon: TestTube2,
      title: dict.quality.technicalServices.services[0].title,
      description: dict.quality.technicalServices.services[0].description,
    },
    {
      icon: Sprout,
      title: dict.quality.technicalServices.services[1].title,
      description: dict.quality.technicalServices.services[1].description,
    },
    {
      icon: Hammer,
      title: dict.quality.technicalServices.services[2].title,
      description: dict.quality.technicalServices.services[2].description,
    },
    {
      icon: ShoppingCart,
      title: dict.quality.technicalServices.services[3].title,
      description: dict.quality.technicalServices.services[3].description,
    },
    {
      icon: Briefcase,
      title: dict.quality.technicalServices.services[4].title,
      description: dict.quality.technicalServices.services[4].description,
    },
    {
      icon: SearchCode,
      title: dict.quality.technicalServices.services[5].title,
      description: dict.quality.technicalServices.services[5].description,
    }
  ];`
  ],
  [
    `{services.map((service, i) => (`,
    `{getServices(dict).map((service: any, i: number) => (`
  ]
]);

// 7. Phytopathology
replaceFileContent('components/quality/Phytopathology.tsx', [
  [/Applied Phytopathology\./g, '{dict.quality.phytopathology.title}'],
  [/Understanding plant disease is critical to protecting crop yields\. AIPL actively works on identifying and preventing diseases in crops and plants through scientific study\./g, '{dict.quality.phytopathology.p1}'],
  [/By examining the interactions between plants and pathogenic microorganisms — including bacteria, viruses, and fungi — we develop targeted, biologically-based solutions to mitigate agricultural damage and improve overall plant resilience\./g, '{dict.quality.phytopathology.p2}']
]);

// 8. SoilHealthCard
replaceFileContent('components/quality/SoilHealthCard.tsx', [
  [/The Soil Health Card Initiative/g, '{dict.quality.soilHealthCard.badge}'],
  [/Data-Driven Soil Management\./g, '{dict.quality.soilHealthCard.title}'],
  [/To ensure that farmers have the precise information they need, AIPL operates a Soil Health Card scheme\. This initiative provides farmers with detailed soil nutrient status and tailored agricultural advice\./g, '{dict.quality.soilHealthCard.p1}'],
  [/\* Note: Further client verification is required regarding the historical timeline of this initiative in the private sector\./g, '{dict.quality.soilHealthCard.footnote}'],
  [/Nutrient Profiling/g, '{dict.quality.soilHealthCard.cards[0].title}'],
  [/Detailed breakdown of current soil nutrient status to understand exact deficiencies\./g, '{dict.quality.soilHealthCard.cards[0].description}'],
  [/Targeted Dosages/g, '{dict.quality.soilHealthCard.cards[1].title}'],
  [/Specific fertilizer dosage recommendations and necessary soil amendments to restore optimal growing conditions\./g, '{dict.quality.soilHealthCard.cards[1].description}']
]);

// 9. FarmerImpact
replaceFileContent('components/quality/FarmerImpact.tsx', [
  [/Scaling Impact Across Nepal\./g, '{dict.quality.farmerImpact.title}'],
  [/Our ultimate metric of quality is the tangible impact on the farmers we serve\. Through the ARSD program, AIPL aims to create a nationwide network of support, technology access, and agricultural education\./g, '{dict.quality.farmerImpact.description}'],
  [/\* Note: Specific deployment metrics \(e\.g\., specific ward office counts\) are pending final client verification and will be updated accordingly\./g, '{dict.quality.farmerImpact.footnote}'],
  [/<h3 className="font-bold text-gray-900 text-xl mb-3">Geographical Reach<\/h3>/g, '<h3 className="font-bold text-gray-900 text-xl mb-3">{dict.quality.farmerImpact.impacts[0].title}</h3>'],
  [/Designing systems aiming to support agricultural communities across all 7 provinces and 77 districts of Nepal\./g, '{dict.quality.farmerImpact.impacts[0].description}'],
  [/<h3 className="font-bold text-gray-900 text-xl mb-3">Farmer Support<\/h3>/g, '<h3 className="font-bold text-gray-900 text-xl mb-3">{dict.quality.farmerImpact.impacts[1].title}</h3>'],
  [/Providing better access to agricultural knowledge, technical support, and soil-based recommendations\./g, '{dict.quality.farmerImpact.impacts[1].description}'],
  [/<h3 className="font-bold text-gray-900 text-xl mb-3">Sustainable Practice<\/h3>/g, '<h3 className="font-bold text-gray-900 text-xl mb-3">{dict.quality.farmerImpact.impacts[2].title}</h3>'],
  [/Empowering farmers to adopt sustainable organic farming practices and utilize modern agricultural technology efficiently\./g, '{dict.quality.farmerImpact.impacts[2].description}']
]);

// 10. CertificationsPlaceholder
replaceFileContent('components/quality/CertificationsPlaceholder.tsx', [
  [/Institutional Standards\./g, '{dict.quality.certifications.title}'],
  [/AIPL is committed to meeting stringent national agricultural standards and maintaining formal registrations with relevant government bodies\./g, '{dict.quality.certifications.description}'],
  [/Specific certification details, official registration numbers, and government endorsement documents will be displayed here upon final client verification and provision of official documentation\./g, '{dict.quality.certifications.info}']
]);

console.log("Done");
