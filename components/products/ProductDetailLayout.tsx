import Link from "next/link";
import { FlaskConical, Shield, Sprout, Leaf, Recycle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimateIn } from "@/components/sections/AnimateIn";
import type { Product } from "@/lib/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  flask: FlaskConical,
  shield: Shield,
  sprout: Sprout,
  leaf: Leaf,
  recycle: Recycle,
};

export function ProductDetailLayout({
  product,
  relatedProducts,
}: {
  product: Product;
  relatedProducts: Product[];
}) {
  const Icon = iconMap[product.icon] ?? FlaskConical;
  const accentBg =
    product.colorAccent === "forest" ? "bg-forest" : "bg-brown";

  return (
    <>
      <section className="bg-ink text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateIn>
            <div
              className={`w-24 h-24 rounded-full ${accentBg} flex items-center justify-center mx-auto mb-8`}
            >
              <Icon className="h-12 w-12 text-white" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-white/70 text-lg italic font-serif">
              {product.tagline}
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateIn>
            <p className="text-ink text-lg leading-relaxed mb-12">
              {product.description}
            </p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-forest mb-4">
                Best For
              </h2>
              <div className="flex flex-wrap gap-2">
                {product.useCases.map((useCase) => (
                  <Badge
                    key={useCase}
                    className="bg-cream text-brown border-0 px-4 py-1.5 text-sm font-medium"
                  >
                    {useCase}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-forest mb-4">
                How to Use
              </h2>
              {/* PLACEHOLDER: confirm with AIPL before launch — exact dosage and application specifics pending client confirmation */}
              <ul className="space-y-3 text-ink">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-forest text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <span>
                    Apply during the recommended growth stage for your specific
                    crop type. Consult local agricultural guidance for best
                    timing.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-forest text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <span>
                    Follow the application rate specified on the product
                    packaging. Adjust based on soil condition and crop needs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-forest text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <span>
                    Store in a cool, dry place away from direct sunlight. Keep
                    sealed when not in use to maintain product effectiveness.
                  </span>
                </li>
              </ul>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold bg-forest text-white hover:bg-forest-dark transition-colors"
              >
                Enquire About This Product
              </Link>
              <Link
                href="/contact#dealers"
                className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold bg-forest text-white hover:bg-forest/90 transition-colors"
              >
                Find a Dealer
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="bg-cream py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <AnimateIn>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-forest text-center mb-10">
                Other Products
              </h2>
            </AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p, i) => {
                const RelatedIcon = iconMap[p.icon] ?? FlaskConical;
                const relAccentBg =
                  p.colorAccent === "forest" ? "bg-forest" : "bg-brown";
                return (
                  <AnimateIn key={p.slug} delay={i * 0.1}>
                    <Link
                      href={`/products/${p.slug}`}
                      className="bg-white rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full"
                    >
                      <div
                        className={`w-12 h-12 rounded-full ${relAccentBg} flex items-center justify-center mb-4`}
                      >
                        <RelatedIcon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-forest mb-1">
                        {p.name}
                      </h3>
                      <p className="text-muted-text text-sm">{p.tagline}</p>
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
