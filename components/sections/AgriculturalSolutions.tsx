import { AnimateIn } from "./AnimateIn";
import { Sprout, Wrench, BarChart3, Leaf, FlaskConical, GraduationCap, Microscope } from "lucide-react";

const getSolutions = (dict: any) => [
  {
    icon: Sprout,
    title: dict.home.agriculturalSolutions.solutions[0].title,
    description: dict.home.agriculturalSolutions.solutions[0].description,
  },
  {
    icon: Wrench,
    title: dict.home.agriculturalSolutions.solutions[1].title,
    description: dict.home.agriculturalSolutions.solutions[1].description,
  },
  {
    icon: BarChart3,
    title: dict.home.agriculturalSolutions.solutions[2].title,
    description: dict.home.agriculturalSolutions.solutions[2].description,
  },
  {
    icon: Leaf,
    title: dict.home.agriculturalSolutions.solutions[3].title,
    description: dict.home.agriculturalSolutions.solutions[3].description,
  },
  {
    icon: FlaskConical,
    title: dict.home.agriculturalSolutions.solutions[4].title,
    description: dict.home.agriculturalSolutions.solutions[4].description,
  },
  {
    icon: GraduationCap,
    title: dict.home.agriculturalSolutions.solutions[5].title,
    description: dict.home.agriculturalSolutions.solutions[5].description,
  },
  {
    icon: Microscope,
    title: dict.home.agriculturalSolutions.solutions[6].title,
    description: dict.home.agriculturalSolutions.solutions[6].description,
  },
];

export function AgriculturalSolutions({ dict }: { dict: any }) {
  return (
    <section className="bg-gray-50 py-20 lg:py-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <AnimateIn>
            <p className="text-forest uppercase tracking-widest text-xs font-semibold mb-4">
              {dict.home.agriculturalSolutions.label}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {dict.home.agriculturalSolutions.title}
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-gray-600 text-lg">
              {dict.home.agriculturalSolutions.description}
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {getSolutions(dict).map((solution: any, i: number) => (
            <AnimateIn key={solution.title} delay={0.1 + (i * 0.05)}>
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col group">
                <div className="w-12 h-12 rounded-lg bg-forest/10 flex items-center justify-center mb-6 text-forest group-hover:bg-forest group-hover:text-white transition-colors">
                  <solution.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{solution.description}</p>
                
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <span className="text-sm font-semibold text-forest group-hover:text-forest-dark transition-colors inline-flex items-center gap-1 cursor-pointer">
                    {dict.home.agriculturalSolutions.learnMore} <span className="text-lg leading-none">&rarr;</span>
                  </span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
