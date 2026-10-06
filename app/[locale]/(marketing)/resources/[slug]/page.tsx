import { getDictionary, Locale } from "@/lib/i18n/dictionaries";
import { getResourceBySlug, getAllResources } from "@/lib/data/resources";
import { notFound } from "next/navigation";
import { AnimateIn } from "@/components/sections/AnimateIn";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, ArrowRight, Share2 } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";
import { getAlternates } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const resources = await getAllResources();
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const p = await params;
  const locale = p.locale as Locale;
  const resource = await getResourceBySlug(p.slug, locale);
  if (!resource) return { title: "Resource Not Found" };
  
  return { 
    title: resource.title, 
    description: resource.excerpt,
    alternates: getAlternates(`/resources/${p.slug}`, locale),
    openGraph: {
      title: resource.title,
      description: resource.excerpt,
    }
  };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const p = await params;
  const locale = p.locale as Locale;
  const resource = await getResourceBySlug(p.slug, locale);
  const dict = await getDictionary(locale);

  if (!resource) {
    notFound();
  }

  const allResources = await getAllResources(locale);
  const relatedResources = allResources
    .filter((r) => r.slug !== resource.slug && (r.category === resource.category || true))
    .slice(0, 2);

  // Format date nicely
  const formattedDate = new Date(resource.publishedAt).toLocaleDateString(p.locale === "ne" ? "ne-NP" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <article className="bg-white pt-32 pb-16 md:pt-48 md:pb-24 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateIn>
            <div className="mb-12">
              <Link
                href={`/${p.locale}/resources`}
                className="inline-flex items-center gap-2 text-gray-500 hover:text-forest transition-colors text-sm font-semibold uppercase tracking-wider"
              >
                <ArrowLeft className="h-4 w-4" /> {dict.resources?.detail?.backToResources || "Back to Resources"}
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm font-medium mb-8">
              <span className="inline-flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full border border-gray-200 text-forest">
                <Tag className="h-3.5 w-3.5" />
                {resource.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formattedDate}
              </span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-gray-900">
              {resource.title}
            </h1>
            
            <p className="text-gray-600 text-xl md:text-2xl font-serif leading-relaxed mb-12 border-l-4 border-forest pl-6">
              {resource.excerpt}
            </p>
          </AnimateIn>
          
          <AnimateIn delay={0.1}>
            <div className="flex items-center justify-between py-6 border-y border-gray-100 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest font-bold text-sm">
                  AIPL
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">AIPL Agricultural Advisory</p>
                  <p className="text-xs text-gray-500">Technical Team</p>
                </div>
              </div>
              <button className="p-2 text-gray-400 hover:text-forest transition-colors rounded-full hover:bg-gray-50" aria-label="Share article">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div 
              className="prose prose-lg prose-gray max-w-none font-serif leading-loose
                prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mt-12 prose-headings:mb-6
                prose-h2:text-3xl prose-h3:text-2xl
                prose-p:text-gray-700 prose-p:mb-8
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8 prose-li:mb-3 prose-li:text-gray-700
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-8
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-blockquote:border-l-4 prose-blockquote:border-forest prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700"
              dangerouslySetInnerHTML={{ __html: resource.content || "<p>Content coming soon.</p>" }}
            />
          </AnimateIn>
        </div>
      </article>

      {relatedResources.length > 0 && (
        <section className="py-20 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <AnimateIn>
              <div className="flex items-end justify-between mb-12 border-b border-gray-200 pb-6">
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  {dict.resources?.detail?.relatedReading || "Related Reading"}
                </h2>
                <Link
                  href={`/${p.locale}/resources`}
                  className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-forest transition-colors"
                >
                  {dict.resources?.detail?.viewAllResources || "View All Resources"} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimateIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedResources.map((rel, i) => (
                <AnimateIn key={rel.id} delay={i * 0.1}>
                  <Link
                    href={`/${p.locale}/resources/${rel.slug}`}
                    className="group block bg-white rounded-2xl p-8 border border-gray-100 hover:border-forest/30 hover:shadow-xl transition-all duration-300"
                  >
                    <span className="inline-flex items-center gap-1.5 text-forest uppercase tracking-wider text-xs font-semibold mb-4">
                      <Tag className="h-3.5 w-3.5" />
                      {rel.category}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 group-hover:text-forest transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-gray-600 font-serif leading-relaxed mb-6">
                      {rel.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-forest transition-colors">
                      {dict.resources?.detail?.readArticle || "Read Article"} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </AnimateIn>
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Link
                href={`/${p.locale}/resources`}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-white text-gray-900 border border-gray-200 hover:border-forest hover:text-forest transition-colors w-full"
              >
                {dict.resources?.detail?.viewAllResources || "View All Resources"}
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTABanner dict={dict} locale={p.locale} />
    </>
  );
}
