import { AnimateIn } from "@/components/sections/AnimateIn";
import { Sprout, Settings, Database } from "lucide-react";

export function AgriculturalContext({ dict }: { dict?: any }) {
  return (
    <section className="bg-forest/5 py-20 lg:py-32 border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-forest uppercase tracking-widest text-xs font-semibold mb-4">
              {dict.products.agriculturalContext.label}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {dict.products.agriculturalContext.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {dict.products.agriculturalContext.description}
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimateIn delay={0.1}>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 h-full">
              <Sprout className="w-8 h-8 text-forest mb-6" />
              <h3 className="font-bold text-gray-900 text-xl mb-4">{dict.products.agriculturalContext.cards[0].title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {dict.products.agriculturalContext.cards[0].description}
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 h-full">
              <Database className="w-8 h-8 text-forest mb-6" />
              <h3 className="font-bold text-gray-900 text-xl mb-4">{dict.products.agriculturalContext.cards[1].title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {dict.products.agriculturalContext.cards[1].description}
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 h-full">
              <Settings className="w-8 h-8 text-forest mb-6" />
              <h3 className="font-bold text-gray-900 text-xl mb-4">{dict.products.agriculturalContext.cards[2].title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {dict.products.agriculturalContext.cards[2].description}
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
