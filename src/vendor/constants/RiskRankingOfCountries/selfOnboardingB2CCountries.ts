import { CountryCodeAlpha2 } from '../Iso-3166-1/CountryCodeAlpha2.js';

/**
 * Cast is safe: all values are known-valid ISO 3166-1 alpha-2 country codes present in COUNTRIES.
 * Intermediate ReadonlyArray<string> avoids TS2352 (string[] → branded[] overlap error).
 */
const _selfOnboardingB2Ccountries: ReadonlyArray<string> = [
  'AU',
  'AT',
  'BE',
  'CA',
  'CY',
  'CZ',
  'DK',
  'EE',
  'FI',
  'FR',
  'GF',
  'DE',
  'GR',
  'GP',
  'HU',
  'IS',
  'IE',
  'IT',
  'LV',
  'LI',
  'LT',
  'LU',
  'MT',
  'MQ',
  'YT',
  'NL',
  'NO',
  'PL',
  'PT',
  'RE',
  'RO',
  'SG',
  'SK',
  'SI',
  'ES',
  'SE',
  'CH',
  'GB',
];

export const selfOnboardingB2Ccountries: ReadonlyArray<CountryCodeAlpha2> =
  _selfOnboardingB2Ccountries as ReadonlyArray<CountryCodeAlpha2>;
