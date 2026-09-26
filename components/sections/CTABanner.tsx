import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

export function CTABanner() {
  return (
    <section className="bg-forest/5 text-gray-900 py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimateIn>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow with AIPL?
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
            Get in touch with our team or find a dealer near you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 justify-center rounded-lg px-8 py-3.5 text-sm font-semibold bg-forest text-white hover:bg-forest-dark transition-colors"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact#dealers"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-sm font-semibold border-2 border-forest/20 text-forest hover:bg-forest/5 transition-colors"
            >
              Find a Dealer
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
