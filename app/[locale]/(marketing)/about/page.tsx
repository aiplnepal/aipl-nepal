import { getDictionary, Locale } from "@/lib/i18n/dictionaries";
import { getAlternates } from "@/lib/seo";
import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { InstitutionStory } from "@/components/about/InstitutionStory";
import { MissionVision } from "@/components/about/MissionVision";
import { ArsdInitiative } from "@/components/about/ArsdInitiative";
import { FarmerSupport } from "@/components/about/FarmerSupport";
import { AgriTech } from "@/components/about/AgriTech";
import { HistoryTimeline } from "@/components/about/HistoryTimeline";
import { GeographicalReach } from "@/components/about/GeographicalReach";
import { Leadership } from "@/components/about/Leadership";
import { CTABanner } from "@/components/sections/CTABanner";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeStr } = await params;
  const locale = localeStr as Locale;
  const dict = await getDictionary(locale);
  
  return {
    title: dict.seo.about.title,
    description: dict.seo.about.description,
    keywords: [
      "about AIPL Nepal",
      "AIPL history",
      "Nepal agriculture company",
      "agricultural investment Nepal",
      "AIPL mission",
      "ARSD program Nepal",
    ],
    alternates: getAlternates('/about', locale),
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeStr } = await params;
  const locale = localeStr as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <AboutHero dict={dict} />
      <InstitutionStory dict={dict} />
      <MissionVision dict={dict} />
      <ArsdInitiative dict={dict} />
      <FarmerSupport dict={dict} />
      <AgriTech dict={dict} />
      <HistoryTimeline dict={dict} />
      <GeographicalReach dict={dict} />
      <Leadership dict={dict} />
      <CTABanner dict={dict} locale={locale} />
    </>
  );
}
