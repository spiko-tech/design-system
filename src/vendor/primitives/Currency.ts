import { Match, Option, Schema } from 'effect';

const CURRENCY_CODES = ['EUR', 'USD', 'GBP', 'CHF', 'JPY', 'SGD', 'SEK', 'NOK', 'DKK', 'PLN', 'HUF', 'CZK'] as const;

export const CurrencyCode = Schema.Literal(...CURRENCY_CODES).annotations({
  identifier: 'CurrencyCode',
  title: 'Currency code',
  description: `a currency code among ${CURRENCY_CODES.map((code) => `"${code}"`).join(', ')}`,
});

export type CurrencyCode = typeof CurrencyCode.Type;

export const StableCoinCode = Schema.Literal('USDC', 'EURC');
export type StableCoinCode = typeof StableCoinCode.Type;

const DISABLED_STABLE_COIN_CODES: ReadonlySet<StableCoinCode> = new Set();

export const isStableCoinEnabled = (code: StableCoinCode): boolean => !DISABLED_STABLE_COIN_CODES.has(code);

export const CURRENCY_SYMBOLS = {
  EUR: '€',
  USD: '$',
  GBP: '£',
  CHF: '₣',
  JPY: '¥',
  SGD: 'S$',
  SEK: 'kr',
  NOK: 'kr',
  DKK: 'kr',
  PLN: 'zł',
  HUF: 'Ft',
  CZK: 'Kč',
} as const;

export const getCurrencySymbol = (currency: CurrencyCode) => CURRENCY_SYMBOLS[currency];

export const convertStableCoinCodeToCurrencyCode = (stableCoinCode: StableCoinCode): CurrencyCode =>
  Match.value(stableCoinCode).pipe(
    Match.when('USDC', () => 'USD' as const),
    Match.when('EURC', () => 'EUR' as const),
    Match.exhaustive
  );

export const convertCurrencyCodeToStableCoinCode = (currency: CurrencyCode): Option.Option<StableCoinCode> =>
  Match.value(currency).pipe(
    Match.when('EUR', () => 'EURC' as const),
    Match.when('USD', () => 'USDC' as const),
    Match.option
  );

const STABLE_COIN_ISIN_BY_CURRENCY: Partial<Record<CurrencyCode, string>> = {
  EUR: 'XT13XTMPZT36', // EURC
  USD: 'XTTJWK5QTRK6', // USDC
};

export const convertCurrencyCodeToStableCoinIsin = (currency: CurrencyCode): Option.Option<string> =>
  Option.fromNullable(STABLE_COIN_ISIN_BY_CURRENCY[currency]);
