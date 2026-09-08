import type { CurrencyCode } from './Currency.js';
import type { FundSlug } from './FundSlug.js';
import { CountryCodeAlpha2, isEuMemberCountry, isGbpCountry } from '@spiko/constants';
import { Match, Number, Option, Order, pipe, Record, Schema } from 'effect';
import { isFrenchRegion } from './FranceCountryCode.js';

export const SHARE_CLASS_METADATA = {
  EUTBL: { fund: 'EUTBL', currency: 'EUR' },
  USTBL: { fund: 'USTBL', currency: 'USD' },
  eurUSTBL: { fund: 'USTBL', currency: 'EUR' },
  SPKCC: { fund: 'SPKCC', currency: 'USD' },
  eurSPKCC: { fund: 'SPKCC', currency: 'EUR' },
  UKTBL: { fund: 'UKTBL', currency: 'GBP' },
  eurUKTBL: { fund: 'UKTBL', currency: 'EUR' },
  SAFO: { fund: 'SAFO', currency: 'USD' },
  SAFOd: { fund: 'SAFO', currency: 'USD' },
  eurSAFO: { fund: 'SAFO', currency: 'EUR' },
  eurSAFOd: { fund: 'SAFO', currency: 'EUR' },
  gbpSAFO: { fund: 'SAFO', currency: 'GBP' },
  gbpSAFOd: { fund: 'SAFO', currency: 'GBP' },
  chfSAFO: { fund: 'SAFO', currency: 'CHF' },
  sekSAFO: { fund: 'SAFO', currency: 'SEK' },
  nokSAFO: { fund: 'SAFO', currency: 'NOK' },
  dkkSAFO: { fund: 'SAFO', currency: 'DKK' },
  plnSAFO: { fund: 'SAFO', currency: 'PLN' },
  hufSAFO: { fund: 'SAFO', currency: 'HUF' },
  czkSAFO: { fund: 'SAFO', currency: 'CZK' },
} as const satisfies Record<string, { fund: FundSlug; currency: CurrencyCode }>;

export type ShareClassSymbol = keyof typeof SHARE_CLASS_METADATA;

export const ShareClassSymbol = Schema.Literal(
  ...(Object.keys(SHARE_CLASS_METADATA) as [ShareClassSymbol, ...ShareClassSymbol[]])
).annotations({ identifier: 'ShareClassSymbol', title: 'ShareClassSymbol' });

export const FundByShareClass = Record.map(SHARE_CLASS_METADATA, ({ fund }) => fund) as {
  readonly [K in ShareClassSymbol]: (typeof SHARE_CLASS_METADATA)[K]['fund'];
};

export const currencyOfShareClass = (shareClassSymbol: ShareClassSymbol): CurrencyCode =>
  SHARE_CLASS_METADATA[shareClassSymbol].currency;

export const isSPKCC = (shareClassSymbol: ShareClassSymbol | string) =>
  shareClassSymbol === 'SPKCC' || shareClassSymbol === 'eurSPKCC';

type Fund = (typeof FundByShareClass)[ShareClassSymbol];

const STABLECOIN_DISABLED_FUNDS: ReadonlySet<Fund> = new Set(['SAFO', 'SPKCC']);

export const isStablecoinEnabledForFund = (fund: Fund): boolean => !STABLECOIN_DISABLED_FUNDS.has(fund);

export const isStablecoinEnabledForShareClass = (shareClassSymbol: ShareClassSymbol): boolean =>
  isStablecoinEnabledForFund(FundByShareClass[shareClassSymbol]);

// The USTBL fund is the only fund whose stablecoins (both USDC and EURC) are offered in standard
// (non-expert) mode. Every other fund's stablecoin operations still require expert (web3) mode.
export const isStandardModeStablecoinShareClass = (shareClassSymbol: ShareClassSymbol): boolean =>
  FundByShareClass[shareClassSymbol] === 'USTBL';

export const getDefaultCurrencyByCountry = (countryOption: Option.Option<CountryCodeAlpha2>) =>
  Option.match(countryOption, {
    onNone: () => 'EUR' as const,
    onSome: (country) =>
      Match.value(country).pipe(
        Match.when('CH', () => 'EUR' as const),
        Match.when(isGbpCountry, () => 'GBP' as const),
        Match.whenOr(isEuMemberCountry, isFrenchRegion, () => 'EUR' as const),
        Match.orElse(() => 'USD' as const)
      ),
  });

const DEFAULT_SHARE_CLASS_CURRENCY_ORDER = [
  'EUR',
  'USD',
  'GBP',
  'CHF',
  'SEK',
  'NOK',
  'DKK',
  'PLN',
  'HUF',
  'CZK',
] as const;

// Candidates for provisioning a default account line, tried in order so that a distributor which
// only distributes part of the range still gets a line in the closest match: the investor's own
// currency first, then within a currency SAFO before T-Bills and accumulating before distributing.
// Professional (SPKCC) classes are deliberately absent - they are never provisioned by default - as
// are the currency-conversion classes in HIDDEN_SHARE_CLASS_SYMBOLS, which cannot be swapped.
const DEFAULT_SHARE_CLASSES_BY_CURRENCY = {
  EUR: ['eurSAFO', 'eurSAFOd', 'EUTBL'],
  USD: ['SAFO', 'SAFOd', 'USTBL'],
  GBP: ['gbpSAFO', 'gbpSAFOd', 'UKTBL'],
  CHF: ['chfSAFO'],
  SEK: ['sekSAFO'],
  NOK: ['nokSAFO'],
  DKK: ['dkkSAFO'],
  PLN: ['plnSAFO'],
  HUF: ['hufSAFO'],
  CZK: ['czkSAFO'],
} as const satisfies Record<
  (typeof DEFAULT_SHARE_CLASS_CURRENCY_ORDER)[number],
  readonly [ShareClassSymbol, ...ShareClassSymbol[]]
>;

export const getDefaultShareClassCandidatesForCountry = (
  countryOption: Option.Option<CountryCodeAlpha2>
): readonly [ShareClassSymbol, ...ShareClassSymbol[]] => {
  const currency = getDefaultCurrencyByCountry(countryOption);
  const [preferred, ...alternativesInCurrency] = DEFAULT_SHARE_CLASSES_BY_CURRENCY[currency];

  return [
    preferred,
    ...alternativesInCurrency,
    ...DEFAULT_SHARE_CLASS_CURRENCY_ORDER.filter((candidate) => candidate !== currency).flatMap(
      (candidate) => DEFAULT_SHARE_CLASSES_BY_CURRENCY[candidate]
    ),
  ];
};

export const getDefaultSafoShareClassForCountry = (countryOption: Option.Option<CountryCodeAlpha2>): ShareClassSymbol =>
  getDefaultShareClassCandidatesForCountry(countryOption)[0];

// Display order: EUR → USD → GBP → CHF → SEK → NOK → DKK → PLN → HUF → CZK
export const SHARE_CLASS_SYMBOL_DISPLAY_ORDER = pipe(
  Record.empty<ShareClassSymbol, number>(),
  // SAFO
  Record.set('eurSAFO', 1),
  Record.set('SAFO', 2),
  Record.set('gbpSAFO', 3),
  Record.set('chfSAFO', 4),
  Record.set('sekSAFO', 5),
  Record.set('nokSAFO', 6),
  Record.set('dkkSAFO', 7),
  Record.set('plnSAFO', 8),
  Record.set('hufSAFO', 9),
  Record.set('czkSAFO', 10),
  // T-Bills
  Record.set('EUTBL', 11),
  Record.set('USTBL', 12),
  Record.set('eurUSTBL', 13),
  Record.set('UKTBL', 14),
  Record.set('eurUKTBL', 15),
  // SPKCC
  Record.set('eurSPKCC', 16),
  Record.set('SPKCC', 17)
);

export const ShareClassSymbolOrder = Order.make<string>((a, b) => {
  const aOrder = Record.get(SHARE_CLASS_SYMBOL_DISPLAY_ORDER, a as ShareClassSymbol).pipe(Option.getOrElse(() => 99));
  const bOrder = Record.get(SHARE_CLASS_SYMBOL_DISPLAY_ORDER, b as ShareClassSymbol).pipe(Option.getOrElse(() => 99));

  return Number.clamp({ minimum: -1, maximum: 1 })(aOrder - bOrder) as -1 | 0 | 1;
});
