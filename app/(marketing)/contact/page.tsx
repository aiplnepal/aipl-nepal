import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { DealerLocator } from "@/components/sections/DealerLocator";
import { getAllDealers } from "@/lib/data/dealers";
import { AnimateIn } from "@/components/sections/AnimateIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch with AIPL Nepal",
  description:
    "Contact AIPL Nepal for fertilizer inquiries, dealer partnerships, bulk orders, or product support. Find an AIPL dealer near you across all 7 provinces of Nepal. Call +977 9863186533.",
  keywords: [
    "contact AIPL Nepal",
    "AIPL phone number",
    "AIPL dealer Nepal",
    "fertilizer dealer Nepal",
    "AIPL Kathmandu contact",
    "buy fertilizer Nepal",
    "AIPL dealer network",
  ],
  alternates: {
    canonical: "https://aipl.com.np/contact",
  },
};

export default async function ContactPage() {
  const dealers = await getAllDealers();

  return (
    <>
      <section className="relative text-white py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/illustrations/contact-hero-v2.webp"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <AnimateIn>
            <p className="text-white/80 uppercase tracking-[0.2em] text-sm font-semibold mb-3 drop-shadow-md">
              Get in Touch
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold drop-shadow-lg">
              Let&apos;s Grow Together
            </h1>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <AnimateIn>
                <h2 className="font-heading text-2xl font-bold text-forest mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </AnimateIn>
            </div>

            {/* PLACEHOLDER: confirm with AIPL before launch — replace with real contact details */}
            <div className="lg:col-span-2">
              <AnimateIn delay={0.2}>
                <h2 className="font-heading text-2xl font-bold text-forest mb-6">
                  Contact Details
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center shrink-0">
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Phone</p>
                      <p className="text-gray-500 text-sm">
                        <a href="tel:+9779863186533" className="hover:text-forest transition-colors">+977 9863186533</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center shrink-0">
                      <Mail className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Email</p>
                      <p className="text-gray-500 text-sm">info@aipl.com.np</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center shrink-0">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Address</p>
                      <p className="text-gray-500 text-sm">Kathmandu, Nepal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center shrink-0">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        Business Hours
                      </p>
                      <p className="text-gray-500 text-sm">
                        Sun – Fri: 9:00 AM – 5:00 PM
                      </p>
                      <p className="text-gray-500 text-sm">
                        Saturday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    {/* PLACEHOLDER: confirm with AIPL before launch — replace with real social URLs */}
                    <a href="#social-facebook" className="text-gray-500 hover:text-forest transition-colors text-sm font-medium">
                      Facebook
                    </a>
                    <a href="#social-instagram" className="text-gray-500 hover:text-forest transition-colors text-sm font-medium">
                      Instagram
                    </a>
                    <a href="#social-youtube" className="text-gray-500 hover:text-forest transition-colors text-sm font-medium">
                      YouTube
                    </a>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      <DealerLocator dealers={dealers} />
    </>
  );
}
