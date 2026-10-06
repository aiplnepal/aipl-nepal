import { getDictionary, Locale } from "@/lib/i18n/dictionaries";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { DealerLocator } from "@/components/sections/DealerLocator";
import { getAllDealers } from "@/lib/data/dealers";
import { AnimateIn } from "@/components/sections/AnimateIn";
import Link from "next/link";
import { getAlternates } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeStr } = await params;
  const locale = localeStr as Locale;
  const dict = await getDictionary(locale);
  
  return {
    title: dict.seo.contact.title,
    description: dict.seo.contact.description,
    keywords: [
      "contact AIPL Nepal",
      "AIPL phone number",
      "AIPL dealer Nepal",
      "fertilizer dealer Nepal",
      "AIPL Kathmandu contact",
    ],
    alternates: getAlternates('/contact', locale),
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeStr } = await params;
  const locale = localeStr as Locale;
  const dict = await getDictionary(locale);
  const dealers = await getAllDealers();

  return (
    <>
      {/* 1. CONTACT HERO */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 bg-forest-deeper overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/hero-soil.jpg"
            alt="Agricultural landscape in Nepal"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimateIn>
            <p className="text-forest-light uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              {dict.contact.hero.label}
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl mx-auto">
              {dict.contact.hero.title}
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-serif leading-relaxed max-w-2xl mx-auto">
              {dict.contact.hero.description}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* 2 & 3. CONTACT OPTIONS & MAIN ENQUIRY FORM */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-200 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* LEFT: {dict.contact.info.contactInfoTitle} & Guidance */}
            <div className="lg:col-span-5">
              <AnimateIn>
                <div className="sticky top-32">
                  <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                    {dict.contact.info.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-10">
                    {dict.contact.info.description}
                  </p>

                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-8">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">
                      {dict.contact.info.contactInfoTitle}
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                          <Phone className="h-4 w-4 text-forest" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm mb-1">{dict.contact.info.phone}</p>
                          <p className="text-gray-600 text-sm">
                            <a href="tel:+9779863186533" className="hover:text-forest transition-colors">+977 9863186533</a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                          <Mail className="h-4 w-4 text-forest" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm mb-1">{dict.contact.info.email}</p>
                          <p className="text-gray-600 text-sm">
                            <a href="mailto:info@aipl.com.np" className="hover:text-forest transition-colors">info@aipl.com.np</a>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                          <MapPin className="h-4 w-4 text-forest" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm mb-1">{dict.contact.info.location}</p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {dict.contact.info.locationDetails}<br />
                            <span className="text-gray-400 text-xs mt-1 block">{dict.contact.info.locationVerification}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
                    <h4 className="font-semibold text-blue-900 text-sm mb-2">{dict.contact.info.commonInquiriesTitle}</h4>
                    <ul className="text-xs text-blue-800/80 leading-relaxed space-y-2 list-disc pl-4">
                      <li><strong>{dict.contact.info.commonInquiries[0].label}</strong> {dict.contact.info.commonInquiries[0].desc}</li>
                      <li><strong>{dict.contact.info.commonInquiries[1].label}</strong> {dict.contact.info.commonInquiries[1].desc}</li>
                      <li><strong>{dict.contact.info.commonInquiries[2].label}</strong> {dict.contact.info.commonInquiries[2].desc}</li>
                    </ul>
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* RIGHT: Main Form */}
            <div className="lg:col-span-7">
              <AnimateIn delay={0.2}>
                <div className="bg-white rounded-2xl p-6 md:p-10 border border-gray-100 shadow-sm h-full">
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8 pb-6 border-b border-gray-100">
                    {dict.contact.form.title}
                  </h3>
                  <ContactForm dict={dict} />
                </div>
              </AnimateIn>
            </div>

          </div>
        </div>
      </section>

      {/* 4. DEALER / LOCATION FINDER */}
      <DealerLocator dict={dict} dealers={dealers} />

      {/* 5. FINAL CTA */}
      <section className="py-20 bg-forest text-white text-center px-6">
        <div className="max-w-2xl mx-auto">
          <AnimateIn>
            <h2 className="font-heading text-3xl font-bold text-white mb-6">
              {dict.contact.cta.title}
            </h2>
            <p className="text-white/90 text-lg mb-8 font-serif">
              {dict.contact.cta.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/products`}
                className="inline-flex items-center justify-center rounded-md px-8 py-3.5 text-base font-semibold bg-white text-forest hover:bg-gray-50 transition-colors"
              >
                {dict.contact.cta.explore}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center justify-center rounded-md px-8 py-3.5 text-base font-semibold border border-white text-white hover:bg-white/10 transition-colors"
              >
                {dict.contact.cta.about}
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
