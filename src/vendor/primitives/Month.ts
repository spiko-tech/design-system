import { LocaleLanguage } from '@spiko/constants';
import { HashMap, Match, Option } from 'effect';
import { isLeapYear, Year } from './Year.js';

export const Month = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12',
} as const;

export type Month = (typeof Month)[keyof typeof Month];

export const previousMonth = (month: Month): Month =>
  Match.value(month).pipe(
    Match.when(Month.January, () => Month.December),
    Match.when(Month.February, () => Month.January),
    Match.when(Month.March, () => Month.February),
    Match.when(Month.April, () => Month.March),
    Match.when(Month.May, () => Month.April),
    Match.when(Month.June, () => Month.May),
    Match.when(Month.July, () => Month.June),
    Match.when(Month.August, () => Month.July),
    Match.when(Month.September, () => Month.August),
    Match.when(Month.October, () => Month.September),
    Match.when(Month.November, () => Month.October),
    Match.when(Month.December, () => Month.November),
    Match.exhaustive
  );

export const compareMonths = (month1: Month, month2: Month) => (month1 > month2 ? 1 : month1 < month2 ? -1 : 0);

export const numberOfDaysInMonth = (month: Month, year: Year): number =>
  Match.value(month).pipe(
    Match.whenOr(
      Month.January,
      Month.March,
      Month.May,
      Month.July,
      Month.August,
      Month.October,
      Month.December,
      () => 31
    ),
    Match.whenOr(Month.April, Month.June, Month.September, Month.November, () => 30),
    Match.when(Month.February, () => (isLeapYear(year) ? 29 : 28)),
    Match.exhaustive
  );

const buildMonthFormatter = (locale: LocaleLanguage) =>
  new Intl.DateTimeFormat(locale, { month: 'long', timeZone: 'UTC' });

const monthFormatters = HashMap.fromIterable(
  LocaleLanguage.literals.map((locale) => [locale, buildMonthFormatter(locale)] as const)
);

const getMonthFormatter = (locale: LocaleLanguage) =>
  HashMap.get(monthFormatters, locale).pipe(Option.getOrElse(() => buildMonthFormatter(locale)));

export const formatMonth = ({
  month,
  locale,
  capitalizeFirstLetter = false,
}: {
  month: Month;
  locale: LocaleLanguage;
  capitalizeFirstLetter?: boolean;
}) => {
  const localizedMonth = getMonthFormatter(locale).format(new Date(Date.UTC(2020, Number(month) - 1, 1)));
  return capitalizeFirstLetter
    ? localizedMonth.charAt(0).toLocaleUpperCase(locale) + localizedMonth.slice(1)
    : localizedMonth;
};
