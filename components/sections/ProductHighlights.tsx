import { getAllProducts } from "@/lib/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { AnimateIn } from "./AnimateIn";

export async function ProductHighlights() {
  const products = await getAllProducts();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center mb-12">
            <p className="text-forest uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Our Products
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink">
              What We Grow With
            </h2>
          </div>
        </AnimateIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <AnimateIn key={product.slug} delay={i * 0.1}>
              <ProductCard product={product} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
