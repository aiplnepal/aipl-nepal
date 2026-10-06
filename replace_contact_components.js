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
  [`import { career } from './career';`, `import { career } from './career';\nimport { contact } from './contact';`],
  [`  career,\n} as const;`, `  career,\n  contact,\n} as const;`]
]);

replaceFileContent('content/locales/ne/index.ts', [
  [`import { career } from './career';`, `import { career } from './career';\nimport { contact } from './contact';`],
  [`  career,\n} as const;`, `  career,\n  contact,\n} as const;`]
]);

// 1. contact/page.tsx
replaceFileContent('app/[locale]/(marketing)/contact/page.tsx', [
  [/Contact AIPL/g, '{dict.contact.hero.label}'],
  [/Let&apos;s connect agriculture, knowledge, and action\./g, '{dict.contact.hero.title}'],
  [/Whether you are a farmer seeking support, a partner looking to collaborate, or simply inquiring about our products, we are here to assist you\./g, '{dict.contact.hero.description}'],
  [/How can we help\?/g, '{dict.contact.info.title}'],
  [/Submit your inquiry using the form, and our team will direct it to the appropriate department\./g, '{dict.contact.info.description}'],
  [/Contact Information/g, '{dict.contact.info.contactInfoTitle}'],
  [/<p className="font-semibold text-gray-900 text-sm mb-1">Phone<\/p>/g, '<p className="font-semibold text-gray-900 text-sm mb-1">{dict.contact.info.phone}</p>'],
  [/<p className="font-semibold text-gray-900 text-sm mb-1">Email<\/p>/g, '<p className="font-semibold text-gray-900 text-sm mb-1">{dict.contact.info.email}</p>'],
  [/<p className="font-semibold text-gray-900 text-sm mb-1">Location<\/p>/g, '<p className="font-semibold text-gray-900 text-sm mb-1">{dict.contact.info.location}</p>'],
  [/Kathmandu &amp; Lalitpur, Nepal/g, '{dict.contact.info.locationDetails}'],
  [/\(Exact office locations pending verification\)/g, '{dict.contact.info.locationVerification}'],
  [/Common Inquiries/g, '{dict.contact.info.commonInquiriesTitle}'],
  [/<strong>Products:<\/strong> Bio fertilizers, biopesticides, and foliar sprays\./g, '<strong>{dict.contact.info.commonInquiries[0].label}</strong> {dict.contact.info.commonInquiries[0].desc}'],
  [/<strong>Farmer Support:<\/strong> Soil testing and agricultural training\./g, '<strong>{dict.contact.info.commonInquiries[1].label}</strong> {dict.contact.info.commonInquiries[1].desc}'],
  [/<strong>Partnerships:<\/strong> Dealerships and commercial operations\./g, '<strong>{dict.contact.info.commonInquiries[2].label}</strong> {dict.contact.info.commonInquiries[2].desc}'],
  [/Send a Message/g, '{dict.contact.form.title}'],
  [/Empowering Nepali Agriculture/g, '{dict.contact.cta.title}'],
  [/Explore our range of biological fertilizers and sustainable farming solutions designed to improve soil health and crop yield\./g, '{dict.contact.cta.description}'],
  [/Explore Products/g, '{dict.contact.cta.explore}'],
  [/Learn About AIPL/g, '{dict.contact.cta.about}']
]);

// 2. ContactForm
replaceFileContent('components/sections/ContactForm.tsx', [
  [
    `const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "dealer-partnership", label: "Dealer Partnership" },
  { value: "bulk-order", label: "Bulk Order" },
  { value: "product-question", label: "Product Question" },
] as const;`,
    `const getInquiryTypes = (dict: any) => [
  { value: "general", label: dict.contact.form.inquiryTypes.general },
  { value: "dealer-partnership", label: dict.contact.form.inquiryTypes.dealer },
  { value: "bulk-order", label: dict.contact.form.inquiryTypes.bulk },
  { value: "product-question", label: dict.contact.form.inquiryTypes.product },
];`
  ],
  [/inquiryTypes\.map/g, 'getInquiryTypes(dict).map'],
  [/Message Sent/g, '{dict.contact.form.successTitle}'],
  [/Your enquiry has been submitted successfully\. AIPL will review your message\./g, '{dict.contact.form.successMessage}'],
  [/Send another message/g, '{dict.contact.form.sendAnother}'],
  [/<Label htmlFor="name" className="text-sm font-medium text-gray-900 mb-1\.5 block">\s*Full Name\s*<\/Label>/g, '<Label htmlFor="name" className="text-sm font-medium text-gray-900 mb-1.5 block">\n          {dict.contact.form.labels.fullName}\n        </Label>'],
  [/placeholder="Your full name"/g, 'placeholder={dict.contact.form.placeholders.fullName}'],
  [/<Label htmlFor="phone" className="text-sm font-medium text-gray-900 mb-1\.5 block">\s*Phone\s*<\/Label>/g, '<Label htmlFor="phone" className="text-sm font-medium text-gray-900 mb-1.5 block">\n            {dict.contact.form.labels.phone}\n          </Label>'],
  [/placeholder="\+977-XXXXXXXXX"/g, 'placeholder={dict.contact.form.placeholders.phone}'],
  [/<Label htmlFor="email" className="text-sm font-medium text-gray-900 mb-1\.5 block">\s*Email\s*<\/Label>/g, '<Label htmlFor="email" className="text-sm font-medium text-gray-900 mb-1.5 block">\n            {dict.contact.form.labels.email}\n          </Label>'],
  [/placeholder="you@example\.com"/g, 'placeholder={dict.contact.form.placeholders.email}'],
  [/<Label htmlFor="inquiryType" className="text-sm font-medium text-gray-900 mb-1\.5 block">\s*Inquiry Type\s*<\/Label>/g, '<Label htmlFor="inquiryType" className="text-sm font-medium text-gray-900 mb-1.5 block">\n          {dict.contact.form.labels.inquiryType}\n        </Label>'],
  [/placeholder="Select an inquiry type"/g, 'placeholder={dict.contact.form.placeholders.inquiryType}'],
  [/Your Location/g, '{dict.contact.form.labels.location}'],
  [/\(Province \/ District \/ Municipality \/ Ward\)/g, '{dict.contact.form.labels.locationSub}'],
  [/<Label htmlFor="message" className="text-sm font-medium text-gray-900 mb-1\.5 block">\s*Message\s*<\/Label>/g, '<Label htmlFor="message" className="text-sm font-medium text-gray-900 mb-1.5 block">\n          {dict.contact.form.labels.message}\n        </Label>'],
  [/placeholder="Tell us how we can help..."/g, 'placeholder={dict.contact.form.placeholders.message}'],
  [/Something went wrong\. Please try again\./g, '{dict.contact.form.error}'],
  [/"Sending..."/g, 'dict.contact.form.sending'],
  [/Send Message/g, '{dict.contact.form.send}']
]);

// 3. DealerLocator
replaceFileContent('components/sections/DealerLocator.tsx', [
  [/Find a Local Dealer/g, '{dict.contact.locator.title}'],
  [/Search our network of verified dealers across Nepal to purchase AIPL products or receive local agricultural support\./g, '{dict.contact.locator.description}'],
  [/Search by Location/g, '{dict.contact.locator.searchTitle}'],
  [/<Label className="text-sm font-medium text-gray-900 mb-1\.5 block">Province<\/Label>/g, '<Label className="text-sm font-medium text-gray-900 mb-1.5 block">{dict.contact.locator.labels.province}</Label>'],
  [/placeholder="Select province"/g, 'placeholder={dict.contact.locator.placeholders.selectProvince}'],
  [/<Label className="text-sm font-medium text-gray-900 mb-1\.5 block">District<\/Label>/g, '<Label className="text-sm font-medium text-gray-900 mb-1.5 block">{dict.contact.locator.labels.district}</Label>'],
  [/placeholder=\{provinceId \? "Select district" : "Select province first"\}/g, 'placeholder={provinceId ? dict.contact.locator.placeholders.selectDistrict : dict.contact.locator.placeholders.selectDistrictFirst}'],
  [/<Label className="text-sm font-medium text-gray-900 mb-1\.5 block">Local Level<\/Label>/g, '<Label className="text-sm font-medium text-gray-900 mb-1.5 block">{dict.contact.locator.labels.localLevel}</Label>'],
  [/placeholder=\{districtId \? "Select local level" : "Select district first"\}/g, 'placeholder={districtId ? dict.contact.locator.placeholders.selectLocalLevel : dict.contact.locator.placeholders.selectLocalLevelFirst}'],
  [/<Label className="text-sm font-medium text-gray-900 mb-1\.5 block">Ward<\/Label>/g, '<Label className="text-sm font-medium text-gray-900 mb-1.5 block">{dict.contact.locator.labels.ward}</Label>'],
  [/placeholder=\{municipalityId \? "Select ward" : "Select local level first"\}/g, 'placeholder={municipalityId ? dict.contact.locator.placeholders.selectWard : dict.contact.locator.placeholders.selectWardFirst}'],
  [/>\s*Ward \{w\}\s*<\/SelectItem>/g, '>{dict.contact.locator.wardPrefix} {w}</SelectItem>'],
  [/Clear all filters/g, '{dict.contact.locator.clearFilters}'],
  [/Dealer Network Update/g, '{dict.contact.locator.updateTitle}'],
  [/Our verified dealer list is currently being updated\. Please check back later or use the contact form above for product inquiries\./g, '{dict.contact.locator.updateDesc}'],
  [/Ward \{dealer.ward\}/g, '{dict.contact.locator.wardPrefix} {dealer.ward}'],
  [/No Dealers Found/g, '{dict.contact.locator.noDealersTitle}'],
  [/We don&apos;t have a verified dealer in this exact location yet\. Try broadening\s*your search or contact us directly for assistance\./g, '{dict.contact.locator.noDealersDesc}'],
  [/Clear filters to search again/g, '{dict.contact.locator.clearToSearch}'],
  [/Showing \{filteredDealers\.length\} dealer\{filteredDealers\.length !== 1 \? "s" : ""\} in \{" "\}\s*\{selectedMunicipality \|\| selectedDistrict \|\| selectedProvince\}/g, '{dict.contact.locator.showing} {filteredDealers.length} {filteredDealers.length !== 1 ? dict.contact.locator.dealers : dict.contact.locator.dealer} {dict.contact.locator.in} {selectedMunicipality || selectedDistrict || selectedProvince}']
]);

console.log("Done");
