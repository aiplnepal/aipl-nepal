import { AnimateIn } from "./AnimateIn";
import Image from "next/image";

export function TrustStrip({ dict }: { dict: any }) {
  return (
    <section className="bg-white py-20 lg:py-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1">
            <AnimateIn>
              <div className="relative h-[300px] md:h-[450px] w-full rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/hero-tractor.jpg" // Placeholder for an institutional visual (e.g., lab, high-tech farming, or official setting)
                  alt="AIPL Institutional Facility or Lab"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateIn>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <AnimateIn>
              <p className="text-forest uppercase tracking-widest text-xs font-semibold mb-4">
                {dict.home.trustStrip.label}
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {dict.home.trustStrip.title}
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="w-12 h-1 bg-forest mb-8"></div>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {dict.home.trustStrip.p1}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {dict.home.trustStrip.p2}
              </p>
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}
