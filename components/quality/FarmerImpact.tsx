import { AnimateIn } from "@/components/sections/AnimateIn";
import { Users2, Map, ShieldCheck } from "lucide-react";

export function FarmerImpact({ dict }: { dict: any }) {
  return (
    <section className="bg-gray-50 py-20 lg:py-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {dict.quality.farmerImpact.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              {dict.quality.farmerImpact.description}
            </p>
            <p className="text-xs text-gray-400 italic">
              {dict.quality.farmerImpact.footnote}
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimateIn delay={0.1}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center mx-auto mb-6 text-forest">
                <Map className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">{dict.quality.farmerImpact.impacts[0].title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm max-w-xs mx-auto">
                {dict.quality.farmerImpact.impacts[0].description}
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center mx-auto mb-6 text-forest">
                <Users2 className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">{dict.quality.farmerImpact.impacts[1].title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm max-w-xs mx-auto">
                {dict.quality.farmerImpact.impacts[1].description}
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center mx-auto mb-6 text-forest">
                <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">{dict.quality.farmerImpact.impacts[2].title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm max-w-xs mx-auto">
                {dict.quality.farmerImpact.impacts[2].description}
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
