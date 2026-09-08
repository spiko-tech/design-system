import { type LocaleLanguage } from '@spiko/constants';
import { de, enUS, es, fr, it, nl, type Locale } from 'date-fns/locale';

/**
 * Maps LocaleLanguage to date-fns Locale objects.
 * Use this instead of per-file Match blocks when passing a locale to date-fns / react-day-picker.
 */
export const DATE_FNS_LOCALES: Record<LocaleLanguage, Locale> = { en: enUS, es, fr, it, de, nl };
