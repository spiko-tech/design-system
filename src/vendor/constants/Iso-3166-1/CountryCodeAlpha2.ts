import { Schema } from 'effect';
import { COUNTRIES } from './COUNTRIES.js';

const _COUNTRY_CODES_ALPHA2: ReadonlyArray<string> = Object.keys(COUNTRIES);

export const CountryCodeAlpha2 = Schema.Literal(..._COUNTRY_CODES_ALPHA2)
  .pipe(
    Schema.annotations({
      title: 'Country code',
      description: 'alpha-2 country code (ISO 3166-1)',
      documentation: "ISO 3166-1 alpha-2 country code, 'FR' for France, 'BE' for Belgium, 'DE' for Germany etc.",
      examples: ['FR', 'BE', 'DE'],
      message: () => ({ message: 'Please select a country', override: true }),
      jsonSchema: {
        identifier: 'CountryCodeAlpha2',
        title: 'Country code',
        description: 'alpha-2 country code (ISO 3166-1)',
        documentation: "ISO 3166-1 alpha-2 country code, 'FR' for France, 'BE' for Belgium, 'DE' for Germany etc.",
      },
    }),
    Schema.brand('CountryCodeAlpha2')
  )
  .annotations({ identifier: 'CountryCodeAlpha2', title: 'Country code' });

export type CountryCodeAlpha2 = typeof CountryCodeAlpha2.Type;

export const CountryCodeAlpha2ExcludingFrance = CountryCodeAlpha2.pipe(
  Schema.filter((code) => code !== 'FR')
).annotations({ identifier: 'CountryCodeAlpha2ExcludingFrance', title: 'Country code (excluding France)' });

// Cast is safe: Object.keys(COUNTRIES) are the same values validated by the CountryCodeAlpha2 schema filter
// (both use COUNTRIES as their single source of truth).
export const COUNTRY_CODES_ALPHA2 = _COUNTRY_CODES_ALPHA2 as ReadonlyArray<CountryCodeAlpha2>;
