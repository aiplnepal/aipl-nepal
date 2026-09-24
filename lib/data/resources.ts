import { resources } from "@/content/resources";
import type { Resource } from "@/lib/types";

export async function getAllResources(): Promise<Resource[]> {
  return resources;
}

export async function getResourceBySlug(slug: string): Promise<Resource | null> {
  return resources.find((r) => r.slug === slug) ?? null;
}
