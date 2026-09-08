import { CountryCodeAlpha2, LOCALE_TO_INTL, LocaleLanguage } from '@spiko/constants';
import { BigDecimal, HashMap, Match, Option, pipe } from 'effect';
import { Amount } from './Amount.js';
import { AMOUNT_DECIMALIZATION } from './constants.js';

export { AMOUNT_DECIMALIZATION };

const getDateFormattingLocalization = (locale: LocaleLanguage) => LOCALE_TO_INTL[locale];

export const formatDayPretty = (
  date: Date,
  locale: LocaleLanguage = 'en',
  withYear = true,
  withWeekday = true,
  withTime = false
) =>
  pipe(
    date.toLocaleDateString(getDateFormattingLocalization(locale), {
      ...(withWeekday ? { weekday: 'short' } : {}),
      ...(withYear ? { year: 'numeric' } : {}),
      month: 'short',
      day: 'numeric',
      ...(withTime ? { hour: 'numeric', minute: 'numeric', second: 'numeric' } : {}),
    }),
    (str) => str.charAt(0).toUpperCase() + str.slice(1)
  );

export const formatDayPrettyUTC = (date: Date, locale: LocaleLanguage = 'en', withYear = true, withWeekday = true) => {
  const utcDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));

  return utcDate.toLocaleDateString(getDateFormattingLocalization(locale), {
    timeZone: 'UTC',
    ...(withWeekday ? { weekday: 'short' } : {}),
    ...(withYear ? { year: 'numeric' } : {}),
    month: 'short',
    day: 'numeric',
  });
};

export const formatDatePretty = (date: Date, locale: LocaleLanguage = 'en', forceTimezone = false) =>
  date.toLocaleDateString(getDateFormattingLocalization(locale), {
    timeZoneName: 'short',
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: forceTimezone
      ? Match.value(locale).pipe(
          Match.when('en', () => 'UTC' as const),
          Match.when('es', () => 'Europe/Madrid' as const),
          Match.when('fr', () => 'Europe/Paris' as const),
          Match.when('it', () => 'Europe/Rome' as const),
          Match.when('de', () => 'Europe/Berlin' as const),
          Match.when('nl', () => 'Europe/Amsterdam' as const),
          Match.exhaustive
        )
      : undefined,
  });

export const formatDateShortly = (date: Date, locale: LocaleLanguage = 'en') =>
  date.toLocaleDateString(getDateFormattingLocalization(locale), {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

// Produces "23 July 2026, 11:22 AM"
export const formatDateTimeLong = (date: Date): string => {
  const datePart = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const timePart = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  return `${datePart}, ${timePart}`;
};

export const formatDateWithShortMonthAndTime = (date: Date, locale: LocaleLanguage = 'en', includeTime = true) => {
  const dateOptions: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };

  if (!includeTime) {
    return date.toLocaleDateString(getDateFormattingLocalization(locale), dateOptions);
  }

  return date.toLocaleString(getDateFormattingLocalization(locale), {
    ...dateOptions,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

export const formatDayShortly = (date: Date, locale: LocaleLanguage = 'en') =>
  date.toLocaleDateString(getDateFormattingLocalization(locale), { year: 'numeric', month: '2-digit', day: '2-digit' });

const ordinalSuffix = (dayOfMonth: number): string => {
  const lastDigit = dayOfMonth % 10;
  const lastTwoDigits = dayOfMonth % 100;
  if (lastDigit === 1 && lastTwoDigits !== 11) return 'st';
  if (lastDigit === 2 && lastTwoDigits !== 12) return 'nd';
  if (lastDigit === 3 && lastTwoDigits !== 13) return 'rd';
  return 'th';
};

/**
 * Long calendar-day form with an ordinal day, e.g. "Tuesday June 23rd". Formatted in UTC because a
 * `Day` is stored as UTC midnight of the intended calendar day. The ordinal suffix is English-only.
 */
export const formatDayLong = (date: Date, locale: LocaleLanguage = 'en'): string => {
  const intl = getDateFormattingLocalization(locale);
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  const weekday = capitalize(date.toLocaleDateString(intl, { weekday: 'long', timeZone: 'UTC' }));
  const month = capitalize(date.toLocaleDateString(intl, { month: 'long', timeZone: 'UTC' }));
  const dayOfMonth = date.getUTCDate();
  return `${weekday} ${month} ${dayOfMonth}${ordinalSuffix(dayOfMonth)}`;
};

export const formatBigDecimal = (
  value: BigDecimal.BigDecimal,
  locale: LocaleLanguage,
  decimals?: number,
  forceDecimals = false
) => {
  const scaled = decimals === undefined ? value : BigDecimal.scale(value, decimals);
  const n = BigDecimal.unsafeToNumber(scaled);
  const maxFractionDigits = decimals ?? Math.max(value.scale, 0);
  const minFractionDigits = forceDecimals ? (decimals ?? 0) : 0;

  return pipe(
    n,
    new Intl.NumberFormat(locale, {
      style: 'decimal',
      minimumFractionDigits: minFractionDigits,
      maximumFractionDigits: maxFractionDigits,
    }).format,
    (s) => s.replace(/\u202F/g, '\xa0')
  );
};

export const formatBigDecimalAsPercent = (
  percentage: BigDecimal.BigDecimal,
  locale: LocaleLanguage,
  minimumFractionDigits = 2,
  maximumFractionDigits?: number
) =>
  pipe(
    BigDecimal.unsafeToNumber(percentage),
    new Intl.NumberFormat(locale, {
      style: 'percent',
      minimumFractionDigits,
      ...(maximumFractionDigits !== undefined ? { maximumFractionDigits } : {}),
    }).format,
    (s) => s.replace(/\u202F/g, '\xa0')
  );

// e.g: 0.00025 -> 0.025% (2 decimal places)
export const formatBigDecimalAsExactPercent = (
  percentage: BigDecimal.BigDecimal,
  locale: LocaleLanguage,
  minimumFractionDigits = 2
) =>
  formatBigDecimalAsPercent(
    percentage,
    locale,
    minimumFractionDigits,
    Math.min(20, Math.max(minimumFractionDigits, BigDecimal.normalize(percentage).scale - 2))
  );

export const formatAmount = ({
  amount,
  locale,
  withCurrency = true,
  compact = false,
  withPlusSignWhenStrictlyPositive = false,
  withDecimals = true,
  withApproximationSymbol = false,
}: {
  amount: Amount;
  locale: LocaleLanguage;
  withCurrency?: boolean;
  compact?: boolean;
  withPlusSignWhenStrictlyPositive?: boolean;
  withDecimals?: boolean;
  withApproximationSymbol?: boolean;
}) => {
  const formattedAmount = BigDecimal.unsafeToNumber(Amount.round(amount).value);

  const s = Intl.NumberFormat(locale, {
    style: 'decimal',
    minimumFractionDigits: withDecimals ? 2 : 0,
    ...(compact ? { notation: 'compact', compactDisplay: 'short', maximumSignificantDigits: 3 } : {}),
  }).format(formattedAmount);

  return pipe(
    s.replace(/\u202F/g, '\xa0'),
    (s) => s + (withCurrency ? `\xa0${amount.currency}` : ''),
    (s) => (withPlusSignWhenStrictlyPositive && formattedAmount > 0.005 ? `+\xa0${s}` : s),
    (s) => (s.length > 0 && s[0] === '-' ? `-\xa0${s.slice(1)}` : s),
    (s) => (withApproximationSymbol && !Amount.isZero(amount) ? `≈\xa0${s}` : s)
  );
};

const buildCountryFormatter = (locale: LocaleLanguage) => {
  try {
    return new Intl.DisplayNames([locale], { type: 'region' });
  } catch {
    // Fallback for environments where DisplayNames isn't supported
    return { of: (code: string) => code };
  }
};

const countryFormatters = HashMap.fromIterable(
  LocaleLanguage.literals.map((locale) => [locale, buildCountryFormatter(locale)] as const)
);

const getCountryFormatter = (locale: LocaleLanguage) =>
  HashMap.get(countryFormatters, locale).pipe(Option.getOrElse(() => buildCountryFormatter(locale)));

export const formatCountry = (alpha2: CountryCodeAlpha2, locale: LocaleLanguage) =>
  getCountryFormatter(locale).of(alpha2) ?? alpha2;

export const removeAccents = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const scoreSearchMatch = (value: string, search: string): number => {
  if (!search) return 100; // Empty search matches everything equally

  const formattedSearch = removeAccents(search.toLocaleLowerCase());
  const formattedValue = removeAccents(value.toLocaleLowerCase());

  if (formattedValue === formattedSearch) return 100;

  if (formattedValue.startsWith(formattedSearch)) return 80;

  if (formattedValue.includes(formattedSearch)) return 60;

  const searchRegex = formattedSearch.split('').join('.*?');
  const match = formattedValue.match(new RegExp(searchRegex));
  if (match) {
    // Penalize based on how spread out the match is
    const matchLength = match[0].length;
    const idealLength = formattedSearch.length;
    const gapPenalty = Math.min(20, (matchLength - idealLength) * 2);
    return Math.max(1, 40 - gapPenalty);
  }

  return 0; // No match
};

export const removeNonISO8859_1Characters = (str: string): string =>
  Array.from(removeAccents(str))
    // replace En/Em Dashes with hyphens
    .map((char) => (char.charCodeAt(0) === 8211 || char.charCodeAt(0) === 8212 ? '-' : char))
    // remove other non ISO-8859-1 characters
    .filter((char) => char.charCodeAt(0) <= 255)
    .join('');
