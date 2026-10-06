import { getDictionary, Locale } from "@/lib/i18n/dictionaries";
import { getAllProducts } from "@/lib/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductsHero } from "@/components/products/ProductsHero";
import { ProductIntroduction } from "@/components/products/ProductIntroduction";
import { AgriculturalContext } from "@/components/products/AgriculturalContext";
import { ScientificApproach } from "@/components/products/ScientificApproach";
import { CTABanner } from "@/components/sections/CTABanner";
import { AnimateIn } from "@/components/sections/AnimateIn";
import { getAlternates } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeStr } = await params;
  const locale = localeStr as Locale;
  const dict = await getDictionary(locale);
  
  return {
    title: dict.seo.products.title,
    description: dict.seo.products.description,
    keywords: [
      "AIPL products",
      "Nepal biological fertilizer",
      "bio pesticide Nepal",
      "soil stimulant Nepal",
      "organic farming products Nepal",
      "crop care products Nepal",
    ],
    alternates: getAlternates('/products', locale),
  };
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeStr } = await params;
  const locale = localeStr as Locale;
  const dict = await getDictionary(locale);
  const products = await getAllProducts(locale);

  return (
    <>
      <ProductsHero dict={dict} />
      <ProductIntroduction dict={dict} />
      
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {dict.products.catalog.title}
              </h2>
              <p className="text-gray-500 text-lg">
                {dict.products.catalog.description}
              </p>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <AnimateIn key={product.slug} delay={i * 0.1}>
                <ProductCard dict={dict} product={product} locale={locale} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <AgriculturalContext dict={dict} />
      <ScientificApproach dict={dict} />
      <CTABanner dict={dict} locale={locale} />
    </>
  );
}
