import type { Product } from "@/lib/types";

export const fertilizer: Product = {
  id: "prod-001",
  slug: "fertilizer",
  name: "Bio Fertilizer",
  tagline: "Balanced biological nutrition for healthy root development",
  description:
    "A balanced biological blend of essential nutrients designed to support healthy root development and stronger stems across Nepal's major crop types. Suitable for use throughout the growing season as part of a regular feeding schedule. Our formulation accounts for the specific nutrient profiles found in Nepali soils, ensuring that every application delivers targeted biological support.",
  components: ["Rhizobium", "Azotobacter", "Acetobacter", "Azolla", "Phosphate-Solubilizing Bacteria (PSB)"],
  agriculturalPurpose: ["Soil fertility", "Nutrient availability", "Sustainable agriculture"],
  benefits: [
    "Provides essential nutrients to the soil",
    "Improves physical, chemical, and biological soil properties"
  ],
  useCases: ["Cereal crops", "Vegetable farming", "Seasonal planting"],
  icon: "flask",
  colorAccent: "forest",
  images: [],
  createdAt: "2024-01-01T00:00:00Z",
};
