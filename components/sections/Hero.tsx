import Link from "next/link";
import Image from "next/image";
import { AnimateIn } from "./AnimateIn";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(57,181,74,0.06)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(57,181,74,0.04)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
            <AnimateIn>
              <p className="text-forest uppercase tracking-[0.25em] text-sm font-semibold mb-4 md:mb-6">
                Agricultural Investment Pvt. Ltd.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-[1.1] mb-4 md:mb-6 text-gray-900">
                Growing Nepal,
                <br />
                <span className="text-forest">One Field at a Time</span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-gray-500 text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed">
                Fertilizers, bio pesticides, and crop care products trusted by
                farmers and dealers across Nepal.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold bg-forest text-white hover:bg-forest-dark transition-colors shadow-lg shadow-forest/20"
                >
                  Explore Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold border-2 border-forest/20 text-forest hover:bg-forest/5 transition-colors"
                >
                  Talk to Us
                </Link>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.4} className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl mt-8 md:mt-0">
            <Image
              src="/happy-farmer-hero-v2.webp"
              alt="Happy farmer in a lush field at sunrise"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
