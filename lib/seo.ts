import type { Locale } from "@/lib/i18n/dictionaries";

export function getAlternates(path: string, locale: Locale) {
  const BASE_URL = "https://aipl.com.np";
  // For canonical, we want the path for the current locale
  const canonical = `${BASE_URL}${locale === 'ne' ? '' : '/en'}${path}`;
  
  return {
    canonical,
    languages: {
      'en': `${BASE_URL}/en${path}`,
      'ne': `${BASE_URL}${path}`,
      'x-default': `${BASE_URL}${path}`,
    },
  };
}
