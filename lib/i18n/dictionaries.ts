export type Locale = 'en' | 'ne';

const dictionaries = {
  en: () => import('@/content/locales/en').then((module) => module.default),
  ne: () => import('@/content/locales/ne').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};
