import Image from "next/image";
import { Users } from "lucide-react";
import { AnimateIn } from "@/components/sections/AnimateIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Our Story & Mission",
  description:
    "Learn about AIPL Nepal — an agricultural investment company producing and supplying high-quality fertilizers, bio pesticides, and crop care solutions for Nepal's farmers since day one. Built on Nepal's soil.",
  keywords: [
    "about AIPL Nepal",
    "AIPL history",
    "Nepal agriculture company",
    "agricultural investment Nepal",
    "AIPL mission",
    "Nepal farming company",
  ],
  alternates: {
    canonical: "https://aipl.com.np/about",
  },
};

// PLACEHOLDER: confirm with AIPL before launch — team bios pending client input
const team = [
  { name: "Team Member", role: "Managing Director" },
  { name: "Team Member", role: "Head of Operations" },
  { name: "Team Member", role: "Head of Sales" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative text-white py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/illustrations/about-hero-v2.webp"
            alt="About AIPL"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <AnimateIn>
            <p className="text-white/80 uppercase tracking-[0.2em] text-sm font-semibold mb-3 drop-shadow-md">
              Our Story
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold drop-shadow-lg">
              Built on Nepal&apos;s Soil
            </h1>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateIn>
            <p className="text-gray-900 text-lg leading-relaxed mb-6">
              The development of human civilization is deeply rooted in agriculture; consequently, the economic empowerment of marginalized and economically disadvantaged populations through active participation in agricultural systems remains fundamental to sustainable development. Agriculture Investment Private Limited (AIPL) is dedicated to revitalizing the agricultural sector by fostering inclusive participation, integrating modern technologies, and promoting environmentally sustainable practices.
            </p>
            <p className="text-gray-900 text-lg leading-relaxed mb-12">
              AIPL produces bio-fertilizers from indigenous resources and manufactures bio-liquid fertilizers in advanced microbial laboratories. Through continuous education programs and field-based technical support, layman farmers are trained in the effective use of bio-fertilizers and encouraged to adopt organic crop production methods. Recognizing that farmers have long been undervalued in Nepali society, AIPL is dedicated to transforming this perception by positioning farmers as key contributors to national development.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="bg-forest/5 rounded-xl p-8 mb-12 border border-forest/10">
              <h2 className="font-heading text-2xl font-bold text-forest mb-4">
                Our Campaigns & Operations
              </h2>
              <p className="text-gray-900 text-lg leading-relaxed mb-4">
                Under its nationwide campaign, Agriculture Revitalizing Sustainable Development for Layman Farmers (ARSD), AIPL operates across all wards in Nepal&apos;s seven provinces and seventy-seven districts, covering a network of six thousand seven hundred forty-three government ward offices.
              </p>
              <p className="text-gray-900 text-lg leading-relaxed mb-4">
                AIPL is a pioneer private company in Nepal specializing in the production of solid bio-fertilizers derived from digested sewage sludge and industrial-scale liquid bio-fertilizers. The company treats soil health, natural resources, and indigenous knowledge as valuable assets and focuses on transforming them into sustainable economic opportunities for local communities. AIPL also manages the marketing of agricultural products produced by layman farmers, ensuring fair retail pricing and reliable market access.
              </p>
              <p className="text-gray-900 text-lg leading-relaxed">
                The company supplies both indigenous and hybrid seeds and actively promotes organic farming practices. It facilitates the marketing of agricultural products from high Himalayan regions, ensuring competitive value in both national and international markets. Layman farmers receive training in the processing of flowers, fruits, and herbs harvested from surrounding forests and are supported with modern agricultural tools. In addition, AIPL provides essential daily goods required by farming households.
              </p>
            </div>
          </AnimateIn>
          
          <AnimateIn delay={0.2}>
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              Smart Farming & Technology
            </h2>
            <p className="text-gray-900 text-lg leading-relaxed mb-12">
              To further enhance productivity and sustainability, AIPL implements the Smart Farming Management System (SFMS) using Internet of Things (IoT) technology. This system improves agricultural productivity, optimizes resource utilization, reduces operational costs, and minimizes environmental impact.
            </p>
          </AnimateIn>
          
          <AnimateIn delay={0.3}>
            <div className="bg-gray-50 rounded-xl p-8 border border-border">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Company Details
              </h2>
              <p className="text-gray-900 text-lg leading-relaxed">
                Agriculture Investment Private Limited is registered under the Government of Nepal (Company Registration No. 241861/077/078) and obtained its company registration certificate on 30th Ashad 2077 (July 14, 2020). The company is registered with the Office of the Company Registrar under the Ministry of Industry, Commerce, and Supplies, Government of Nepal (Industry Registration No. 2503/36/063/063). AIPL currently operates from Lalitpur Ward No. 22 and Kathmandu Metropolitan City Ward No. 03 and has received certifications from multiple government agencies, including cottage and small industries offices, local authorities, and provincial governments.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white relative z-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
                Meet the People Behind AIPL
              </h2>
              <p className="text-gray-500 mt-3">
                The team driving Nepal&apos;s agricultural future forward.
              </p>
            </div>
          </AnimateIn>
          {/* PLACEHOLDER: confirm with AIPL before launch — pending real team bios and photos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-forest/5 border border-forest/10 hover:shadow-md transition-shadow">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm border border-border">
                    <Users className="h-10 w-10 text-forest" />
                  </div>
                  <p className="font-semibold text-gray-900 text-lg">{member.name}</p>
                  <p className="text-forest text-sm font-medium mt-1">{member.role}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
