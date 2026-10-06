import { getDictionary, Locale } from "@/lib/i18n/dictionaries";
import { QualityHero } from "@/components/quality/QualityHero";
import { AgriculturalApproach } from "@/components/quality/AgriculturalApproach";
import { SmartFarmingSystem } from "@/components/quality/SmartFarmingSystem";
import { IoTArchitecture } from "@/components/quality/IoTArchitecture";
import { SoilHealthSection } from "@/components/quality/SoilHealthSection";
import { TechnicalServices } from "@/components/quality/TechnicalServices";
import { Phytopathology } from "@/components/quality/Phytopathology";
import { SoilHealthCard } from "@/components/quality/SoilHealthCard";
import { FarmerImpact } from "@/components/quality/FarmerImpact";
import { CertificationsPlaceholder } from "@/components/quality/CertificationsPlaceholder";
import { CTABanner } from "@/components/sections/CTABanner";
import { getAlternates } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeStr } = await params;
  const locale = localeStr as Locale;
  const dict = await getDictionary(locale);
  
  return {
    title: dict.seo.quality.title,
    description: dict.seo.quality.description,
    keywords: [
      "AIPL quality",
      "Nepal smart farming",
      "agricultural technology Nepal",
      "sustainable farming Nepal",
      "soil health Nepal",
      "IoT agriculture Nepal",
      "Soil Health Card Nepal",
    ],
    alternates: getAlternates('/quality', locale),
  };
}

export default async function QualityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeStr } = await params;
  const locale = localeStr as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <QualityHero dict={dict} />
      <AgriculturalApproach dict={dict} />
      <SmartFarmingSystem dict={dict} />
      <IoTArchitecture dict={dict} />
      <SoilHealthSection dict={dict} />
      <TechnicalServices dict={dict} />
      <Phytopathology dict={dict} />
      <SoilHealthCard dict={dict} />
      <FarmerImpact dict={dict} />
      <CertificationsPlaceholder dict={dict} />
      <CTABanner dict={dict} locale={locale} />
    </>
  );
}
