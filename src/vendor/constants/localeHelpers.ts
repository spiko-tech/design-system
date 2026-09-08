import type { LocaleLanguage } from './LocaleLanguage.js';

/**
 * Locale-indexed lookup maps.
 * Adding a new language only requires updating these maps (and LocaleLanguage).
 */

export const LOCALE_FLAGS: Record<LocaleLanguage, string> = {
  en: '🇬🇧',
  es: '🇪🇸',
  fr: '🇫🇷',
  it: '🇮🇹',
  de: '🇩🇪',
  nl: '🇳🇱',
};

export const LOCALE_DISPLAY_NAMES: Record<LocaleLanguage, string> = {
  en: 'English',
  es: 'Spanish',
  fr: 'French',
  it: 'Italian',
  de: 'German',
  nl: 'Dutch',
};

/**
 * Maps LocaleLanguage to BCP 47 / Intl locale tags.
 */
export const LOCALE_TO_INTL: Record<LocaleLanguage, string> = {
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
  it: 'it-IT',
  de: 'de-DE',
  nl: 'nl-NL',
};
