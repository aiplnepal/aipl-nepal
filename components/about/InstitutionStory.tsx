import { AnimateIn } from "@/components/sections/AnimateIn";
import Image from "next/image";

export function InstitutionStory({ dict }: { dict: any }) {
  return (
    <section className="bg-white py-20 lg:py-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <AnimateIn>
                <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src="/hero-tractor.jpg" // Reusing institutional visual
                    alt="AIPL Institution"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimateIn>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-16">
              <AnimateIn>
                <p className="text-forest uppercase tracking-widest text-xs font-semibold mb-4">
                  {dict.about.institutionStory.label1}
                </p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  {dict.about.institutionStory.title1}
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    {dict.about.institutionStory.p1}
                  </p>
                  <p>
                    {dict.about.institutionStory.p2}
                  </p>
                </div>
              </AnimateIn>
            </div>

            <div>
              <AnimateIn delay={0.2}>
                <p className="text-forest uppercase tracking-widest text-xs font-semibold mb-4">
                  {dict.about.institutionStory.label2}
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {dict.about.institutionStory.title2}
                </h3>
              </AnimateIn>
              <AnimateIn delay={0.3}>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    {dict.about.institutionStory.p3} 
                  </p>
                  <p>
                    {dict.about.institutionStory.p4}
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
