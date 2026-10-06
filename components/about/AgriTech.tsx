import { AnimateIn } from "@/components/sections/AnimateIn";
import Image from "next/image";

export function AgriTech({ dict }: { dict: any }) {
  return (
    <section className="bg-gray-50 py-20 lg:py-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <AnimateIn>
              <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                <Image
                  src="/sfms-technology.jpg" // Reusing SFMS image placeholder
                  alt="Agriculture and Technology Integration"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateIn>
          </div>

          <div className="order-1 lg:order-2">
            <AnimateIn>
              <p className="text-forest uppercase tracking-widest text-xs font-semibold mb-4">
                {dict.about.agriTech.label}
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                {dict.about.agriTech.title}
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  {dict.about.agriTech.p1}
                </p>
                <p>
                  {dict.about.agriTech.p2}
                </p>
              </div>
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}
