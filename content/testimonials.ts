import type { Testimonial } from "@/lib/types";

// PLACEHOLDER: confirm with AIPL before launch — these are placeholder quotes pending real client-supplied testimonials
export const testimonials: Testimonial[] = [
  {
    id: "test-001",
    name: "Ram Bahadur Tamang",
    role: "Farmer",
    location: "Chitwan",
    quote:
      "Since switching to AIPL fertilizer, my rice yields have improved noticeably. The quality is consistent and my dealer always has it in stock.",
    productSlug: "fertilizer",
    createdAt: "2024-06-01T00:00:00Z",
  },
  {
    id: "test-002",
    name: "Sita Sharma",
    role: "Dealer",
    location: "Pokhara",
    quote:
      "AIPL products are what my customers ask for by name. The packaging is professional and the support from the company has been excellent.",
    createdAt: "2024-06-01T00:00:00Z",
  },
  {
    id: "test-003",
    name: "Bikram Rai",
    role: "Farmer",
    location: "Biratnagar",
    quote:
      "The soil stimulant made a real difference after years of heavy planting. My soil feels healthier and my crops are growing stronger each season.",
    productSlug: "soil-stimulant",
    createdAt: "2024-06-01T00:00:00Z",
  },
  {
    id: "test-004",
    name: "Gopal Thapa",
    role: "Commercial Farmer",
    location: "Kavre",
    quote:
      "Using AIPL's bio-pesticides has been a game changer for my tomato farm. I am getting better yields while keeping my produce safe and organic.",
    productSlug: "bio-pesticide",
    createdAt: "2024-06-01T00:00:00Z",
  },
];
