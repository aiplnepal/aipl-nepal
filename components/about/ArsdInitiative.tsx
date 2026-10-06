import { AnimateIn } from "@/components/sections/AnimateIn";

export function ArsdInitiative({ dict }: { dict: any }) {
  return (
    <section className="bg-forest text-white py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-forest-deeper/40 mix-blend-multiply" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <AnimateIn>
          <p className="text-white/80 uppercase tracking-widest text-xs font-semibold mb-6">
            {dict.about.arsdInitiative.label}
          </p>
        </AnimateIn>
        
        <AnimateIn delay={0.1}>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight max-w-4xl mx-auto">
            {dict.about.arsdInitiative.title}
          </h2>
        </AnimateIn>
        
        <AnimateIn delay={0.2}>
          <p className="text-2xl md:text-3xl font-serif italic text-white/90 mb-12">
            {dict.about.arsdInitiative.nepaliQuote}
          </p>
        </AnimateIn>
        
        <AnimateIn delay={0.3}>
          <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-white/90 leading-relaxed">
            <p>
              The ARSD initiative is AIPL&apos;s flagship campaign. It represents our fundamental commitment to completely restructuring the agricultural support network in Nepal.
            </p>
            <p>
              {dict.about.arsdInitiative.p2}
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
