import { AnimateIn } from "@/components/sections/AnimateIn";
import Image from "next/image";

export function ProductsHero({ dict }: { dict?: any }) {
  return (
    <section className="bg-forest-deeper text-white relative overflow-hidden min-h-[50vh] flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-tech-farmer.jpg" // Reusing the authentic visual direction
          alt="AIPL Agricultural Products"
          fill
          className="object-cover opacity-30 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deeper/80 via-forest-deeper/50 to-forest-deeper/90" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center py-24 lg:py-32">
        <AnimateIn>
          <p className="text-forest-light uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-6">
            {dict.products.hero.label}
          </p>
        </AnimateIn>
        
        <AnimateIn delay={0.1}>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8 drop-shadow-sm">
            {dict.products.hero.title}
          </h1>
        </AnimateIn>
        
        <AnimateIn delay={0.2}>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-serif">
            {dict.products.hero.description}
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
