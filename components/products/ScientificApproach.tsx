import { AnimateIn } from "@/components/sections/AnimateIn";
import Image from "next/image";

export function ScientificApproach({ dict }: { dict?: any }) {
  return (
    <section className="bg-white py-20 lg:py-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <AnimateIn>
              <p className="text-forest uppercase tracking-widest text-xs font-semibold mb-4">
                {dict.products.scientificApproach.label}
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                {dict.products.scientificApproach.title}
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  AIPL&apos;s product development begins in our microbial laboratories, where we isolate and cultivate beneficial indigenous bacteria such as Rhizobium and Azotobacter.
                </p>
                <p>
                  {dict.products.scientificApproach.p2}
                </p>
                <p className="text-sm italic text-gray-400 mt-4">
                  {dict.products.scientificApproach.footnote}
                </p>
              </div>
            </AnimateIn>
          </div>

          <div className="relative">
            <AnimateIn>
              <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                <Image
                  src="/hero-tractor.jpg" // Reusing institutional/scientific visual placeholder
                  alt="Microbial laboratory approach"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}
