import { AnimateIn } from "@/components/sections/AnimateIn";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import type { Resource } from "@/lib/types";

export function FeaturedResource({ resource, dict, locale = "en" }: { resource: Resource, dict?: any, locale?: string }) {
  if (!resource) return null;

  const formattedDate = new Date(resource.publishedAt).toLocaleDateString(locale === "ne" ? "ne-NP" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="py-20 lg:py-32 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <p className="text-forest uppercase tracking-widest text-xs font-semibold mb-8">
            {dict.resources.featured.label}
          </p>
        </AnimateIn>
        
        <div className="group relative rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 hover:border-forest/30 hover:shadow-xl transition-all duration-500">
          <Link href={`/${locale}/resources/${resource.slug}`} className="absolute inset-0 z-10">
            <span className="sr-only">Read {resource.title}</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm font-medium mb-6">
                <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm text-forest">
                  <Tag className="h-3.5 w-3.5" />
                  {resource.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formattedDate}
                </span>
              </div>
              
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-forest transition-colors">
                {resource.title}
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-serif">
                {resource.excerpt}
              </p>
              
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-forest transition-colors">
                {dict.resources.featured.readArticle} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            <div className="relative h-64 lg:h-auto bg-forest-deeper/5 hidden md:block">
               {/* Optional: Add an image here if featured image data exists. Otherwise use a stylized pattern or brand element. */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-forest/10 via-transparent to-transparent opacity-50" />
               <div className="absolute inset-0 flex items-center justify-center p-12">
                 <div className="w-full h-full border border-forest/10 rounded-2xl relative overflow-hidden bg-white/50 backdrop-blur-sm">
                   <div className="absolute top-8 left-8 right-8 h-px bg-forest/20" />
                   <div className="absolute top-16 left-8 right-8 h-px bg-forest/20" />
                   <div className="absolute top-24 left-8 right-[30%] h-px bg-forest/20" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
