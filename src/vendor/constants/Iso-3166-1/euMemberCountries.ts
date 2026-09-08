import { HashSet } from 'effect';
import { CountryCodeAlpha2 } from './CountryCodeAlpha2.js';

const EU_MEMBER_COUNTRIES: ReadonlyArray<CountryCodeAlpha2> = [
  CountryCodeAlpha2.make('AT'), // Austria
  CountryCodeAlpha2.make('BE'), // Belgium
  CountryCodeAlpha2.make('BG'), // Bulgaria
  CountryCodeAlpha2.make('HR'), // Croatia
  CountryCodeAlpha2.make('CY'), // Cyprus
  CountryCodeAlpha2.make('CZ'), // Czechia
  CountryCodeAlpha2.make('DK'), // Denmark
  CountryCodeAlpha2.make('EE'), // Estonia
  CountryCodeAlpha2.make('FI'), // Finland
  CountryCodeAlpha2.make('FR'), // France
  CountryCodeAlpha2.make('DE'), // Germany
  CountryCodeAlpha2.make('GR'), // Greece
  CountryCodeAlpha2.make('HU'), // Hungary
  CountryCodeAlpha2.make('IE'), // Ireland
  CountryCodeAlpha2.make('IT'), // Italy
  CountryCodeAlpha2.make('LV'), // Latvia
  CountryCodeAlpha2.make('LT'), // Lithuania
  CountryCodeAlpha2.make('LU'), // Luxembourg
  CountryCodeAlpha2.make('MT'), // Malta
  CountryCodeAlpha2.make('NL'), // Netherlands
  CountryCodeAlpha2.make('PL'), // Poland
  CountryCodeAlpha2.make('PT'), // Portugal
  CountryCodeAlpha2.make('RO'), // Romania
  CountryCodeAlpha2.make('SK'), // Slovakia
  CountryCodeAlpha2.make('SI'), // Slovenia
  CountryCodeAlpha2.make('ES'), // Spain
  CountryCodeAlpha2.make('SE'), // Sweden
];

const EU_MEMBER_SET = HashSet.fromIterable(EU_MEMBER_COUNTRIES);

export const isEuMemberCountry = (country: CountryCodeAlpha2): boolean => HashSet.has(EU_MEMBER_SET, country);
