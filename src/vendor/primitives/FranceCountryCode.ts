import { COUNTRY_CODES_ALPHA2, CountryCodeAlpha2 } from '@spiko/constants';
import { Array, Schema } from 'effect';

export const FRANCE_COUNTRY_CODES = [
  'FR', // France
  'GF', // French Guiana
  'GP', // Guadeloupe
  'MQ', // Martinique
  'RE', // Réunion
  'YT', // Mayotte
] as const;

export const FranceCountryCode = Schema.Literal(...FRANCE_COUNTRY_CODES);

const NON_FRANCE_COUNTRY_CODES = Array.filter(
  COUNTRY_CODES_ALPHA2,
  (country) => !Array.contains(FRANCE_COUNTRY_CODES, country.toString())
);

export const NonFranceCountryCode = Schema.Literal(...NON_FRANCE_COUNTRY_CODES);

export const OTHER_FRANCE_RELATED_COUNTRY_CODES = [
  'BL', // Saint-Barthélemy
  'MF', // Saint Martin
  'NC', // New Caledonia
  'PF', // French Polynesia
  'PM', // Saint Pierre and Miquelon
  'TF', // French Southern Territories
  'WF', // Wallis and Futuna
] as const;

export const FRENCH_REGION_COUNTRY_CODES = [...FRANCE_COUNTRY_CODES, ...OTHER_FRANCE_RELATED_COUNTRY_CODES] as const;

export const isFrenchRegion = (country: CountryCodeAlpha2) =>
  Schema.is(Schema.Literal(...FRENCH_REGION_COUNTRY_CODES))(country);

export const isOtherFranceRelatedCountry = (country: CountryCodeAlpha2) =>
  Schema.is(Schema.Literal(...OTHER_FRANCE_RELATED_COUNTRY_CODES))(country);
