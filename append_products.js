const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, 'content/locales/en/products.ts');
let enContent = fs.readFileSync(enPath, 'utf8');

const enProducts = `
  "fertilizer": {
    name: "Bio Fertilizer",
    tagline: "Balanced biological nutrition for healthy root development",
    description: "A balanced biological blend of essential nutrients designed to support healthy root development and stronger stems across Nepal's major crop types. Suitable for use throughout the growing season as part of a regular feeding schedule. Our formulation accounts for the specific nutrient profiles found in Nepali soils, ensuring that every application delivers targeted biological support.",
    components: ["Rhizobium", "Azotobacter", "Acetobacter", "Azolla", "Phosphate-Solubilizing Bacteria (PSB)"],
    agriculturalPurpose: ["Soil fertility", "Nutrient availability", "Sustainable agriculture"],
    benefits: ["Provides essential nutrients to the soil", "Improves physical, chemical, and biological soil properties"],
    useCases: ["Cereal crops", "Vegetable farming", "Seasonal planting"]
  },
  "bio-liquid-fertilizer": {
    name: "Bio Liquid Fertilizer",
    tagline: "Fast-acting liquid nutrition for immediate uptake",
    description: "A concentrated, fast-acting liquid formulation that delivers nutrients rapidly into the plant system. It improves stress tolerance and can be easily mixed with standard irrigation systems. Formulated for quick absorption, it ensures crops receive an immediate biological boost during critical growth stages.",
    components: ["Nitrogen-fixing bacteria", "Phosphate-solubilizing microbes", "Amino acids", "Humic acid"],
    agriculturalPurpose: ["Foliar feeding", "Drip irrigation", "Stress recovery"],
    benefits: ["Rapid nutrient absorption", "Enhances plant vigor", "Compatible with irrigation systems"],
    useCases: ["Horticulture", "Cash crops", "Nursery plants"]
  },
  "soil-stimulant": {
    name: "Soil Stimulant",
    tagline: "Restoring soil vitality and microbial balance",
    description: "A specialized treatment designed to restore biological activity in depleted soils. This stimulant improves water retention, soil aeration, and encourages a healthy microbial ecosystem. Regular application helps break down compacted soils, creating a hospitable environment for deep root penetration.",
    components: ["Mycorrhizae", "Trichoderma", "Beneficial fungi", "Organic matter"],
    agriculturalPurpose: ["Soil conditioning", "Root zone enhancement", "Microbial activation"],
    benefits: ["Improves soil structure", "Increases water holding capacity", "Promotes robust root systems"],
    useCases: ["Degraded land", "Pre-planting preparation", "Orchards"]
  },
  "bio-pesticide": {
    name: "Bio Pesticide",
    tagline: "Natural defense against agricultural pests",
    description: "An effective, naturally derived pesticide that targets common agricultural pests without leaving harmful chemical residues. Safe for beneficial insects and pollinators, it provides targeted control for a more resilient crop yield. It interrupts the pest life cycle through biological mechanisms rather than systemic toxicity.",
    components: ["Bacillus thuringiensis (Bt)", "Beauveria bassiana", "Neem extract", "Plant-based oils"],
    agriculturalPurpose: ["Pest management", "Crop protection", "Organic compliance"],
    benefits: ["Controls pests effectively", "Safe for pollinators", "Leaves no harmful residues"],
    useCases: ["Integrated Pest Management (IPM)", "Organic farming", "Pre-harvest application"]
  },
  "plant-booster": {
    name: "Plant Booster",
    tagline: "Accelerated growth and stress resilience",
    description: "A specialized formula aimed at accelerating vegetative growth and improving the plant's resilience against environmental stressors like drought or extreme temperatures. By supplying readily available micronutrients, it ensures that metabolic functions continue uninterrupted even during challenging weather conditions.",
    components: ["Seaweed extract", "Micronutrients (Zn, Fe, Mn)", "Cytokinins", "Gibberellins"],
    agriculturalPurpose: ["Growth enhancement", "Stress resistance", "Yield improvement"],
    benefits: ["Accelerates vegetative growth", "Improves stress tolerance", "Boosts overall yield"],
    useCases: ["Early growth stages", "Post-stress recovery", "High-value crops"]
  },
  "compost": {
    name: "Compost",
    tagline: "Organic matter for sustained soil health",
    description: "Produced from recycled organic waste and indigenous resources, our compost is designed to improve soil structure and deliver a steady nutrient supply over time. It enhances the soil's physical properties, promoting a thriving environment for both roots and beneficial soil organisms.",
    components: ["Recycled organic waste", "Indigenous organic matter"],
    agriculturalPurpose: ["Soil enrichment", "Organic matter addition", "Moisture retention"],
    benefits: ["Increases organic matter", "Improves soil structure", "Provides slow-release nutrients"],
    useCases: ["Base fertilizer", "Soil amending", "Potting mixes"]
  },
  "toxic-remover": {
    name: "Toxic Remover",
    tagline: "Neutralizing chemical residues in soil",
    description: "An innovative solution designed to break down and neutralize harmful chemical residues accumulated from years of conventional farming. This formulation utilizes specific microbial strains to remediate the soil, preparing it for a successful transition to organic or sustainable practices.",
    components: ["Bioremediation microbes", "Detoxifying enzymes", "Activated carbon elements"],
    agriculturalPurpose: ["Soil remediation", "Chemical residue breakdown", "Transition to organic"],
    benefits: ["Neutralizes chemical residues", "Restores soil health", "Prepares land for organic farming"],
    useCases: ["Post-chemical farming", "Land rehabilitation", "Organic certification prep"]
  }
`;

if (!enContent.includes('"fertilizer"')) {
  enContent = enContent.replace('};', enProducts + '\n};');
  fs.writeFileSync(enPath, enContent);
}

const nePath = path.join(__dirname, 'content/locales/ne/products.ts');
let neContent = fs.readFileSync(nePath, 'utf8');

const neProducts = `
  "fertilizer": {
    name: "जैविक मल",
    tagline: "स्वस्थ जरा विकासको लागि सन्तुलित जैविक पोषण",
    description: "नेपालका प्रमुख बाली प्रकारहरूमा स्वस्थ जरा विकास र बलियो डाँठलाई समर्थन गर्न डिजाइन गरिएको आवश्यक पोषक तत्वहरूको सन्तुलित जैविक मिश्रण। नियमित खुवाउने तालिकाको भागको रूपमा बढ्दो मौसमभरि प्रयोगको लागि उपयुक्त। हाम्रो सूत्रले नेपाली माटोमा पाइने विशिष्ट पोषक प्रोफाइलहरूलाई ध्यानमा राख्छ, जसले गर्दा प्रत्येक प्रयोगले लक्षित जैविक समर्थन प्रदान गर्दछ।",
    components: ["राइजोबियम", "एजोटोब्याक्टर", "एसिटोब्याक्टर", "अजोला", "फस्फेट-घुलनशील ब्याक्टेरिया (PSB)"],
    agriculturalPurpose: ["माटोको उर्वरता", "पोषक तत्वको उपलब्धता", "दिगो कृषि"],
    benefits: ["माटोलाई आवश्यक पोषक तत्वहरू प्रदान गर्दछ", "भौतिक, रासायनिक, र जैविक माटोको गुणहरू सुधार गर्दछ"],
    useCases: ["अन्न बाली", "तरकारी खेती", "मौसमी रोपण"]
  },
  "bio-liquid-fertilizer": {
    name: "जैविक झोल मल",
    tagline: "तत्काल अवशोषणको लागि द्रुत-कार्य गर्ने तरल पोषण",
    description: "एक सान्द्रित, द्रुत-कार्य गर्ने तरल सूत्र जसले बिरुवा प्रणालीमा छिटो पोषक तत्वहरू पुर्‍याउँछ। यसले तनाव सहिष्णुता सुधार गर्दछ र सजिलैसँग मानक सिँचाइ प्रणालीहरूसँग मिसाउन सकिन्छ। छिटो अवशोषणको लागि तयार गरिएको, यसले बालीहरूलाई महत्त्वपूर्ण वृद्धि चरणहरूमा तत्काल जैविक बढावा प्राप्त गर्ने कुरा सुनिश्चित गर्दछ।",
    components: ["नाइट्रोजन-फिक्सिङ ब्याक्टेरिया", "फस्फेट-घुलनशील सूक्ष्मजीवहरू", "अमिनो एसिड", "ह्युमिक एसिड"],
    agriculturalPurpose: ["पातमा छर्कने", "थोपा सिँचाइ", "तनाव पुनरुत्थान"],
    benefits: ["द्रुत पोषक तत्व अवशोषण", "बिरुवाको शक्ति बढाउँछ", "सिँचाइ प्रणालीहरूसँग अनुकूल"],
    useCases: ["बागवानी", "नगदे बाली", "नर्सरी बिरुवाहरू"]
  },
  "soil-stimulant": {
    name: "माटो उत्तेजक (Soil Stimulant)",
    tagline: "माटोको जीवन शक्ति र माइक्रोबियल सन्तुलन पुनर्स्थापित गर्दै",
    description: "ह्रास भएको माटोमा जैविक गतिविधि पुनर्स्थापित गर्न डिजाइन गरिएको एक विशेष उपचार। यस उत्तेजकले पानी कायम राख्ने क्षमता, माटोको हावा सञ्चार सुधार गर्दछ, र स्वस्थ माइक्रोबियल इकोसिस्टमलाई प्रोत्साहित गर्दछ। नियमित प्रयोगले कडा माटोलाई खुकुलो पार्न मद्दत गर्दछ, गहिरो जरा छिर्नको लागि अनुकूल वातावरण सिर्जना गर्दछ।",
    components: ["माइकोराइजा", "ट्राइकोडर्मा", "लाभदायक फङ्गाइ", "जैविक पदार्थ"],
    agriculturalPurpose: ["माटो कन्डिसनिङ", "जरा क्षेत्र वृद्धि", "माइक्रोबियल सक्रियता"],
    benefits: ["माटोको संरचना सुधार गर्दछ", "पानी होल्डिङ क्षमता बढाउँछ", "बलियो जरा प्रणालीलाई बढावा दिन्छ"],
    useCases: ["क्षय भएको भूमि", "रोपण पूर्व तयारी", "बगैंचाहरू"]
  },
  "bio-pesticide": {
    name: "जैविक विषादी",
    tagline: "कृषि कीटहरू विरुद्ध प्राकृतिक रक्षा",
    description: "एक प्रभावकारी, प्राकृतिक रूपमा व्युत्पन्न कीटनाशक जसले हानिकारक रासायनिक अवशेषहरू नछोडी सामान्य कृषि कीटहरूलाई लक्षित गर्दछ। लाभदायक कीराहरू र परागकणहरूको लागि सुरक्षित, यसले थप लचिलो बाली उत्पादनको लागि लक्षित नियन्त्रण प्रदान गर्दछ। यसले प्रणालीगत विषाक्तताको सट्टा जैविक संयन्त्रहरूमार्फत कीटको जीवनचक्रलाई अवरोध गर्दछ।",
    components: ["बेसिलस थुरिंजिएन्सिस (Bt)", "ब्युभेरिया बासियाना", "निमको अर्क", "वनस्पतिमा आधारित तेलहरू"],
    agriculturalPurpose: ["कीट व्यवस्थापन", "बाली संरक्षण", "जैविक अनुपालन"],
    benefits: ["कीटहरूलाई प्रभावकारी रूपमा नियन्त्रण गर्दछ", "परागकणहरूको लागि सुरक्षित", "कुनै हानिकारक अवशेषहरू छोड्दैन"],
    useCases: ["एकीकृत कीट व्यवस्थापन (IPM)", "जैविक खेती", "फसल पूर्व प्रयोग"]
  },
  "plant-booster": {
    name: "बिरुवा बुस्टर (Plant Booster)",
    tagline: "तीव्र वृद्धि र तनाव लचिलोपन",
    description: "वानस्पतिक वृद्धिलाई गति दिन र खडेरी वा चरम तापक्रम जस्ता वातावरणीय तनावहरू विरुद्ध बिरुवाको लचिलोपन सुधार गर्ने उद्देश्यले एक विशेष सूत्र। सजिलै उपलब्ध सूक्ष्म पोषक तत्वहरू आपूर्ति गरेर, यसले चुनौतीपूर्ण मौसम परिस्थितिहरूमा पनि चयापचय कार्यहरू निर्बाध रूपमा जारी रहने सुनिश्चित गर्दछ।",
    components: ["समुद्री झारको अर्क", "सूक्ष्म पोषक तत्वहरू (Zn, Fe, Mn)", "साइटोकिनिनहरू", "गिबरेलिनहरू"],
    agriculturalPurpose: ["वृद्धि वृद्धि", "तनाव प्रतिरोध", "उत्पादन सुधार"],
    benefits: ["वानस्पतिक वृद्धिलाई गति दिन्छ", "तनाव सहिष्णुता सुधार गर्दछ", "समग्र उत्पादन बढाउँछ"],
    useCases: ["प्रारम्भिक वृद्धि चरणहरू", "तनावपछिको पुनरुत्थान", "उच्च-मूल्यका बालीहरू"]
  },
  "compost": {
    name: "कम्पोस्ट मल",
    tagline: "दिगो माटो स्वास्थ्यको लागि जैविक पदार्थ",
    description: "पुनर्नवीनीकरण गरिएको जैविक फोहोर र स्वदेशी स्रोतहरूबाट उत्पादित, हाम्रो कम्पोस्ट माटोको संरचना सुधार गर्न र समयसँगै निरन्तर पोषक तत्व आपूर्ति प्रदान गर्न डिजाइन गरिएको हो। यसले माटोको भौतिक गुणहरू बढाउँछ, जरा र लाभदायक माटो जीवहरू दुवैको लागि फस्टाउने वातावरणलाई बढावा दिन्छ।",
    components: ["पुनर्नवीनीकरण गरिएको जैविक फोहोर", "स्वदेशी जैविक पदार्थ"],
    agriculturalPurpose: ["माटो संवर्धन", "जैविक पदार्थ थप", "चिस्यान कायम राख्ने"],
    benefits: ["जैविक पदार्थ बढाउँछ", "माटोको संरचना सुधार गर्दछ", "बिस्तारै-रिलिज हुने पोषक तत्वहरू प्रदान गर्दछ"],
    useCases: ["आधार मल", "माटो संशोधन", "गमला मिश्रणहरू"]
  },
  "toxic-remover": {
    name: "विषाक्तता हटाउने (Toxic Remover)",
    tagline: "माटोमा रासायनिक अवशेषहरूलाई तटस्थ गर्दै",
    description: "वर्षौंको परम्परागत खेतीबाट जम्मा भएका हानिकारक रासायनिक अवशेषहरूलाई तोड्न र तटस्थ गर्न डिजाइन गरिएको एक नवीन समाधान। यस सूत्रले माटोको उपचार गर्न विशिष्ट माइक्रोबियल स्ट्रेनहरू प्रयोग गर्दछ, यसलाई जैविक वा दिगो अभ्यासहरूमा सफल संक्रमणको लागि तयार गर्दछ।",
    components: ["बायोरेमिडिएसन माइक्रोबहरू", "डिटक्सिफाइङ इन्जाइमहरू", "सक्रिय कार्बन तत्वहरू"],
    agriculturalPurpose: ["माटो उपचार", "रासायनिक अवशेष विघटन", "जैविकमा संक्रमण"],
    benefits: ["रासायनिक अवशेषहरूलाई तटस्थ गर्दछ", "माटोको स्वास्थ्य पुनर्स्थापित गर्दछ", "जैविक खेतीको लागि भूमि तयार गर्दछ"],
    useCases: ["रासायनिक खेती पछि", "भूमि पुनर्स्थापना", "जैविक प्रमाणीकरण तयारी"]
  }
`;

if (!neContent.includes('"fertilizer"')) {
  neContent = neContent.replace('};', neProducts + '\n};');
  fs.writeFileSync(nePath, neContent);
}

console.log("Done adding product details to translation dicts");
