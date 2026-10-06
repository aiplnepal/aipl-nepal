import { AnimateIn } from "@/components/sections/AnimateIn";
import { Users } from "lucide-react";

export function Leadership({ dict }: { dict: any }) {
  // TODO: [CLIENT VERIFICATION REQUIRED]
  // Leadership data is pending. Displaying placeholder state rather than fake profiles.
  
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <AnimateIn>
          <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-6 text-forest">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {dict.about.leadership.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            The team driving AIPL&apos;s mission to revitalize Nepali agriculture. Leadership profiles and institutional board information will be published shortly.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
