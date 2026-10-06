import { getAllProducts } from "@/lib/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { AnimateIn } from "./AnimateIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export async function ProductHighlights({ dict, locale = "en" }: { dict?: any, locale?: string }) {
  const products = await getAllProducts(locale as any);
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="py-20 lg:py-32 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <AnimateIn>
              <p className="text-forest uppercase tracking-widest text-xs font-semibold mb-4">
                {dict.home.productHighlights.label}
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {dict.home.productHighlights.title}
              </h2>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.2} className="shrink-0">
            <Link
              href={`/${locale}/products`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-forest transition-colors group"
            >
              {dict.home.productHighlights.viewAll}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProducts.map((product, i) => (
            <AnimateIn key={product.slug} delay={0.1 + (i * 0.05)}>
              <ProductCard product={product} dict={dict} locale={locale} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
