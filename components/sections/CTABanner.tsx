import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

export function CTABanner({ dict, locale = "en" }: { dict: any, locale?: string }) {
  return (
    <section className="bg-forest-deeper text-white py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-forest/20 mix-blend-multiply" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <AnimateIn>
          <p className="text-forest-light uppercase tracking-widest text-xs font-semibold mb-6">
            {dict.home.ctaBanner.label}
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            {dict.home.ctaBanner.title}
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            {dict.home.ctaBanner.description}
          </p>
        </AnimateIn>
        <AnimateIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 justify-center rounded-md px-8 py-4 text-sm font-semibold bg-white text-forest hover:bg-gray-50 transition-colors shadow-lg shadow-black/10"
            >
              {dict.home.ctaBanner.contactUs} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`/${locale}/products`}
              className="inline-flex items-center justify-center rounded-md px-8 py-4 text-sm font-semibold border border-white/20 text-white hover:bg-white/5 transition-colors"
            >
              {dict.home.ctaBanner.exploreProducts}
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
