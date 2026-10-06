const fs = require('fs');
let file = fs.readFileSync('components/products/ProductDetailLayout.tsx', 'utf-8');

file = file.replace(/>Home</g, '>{dict.common.productLayout.breadcrumbHome}<');
file = file.replace(/>Products</g, '>{dict.common.productLayout.breadcrumbProducts}<');
file = file.replace(/href="\/products"/g, 'href={`/${locale}/products`}');
file = file.replace(/href="\/"/g, 'href={`/${locale}`}');
file = file.replace(/Product Detail\n\s*<\/Badge>/g, '{dict.common.productLayout.badge}\n                  </Badge>');
file = file.replace(/Make a Product Enquiry/g, '{dict.common.productLayout.makeEnquiry}');
file = file.replace(/Explore All Products/g, '{dict.common.productLayout.exploreAll}');
file = file.replace(/href={`\/contact\?inquiryType=product-question&product=\${product\.slug}`}/g, 'href={`/${locale}/contact?inquiryType=product-question&product=${product.slug}`}');
file = file.replace(/AIPL Biological Formulation/g, '{dict.common.productLayout.biologicalFormulation}');
file = file.replace(/>Overview</g, '>{dict.common.productLayout.overview}<');
file = file.replace(/>Agricultural Purpose</g, '>{dict.common.productLayout.agriculturalPurpose}<');
file = file.replace(/>Intended Outcomes</g, '>{dict.common.productLayout.intendedOutcomes}<');
file = file.replace(/>Application Information</g, '>{dict.common.productLayout.applicationInformation}<');
file = file.replace(/Application guidance is provided according to crop type, product formulation, and specific field conditions\. For exact dosage instructions, dilution ratios, and optimal application timing, please consult with an AIPL agricultural expert or refer to the official product packaging\./g, '{dict.common.productLayout.applicationGuidance}');
file = file.replace(/>Safety & Verification Note</g, '>{dict.common.productLayout.safetyNote}<');
file = file.replace(/>\s*Biological Composition\s*</g, '>\n                      {dict.common.productLayout.biologicalComposition}\n                    <');
file = file.replace(/>AIPL Integrated System</g, '>{dict.common.productLayout.integratedSystem}<');
file = file.replace(/Our products are designed to work together within the AIPL ecosystem\. Integrating this solution with our complete range of biological treatments can maximize soil health, plant resilience, and overall agricultural productivity\./g, '{dict.common.productLayout.systemDescription}');
file = file.replace(/>Related Biological Solutions</g, '>{dict.common.productLayout.relatedProducts}<');
file = file.replace(/View Details/g, '{dict.common.productLayout.viewDetails}');
file = file.replace(/href={`\/products\/\${rp\.slug}`}/g, 'href={`/${locale}/products/${rp.slug}`}');

fs.writeFileSync('components/products/ProductDetailLayout.tsx', file);
