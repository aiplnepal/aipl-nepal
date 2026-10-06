import { getAllResources } from "@/lib/data/resources";
import { AnimateIn } from "./AnimateIn";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export async function ResourcePreview({ dict, locale = "en" }: { dict?: any, locale?: string }) {
  const resources = await getAllResources(locale as any);
  const featuredResources = resources.slice(0, 3);

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <AnimateIn>
              <p className="text-forest uppercase tracking-widest text-xs font-semibold mb-4">
                {dict?.home?.resourcePreview?.label || "Knowledge & Education"}
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {dict?.home?.resourcePreview?.title || "Latest Agricultural Resources"}
              </h2>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.2} className="shrink-0">
            <Link
              href={`/${locale}/resources`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-forest transition-colors group"
            >
              {dict.home.resourcePreview.viewAll}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredResources.map((resource, i) => (
            <AnimateIn key={resource.slug} delay={0.1 + (i * 0.1)}>
              <Link 
                href={`/${locale}/resources/${resource.slug}`}
                className="group block h-full border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Fallback image area since we don't have real images in the mock data yet */}
                <div className="h-48 bg-gray-50 flex items-center justify-center border-b border-gray-100 relative overflow-hidden">
                  <BookOpen className="h-8 w-8 text-gray-300" />
                  <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/5 transition-colors" />
                </div>
                <div className="p-6 md:p-8 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-forest bg-forest/5 px-2.5 py-1 rounded-sm">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-forest transition-colors line-clamp-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {resource.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest group-hover:gap-2.5 transition-all mt-auto">
                    {dict.home.resourcePreview.readArticle} <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
