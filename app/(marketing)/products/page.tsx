import Image from "next/image";
import { getAllProducts } from "@/lib/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { AnimateIn } from "@/components/sections/AnimateIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — Fertilizers, Bio Pesticides & Crop Care",
  description:
    "Explore AIPL Nepal's complete product range — fertilizers, bio pesticides, soil stimulants, micronutrients, and crop care products developed and tested specifically for Nepal's soil, crops, and climate.",
  keywords: [
    "AIPL products",
    "Nepal fertilizer products",
    "bio pesticide Nepal",
    "soil stimulant Nepal",
    "micronutrient fertilizer Nepal",
    "crop care products Nepal",
    "organic pesticide Nepal",
    "plant growth regulator Nepal",
  ],
  alternates: {
    canonical: "https://aipl.com.np/products",
  },
};

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <>
      <section className="relative text-white py-32 md:py-48">
        <div className="fixed top-[72px] left-0 w-full h-[60vh] -z-10">
          <Image
            src="/illustrations/products-hero-v2.webp"
            alt="Products"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-forest-deeper/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <AnimateIn>
            <p className="text-white/80 uppercase tracking-[0.2em] text-sm font-semibold mb-3 drop-shadow-md">
              Our Product Line
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              A Portfolio Built for the Field
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow-md">
              Every AIPL product is developed and tested for Nepal&apos;s soil,
              crops, and climate — from nutrition to protection to recovery.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <AnimateIn key={product.slug} delay={i * 0.1}>
                <ProductCard product={product} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
