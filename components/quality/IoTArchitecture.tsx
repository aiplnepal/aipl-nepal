import { AnimateIn } from "@/components/sections/AnimateIn";
import { Droplets, Activity, CloudSun, ScanEye, GitMerge } from "lucide-react";

export function IoTArchitecture({ dict }: { dict: any }) {
  const getCapabilities = (dict: any) => [
    {
      icon: Droplets,
      title: dict.quality.iotArchitecture.capabilities[0].title,
      description: dict.quality.iotArchitecture.capabilities[0].description,
    },
    {
      icon: Activity,
      title: dict.quality.iotArchitecture.capabilities[1].title,
      description: dict.quality.iotArchitecture.capabilities[1].description,
    },
    {
      icon: CloudSun,
      title: dict.quality.iotArchitecture.capabilities[2].title,
      description: dict.quality.iotArchitecture.capabilities[2].description,
    },
    {
      icon: ScanEye,
      title: dict.quality.iotArchitecture.capabilities[3].title,
      description: dict.quality.iotArchitecture.capabilities[3].description,
    },
    {
      icon: GitMerge,
      title: dict.quality.iotArchitecture.capabilities[4].title,
      description: dict.quality.iotArchitecture.capabilities[4].description,
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-forest uppercase tracking-widest text-xs font-semibold mb-4">
              {dict.quality.iotArchitecture.label}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {dict.quality.iotArchitecture.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {dict.quality.iotArchitecture.description}
            </p>
            <p className="text-xs text-gray-400 mt-4 italic">
              {dict.quality.iotArchitecture.footnote}
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getCapabilities(dict).map((cap: any, i: number) => (
            <AnimateIn key={cap.title} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 h-full">
                <cap.icon className="w-8 h-8 text-forest mb-6" />
                <h3 className="font-bold text-gray-900 text-xl mb-3">{cap.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {cap.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
