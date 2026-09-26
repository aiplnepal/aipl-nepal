import { getTestimonials } from "@/lib/data/testimonials";
import { Quote, MoveRight } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

export async function TestimonialRow() {
  const testimonials = await getTestimonials();

  return (
    <section className="py-20 md:py-28 bg-forest/5">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center mb-14">
            <p className="text-forest uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              What People Say
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Trusted Across Nepal
            </h2>
          </div>
        </AnimateIn>
        {/* PLACEHOLDER: confirm with AIPL before launch — these are placeholder quotes pending real client-supplied testimonials */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {testimonials.map((t, i) => (
            <AnimateIn 
              key={t.id} 
              delay={i * 0.1} 
              className="snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] flex"
            >
              <div className="bg-white rounded-xl p-8 shadow-sm w-full flex flex-col hover:shadow-md transition-shadow">
                <Quote className="h-8 w-8 text-forest/30 mb-4" />
                <p className="text-gray-700 leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="font-semibold text-forest text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">
                    {t.role} &middot; {t.location}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-2 text-forest/70 animate-pulse">
          <span className="text-sm font-medium">Scroll to see more</span>
          <MoveRight className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
}
