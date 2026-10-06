import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getDictionary, Locale } from "@/lib/i18n/dictionaries";

export default async function MarketingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeStr } = await params;
  const locale = localeStr as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        {locale === 'ne' ? 'मुख्य सामग्रीमा जानुहोस्' : 'Skip to main content'}
      </a>
      <Navbar dict={dict} locale={locale} />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
