import { AnimateIn } from "./AnimateIn";
import Image from "next/image";
import { CloudRain, ThermometerSun, CalendarClock, Database } from "lucide-react";

const sfmsIcons = [CloudRain, ThermometerSun, CalendarClock, Database];

export function SmartFarming({ dict }: { dict: any }) {
  const sfmsFeatures = dict.home.smartFarming.features.map(
    (f: { title: string; description: string }, i: number) => ({ ...f, icon: sfmsIcons[i] ?? Database })
  );
  return (
    <section className="bg-white py-20 lg:py-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 xl:order-1">
            <AnimateIn>
              <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src="/sfms-technology.jpg" // Placeholder for an agricultural technology image (e.g., sensor in soil)
                  alt={dict.home.smartFarming.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateIn>
          </div>

          <div className="order-1 xl:order-2">
            <AnimateIn>
              <p className="text-forest uppercase tracking-widest text-xs font-semibold mb-4">
                {dict.home.smartFarming.eyebrow}
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {dict.home.smartFarming.title}
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                {dict.home.smartFarming.intro}
              </p>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sfmsFeatures.map((feature: { title: string; description: string; icon: typeof Database }, i: number) => (
                <AnimateIn key={feature.title} delay={0.3 + (i * 0.1)}>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                      <feature.icon className="h-5 w-5 text-forest" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
            
            <AnimateIn delay={0.7} className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-xs text-gray-400 italic">
                {dict.home.smartFarming.note}
              </p>
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}
