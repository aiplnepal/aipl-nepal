import { AnimateIn } from "@/components/sections/AnimateIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function KnowledgeCTA({ dict, locale = "en" }: { dict: any, locale?: string }) {
  return (
    <section className="bg-white py-20 lg:py-32 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimateIn>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {dict.resources.cta.title}
          </h2>
        </AnimateIn>
        
        <AnimateIn delay={0.1}>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            {dict.resources.cta.description}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/quality`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold bg-forest text-white hover:bg-forest-dark transition-colors shadow-md"
            >
              {dict.resources.cta.exploreServices} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold bg-white text-gray-900 border border-gray-200 hover:border-forest hover:text-forest transition-colors"
            >
              {dict.resources.cta.contactUs}
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
