import { getDictionary, Locale } from "@/lib/i18n/dictionaries";
import { getAlternates } from "@/lib/seo";
import { Metadata } from "next";
import { AnimateIn } from "@/components/sections/AnimateIn";
import { CareerForm } from "@/components/career/CareerForm";
import Link from "next/link";
import { Users, Sprout, Building } from "lucide-react";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeStr } = await params;
  const locale = localeStr as Locale;
  const dict = await getDictionary(locale);
  
  return {
    title: dict.seo.career.title,
    description: dict.seo.career.description,
    alternates: getAlternates('/career', locale),
  };
}

export default async function CareerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeStr } = await params;
  const locale = localeStr as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      {/* 1. CAREER HERO */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 bg-forest-deeper overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/hero-soil.jpg"
            alt="Agricultural field worker in Nepal"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <AnimateIn>
              <span className="text-forest-light font-semibold tracking-wider uppercase text-sm mb-4 block">
                {dict.career.hero.label}
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {dict.career.hero.title}
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-serif leading-relaxed mb-10 max-w-2xl">
                {dict.career.hero.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#apply"
                  className="inline-flex items-center justify-center rounded-md px-8 py-3.5 text-base font-semibold bg-forest text-white hover:bg-forest-dark transition-colors"
                >
                  {dict.career.hero.applyNow}
                </Link>
                <Link
                  href={`/${locale}/about`}
                  className="inline-flex items-center justify-center rounded-md px-8 py-3.5 text-base font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  {dict.career.hero.learnAbout}
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* 2. WHY PARTICIPATE */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="max-w-3xl mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {dict.career.mission.title}
              </h2>
              <p className="text-lg text-gray-600 font-serif leading-relaxed">
                {dict.career.mission.description}
              </p>
            </div>
          </AnimateIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateIn delay={0.1}>
              <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 h-full">
                <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center mb-6">
                  <Sprout className="h-6 w-6 text-forest" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">{dict.career.mission.cards[0].title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {dict.career.mission.cards[0].description}
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 h-full">
                <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-forest" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">{dict.career.mission.cards[1].title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {dict.career.mission.cards[1].description}
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 h-full">
                <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center mb-6">
                  <Building className="h-6 w-6 text-forest" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">{dict.career.mission.cards[2].title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {dict.career.mission.cards[2].description}
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* 3. FREELANCER / FIELD ROLE & 4. WHAT THE ROLE CONNECTS */}
      <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {dict.career.initiative.title}
              </h2>
              <p className="text-lg text-gray-600 font-serif leading-relaxed mb-8">
                {dict.career.initiative.description}
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-forest font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{dict.career.initiative.steps[0].title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{dict.career.initiative.steps[0].description}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-forest font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{dict.career.initiative.steps[1].title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{dict.career.initiative.steps[1].description}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-forest font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{dict.career.initiative.steps[2].title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{dict.career.initiative.steps[2].description}</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
            
            <AnimateIn delay={0.2}>
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/hero-soil.jpg"
                  alt="Agricultural participation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white font-serif text-xl leading-relaxed">
                    {dict.career.initiative.quote}
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* 5. WHO SHOULD APPLY & 6. APPLICATION PROCESS & 7. APPLICATION FORM */}
      <section id="apply" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* LEFT: Information */}
            <div className="lg:col-span-5">
              <AnimateIn>
                <div className="sticky top-32">
                  <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                    {dict.career.apply.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-10">
                    {dict.career.apply.description}
                  </p>
                  
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-10">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">{dict.career.apply.processTitle}</h3>
                    <ul className="space-y-6">
                      <li className="flex gap-4">
                        <span className="text-forest font-bold font-heading">01</span>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm">{dict.career.apply.steps[0].title}</h4>
                          <p className="text-xs text-gray-500 mt-1">{dict.career.apply.steps[0].description}</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-forest font-bold font-heading">02</span>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm">{dict.career.apply.steps[1].title}</h4>
                          <p className="text-xs text-gray-500 mt-1">{dict.career.apply.steps[1].description}</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-forest font-bold font-heading">03</span>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm">{dict.career.apply.steps[2].title}</h4>
                          <p className="text-xs text-gray-500 mt-1">{dict.career.apply.steps[2].description}</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
                    <h4 className="font-semibold text-blue-900 text-sm mb-2">{dict.career.apply.importantInfoTitle}</h4>
                    <p className="text-xs text-blue-800/80 leading-relaxed">
                      {dict.career.apply.importantInfoText}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* RIGHT: Form */}
            <div className="lg:col-span-7">
              <AnimateIn delay={0.2}>
                <CareerForm dict={dict} />
              </AnimateIn>
            </div>

          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-20 bg-forest-deeper text-center px-6">
        <div className="max-w-2xl mx-auto">
          <AnimateIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              {dict.career.cta.title}
            </h2>
            <p className="text-white/70 text-lg mb-8 font-serif">
              {dict.career.cta.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/quality`}
                className="inline-flex items-center justify-center rounded-md px-8 py-3.5 text-base font-semibold bg-forest text-white hover:bg-forest-dark transition-colors"
              >
                {dict.career.cta.explore}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center rounded-md px-8 py-3.5 text-base font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                {dict.career.cta.contact}
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
