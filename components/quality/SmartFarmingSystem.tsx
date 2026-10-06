import { AnimateIn } from "@/components/sections/AnimateIn";
import { ArrowDown, Sprout, Activity, Server, MessageSquare, Hand } from "lucide-react";

export function SmartFarmingSystem({ dict }: { dict: any }) {
  return (
    <section className="bg-gray-50 py-20 lg:py-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <AnimateIn>
              <p className="text-forest uppercase tracking-widest text-xs font-semibold mb-4">
                {dict.quality.smartFarming.label}
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                {dict.quality.smartFarming.title}
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  {dict.quality.smartFarming.p1}
                </p>
                <p>
                  {dict.quality.smartFarming.p2}
                </p>
              </div>
            </AnimateIn>
          </div>

          <div className="relative">
            <AnimateIn>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-sm mx-auto">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mb-2">
                      <Sprout className="w-6 h-6 text-forest" />
                    </div>
                    <span className="text-sm font-bold text-gray-900">{dict.quality.smartFarming.steps[0].step}</span>
                    <span className="text-xs text-gray-500">{dict.quality.smartFarming.steps[0].desc}</span>
                  </div>
                  
                  <ArrowDown className="w-5 h-5 text-gray-300" />
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                      <Activity className="w-6 h-6 text-gray-600" />
                    </div>
                    <span className="text-sm font-bold text-gray-900">{dict.quality.smartFarming.steps[1].step}</span>
                    <span className="text-xs text-gray-500">{dict.quality.smartFarming.steps[1].desc}</span>
                  </div>

                  <ArrowDown className="w-5 h-5 text-gray-300" />
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                      <Server className="w-6 h-6 text-gray-600" />
                    </div>
                    <span className="text-sm font-bold text-gray-900">{dict.quality.smartFarming.steps[2].step}</span>
                    <span className="text-xs text-gray-500">{dict.quality.smartFarming.steps[2].desc}</span>
                  </div>

                  <ArrowDown className="w-5 h-5 text-gray-300" />

                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                      <MessageSquare className="w-6 h-6 text-gray-600" />
                    </div>
                    <span className="text-sm font-bold text-gray-900">{dict.quality.smartFarming.steps[3].step}</span>
                    <span className="text-xs text-gray-500">{dict.quality.smartFarming.steps[3].desc}</span>
                  </div>

                  <ArrowDown className="w-5 h-5 text-gray-300" />

                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mb-2">
                      <Hand className="w-6 h-6 text-forest" />
                    </div>
                    <span className="text-sm font-bold text-gray-900">{dict.quality.smartFarming.steps[4].step}</span>
                    <span className="text-xs text-gray-500">{dict.quality.smartFarming.steps[4].desc}</span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}
