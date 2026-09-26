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
            <p className="text-gray-900 text-lg leading-relaxed mb-8">
              AIPL is an agricultural investment company producing and supplying
              fertilizers, bio pesticides, and crop care solutions for
              Nepal&apos;s farmers. The company was founded to close the gap
              between imported, generic agri inputs and products actually suited
              to Nepal&apos;s soil types, crops, and climate.
            </p>
            <p className="text-gray-900 text-lg leading-relaxed mb-8">
              AIPL invests in research, sourcing, and quality control so that
              every product on the shelf earns a farmer&apos;s trust season after
              season. From our formulation process to our dealer network, every
              part of the business is designed to serve the working farmer —
              because better inputs lead to better harvests, and better harvests
              build stronger communities.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="bg-forest/5 rounded-xl p-8 mb-8 border border-forest/10">
              <h2 className="font-heading text-xl font-bold text-forest mb-3">
                Our Mission
              </h2>
              <p className="text-gray-900 italic text-lg leading-relaxed font-serif">
                &ldquo;To help every farmer in Nepal grow healthier crops and
                higher yields, through products built for local conditions and
                backed by real support.&rdquo;
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
