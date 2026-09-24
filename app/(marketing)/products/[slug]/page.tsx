import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/lib/data/products";
import { ProductDetailLayout } from "@/components/products/ProductDetailLayout";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: `${product.tagline}. ${product.description.slice(0, 120)}...`,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const allProducts = await getAllProducts();
  const relatedProducts = allProducts.filter((p) => p.slug !== product.slug);

  return (
    <ProductDetailLayout product={product} relatedProducts={relatedProducts} />
  );
}
