import Image from "next/image";
import { FlaskConical, Leaf, MessageCircle, MapPin, Search, TestTube, Truck, Store, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimateIn } from "@/components/sections/AnimateIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality & Impact — Standards & Certifications",
  description:
    "AIPL Nepal is committed to healthier soil and stronger harvests. Learn about our quality-tested formulations, sustainable practices, farmer feedback process, and nationwide impact across Nepal's agricultural communities.",
  keywords: [
    "AIPL quality",
    "Nepal fertilizer quality",
    "agricultural quality standards Nepal",
    "sustainable farming Nepal",
    "soil health Nepal",
    "AIPL certifications",
    "eco-friendly fertilizer Nepal",
  ],
  alternates: {
    canonical: "https://aipl.com.np/quality",
  },
};

const pillars = [
  {
    icon: FlaskConical,
    title: "Quality-Tested Formulations",
    description:
      "Every product undergoes rigorous testing before it reaches a farm. We verify nutrient content, effectiveness, and safety to ensure consistent results across Nepal's diverse growing conditions.",
    highlights: ["Lab-tested nutrients", "Batch consistency", "Safety certified"],
  },
  {
    icon: Leaf,
    title: "Soil-Friendly & Sustainable",
    description:
      "Our ingredients are selected not only for effectiveness but for their long-term impact on soil health. We prioritize formulations that support sustainable farming practices for generations.",
    highlights: ["No harmful residues", "Eco-conscious sourcing", "Long-term soil health"],
  },
  {
    icon: MessageCircle,
    title: "Backed by Farmer Feedback",
    description:
      "Real feedback from real farmers drives our product development. We listen to the people who use our products daily and continuously improve based on their experience in the field.",
    highlights: ["Field-tested results", "Continuous improvement", "Farmer partnerships"],
  },
  {
    icon: MapPin,
    title: "Nationwide Dealer Network",
    description:
      "Our growing network of dealers ensures that farmers across Nepal can access AIPL products when they need them — from the Terai to the hills, we are where farming happens.",
    highlights: ["All 7 provinces", "Reliable supply chain", "Local dealer support"],
  },
];

const processSteps = [
  {
    icon: Search,
    step: 1,
    title: "Research",
    description: "We study Nepal's soil conditions, crop challenges, and farmer needs to identify the most impactful products.",
  },
  {
    icon: TestTube,
    step: 2,
    title: "Formulation & Testing",
    description: "Each product is formulated with locally relevant ingredients and tested for effectiveness and safety.",
  },
  {
    icon: Truck,
    step: 3,
    title: "Production & Distribution",
    description: "Manufactured under strict quality controls and distributed through our nationwide dealer network.",
  },
  {
    icon: Store,
    step: 4,
    title: "On the Farm",
    description: "Our products reach farmers through trusted local dealers, with support and guidance at every step.",
  },
];

const impactStats = [
  { label: "Product Lines", value: "5+" },
  { label: "Provinces Covered", value: "7" },
  { label: "Dealer Partners", value: "Growing" },
  { label: "Farmer Satisfaction", value: "High" },
];

export default function QualityPage() {
  return (
    <>
      <section className="relative text-white py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/illustrations/quality-hero-v2.webp"
            alt="Quality & Impact"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <AnimateIn>
            <p className="text-white/80 uppercase tracking-[0.2em] text-sm font-semibold mb-3 drop-shadow-md">
              Committed to Better Farming
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Quality & Impact
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow-md">
              Committed to healthier soil and stronger harvests across Nepal.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-6 bg-forest-deeper/90 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 0.1}>
                <div className="text-center py-4">
                  <p className="text-white text-3xl md:text-4xl font-bold font-heading">{stat.value}</p>
                  <p className="text-white/60 text-sm mt-1">{stat.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-16">
              <p className="text-forest uppercase tracking-[0.2em] text-sm font-semibold mb-3">
                Our Standards
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
                What Sets Us Apart
              </h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => (
              <AnimateIn key={pillar.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-border h-full hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-forest flex items-center justify-center mb-6">
                    <pillar.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-5">
                    {pillar.description}
                  </p>
                  <ul className="space-y-2">
                    {pillar.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-gray-900">
                        <CheckCircle className="h-4 w-4 text-forest shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28 relative z-10 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-16">
              <p className="text-forest uppercase tracking-[0.2em] text-sm font-semibold mb-3">
                From Research to Farm
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
                Our Process
              </h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-forest/15" />
            {processSteps.map((step, i) => (
              <AnimateIn key={step.title} delay={i * 0.15}>
                <div className="text-center relative">
                  <div className="w-20 h-20 rounded-full bg-forest flex items-center justify-center mx-auto mb-5 relative z-10 shadow-lg shadow-forest/15">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-forest font-bold text-sm mb-2 block">
                    Step {step.step}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative z-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Certifications & Standards
              </h2>
              <p className="text-gray-500 max-w-lg mx-auto">
                We adhere to industry standards and are continually working
                toward formal certifications.
              </p>
            </div>
          </AnimateIn>
          {/* PLACEHOLDER: confirm with AIPL before launch — pending real certification logos and details */}
          <AnimateIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Quality Tested", desc: "All products lab verified" },
                { name: "Nepal Standards", desc: "Meets national guidelines" },
                { name: "Eco-Friendly", desc: "Sustainable formulations" },
              ].map((cert) => (
                <div
                  key={cert.name}
                  className="bg-forest/5 rounded-2xl px-8 py-6 text-center min-w-[200px]"
                >
                  <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-forest" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{cert.name}</p>
                  <p className="text-gray-500 text-xs mt-1">{cert.desc}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-forest-deeper text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Want to Learn More About Our Products?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Explore our full range of agricultural products designed for Nepal&apos;s farming needs.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold bg-forest text-white hover:bg-forest-dark transition-colors"
            >
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
