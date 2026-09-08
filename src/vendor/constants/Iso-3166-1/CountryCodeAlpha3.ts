import type { CountryCodeAlpha2 } from './CountryCodeAlpha2.js';
import { Option, Record, Schema } from 'effect';
import { COUNTRIES } from './COUNTRIES.js';

const _COUNTRY_CODES_ALPHA3: ReadonlyArray<string> = Object.values(COUNTRIES).map((c) => c.alpha3);
const COUNTRY_CODES_SET: ReadonlySet<string> = new Set(_COUNTRY_CODES_ALPHA3);

export const CountryCodeAlpha3 = Schema.String.pipe(
  Schema.filter((s) => COUNTRY_CODES_SET.has(s), {
    identifier: 'CountryCodeAlpha3',
    title: 'Country code alpha-3',
    description: 'alpha-3 country code (ISO 3166-1)',
    documentation: "ISO 3166-1 alpha-3 country code, 'FRA' for France, 'BEL' for Belgium, 'DEU' for Germany etc.",
    examples: ['FRA', 'BEL', 'DEU'],
    message: () => ({ message: 'Please select a country', override: true }),
    jsonSchema: {
      identifier: 'CountryCodeAlpha3',
      title: 'Country code alpha-3',
      type: 'string',
      description: 'alpha-3 country code (ISO 3166-1)',
      documentation: "ISO 3166-1 alpha-3 country code, 'FRA' for France, 'BEL' for Belgium, 'DEU' for Germany etc.",
    },
  }),
  Schema.brand('CountryCodeAlpha3')
);
export type CountryCodeAlpha3 = typeof CountryCodeAlpha3.Type;

// Cast is safe: Object.values(COUNTRIES).map(c => c.alpha3) are the same values validated by the CountryCodeAlpha3
// schema filter (both use COUNTRIES as their single source of truth).
export const COUNTRY_CODES_ALPHA3 = _COUNTRY_CODES_ALPHA3 as ReadonlyArray<CountryCodeAlpha3>;

export const convertAlpha3ToAlpha2 = (alpha3: CountryCodeAlpha3): Option.Option<CountryCodeAlpha2> =>
  Record.findFirst(COUNTRIES, (country) => country.alpha3 === (alpha3 as string)).pipe(
    Option.map(([alpha2]) => alpha2 as CountryCodeAlpha2)
  );
