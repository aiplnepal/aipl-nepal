import { AnimateIn } from "@/components/sections/AnimateIn";
import Image from "next/image";

export function SoilHealthSection({ dict }: { dict: any }) {
  return (
    <section className="bg-forest-deeper text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <AnimateIn>
              <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-soil.jpg" // Using an authentic soil/agricultural placeholder
                  alt="Healthy agricultural soil"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateIn>
          </div>

          <div className="order-1 lg:order-2">
            <AnimateIn>
              <p className="text-forest-light uppercase tracking-widest text-xs font-semibold mb-4">
                {dict.quality.soilHealth.label}
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                {dict.quality.soilHealth.title}
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  Soil is the primary asset of any agricultural system. AIPL&apos;s approach centers on understanding and improving soil health as the prerequisite for high-yield, sustainable farming.
                </p>
                <p>
                  {dict.quality.soilHealth.p2}
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-light shrink-0" />
                    <span>{dict.quality.soilHealth.points[0]}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-light shrink-0" />
                    <span>{dict.quality.soilHealth.points[1]}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-light shrink-0" />
                    <span>{dict.quality.soilHealth.points[2]}</span>
                  </li>
                </ul>
              </div>
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}
