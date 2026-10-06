import type { Product } from "@/lib/types";

export const bioPesticide: Product = {
  id: "prod-002",
  slug: "bio-pesticide",
  name: "Biopesticides",
  tagline: "Natural protection derived from organic sources",
  description:
    "A bio-based pest control solution derived from natural sources that protects crops from common pests without harsh chemical residue. Designed for Nepal's most prevalent pest challenges, it offers effective protection. (Note: Claims regarding safety for beneficial insects are pending client verification.)",
  agriculturalPurpose: ["Pest management", "Reduced reliance on chemical pesticides"],
  benefits: [
    "Environmentally friendly pest control",
    "Reduces the use of chemical pesticides"
  ],
  useCases: ["Pest management", "Organic farming", "Integrated crop protection"],
  safetyInfo: "Claims regarding complete safety for beneficial insects are pending client verification.",
  icon: "shield",
  colorAccent: "forest",
  images: [],
  createdAt: "2024-01-01T00:00:00Z",
};
