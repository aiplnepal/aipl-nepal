import { AnimateIn } from "@/components/sections/AnimateIn";
import Image from "next/image";

export function Leadership({ dict }: { dict: any }) {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <div className="flex flex-col items-center text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-16">
              {dict.about.leadership.title}
            </h2>
            
            <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[4/5] relative w-full">
                <Image 
                  src="/founder.jpeg" 
                  alt="AIPL Leadership" 
                  fill 
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Prem Lama</h3>
                <p className="text-forest font-medium mb-6 uppercase tracking-wider text-sm">Managing Director</p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {dict.about.leadership.description}
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
