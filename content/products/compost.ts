import type { Product } from "@/lib/types";

export const compost: Product = {
  id: "prod-007",
  slug: "compost",
  name: "Compost",
  tagline: "Structural soil improvement and sustainable nutrition",
  description:
    "Produced from recycled organic waste and indigenous resources, our compost is designed to improve soil structure and deliver a steady nutrient supply. It helps restore the natural balance of the soil environment, transforming waste into a valuable agricultural asset.",
  components: ["Recycled organic waste", "Indigenous organic matter"],
  agriculturalPurpose: ["Soil nutrition", "Soil structure"],
  benefits: [
    "Improves the nutritional quality of soil",
    "Enhances soil structure and nutrient supply"
  ],
  useCases: ["Soil preparation", "Organic farming base", "Soil structure improvement"],
  icon: "leaf",
  colorAccent: "forest",
  images: [],
  createdAt: "2024-01-01T00:00:00Z",
};
