import { CountryCodeAlpha2 } from './Countries.ts';
import { LocaleLanguage } from './LocaleLanguage.ts';

export const formatCountry = (alpha2: CountryCodeAlpha2, locale: LocaleLanguage) =>
  new Intl.DisplayNames([locale], { type: 'region' }).of(alpha2) ?? alpha2;
