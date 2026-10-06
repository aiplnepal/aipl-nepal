const fs = require('fs');
const path = require('path');

// EN
const enPath = path.join(__dirname, 'content/locales/en/products.ts');
let enContent = fs.readFileSync(enPath, 'utf8');

const enContext = `  catalog: {
    title: "Our Agricultural Catalog",
    description: "Discover our range of biological inputs and soil treatments."
  },
  agriculturalContext: {
    label: "The AIPL Ecosystem",
    title: "Integrating Products with Agricultural Knowledge.",
    description: "Our products do not operate in isolation. They are part of a holistic approach to sustainable farming that combines biological inputs, precision technology, and farmer education.",
    cards: [
      {
        title: "Biological Inputs",
        description: "Applying targeted biological treatments to restore soil health, manage pests naturally, and support robust plant development."
      },
      {
        title: "Data & Technology",
        description: "Utilizing soil testing and weather data to ensure our inputs are applied at the right time, in the right quantity, for maximum efficacy."
      },
      {
        title: "Sustainable Practices",
        description: "Equipping farmers with the technical training necessary to transition from conventional chemical farming to sustainable, high-yield organic systems."
      }
    ]
  },
`;

if (!enContent.includes('agriculturalContext')) {
  enContent = enContent.replace('};', enContext + '};\n');
  fs.writeFileSync(enPath, enContent);
}

// NE
const nePath = path.join(__dirname, 'content/locales/ne/products.ts');
let neContent = fs.readFileSync(nePath, 'utf8');

const neContext = `  catalog: {
    title: "हाम्रो कृषि सूची",
    description: "हाम्रो जैविक सामग्री र माटो उपचारहरूको दायरा पत्ता लगाउनुहोस्।"
  },
  agriculturalContext: {
    label: "AIPL इकोसिस्टम",
    title: "कृषि ज्ञानसँग उत्पादनहरूको एकीकरण।",
    description: "हाम्रा उत्पादनहरू एक्लै काम गर्दैनन्। तिनीहरू दिगो कृषिको समग्र दृष्टिकोणको हिस्सा हुन् जसले जैविक सामग्री, सटीक प्रविधि र किसान शिक्षालाई जोड्दछ।",
    cards: [
      {
        title: "जैविक सामग्रीहरू",
        description: "माटोको स्वास्थ्य पुनर्स्थापना गर्न, प्राकृतिक रूपमा कीट नियन्त्रण गर्न र बिरुवाको बलियो विकासलाई समर्थन गर्न लक्षित जैविक उपचारहरू प्रयोग गर्दै।"
      },
      {
        title: "डेटा र प्रविधि",
        description: "हाम्रा सामग्रीहरू सही समयमा, सही मात्रामा र अधिकतम प्रभावकारिताका लागि प्रयोग भएको सुनिश्चित गर्न माटो परीक्षण र मौसम डेटा प्रयोग गर्दै।"
      },
      {
        title: "दिगो अभ्यासहरू",
        description: "परम्परागत रासायनिक कृषिबाट दिगो, उच्च-उत्पादन हुने जैविक प्रणालीहरूमा सङ्क्रमण गर्न किसानहरूलाई आवश्यक प्राविधिक तालिम प्रदान गर्दै।"
      }
    ]
  },
`;

if (!neContent.includes('agriculturalContext')) {
  neContent = neContent.replace('};', neContext + '};\n');
  fs.writeFileSync(nePath, neContent);
}

console.log("Updated products translations");
