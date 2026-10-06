import { AnimateIn } from "@/components/sections/AnimateIn";
import { BadgeCheck, Info } from "lucide-react";

export function CertificationsPlaceholder({ dict }: { dict: any }) {
  return (
    <section className="bg-white py-20 lg:py-32 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimateIn>
          <div className="w-16 h-16 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center mx-auto mb-8 text-gray-400">
            <BadgeCheck className="w-8 h-8" strokeWidth={1.5} />
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {dict.quality.certifications.title}
          </h2>
        </AnimateIn>
        
        <AnimateIn delay={0.2}>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            {dict.quality.certifications.description}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <div className="inline-flex items-start text-left gap-3 bg-gray-50 border border-gray-200 p-4 rounded-xl max-w-xl mx-auto">
            <Info className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
            <p className="text-sm text-gray-500 leading-relaxed">
              {dict.quality.certifications.info}
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
