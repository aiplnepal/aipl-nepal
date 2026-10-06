import { resources } from "@/content/resources";
import { resourceArticles as neArticles } from "@/content/locales/ne/resourceArticles";
import type { Resource } from "@/lib/types";
import type { Locale } from "@/lib/i18n/dictionaries";

// Per-locale overlays for translatable article fields. English is the base data.
// Add new languages here as their overlays are created.
const overlays: Partial<Record<Locale, Record<string, Partial<Resource>>>> = {
  ne: neArticles,
};

function localize(resource: Resource, locale: Locale): Resource {
  const overlay = overlays[locale]?.[resource.slug];
  return overlay ? { ...resource, ...overlay } : resource;
}

export async function getAllResources(locale: Locale = "en"): Promise<Resource[]> {
  return resources.map((r) => localize(r, locale));
}

export async function getResourceBySlug(slug: string, locale: Locale = "en"): Promise<Resource | null> {
  const resource = resources.find((r) => r.slug === slug);
  return resource ? localize(resource, locale) : null;
}
