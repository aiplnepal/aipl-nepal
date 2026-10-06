import { AnimateIn } from "@/components/sections/AnimateIn";
import { Microscope } from "lucide-react";

export function Phytopathology({ dict }: { dict: any }) {
  return (
    <section className="bg-gray-50 py-20 lg:py-32 border-b border-gray-100 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <AnimateIn>
          <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center mx-auto mb-8 text-forest">
            <Microscope className="w-8 h-8" strokeWidth={1.5} />
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            {dict.quality.phytopathology.title}
          </h2>
        </AnimateIn>
        
        <AnimateIn delay={0.2}>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-serif">
            <p>
              {dict.quality.phytopathology.p1}
            </p>
            <p>
              {dict.quality.phytopathology.p2}
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
