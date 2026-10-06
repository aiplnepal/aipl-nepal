import Link from "next/link";
import { FlaskConical, Shield, Sprout, Leaf, Recycle, ChevronRight, CheckCircle2, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimateIn } from "@/components/sections/AnimateIn";
import type { Product } from "@/lib/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  flask: FlaskConical,
  shield: Shield,
  sprout: Sprout,
  leaf: Leaf,
  recycle: Recycle,
  droplets: FlaskConical, // fallback since droplets isn't mapped
};

export function ProductDetailLayout({
  dict,
  locale,
  product,
  relatedProducts,
}: {
  product: Product;
  relatedProducts: Product[];
  dict: any;
  locale: string;
}) {
  const Icon = iconMap[product.icon] ?? FlaskConical;
  return (
    <>
      {/* 1. BREADCRUMB */}
      <div className="bg-forest-deeper border-b border-white/10 pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex text-sm text-white/60 font-medium" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href={`/${locale}`} className="hover:text-white transition-colors">{dict.common.productLayout.breadcrumbHome}</Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li>
                <Link href={`/${locale}/products`} className="hover:text-white transition-colors">{dict.common.productLayout.breadcrumbProducts}</Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li className="text-white" aria-current="page">
                {product.name}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 2. PRODUCT HERO */}
      <section className="bg-forest-deeper text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <AnimateIn>
              <div className="space-y-8">
                <div>
                  <Badge className="bg-white/10 text-white hover:bg-white/20 border-0 px-4 py-1.5 text-sm font-medium mb-6">
                    {dict.common.productLayout.badge}
                  </Badge>
                  <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                    {product.name}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/80 font-serif italic">
                    {product.tagline}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href={`/${locale}/contact?inquiryType=product-question&product=${product.slug}`}
                    className="inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-base font-semibold bg-white text-forest-deeper hover:bg-gray-100 transition-colors"
                  >
                    {dict.common.productLayout.makeEnquiry}
                  </Link>
                  <Link
                    href={`/${locale}/products`}
                    className="inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-base font-semibold border border-white/20 text-white hover:bg-white/5 transition-colors"
                  >
                    {dict.common.productLayout.exploreAll}
                  </Link>
                </div>
              </div>
            </AnimateIn>
            
            {/* Right Column (Editorial Visual) */}
            <AnimateIn delay={0.2}>
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square bg-forest rounded-2xl overflow-hidden flex items-center justify-center border border-white/10 shadow-2xl">
                {/* Fallback pattern / Icon representation since actual product images are missing */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`w-32 h-32 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20 shadow-xl`}>
                    <Icon className="h-16 w-16 text-white" />
                  </div>
                  <div className="text-white/40 font-heading tracking-widest text-sm uppercase">
                    {dict.common.productLayout.biologicalFormulation}
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* 3. PRODUCT OVERVIEW */}
              <AnimateIn>
                <div className="prose prose-lg prose-forest max-w-none">
                  <h2 className="font-heading text-3xl font-bold text-forest-deeper mb-6">{dict.common.productLayout.overview}</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {product.description}
                  </p>
                </div>
              </AnimateIn>

              {/* 5. AGRICULTURAL PURPOSE */}
              {product.agriculturalPurpose && product.agriculturalPurpose.length > 0 && (
                <AnimateIn>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
                    <h2 className="font-heading text-2xl font-bold text-forest-deeper mb-6">{dict.common.productLayout.agriculturalPurpose}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.agriculturalPurpose.map((purpose, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-forest shrink-0" />
                          <span className="text-gray-700 font-medium">{purpose}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              )}

              {/* 6. BENEFITS / INTENDED OUTCOMES */}
              {product.benefits && product.benefits.length > 0 && (
                <AnimateIn>
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-forest-deeper mb-6">{dict.common.productLayout.intendedOutcomes}</h2>
                    <div className="space-y-4">
                      {product.benefits.map((benefit, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-border shadow-sm flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                            <span className="text-forest font-bold text-sm">{idx + 1}</span>
                          </div>
                          <p className="text-gray-700 leading-relaxed pt-1">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              )}
              
              {/* 8. APPLICATION / USAGE INFORMATION */}
              <AnimateIn>
                <div className="bg-forest/5 rounded-2xl p-8 border border-forest/10">
                  <h2 className="font-heading text-2xl font-bold text-forest-deeper mb-4">{dict.common.productLayout.applicationInformation}</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {dict.common.productLayout.applicationGuidance}
                  </p>
                </div>
              </AnimateIn>
              
              {/* 9. SAFETY / RESPONSIBLE USE */}
              {product.safetyInfo && (
                <AnimateIn>
                  <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
                    <div className="flex items-start gap-4">
                      <Info className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                      <div>
                        <h2 className="font-heading text-xl font-bold text-amber-900 mb-2">{dict.common.productLayout.safetyNote}</h2>
                        <p className="text-amber-800 leading-relaxed">
                          {product.safetyInfo}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              )}
            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* 4. KEY COMPOSITION */}
              {product.components && product.components.length > 0 && (
                <AnimateIn delay={0.1}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
                    <h3 className="font-heading text-xl font-bold text-forest-deeper mb-6 border-b border-border pb-4">
                      {dict.common.productLayout.biologicalComposition}
                    </h3>
                    <ul className="space-y-4">
                      {product.components.map((component, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                          <div className="w-2 h-2 rounded-full bg-forest shrink-0"></div>
                          {component}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>
              )}

              {/* Best For / Use Cases */}
              <AnimateIn delay={0.2}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
                  <h3 className="font-heading text-xl font-bold text-forest-deeper mb-6 border-b border-border pb-4">
                    {dict.common.productLayout.bestFor}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.useCases.map((useCase) => (
                      <Badge
                        key={useCase}
                        className="bg-gray-100 text-gray-700 border-0 px-3 py-1.5 text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        {useCase}
                      </Badge>
                    ))}
                  </div>
                </div>
              </AnimateIn>
              
              {/* AIPL AGRICULTURAL SYSTEM */}
              <AnimateIn delay={0.3}>
                <div className="bg-forest text-white rounded-2xl p-8 shadow-sm">
                  <h3 className="font-heading text-xl font-bold mb-4">
                    {dict.common.productLayout.aiplApproach}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    {dict.common.productLayout.approachDescription}
                  </p>
                  <Link 
                    href={`/${locale}/quality`}
                    className="text-white font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    {dict.common.productLayout.learnImpact} <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </AnimateIn>
              
            </div>
          </div>
        </div>
      </section>

      {/* 10. RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="bg-white py-16 md:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <AnimateIn>
              <h2 className="font-heading text-3xl font-bold text-forest-deeper text-center mb-12">
                {dict.common.productLayout.relatedSolutions}
              </h2>
            </AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Show up to 4 related products */}
              {relatedProducts.slice(0, 4).map((p, i) => {
                const RelatedIcon = iconMap[p.icon] ?? FlaskConical;
                return (
                  <AnimateIn key={p.slug} delay={i * 0.1}>
                    <Link
                      href={`/${locale}/products/${p.slug}`}
                      className="group bg-gray-50 rounded-2xl p-6 flex flex-col h-full border border-border hover:border-forest/30 hover:shadow-lg transition-all duration-300"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center mb-6 group-hover:bg-forest group-hover:text-white transition-colors text-forest`}
                      >
                        <RelatedIcon className="h-6 w-6" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-forest-deeper mb-2">
                        {p.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                        {p.tagline}
                      </p>
                      <div className="text-forest font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                        {dict.common.productLayout.viewProduct} <ChevronRight className="h-4 w-4" />
                      </div>
                    </Link>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
