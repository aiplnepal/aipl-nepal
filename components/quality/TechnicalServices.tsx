import { AnimateIn } from "@/components/sections/AnimateIn";
import { SearchCode, Sprout, Hammer, ShoppingCart, TestTube2, Briefcase } from "lucide-react";

export function TechnicalServices({ dict }: { dict: any }) {
  const getServices = (dict: any) => [
    {
      icon: TestTube2,
      title: dict.quality.technicalServices.services[0].title,
      description: dict.quality.technicalServices.services[0].description,
    },
    {
      icon: Sprout,
      title: dict.quality.technicalServices.services[1].title,
      description: dict.quality.technicalServices.services[1].description,
    },
    {
      icon: Hammer,
      title: dict.quality.technicalServices.services[2].title,
      description: dict.quality.technicalServices.services[2].description,
    },
    {
      icon: ShoppingCart,
      title: dict.quality.technicalServices.services[3].title,
      description: dict.quality.technicalServices.services[3].description,
    },
    {
      icon: Briefcase,
      title: dict.quality.technicalServices.services[4].title,
      description: dict.quality.technicalServices.services[4].description,
    },
    {
      icon: SearchCode,
      title: dict.quality.technicalServices.services[5].title,
      description: dict.quality.technicalServices.services[5].description,
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-forest uppercase tracking-widest text-xs font-semibold mb-4">
              {dict.quality.technicalServices.label}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {dict.quality.technicalServices.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {dict.quality.technicalServices.description}
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getServices(dict).map((service: any, i: number) => (
            <AnimateIn key={service.title} delay={i * 0.1}>
              <div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-forest/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 rounded-full bg-forest/5 flex items-center justify-center mb-6 group-hover:bg-forest group-hover:text-white transition-colors text-forest">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
