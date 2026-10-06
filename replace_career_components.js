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
  [`import { resources } from './resources';`, `import { resources } from './resources';\nimport { career } from './career';`],
  [`  resources,\n} as const;`, `  resources,\n  career,\n} as const;`]
]);

replaceFileContent('content/locales/ne/index.ts', [
  [`import { resources } from './resources';`, `import { resources } from './resources';\nimport { career } from './career';`],
  [`  resources,\n} as const;`, `  resources,\n  career,\n} as const;`]
]);

// 1. career/page.tsx
replaceFileContent('app/[locale]/(marketing)/career/page.tsx', [
  [/Careers & Freelance Opportunities/g, '{dict.career.hero.label}'],
  [/Be part of a more sustainable agricultural future\./g, '{dict.career.hero.title}'],
  [/AIPL is looking for dedicated individuals to join our nationwide initiative, bringing modern agricultural technology and sustainable practices directly to local communities\./g, '{dict.career.hero.description}'],
  [/Apply Now/g, '{dict.career.hero.applyNow}'],
  [/Learn About AIPL/g, '{dict.career.hero.learnAbout}'],
  
  [/A Mission of Participation/g, '{dict.career.mission.title}'],
  [/Agriculture Investment Private Limited \(AIPL\) is dedicated to revitalizing the agricultural sector by fostering inclusive participation\. We believe that true agricultural development requires local engagement, technical support, and strong community connections\./g, '{dict.career.mission.description}'],
  [/<h3 className="font-heading text-xl font-bold text-gray-900 mb-4">Sustainable Agriculture<\/h3>/g, '<h3 className="font-heading text-xl font-bold text-gray-900 mb-4">{dict.career.mission.cards[0].title}</h3>'],
  [/Help promote organic farming practices, soil health management, and the integration of modern agricultural technologies\./g, '{dict.career.mission.cards[0].description}'],
  [/<h3 className="font-heading text-xl font-bold text-gray-900 mb-4">Farmer Education<\/h3>/g, '<h3 className="font-heading text-xl font-bold text-gray-900 mb-4">{dict.career.mission.cards[1].title}</h3>'],
  [/Play a vital role in providing continuous education and field-based technical support to local layman farmers\./g, '{dict.career.mission.cards[1].description}'],
  [/<h3 className="font-heading text-xl font-bold text-gray-900 mb-4">Local Participation<\/h3>/g, '<h3 className="font-heading text-xl font-bold text-gray-900 mb-4">{dict.career.mission.cards[2].title}</h3>'],
  [/Represent AIPL in your own community, ensuring that agricultural services reach every ward across Nepal\./g, '{dict.career.mission.cards[2].description}'],
  
  [/The Field Representative Initiative/g, '{dict.career.initiative.title}'],
  [/As part of the Agriculture Revitalizing Sustainable Development for Layman Farmers \(ARSD\) campaign, AIPL has initiated a program to appoint a freelance employee in each government ward office across all 77 districts of Nepal\./g, '{dict.career.initiative.description}'],
  [/Connecting Knowledge/g, '{dict.career.initiative.steps[0].title}'],
  [/You will serve as the bridge between AIPL&apos;s agricultural experts and local farmers, facilitating knowledge transfer\./g, '{dict.career.initiative.steps[0].description}'],
  [/Delivering Services/g, '{dict.career.initiative.steps[1].title}'],
  [/Assist in coordinating soil testing, organic farming support, and the distribution of biological fertilizers\./g, '{dict.career.initiative.steps[1].description}'],
  [/Community Impact/g, '{dict.career.initiative.steps[2].title}'],
  [/Empower marginalized populations by helping them access modern agricultural tools and market management services\./g, '{dict.career.initiative.steps[2].description}'],
  [/&quot;Transforming the perception that farmers are undervalued in Nepali society by positioning them as key contributors to national development\.&quot;/g, '{dict.career.initiative.quote}'],
  
  [/Join the Network/g, '{dict.career.apply.title}'],
  [/This opportunity is intended for people interested in contributing to agricultural development and connecting AIPL&apos;s work with local communities across Nepal\./g, '{dict.career.apply.description}'],
  [/Application Process/g, '{dict.career.apply.processTitle}'],
  [/Submit Application/g, '{dict.career.apply.steps[0].title}'],
  [/Fill out the form with your details and target ward\./g, '{dict.career.apply.steps[0].description}'],
  [/Application Review/g, '{dict.career.apply.steps[1].title}'],
  [/Our team reviews applications for local representation\./g, '{dict.career.apply.steps[1].description}'],
  [/AIPL Follow-up/g, '{dict.career.apply.steps[2].title}'],
  [/Selected applicants may be contacted for further discussion\./g, '{dict.career.apply.steps[2].description}'],
  [/Important Information/g, '{dict.career.apply.importantInfoTitle}'],
  [/Due to the nationwide scale of this initiative \(targeting 6,743 wards\), applications are reviewed on a rolling basis\. Specific responsibilities, requirements, and engagement terms will be discussed directly with selected candidates\. AIPL does not guarantee employment or selection for every applicant\./g, '{dict.career.apply.importantInfoText}'],
  
  [/Empowering Nepali Agriculture/g, '{dict.career.cta.title}'],
  [/Discover how our innovative biological fertilizers and modern technologies are transforming the landscape of farming in Nepal\./g, '{dict.career.cta.description}'],
  [/Explore Our Impact/g, '{dict.career.cta.explore}'],
  [/Contact Us/g, '{dict.career.cta.contact}']
]);

// 2. CareerForm
replaceFileContent('components/career/CareerForm.tsx', [
  [/Application Received/g, '{dict.career.form.successTitle}'],
  [/Thank you for your interest in joining AIPL\. Selected applicants will be contacted by our team for further discussion\./g, '{dict.career.form.successMessage}'],
  [/Submit another application/g, '{dict.career.form.submitAnother}'],
  [/Freelancer Application/g, '{dict.career.form.title}'],
  [/Apply to become a field representative for your local ward\. Fields marked with \* are required\./g, '{dict.career.form.description}'],
  [/Full Name \*/g, '{dict.career.form.labels.fullName}'],
  [/placeholder="Your full name"/g, 'placeholder={dict.career.form.placeholders.fullName}'],
  [/Phone Number \*/g, '{dict.career.form.labels.phone}'],
  [/placeholder="\+977-XXXXXXXXX"/g, 'placeholder={dict.career.form.placeholders.phone}'],
  [/<Label htmlFor="email" className="text-sm font-medium text-gray-900 mb-1\.5 block">\s*Email <span className="text-gray-400 font-normal">\(Optional\)<\/span>\s*<\/Label>/g, '<Label htmlFor="email" className="text-sm font-medium text-gray-900 mb-1.5 block">\n              {dict.career.form.labels.email} <span className="text-gray-400 font-normal">{dict.career.form.labels.optional}</span>\n            </Label>'],
  [/placeholder="you@example\.com"/g, 'placeholder={dict.career.form.placeholders.email}'],
  [/Target Service Area \*/g, '{dict.career.form.labels.targetArea}'],
  [/\(Select the ward you wish to represent\)/g, '{dict.career.form.labels.targetAreaSub}'],
  [/<Label htmlFor="experience" className="text-sm font-medium text-gray-900 mb-1\.5 block">\s*Relevant Experience <span className="text-gray-400 font-normal">\(Optional\)<\/span>\s*<\/Label>/g, '<Label htmlFor="experience" className="text-sm font-medium text-gray-900 mb-1.5 block">\n            {dict.career.form.labels.experience} <span className="text-gray-400 font-normal">{dict.career.form.labels.optional}</span>\n          </Label>'],
  [/placeholder="Briefly describe any agricultural or community experience..."/g, 'placeholder={dict.career.form.placeholders.experience}'],
  [/<Label htmlFor="message" className="text-sm font-medium text-gray-900 mb-1\.5 block">\s*Why do you want to join\? <span className="text-gray-400 font-normal">\(Optional\)<\/span>\s*<\/Label>/g, '<Label htmlFor="message" className="text-sm font-medium text-gray-900 mb-1.5 block">\n            {dict.career.form.labels.whyJoin} <span className="text-gray-400 font-normal">{dict.career.form.labels.optional}</span>\n          </Label>'],
  [/placeholder="Share why you are interested in this opportunity..."/g, 'placeholder={dict.career.form.placeholders.whyJoin}'],
  [/Failed to submit application\. Please check your connection and try again\./g, '{dict.career.form.error}'],
  [/"Submitting Application..."/g, 'dict.career.form.submitting'],
  [/Submit Application/g, '{dict.career.form.submit}'],
  [/Note: Your application details will be securely submitted to AIPL for review\./g, '{dict.career.form.note}']
]);

console.log("Done");
