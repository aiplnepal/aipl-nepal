import { getDictionary, Locale } from "@/lib/i18n/dictionaries";
import { getAlternates } from "@/lib/seo";
import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ArsdStory } from "@/components/sections/ArsdStory";
import { AgriculturalSolutions } from "@/components/sections/AgriculturalSolutions";
import { SmartFarming } from "@/components/sections/SmartFarming";
import { ProductHighlights } from "@/components/sections/ProductHighlights";
import { FarmerEmpowerment } from "@/components/sections/FarmerEmpowerment";
import { ResourcePreview } from "@/components/sections/ResourcePreview";
import { CTABanner } from "@/components/sections/CTABanner";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeStr } = await params;
  const locale = localeStr as Locale;
  const dict = await getDictionary(locale);
  
  return {
    title: dict.seo.home.title,
    description: dict.seo.home.description,
    alternates: getAlternates('', locale),
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeStr } = await params;
  const locale = localeStr as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero dict={dict} locale={locale} />
      <TrustStrip dict={dict} />
      <ArsdStory dict={dict} />
      <AgriculturalSolutions dict={dict} />
      <SmartFarming dict={dict} />
      <ProductHighlights dict={dict} locale={locale} />
      <FarmerEmpowerment dict={dict} />
      <ResourcePreview dict={dict} locale={locale} />
      <CTABanner dict={dict} locale={locale} />
    </>
  );
}
