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

export type CurrencyCode = keyof typeof CURRENCY_SYMBOLS;

export type StableCoinCode = 'USDC' | 'EURC';
