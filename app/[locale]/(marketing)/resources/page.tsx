import { getDictionary, Locale } from "@/lib/i18n/dictionaries";
import { getAllResources } from "@/lib/data/resources";
import { ResourcesHero } from "@/components/resources/ResourcesHero";
import { FeaturedResource } from "@/components/resources/FeaturedResource";
import { ResourceList } from "@/components/sections/ResourceList";
import { PracticalKnowledge } from "@/components/resources/PracticalKnowledge";
import { KnowledgeCTA } from "@/components/resources/KnowledgeCTA";
import { CTABanner } from "@/components/sections/CTABanner";
import { getAlternates } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeStr } = await params;
  const locale = localeStr as Locale;
  const dict = await getDictionary(locale);
  
  return {
    title: dict.seo.resources.title,
    description: dict.seo.resources.description,
    keywords: [
      "farming guide Nepal",
      "agricultural tips Nepal",
      "crop care advice Nepal",
      "soil preparation Nepal",
      "pest management Nepal",
      "fertilizer application guide",
      "Nepal farming resources",
      "AIPL resources",
    ],
    alternates: getAlternates('/resources', locale),
  };
}

export default async function ResourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeStr } = await params;
  const locale = localeStr as Locale;
  const dict = await getDictionary(locale);

  const resources = await getAllResources(locale);
  
  if (!resources || resources.length === 0) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-2xl font-bold">No resources available at this time.</h1>
      </div>
    );
  }

  // Use the first resource as the featured one
  const featuredResource = resources[0];
  const remainingResources = resources.slice(1);

  return (
    <>
      <ResourcesHero dict={dict} />
      <FeaturedResource resource={featuredResource} dict={dict} locale={locale} />
      <ResourceList resources={remainingResources} dict={dict} locale={locale} />
      <PracticalKnowledge dict={dict} />
      <KnowledgeCTA dict={dict} locale={locale} />
      <CTABanner dict={dict} locale={locale} />
    </>
  );
}
