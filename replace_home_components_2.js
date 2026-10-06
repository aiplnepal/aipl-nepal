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

// 1. Update ArsdStory in en/home.ts and ne/home.ts
replaceFileContent('content/locales/en/home.ts', [
  [/arsdStory: \{[\s\S]*?\},/, `arsdStory: {
    label: "The ARSD Initiative",
    title: "Agriculture Revitalizing Sustainable Development",
    nepaliQuote: '"सामान्य किसानहरूका लागि दिगो कृषि प्रणाली"',
    p1: "The ARSD program is our core philosophy in action. It is designed specifically for the layman farmer, bridging the gap between traditional practices and modern agricultural science.",
    p2: "We aim to introduce sustainable, technologically integrated practices that not only enhance crop yields but also elevate the social standing and economic stability of farmers across Nepal.",
    learnMore: "Learn About ARSD"
  },`]
]);

replaceFileContent('content/locales/ne/home.ts', [
  [/arsdStory: \{[\s\S]*?\},/, `arsdStory: {
    label: "ARSD पहल",
    title: "Agriculture Revitalizing Sustainable Development",
    nepaliQuote: '"सामान्य किसानहरूका लागि दिगो कृषि प्रणाली"',
    p1: "ARSD कार्यक्रम हाम्रो मुख्य दर्शन हो। यो विशेष गरी सामान्य किसानको लागि डिजाइन गरिएको हो, जसले परम्परागत अभ्यासहरू र आधुनिक कृषि विज्ञान बीचको खाडललाई पुर्दछ।",
    p2: "हामी दिगो, प्राविधिक रूपमा एकीकृत अभ्यासहरू प्रस्तुत गर्ने लक्ष्य राख्छौं जसले बाली उत्पादन मात्र बढाउँदैन तर नेपालभरका किसानहरूको सामाजिक स्तर र आर्थिक स्थिरता पनि बढाउँछ।",
    learnMore: "ARSD को बारेमा जान्नुहोस्"
  },`]
]);

// 2. Update AgriculturalSolutions in en/home.ts and ne/home.ts
replaceFileContent('content/locales/en/home.ts', [
  [/agriculturalSolutions: \{[\s\S]*?\},/, `agriculturalSolutions: {
    label: "Comprehensive Ecosystem",
    title: "Holistic Agricultural Solutions",
    description: "We provide end-to-end support for the Nepalese farmer, covering every aspect from soil preparation to market delivery.",
    learnMore: "Learn more",
    solutions: [
      { title: "Seed Supply", description: "High-quality seeds selected for Nepalese climates to ensure optimal germination and yield." },
      { title: "Agricultural Tools", description: "Modern, efficient farming equipment designed to reduce manual labor and increase productivity." },
      { title: "Market Management", description: "Connecting farmers directly to markets, ensuring fair pricing and reduced waste." },
      { title: "Organic Farming", description: "Transitioning traditional farms to sustainable, certified organic methodologies." },
      { title: "Soil Testing", description: "Scientific analysis of soil health to provide precise, data-driven fertilizer recommendations." },
      { title: "Processing & Training", description: "Educating farmers on modern techniques, pest management, and post-harvest processing." },
      { title: "Phytopathology", description: "Advanced laboratory diagnosis of plant diseases to prescribe accurate biological treatments." }
    ]
  },`]
]);

replaceFileContent('content/locales/ne/home.ts', [
  [/agriculturalSolutions: \{[\s\S]*?\},/, `agriculturalSolutions: {
    label: "विस्तृत इकोसिस्टम",
    title: "समग्र कृषि समाधान",
    description: "हामी माटोको तयारीदेखि बजार वितरणसम्मको हरेक पक्षलाई समेटेर नेपाली किसानका लागि पूर्ण सहयोग प्रदान गर्छौं।",
    learnMore: "थप जान्नुहोस्",
    solutions: [
      { title: "बीउ आपूर्ति", description: "उच्च गुणस्तरका बीउहरू जुन नेपाली हावापानीका लागि उपयुक्त छन् र अधिकतम उब्जनी सुनिश्चित गर्छन्।" },
      { title: "कृषि उपकरण", description: "शारीरिक श्रम घटाउन र उत्पादकत्व बढाउन डिजाइन गरिएका आधुनिक र प्रभावकारी कृषि उपकरणहरू।" },
      { title: "बजार व्यवस्थापन", description: "किसानहरूलाई सीधै बजारसँग जोड्दै, उचित मूल्य सुनिश्चित गर्ने र खेर जाने क्रम घटाउने।" },
      { title: "प्राङ्गारिक खेती", description: "परम्परागत फार्महरूलाई दिगो र प्रमाणित प्राङ्गारिक विधिहरूमा रूपान्तरण गर्ने।" },
      { title: "माटो परीक्षण", description: "माटोको स्वास्थ्यको वैज्ञानिक विश्लेषण गरी मल प्रयोगका लागि सटिक र डाटा-आधारित सिफारिसहरू प्रदान गर्ने।" },
      { title: "प्रशोधन र तालिम", description: "किसानहरूलाई आधुनिक प्रविधि, रोगकिरा व्यवस्थापन र बाली भित्र्याइसकेपछिको प्रशोधनबारे शिक्षित गर्ने।" },
      { title: "फाइटोप्याथोलोजी", description: "वनस्पति रोगहरूको उन्नत प्रयोगशाला निदान गरी सटीक जैविक उपचार सिफारिस गर्ने।" }
    ]
  },`]
]);


// 3. Update ProductHighlights in en/home.ts and ne/home.ts
replaceFileContent('content/locales/en/home.ts', [
  [/productHighlights: \{[\s\S]*?\},/, `productHighlights: {
    label: "Biological Solutions",
    title: "Advanced Agricultural Inputs",
    viewAll: "View All Products"
  },`]
]);

replaceFileContent('content/locales/ne/home.ts', [
  [/productHighlights: \{[\s\S]*?\},/, `productHighlights: {
    label: "जैविक समाधान",
    title: "उन्नत कृषि सामग्रीहरू",
    viewAll: "सबै उत्पादनहरू हेर्नुहोस्"
  },`]
]);


// 4. Update CTABanner in en/home.ts and ne/home.ts
replaceFileContent('content/locales/en/home.ts', [
  [/ctaBanner: \{[\s\S]*?\}\n\};/, `ctaBanner: {
    label: "Join The Initiative",
    title: "Build a more sustainable agricultural future.",
    description: "Partner with AIPL to access scientific methodologies, premium biological inputs, and a network dedicated to empowering the layman farmer.",
    contactUs: "Contact AIPL",
    exploreProducts: "Explore Products"
  }
};`]
]);

replaceFileContent('content/locales/ne/home.ts', [
  [/ctaBanner: \{[\s\S]*?\}\n\};/, `ctaBanner: {
    label: "अभियानमा सामेल हुनुहोस्",
    title: "थप दिगो कृषि भविष्य निर्माण गर्नुहोस्।",
    description: "वैज्ञानिक विधिहरू, प्रिमियम जैविक सामग्रीहरू, र सामान्य किसानलाई सशक्तिकरण गर्न समर्पित नेटवर्कमा पहुँच प्राप्त गर्न AIPL सँग साझेदारी गर्नुहोस्।",
    contactUs: "AIPL लाई सम्पर्क गर्नुहोस्",
    exploreProducts: "उत्पादनहरू हेर्नुहोस्"
  }
};`]
]);


// REPLACE TEXTS IN COMPONENTS
replaceFileContent('components/sections/ArsdStory.tsx', [
  [/The ARSD Initiative/g, '{dict.home.arsdStory.label}'],
  [/Agriculture Revitalizing Sustainable Development/g, '{dict.home.arsdStory.title}'],
  [/&quot;सामान्य किसानहरूका लागि दिगो कृषि प्रणाली&quot;/g, '{dict.home.arsdStory.nepaliQuote}'],
  [/The ARSD program is our core philosophy in action\. It is designed specifically for the layman farmer, bridging the gap between traditional practices and modern agricultural science\./g, '{dict.home.arsdStory.p1}'],
  [/We aim to introduce sustainable, technologically integrated practices that not only enhance crop yields but also elevate the social standing and economic stability of farmers across Nepal\./g, '{dict.home.arsdStory.p2}']
]);

replaceFileContent('components/sections/AgriculturalSolutions.tsx', [
  [/Comprehensive Ecosystem/g, '{dict.home.agriculturalSolutions.label}'],
  [/Holistic Agricultural Solutions/g, '{dict.home.agriculturalSolutions.title}'],
  [/We provide end-to-end support for the Nepalese farmer, covering every aspect from soil preparation to market delivery\./g, '{dict.home.agriculturalSolutions.description}'],
  [/Learn more/g, '{dict.home.agriculturalSolutions.learnMore}'],
  // Mapping solutions
  [
    `const solutions = [
  {
    icon: Sprout,
    title: "Seed Supply",
    description: "High-quality seeds selected for Nepalese climates to ensure optimal germination and yield.",
  },
  {
    icon: Wrench,
    title: "Agricultural Tools",
    description: "Modern, efficient farming equipment designed to reduce manual labor and increase productivity.",
  },
  {
    icon: BarChart3,
    title: "Market Management",
    description: "Connecting farmers directly to markets, ensuring fair pricing and reduced waste.",
  },
  {
    icon: Leaf,
    title: "Organic Farming",
    description: "Transitioning traditional farms to sustainable, certified organic methodologies.",
  },
  {
    icon: FlaskConical,
    title: "Soil Testing",
    description: "Scientific analysis of soil health to provide precise, data-driven fertilizer recommendations.",
  },
  {
    icon: GraduationCap,
    title: "Processing & Training",
    description: "Educating farmers on modern techniques, pest management, and post-harvest processing.",
  },
  {
    icon: Microscope,
    title: "Phytopathology",
    description: "Advanced laboratory diagnosis of plant diseases to prescribe accurate biological treatments.",
  },
];`,
    `const getSolutions = (dict: any) => [
  {
    icon: Sprout,
    title: dict.home.agriculturalSolutions.solutions[0].title,
    description: dict.home.agriculturalSolutions.solutions[0].description,
  },
  {
    icon: Wrench,
    title: dict.home.agriculturalSolutions.solutions[1].title,
    description: dict.home.agriculturalSolutions.solutions[1].description,
  },
  {
    icon: BarChart3,
    title: dict.home.agriculturalSolutions.solutions[2].title,
    description: dict.home.agriculturalSolutions.solutions[2].description,
  },
  {
    icon: Leaf,
    title: dict.home.agriculturalSolutions.solutions[3].title,
    description: dict.home.agriculturalSolutions.solutions[3].description,
  },
  {
    icon: FlaskConical,
    title: dict.home.agriculturalSolutions.solutions[4].title,
    description: dict.home.agriculturalSolutions.solutions[4].description,
  },
  {
    icon: GraduationCap,
    title: dict.home.agriculturalSolutions.solutions[5].title,
    description: dict.home.agriculturalSolutions.solutions[5].description,
  },
  {
    icon: Microscope,
    title: dict.home.agriculturalSolutions.solutions[6].title,
    description: dict.home.agriculturalSolutions.solutions[6].description,
  },
];`
  ],
  [
    `{solutions.map((solution, i) => (`,
    `{getSolutions(dict).map((solution: any, i: number) => (`
  ]
]);

replaceFileContent('components/sections/ProductHighlights.tsx', [
  [/Biological Solutions/g, '{dict.home.productHighlights.label}'],
  [/Advanced Agricultural Inputs/g, '{dict.home.productHighlights.title}'],
  [/View All Products/g, '{dict.home.productHighlights.viewAll}']
]);

replaceFileContent('components/sections/CTABanner.tsx', [
  [/Join The Initiative/g, '{dict.home.ctaBanner.label}'],
  [/Build a more sustainable agricultural future\./g, '{dict.home.ctaBanner.title}'],
  [/Partner with AIPL to access scientific methodologies, premium biological inputs, and a network dedicated to empowering the layman farmer\./g, '{dict.home.ctaBanner.description}'],
  [/Contact AIPL/g, '{dict.home.ctaBanner.contactUs}'],
  [/Explore Products/g, '{dict.home.ctaBanner.exploreProducts}']
]);

console.log("Done");
