import { AnimateIn } from "@/components/sections/AnimateIn";
import { FileText, Beaker, Sprout } from "lucide-react";

export function SoilHealthCard({ dict }: { dict: any }) {
  return (
    <section className="bg-white py-20 lg:py-32 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-forest rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Decorative graphic */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimateIn>
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6">
                  <FileText className="w-4 h-4" />
                  <span>{dict.quality.soilHealthCard.badge}</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  {dict.quality.soilHealthCard.title}
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  {dict.quality.soilHealthCard.p1}
                </p>
                <p className="text-sm italic text-white/60">
                  {dict.quality.soilHealthCard.footnote}
                </p>
              </AnimateIn>
            </div>
            
            <div className="space-y-4">
              <AnimateIn delay={0.2}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl flex items-start gap-4">
                  <Beaker className="w-6 h-6 text-forest-light shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">{dict.quality.soilHealthCard.cards[0].title}</h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {dict.quality.soilHealthCard.cards[0].description}
                    </p>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl flex items-start gap-4">
                  <Sprout className="w-6 h-6 text-forest-light shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">{dict.quality.soilHealthCard.cards[1].title}</h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {dict.quality.soilHealthCard.cards[1].description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
