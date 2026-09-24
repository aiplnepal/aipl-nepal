import { dealers } from "@/content/dealers";
import type { Dealer } from "@/lib/types";

export async function getAllDealers(): Promise<Dealer[]> {
  return dealers;
}

export async function getDealerById(id: string): Promise<Dealer | null> {
  return dealers.find((d) => d.id === id) ?? null;
}

export async function getDealersByLocation(filters: {
  province?: string;
  district?: string;
  municipality?: string;
  ward?: number;
}): Promise<Dealer[]> {
  return dealers.filter((d) => {
    if (filters.province && d.province !== filters.province) return false;
    if (filters.district && d.district !== filters.district) return false;
    if (filters.municipality && d.municipality !== filters.municipality) return false;
    if (filters.ward && d.ward !== filters.ward) return false;
    return true;
  });
}
