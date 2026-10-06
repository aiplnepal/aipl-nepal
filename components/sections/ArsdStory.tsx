import { AnimateIn } from "./AnimateIn";
import Image from "next/image";

export function ArsdStory({ dict }: { dict: any }) {
  return (
    <section className="bg-forest-deeper text-white py-20 lg:py-32 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <AnimateIn>
              <p className="text-forest-light uppercase tracking-widest text-xs font-semibold mb-4">
                {dict.home.arsdStory.label}
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {dict.home.arsdStory.title}
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-xl md:text-2xl font-serif italic text-white/80 mb-8">
                {dict.home.arsdStory.nepaliQuote}
              </p>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  {dict.home.arsdStory.p1}
                </p>
                <p>
                  {dict.home.arsdStory.p2}
                </p>
              </div>
            </AnimateIn>
          </div>

          <div className="relative">
            <AnimateIn delay={0.4}>
              <div className="aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto rounded-2xl overflow-hidden relative shadow-2xl border border-white/10">
                <Image
                  src="/arsd-farmer.jpg" // Placeholder for an authentic portrait of a Nepali farmer
                  alt="A proud Nepalese farmer representing the ARSD initiative"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}
