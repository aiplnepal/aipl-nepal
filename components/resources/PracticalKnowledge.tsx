import { AnimateIn } from "@/components/sections/AnimateIn";
import { BookOpen, Leaf, Sprout } from "lucide-react";

export function PracticalKnowledge({ dict }: { dict: any }) {
  return (
    <section className="bg-gray-50 py-20 lg:py-32 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <AnimateIn>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {dict.resources.practicalKnowledge.title}
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-serif">
                <p>
                  {dict.resources.practicalKnowledge.p1}
                </p>
                <p>
                  {dict.resources.practicalKnowledge.p2}
                </p>
              </div>
            </AnimateIn>
          </div>

          <div className="space-y-6">
            <AnimateIn delay={0.2}>
              <div className="bg-white border border-gray-100 p-6 rounded-2xl flex items-start gap-5 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center shrink-0 mt-1">
                  <BookOpen className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{dict.resources.practicalKnowledge.points[0].title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {dict.resources.practicalKnowledge.points[0].description}
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <div className="bg-white border border-gray-100 p-6 rounded-2xl flex items-start gap-5 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center shrink-0 mt-1">
                  <Sprout className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{dict.resources.practicalKnowledge.points[1].title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {dict.resources.practicalKnowledge.points[1].description}
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.4}>
              <div className="bg-white border border-gray-100 p-6 rounded-2xl flex items-start gap-5 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center shrink-0 mt-1 shadow-md">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{dict.resources.practicalKnowledge.points[2].title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {dict.resources.practicalKnowledge.points[2].description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
          
        </div>
      </div>
    </section>
  );
}
