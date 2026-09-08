import { HashSet } from 'effect';
import { CountryCodeAlpha2 } from './CountryCodeAlpha2.js';

const GBP_COUNTRIES: ReadonlyArray<CountryCodeAlpha2> = [
  CountryCodeAlpha2.make('GB'), // United Kingdom
  CountryCodeAlpha2.make('IM'), // Isle of Man
  CountryCodeAlpha2.make('JE'), // Jersey
  CountryCodeAlpha2.make('GG'), // Guernsey (includes Alderney, Herm, and Sark)
  CountryCodeAlpha2.make('GS'), // South Georgia and the South Sandwich Islands
  CountryCodeAlpha2.make('IO'), // British Indian Ocean Territory
  CountryCodeAlpha2.make('AQ'), // British Antarctic Territory
];

const GBP_COUNTRIES_SET = HashSet.fromIterable(GBP_COUNTRIES);

export const isGbpCountry = (country: CountryCodeAlpha2): boolean => HashSet.has(GBP_COUNTRIES_SET, country);
