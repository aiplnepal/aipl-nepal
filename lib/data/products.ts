import { products as baseProducts } from "@/content/products";
import type { Product } from "@/lib/types";
import { getDictionary, Locale } from "@/lib/i18n/dictionaries";

export async function getAllProducts(locale: Locale = 'en'): Promise<Product[]> {
  const dict = await getDictionary(locale);
  return baseProducts.map((p) => {
    const localData = dict.products[p.slug as keyof typeof dict.products];
    return {
      ...p,
      ...localData,
    } as Product;
  });
}

export async function getProductBySlug(slug: string, locale: Locale = 'en'): Promise<Product | null> {
  const dict = await getDictionary(locale);
  const p = baseProducts.find((p) => p.slug === slug);
  if (!p) return null;
  const localData = dict.products[slug as keyof typeof dict.products];
  return {
    ...p,
    ...localData,
  } as Product;
}
