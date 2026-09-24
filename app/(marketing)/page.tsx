import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ProductHighlights } from "@/components/sections/ProductHighlights";
import { WhyAIPL } from "@/components/sections/WhyAIPL";
import { TestimonialRow } from "@/components/sections/TestimonialRow";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProductHighlights />
      <WhyAIPL />
      <TestimonialRow />
      <CTABanner />
    </>
  );
}
