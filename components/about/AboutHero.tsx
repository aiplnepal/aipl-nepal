import { AnimateIn } from "@/components/sections/AnimateIn";
import Image from "next/image";

export function AboutHero({ dict }: { dict: any }) {
  return (
    <section className="bg-gray-900 text-white relative overflow-hidden min-h-[60vh] flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-tech-farmer.jpg" // Reusing the authentic visual direction from homepage
          alt="AIPL Agricultural Vision"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900/90" />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center py-24 lg:py-32">
        <AnimateIn>
          <p className="text-gray-300 uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-6">
            {dict.about.hero.label}
          </p>
        </AnimateIn>
        
        <AnimateIn delay={0.1}>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 drop-shadow-sm">
            {dict.about.hero.title}
          </h1>
        </AnimateIn>
        
        <AnimateIn delay={0.2}>
          <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto font-serif">
            {dict.about.hero.description}
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
