import type { Product } from "@/lib/types";

export const bioLiquidFertilizer: Product = {
  id: "prod-006",
  slug: "bio-liquid-fertilizer",
  name: "Bio Liquid Fertilizer",
  tagline: "Rapid nutrient absorption for modern irrigation",
  description:
    "An industrial-scale liquid bio-fertilizer designed for quick nutrient delivery and easy application. Manufactured in advanced microbial laboratories, this formulation integrates seamlessly with modern irrigation systems, supporting rapid nutrient absorption without the delayed release typical of solid applications.",
  components: ["Rhizobium", "Azotobacter", "Acetobacter", "Azolla", "PSB"],
  agriculturalPurpose: ["Nutrient delivery", "Irrigation integration"],
  benefits: [
    "Delivers nutrients quickly to soil and plants",
    "Easily integrates with modern irrigation systems",
    "Rapid nutrient absorption"
  ],
  useCases: ["Modern irrigation systems", "Foliar application", "Rapid nutrient correction"],
  icon: "droplets",
  colorAccent: "forest",
  images: [],
  createdAt: "2024-01-01T00:00:00Z",
};
