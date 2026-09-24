import { testimonials } from "@/content/testimonials";
import type { Testimonial } from "@/lib/types";

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}
