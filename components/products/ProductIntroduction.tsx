import { AnimateIn } from "@/components/sections/AnimateIn";

export function ProductIntroduction({ dict }: { dict?: any }) {
  return (
    <section className="bg-white py-20 lg:py-32 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimateIn>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            {dict.products.introduction.title}
          </h2>
        </AnimateIn>
        
        <AnimateIn delay={0.1}>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-serif">
            <p>
              {dict.products.introduction.p1}
            </p>
            <p>
              {dict.products.introduction.p2}
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
