import { AnimateIn } from "@/components/sections/AnimateIn";

export function ResourcesHero({ dict }: { dict: any }) {
  return (
    <section className="bg-forest-deeper text-white relative overflow-hidden min-h-[50vh] flex flex-col justify-center py-24 md:py-32">
      <div className="relative max-w-7xl mx-auto px-6 z-10 flex flex-col items-center text-center">
        <AnimateIn>
          <p className="text-white/90 uppercase tracking-[0.2em] text-sm font-semibold mb-6">
            {dict.resources.hero.label}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            {dict.resources.hero.title}
          </h1>
        </AnimateIn>
        
        <AnimateIn delay={0.1}>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-serif leading-relaxed">
            {dict.resources.hero.description}
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
