import Image from "next/image";
import { Users } from "lucide-react";
import { AnimateIn } from "@/components/sections/AnimateIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "AIPL is an agricultural investment company producing and supplying fertilizers, bio pesticides, and crop care solutions for Nepal's farmers.",
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
      <section className="relative text-white py-32 md:py-48">
        <div className="fixed top-[72px] left-0 w-full h-[60vh] -z-10">
          <Image
            src="/illustrations/about-hero-v2.webp"
            alt="About AIPL"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
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
            <p className="text-ink text-lg leading-relaxed mb-8">
              AIPL is an agricultural investment company producing and supplying
              fertilizers, bio pesticides, and crop care solutions for
              Nepal&apos;s farmers. The company was founded to close the gap
              between imported, generic agri inputs and products actually suited
              to Nepal&apos;s soil types, crops, and climate.
            </p>
            <p className="text-ink text-lg leading-relaxed mb-8">
              AIPL invests in research, sourcing, and quality control so that
              every product on the shelf earns a farmer&apos;s trust season after
              season. From our formulation process to our dealer network, every
              part of the business is designed to serve the working farmer —
              because better inputs lead to better harvests, and better harvests
              build stronger communities.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="bg-cream rounded-xl p-8 mb-8">
              <h2 className="font-heading text-xl font-bold text-forest mb-3">
                Our Mission
              </h2>
              <p className="text-ink italic text-lg leading-relaxed font-serif">
                &ldquo;To help every farmer in Nepal grow healthier crops and
                higher yields, through products built for local conditions and
                backed by real support.&rdquo;
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink">
                Meet the People Behind AIPL
              </h2>
              <p className="text-muted-text mt-3">
                The team driving Nepal&apos;s agricultural future forward.
              </p>
            </div>
          </AnimateIn>
          {/* PLACEHOLDER: confirm with AIPL before launch — pending real team bios and photos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Users className="h-10 w-10 text-forest/40" />
                  </div>
                  <p className="font-semibold text-ink">{member.name}</p>
                  <p className="text-muted-text text-sm">{member.role}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
