import { AnimateIn } from "@/components/sections/AnimateIn";
import { BookOpen, Sprout, ShieldCheck, TrendingUp, HandCoins } from "lucide-react";

const getSupportPillars = (dict: any) => [
  {
    icon: BookOpen,
    title: dict.about.farmerSupport.pillars[0].title,
    description: dict.about.farmerSupport.pillars[0].description,
  },
  {
    icon: Sprout,
    title: dict.about.farmerSupport.pillars[1].title,
    description: dict.about.farmerSupport.pillars[1].description,
  },
  {
    icon: ShieldCheck,
    title: dict.about.farmerSupport.pillars[2].title,
    description: dict.about.farmerSupport.pillars[2].description,
  },
  {
    icon: TrendingUp,
    title: dict.about.farmerSupport.pillars[3].title,
    description: dict.about.farmerSupport.pillars[3].description,
  },
  {
    icon: HandCoins,
    title: dict.about.farmerSupport.pillars[4].title,
    description: dict.about.farmerSupport.pillars[4].description,
  },
];

export function FarmerSupport({ dict }: { dict: any }) {
  return (
    <section className="bg-white py-20 lg:py-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <AnimateIn>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {dict.about.farmerSupport.title}
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-gray-600 text-lg leading-relaxed">
              {dict.about.farmerSupport.description}
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getSupportPillars(dict).map((pillar: any, i: number) => (
            <AnimateIn key={pillar.title} delay={0.1 + (i * 0.1)}>
              <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 h-full hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mb-6">
                  <pillar.icon className="h-8 w-8 text-forest" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{pillar.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
