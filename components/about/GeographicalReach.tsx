import { AnimateIn } from "@/components/sections/AnimateIn";
import Image from "next/image";

export function GeographicalReach({ dict }: { dict: any }) {
  // TODO: [CLIENT VERIFICATION REQUIRED]
  // Reach statistics pending final client confirmation
  const isVerified = false;

  return (
    <section className="bg-forest text-white py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-forest-deeper/50 mix-blend-multiply" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <AnimateIn>
              <p className="text-white/80 uppercase tracking-widest text-xs font-semibold mb-4">
                {dict.about.geographicalReach.label}
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {dict.about.geographicalReach.title}
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="w-12 h-1 bg-white mb-8"></div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                {dict.about.geographicalReach.description}
              </p>
            </AnimateIn>

            {isVerified && (
              <AnimateIn delay={0.3} className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20 mt-8">
                <div>
                  <p className="font-heading text-4xl font-bold mb-2 text-white">7</p>
                  <p className="text-sm text-white/80 font-medium uppercase tracking-wider">{dict.about.geographicalReach.provinces}</p>
                </div>
                <div>
                  <p className="font-heading text-4xl font-bold mb-2 text-white">77</p>
                  <p className="text-sm text-white/80 font-medium uppercase tracking-wider">{dict.about.geographicalReach.districts}</p>
                </div>
                <div>
                  <p className="font-heading text-4xl font-bold mb-2 text-white">6,743</p>
                  <p className="text-sm text-white/80 font-medium uppercase tracking-wider">{dict.about.geographicalReach.wards}</p>
                </div>
              </AnimateIn>
            )}
            {!isVerified && (
              <AnimateIn delay={0.3}>
                <p className="text-white/60 text-sm italic">
                  {dict.about.geographicalReach.footnote}
                </p>
              </AnimateIn>
            )}
          </div>

          <div className="relative h-[300px] lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <AnimateIn className="w-full h-full" delay={0.4}>
              <Image
                src="/nepal-landscape.jpg" // Reusing authentic landscape placeholder
                alt="Agricultural expansion across Nepal"
                fill
                className="object-cover"
              />
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}
