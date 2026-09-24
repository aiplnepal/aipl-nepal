import Image from "next/image";
import { getAllResources } from "@/lib/data/resources";
import { ResourceList } from "@/components/sections/ResourceList";
import { AnimateIn } from "@/components/sections/AnimateIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, articles, and farming advice from AIPL — helping Nepal's farmers grow smarter and stronger.",
};

export default async function ResourcesPage() {
  const resources = await getAllResources();

  return (
    <>
      <section className="relative text-white py-32 md:py-48">
        <div className="fixed top-[72px] left-0 w-full h-[60vh] -z-10">
          <Image
            src="/illustrations/resources-hero-v2.webp"
            alt="Resources"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <AnimateIn>
            <p className="text-white/80 uppercase tracking-[0.2em] text-sm font-semibold mb-3 drop-shadow-md">
              Guides & Advice
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Resources for Better Growing
            </h1>
            <p className="text-white/90 max-w-lg mx-auto drop-shadow-md">
              Practical tips and knowledge to help you get the most from every growing season.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateIn>
            <ResourceList resources={resources} />
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
