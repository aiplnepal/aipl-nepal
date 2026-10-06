import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/data/products";
import { getAllResources } from "@/lib/data/resources";

const BASE_URL = "https://aipl.com.np";
const LOCALES = ["ne", "en"] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAllProducts('en'); // slugs are same for en/ne
  const resources = await getAllResources('en'); // slugs are same for en/ne

  const getAlternates = (path: string) => ({
    languages: {
      en: `${BASE_URL}/en${path}`,
      ne: `${BASE_URL}${path}`,
      'x-default': `${BASE_URL}${path}`,
    },
  });

  const productRoutes = products.map((product) => ({
    url: `${BASE_URL}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: getAlternates(`/products/${product.slug}`),
  }));

  const resourceRoutes = resources.map((resource) => ({
    url: `${BASE_URL}/resources/${resource.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
    alternates: getAlternates(`/resources/${resource.slug}`),
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: getAlternates(''),
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: getAlternates('/about'),
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: getAlternates('/products'),
    },
    ...productRoutes,
    {
      url: `${BASE_URL}/quality`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: getAlternates('/quality'),
    },
    {
      url: `${BASE_URL}/resources`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: getAlternates('/resources'),
    },
    ...resourceRoutes,
    {
      url: `${BASE_URL}/career`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: getAlternates('/career'),
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: getAlternates('/contact'),
    },
  ];
}
