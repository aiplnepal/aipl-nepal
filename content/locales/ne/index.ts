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
      home: 'गृहपृष्ठ',
      about: 'हाम्रो बारेमा',
      products: 'उत्पादनहरू',
      quality: 'गुणस्तर र प्रभाव',
      resources: 'स्रोतहरू',
      career: 'करियर',
      contact: 'सम्पर्क',
    },
    footer: {
      description: 'Agricultural Investment Pvt. Ltd. (AIPL) नेपालको एक अग्रणी कृषि कम्पनी हो, जो किसान सशक्तिकरण र आधुनिक, जैविक कृषि समाधान मार्फत दिगो कृषि विकासका लागि प्रतिबद्ध छ।',
      quickLinks: 'द्रुत लिङ्कहरू',
      contactUs: 'सम्पर्क गर्नुहोस्',
      rights: 'सबै अधिकार सुरक्षित।',
    },
    buttons: {
      learnMore: 'थप जान्नुहोस्',
      viewAll: 'सबै हेर्नुहोस्',
      viewAllProducts: 'सबै उत्पादनहरू हेर्नुहोस्',
      submit: 'पठाउनुहोस्',
      readMore: 'थप पढ्नुहोस्',
    },
    productLayout: {
      breadcrumbHome: 'गृहपृष्ठ',
      breadcrumbProducts: 'उत्पादनहरू',
      badge: 'उत्पादन विवरण',
      makeEnquiry: 'उत्पादनको बारेमा सोधपुछ गर्नुहोस्',
      exploreAll: 'सबै उत्पादनहरू हेर्नुहोस्',
      biologicalFormulation: 'AIPL जैविक सूत्रीकरण',
      overview: 'अवलोकन',
      agriculturalPurpose: 'कृषि उद्देश्य',
      intendedOutcomes: 'अपेक्षित परिणामहरू',
      applicationInformation: 'प्रयोग जानकारी',
      applicationGuidance: 'बालीको प्रकार, उत्पादनको प्रकार, र खेतको विशिष्ट अवस्था अनुसार प्रयोग मार्गदर्शन प्रदान गरिन्छ। सटिक मात्रा निर्देशनहरू, मिसाउने अनुपात, र प्रयोग गर्ने उपयुक्त समयका लागि, कृपया AIPL कृषि विशेषज्ञसँग परामर्श लिनुहोस् वा आधिकारिक उत्पादन प्याकेजिङ हेर्नुहोस्।',
      safetyNote: 'सुरक्षा र प्रमाणिकरण नोट',
      biologicalComposition: 'जैविक संरचना',
      integratedSystem: 'AIPL एकीकृत प्रणाली',
      systemDescription: 'हाम्रा उत्पादनहरू AIPL इकोसिस्टम भित्र एकसाथ काम गर्न डिजाइन गरिएका हुन्। यस समाधानलाई हाम्रो जैविक उपचारको पूर्ण दायरासँग एकीकृत गर्नाले माटोको स्वास्थ्य, बिरुवाको रोग प्रतिरोधात्मक क्षमता, र समग्र कृषि उत्पादकत्वलाई अधिकतम बनाउन सक्छ।',
      relatedProducts: 'सम्बन्धित जैविक समाधानहरू',
      viewDetails: 'विवरण हेर्नुहोस्',
      bestFor: 'उपयुक्त प्रयोग',
      aiplApproach: 'AIPL को दृष्टिकोण',
      approachDescription: 'हाम्रा उत्पादनहरू दिगो कृषिप्रतिको व्यापक प्रतिबद्धताको अंश हुन्, जसले स्वदेशी स्रोतहरूलाई उन्नत प्रविधिसँग जोड्छ।',
      learnImpact: 'हाम्रो प्रभावबारे जान्नुहोस्',
      relatedSolutions: 'सम्बन्धित कृषि समाधानहरू',
      viewProduct: 'उत्पादन हेर्नुहोस्',
    },
    productCard: {
      badge: 'कृषि सामग्री',
      activeComponents: 'सक्रिय तत्वहरू',
      more: 'थप',
      viewProfile: 'वैज्ञानिक विवरण हेर्नुहोस्'
    },
    locationSelector: {
      province: 'प्रदेश',
      selectProvince: 'प्रदेश चयन गर्नुहोस्',
      district: 'जिल्ला',
      selectProvinceFirst: 'पहिले प्रदेश चयन गर्नुहोस्',
      selectDistrict: 'जिल्ला चयन गर्नुहोस्',
      localLevel: 'स्थानीय तह',
      selectDistrictFirst: 'पहिले जिल्ला चयन गर्नुहोस्',
      selectLocalLevel: 'स्थानीय तह चयन गर्नुहोस्',
      ward: 'वडा',
      selectLocalLevelFirst: 'पहिले स्थानीय तह चयन गर्नुहोस्',
      selectWard: 'वडा चयन गर्नुहोस्',
      wardPrefix: 'वडा '
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
