export const LOCALE_LANGUAGES = ['en', 'es', 'fr', 'it', 'de', 'nl'] as const;
export type LocaleLanguage = (typeof LOCALE_LANGUAGES)[number];
