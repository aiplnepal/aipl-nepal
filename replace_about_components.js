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
  [`import { home } from './home';`, `import { home } from './home';\nimport { about } from './about';`],
  [`  home,\n} as const;`, `  home,\n  about,\n} as const;`]
]);

replaceFileContent('content/locales/ne/index.ts', [
  [`import { home } from './home';`, `import { home } from './home';\nimport { about } from './about';`],
  [`  home,\n} as const;`, `  home,\n  about,\n} as const;`]
]);

// 1. AboutHero
replaceFileContent('components/about/AboutHero.tsx', [
  [/About AIPL/g, '{dict.about.hero.label}'],
  [/Elevating the Nepali Farmer\./g, '{dict.about.hero.title}'],
  [/Agriculture Investment Private Limited \(AIPL\) is dedicated to solving the challenges of layman farmers by producing high-quality agricultural inputs and delivering technology-driven services\./g, '{dict.about.hero.description}']
]);

// 2. InstitutionStory
replaceFileContent('components/about/InstitutionStory.tsx', [
  [/The Institution/g, '{dict.about.institutionStory.label1}'],
  [/Revitalizing the agricultural sector through inclusive participation\./g, '{dict.about.institutionStory.title1}'],
  [/AIPL is fundamentally dedicated to transforming the agricultural sector\. By fostering inclusive participation, integrating modern technologies, and promoting environmentally sustainable practices, we are addressing the systemic challenges faced by Nepali farmers\./g, '{dict.about.institutionStory.p1}'],
  [/We prioritize the production of bio-fertilizers from indigenous resources and manufacture advanced liquid fertilizers in our microbial laboratories\. Our approach treats soil health, natural resources, and indigenous knowledge not just as agricultural inputs, but as valuable assets to be transformed into sustainable economic opportunities\./g, '{dict.about.institutionStory.p2}'],
  [/Why We Exist/g, '{dict.about.institutionStory.label2}'],
  [/Agriculture is fundamental to human civilization\./g, '{dict.about.institutionStory.title2}'],
  [/The economic empowerment of marginalized and economically disadvantaged populations through active participation in agricultural systems remains fundamental to sustainable development\./g, '{dict.about.institutionStory.p3}'],
  [/For too long, farmers have been undervalued in Nepali society\. AIPL exists to transform this perception by positioning layman farmers as central, respected contributors to national development and ensuring their economic stability\./g, '{dict.about.institutionStory.p4}']
]);

// 3. MissionVision
replaceFileContent('components/about/MissionVision.tsx', [
  [/<h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">\s*Mission\s*<\/h3>/, `<h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">\n                {dict.about.missionVision.missionTitle}\n              </h3>`],
  [/Transforming the conventional approach of Nepalese farmers by introducing modern, sustainable, and technologically integrated agricultural practices, significantly enhancing both yield and the farmer's social standing\./g, '{dict.about.missionVision.missionText}'],
  [/<h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">\s*Vision\s*<\/h3>/, `<h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">\n                {dict.about.missionVision.visionTitle}\n              </h3>`],
  [/To revolutionize Nepal's agricultural landscape by bridging traditional indigenous knowledge with cutting-edge agrarian technology, creating a sustainable future for local communities\./g, '{dict.about.missionVision.visionText}'],
  [/<h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">\s*Purpose\s*<\/h3>/, `<h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">\n                {dict.about.missionVision.purposeTitle}\n              </h3>`],
  [/To ensure that the layman farmer is empowered, educated, and equipped to achieve economic stability and become a respected contributor to national development\./g, '{dict.about.missionVision.purposeText}']
]);

// 4. ArsdInitiative
replaceFileContent('components/about/ArsdInitiative.tsx', [
  [/Our Nationwide Initiative/g, '{dict.about.arsdInitiative.label}'],
  [/Agriculture Revitalizing Sustainable Development for Layman Farmers \(ARSD\)/g, '{dict.about.arsdInitiative.title}'],
  [/&quot;सामान्य किसानहरूका लागि दिगो कृषि प्रणाली&quot;/g, '{dict.about.arsdInitiative.nepaliQuote}'],
  [/The ARSD initiative is AIPL's flagship campaign\. It represents our fundamental commitment to completely restructuring the agricultural support network in Nepal\./g, '{dict.about.arsdInitiative.p1}'],
  [/We are not just selling products; we are building an educational and infrastructural bridge that connects the most remote layman farmers with modern, sustainable farming technology\./g, '{dict.about.arsdInitiative.p2}']
]);

// 5. FarmerSupport
replaceFileContent('components/about/FarmerSupport.tsx', [
  [/Empowering the Farmer Ecosystem/g, '{dict.about.farmerSupport.title}'],
  [/We provide comprehensive support at every stage of the agricultural lifecycle\. By focusing on education, fair market access, and scientific input, we help farmers transition into successful micro-entrepreneurs\./g, '{dict.about.farmerSupport.description}'],
  [
    `const supportPillars = [
  {
    icon: BookOpen,
    title: "Education & Training",
    description: "Continuous education programs and field-based technical support for bio-fertilizer usage and organic crop production.",
  },
  {
    icon: Sprout,
    title: "Agricultural Inputs",
    description: "Supplying both indigenous and hybrid seeds alongside modern agricultural tools and essential daily goods.",
  },
  {
    icon: ShieldCheck,
    title: "Soil & Health Testing",
    description: "Scientific soil testing to diagnose issues and prescribe accurate biological treatments for phytopathology.",
  },
  {
    icon: TrendingUp,
    title: "Processing Techniques",
    description: "Training farmers in the processing of flowers, fruits, and herbs harvested from surrounding forests.",
  },
  {
    icon: HandCoins,
    title: "Market Access",
    description: "Managing the marketing of agricultural products, ensuring competitive value and fair retail pricing in national and international markets.",
  },
];`,
    `const getSupportPillars = (dict: any) => [
  {
    icon: BookOpen,
    title: dict.about.farmerSupport.pillars[0].title,
    description: dict.about.farmerSupport.pillars[0].description,
  },
  {
    icon: Sprout,
    title: dict.about.farmerSupport.pillars[1].title,
    description: dict.about.farmerSupport.pillars[1].description,
  },
  {
    icon: ShieldCheck,
    title: dict.about.farmerSupport.pillars[2].title,
    description: dict.about.farmerSupport.pillars[2].description,
  },
  {
    icon: TrendingUp,
    title: dict.about.farmerSupport.pillars[3].title,
    description: dict.about.farmerSupport.pillars[3].description,
  },
  {
    icon: HandCoins,
    title: dict.about.farmerSupport.pillars[4].title,
    description: dict.about.farmerSupport.pillars[4].description,
  },
];`
  ],
  [
    `{supportPillars.map((pillar, i) => (`,
    `{getSupportPillars(dict).map((pillar: any, i: number) => (`
  ]
]);

// 6. AgriTech
replaceFileContent('components/about/AgriTech.tsx', [
  [/Agriculture \+ Technology/g, '{dict.about.agriTech.label}'],
  [/Data-Driven Decisions for the Layman Farmer\./g, '{dict.about.agriTech.title}'],
  [/To further enhance productivity and sustainability, AIPL is implementing the Smart Farming Management System \(SFMS\)\. This system represents the necessary intersection of traditional agriculture, soil health, data, and technology\./g, '{dict.about.agriTech.p1}'],
  [/By utilizing Internet of Things \(IoT\) technologies—such as weather forecasting, soil environment monitoring, and crop cycle management—we empower farmers to make precise, data-driven decisions\. This optimizes resource utilization, reduces operational costs, and minimizes environmental impact\./g, '{dict.about.agriTech.p2}']
]);

// 7. HistoryTimeline
replaceFileContent('components/about/HistoryTimeline.tsx', [
  [/Our Foundations/g, '{dict.about.historyTimeline.label}'],
  [/Institutional History/g, '{dict.about.historyTimeline.title}'],
  [/Foundation/g, '{dict.about.historyTimeline.items[0].title}'],
  [/>2020</g, '>{dict.about.historyTimeline.items[0].date}<'],
  [/Established on July 14, 2020 \(30th Ashad 2077\) to bridge the gap between traditional farming and modern agricultural tech\./g, '{dict.about.historyTimeline.items[0].description}'],
  [/Registration/g, '{dict.about.historyTimeline.items[1].title}'],
  [/>Pending</g, '>{dict.about.historyTimeline.items[1].date}<'],
  [/Company Registration No\. 241861\/077\/078/g, '{dict.about.historyTimeline.items[1].description1}'],
  [/Industry Registration No\. 2503\/36\/063\/063/g, '{dict.about.historyTimeline.items[1].description2}'],
  [/Operations/g, '{dict.about.historyTimeline.items[2].title}'],
  [/>Active</g, '>{dict.about.historyTimeline.items[2].date}<'],
  [/Operating from Lalitpur Ward No\. 22 and Kathmandu Metropolitan City Ward No\. 03, driving nationwide expansion\./g, '{dict.about.historyTimeline.items[2].description}']
]);

// 8. GeographicalReach
replaceFileContent('components/about/GeographicalReach.tsx', [
  [/National Network/g, '{dict.about.geographicalReach.label}'],
  [/Reaching Every Corner of Nepal\./g, '{dict.about.geographicalReach.title}'],
  [/Through our comprehensive dealer network and the ARSD initiative, we are working to ensure that high-quality agricultural inputs and education are accessible to farmers nationwide, from the Terai to the high Himalayas\./g, '{dict.about.geographicalReach.description}'],
  [/>Provinces</g, '>{dict.about.geographicalReach.provinces}<'],
  [/>Districts</g, '>{dict.about.geographicalReach.districts}<'],
  [/>Wards</g, '>{dict.about.geographicalReach.wards}<'],
  [/\* Establishing our nationwide grassroots presence through the ARSD campaign\./g, '{dict.about.geographicalReach.footnote}']
]);

// 9. Leadership
replaceFileContent('components/about/Leadership.tsx', [
  [/Institutional Leadership/g, '{dict.about.leadership.title}'],
  [/The team driving AIPL's mission to revitalize Nepali agriculture\. Leadership profiles and institutional board information will be published shortly\./g, '{dict.about.leadership.description}']
]);

console.log("Done");
