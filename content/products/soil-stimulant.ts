import type { Product } from "@/lib/types";

export const soilStimulant: Product = {
  id: "prod-003",
  slug: "soil-stimulant",
  name: "Bio stimulants",
  tagline: "Revives and enriches soil health",
  description:
    "Improves soil structure and microbial activity over time, helping overworked soil recover its fertility for future seasons. Recommended before planting or after a heavy harvest cycle. Our formulation works at the microbial level to restore the biological processes that keep soil productive and resilient.",
  agriculturalPurpose: ["Plant growth", "Nutrient absorption", "Stress tolerance", "Crop productivity"],
  benefits: [
    "Improves plant growth, health, and productivity",
    "Enhances nutrient absorption and plant stress tolerance"
  ],
  useCases: ["Soil recovery", "Pre-planting preparation", "Long-term fertility"],
  icon: "sprout",
  colorAccent: "forest",
  images: [],
  createdAt: "2024-01-01T00:00:00Z",
};
