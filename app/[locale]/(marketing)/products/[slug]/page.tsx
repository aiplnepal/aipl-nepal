import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/lib/data/products";
import { getDictionary, Locale } from "@/lib/i18n/dictionaries";
import { ProductDetailLayout } from "@/components/products/ProductDetailLayout";
import { getAlternates } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const locales: Locale[] = ['en', 'ne'];
  const allParams = [];
  for (const locale of locales) {
    const products = await getAllProducts(locale);
    for (const p of products) {
      allParams.push({ locale, slug: p.slug });
    }
  }
  return allParams;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: Locale }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const product = await getProductBySlug(slug, locale);
  if (!product) return {};

  return {
    title: product.name,
    description: `${product.tagline}. ${product.description.slice(0, 120)}...`,
    alternates: getAlternates(`/products/${slug}`, locale),
    openGraph: {
      title: product.name,
      description: product.tagline,
      images: product.images?.[0] ? [{ url: `https://aipl.com.np${product.images[0]}`, alt: product.name }] : undefined,
    }
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: Locale }>;
}) {
  const { slug, locale } = await params;
  const product = await getProductBySlug(slug, locale);
  if (!product) notFound();

  const allProducts = await getAllProducts(locale);
  const relatedProducts = allProducts.filter((p) => p.slug !== product.slug);
  const dict = await getDictionary(locale);

  return (
    <ProductDetailLayout product={product} relatedProducts={relatedProducts} dict={dict} locale={locale} />
  );
}
