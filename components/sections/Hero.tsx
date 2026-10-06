import Link from "next/link";
import Image from "next/image";
import { AnimateIn } from "./AnimateIn";
import { ArrowRight } from "lucide-react";

export function Hero({ dict, locale }: { dict: any; locale: string }) {
  return (
    <section className="bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)] md:min-h-[700px]">
          
          {/* Content Side */}
          <div className="flex flex-col justify-center px-6 py-16 lg:py-24 lg:pr-16 z-10 bg-white">
            <AnimateIn>
              <div className="inline-flex items-center gap-2 mb-6 md:mb-8">
                <span className="h-px w-8 bg-forest"></span>
                <p className="text-forest uppercase tracking-[0.2em] text-xs font-semibold">
                  {dict.home.hero.subtitle}
                </p>
              </div>
            </AnimateIn>
            
            <AnimateIn delay={0.1}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.1] mb-6 text-gray-900 tracking-tight">
                {dict.home.hero.title.line1} <br className="hidden sm:block" />
                <span className="text-forest">{dict.home.hero.title.line2}</span>
              </h1>
            </AnimateIn>
            
            <AnimateIn delay={0.2}>
              <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
                {dict.home.hero.description}
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <p className="text-gray-400 text-sm md:text-base font-medium mb-10 italic">
                {dict.home.hero.nepaliQuote}
              </p>
            </AnimateIn>
            
            <AnimateIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/${locale}/products`}
                  className="inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-sm font-semibold bg-forest text-white hover:bg-forest-dark transition-colors shadow-sm"
                >
                  {dict.home.hero.exploreProducts}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={`/${locale}/about`}
                  className="inline-flex items-center justify-center rounded-md px-8 py-3.5 text-sm font-semibold border border-gray-200 text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition-colors"
                >
                  {dict.home.hero.discover}
                </Link>
              </div>
            </AnimateIn>
          </div>

          {/* Image Side */}
          <div className="relative h-[400px] lg:h-full w-full bg-gray-100 lg:clip-path-hero">
            <div className="w-full h-full animate-in fade-in duration-1000">
              <Image
                src="/hero-tech-farmer.jpg"
                alt={dict.home.hero.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Subtle gradient overlay to ensure the image feels integrated */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
