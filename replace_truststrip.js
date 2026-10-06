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

replaceFileContent('content/locales/en/home.ts', [
  [/trustStrip: \{[\s\S]*?\},/, `trustStrip: {
    label: "Institutional Profile",
    title: "Transforming Nepalese Agriculture Since 2020.",
    p1: "Agriculture Investment Private Limited (AIPL) is dedicated to solving the challenges of layman farmers. We focus on producing high-quality agricultural inputs and delivering technology-driven services that modernise traditional farming.",
    p2: "As a registered institution, our mission is to elevate both agricultural yield and the social standing of the farmer through sustainable, scientific methodologies."
  },`]
]);

replaceFileContent('content/locales/ne/home.ts', [
  [/trustStrip: \{[\s\S]*?\},/, `trustStrip: {
    label: "संस्थागत परिचय",
    title: "२०२० देखि नेपाली कृषिलाई रूपान्तरण गर्दै।",
    p1: "Agriculture Investment Private Limited (AIPL) सामान्य किसानहरूको चुनौतीहरू समाधान गर्न समर्पित छ। हामी उच्च गुणस्तरको कृषि सामग्री उत्पादन गर्न र परम्परागत कृषिलाई आधुनिकीकरण गर्ने प्रविधि-संचालित सेवाहरू प्रदान गर्नमा केन्द्रित छौं।",
    p2: "एक दर्ता संस्थाको रूपमा, दिगो र वैज्ञानिक विधिहरू मार्फत कृषि उत्पादन र किसानको सामाजिक स्तर उकास्नु हाम्रो लक्ष्य हो।"
  },`]
]);

replaceFileContent('components/sections/TrustStrip.tsx', [
  [/Institutional Profile/g, '{dict.home.trustStrip.label}'],
  [/Transforming Nepalese Agriculture Since 2020\./g, '{dict.home.trustStrip.title}'],
  [/Agriculture Investment Private Limited \(AIPL\) is dedicated to solving the challenges of layman farmers\. We focus on producing high-quality agricultural inputs and delivering technology-driven services that modernise traditional farming\./g, '{dict.home.trustStrip.p1}'],
  [/As a registered institution, our mission is to elevate both agricultural yield and the social standing of the farmer through sustainable, scientific methodologies\./g, '{dict.home.trustStrip.p2}']
]);

console.log("Updated TrustStrip texts");
