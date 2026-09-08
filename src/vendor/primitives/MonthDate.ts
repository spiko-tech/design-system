import { ApplicationError } from '@spiko/api-errors';
import { LocaleLanguage } from '@spiko/constants';
import { Effect, Schema as S } from 'effect';
import { Day, getMonthOfDay, getYearOfDay } from './Day.js';
import { compareMonths, formatMonth, Month, numberOfDaysInMonth, previousMonth } from './Month.js';
import { compareYears, Year } from './Year.js';

export const MonthDate = S.String.pipe(
  S.pattern(/^(0[1-9]|1[0-2])\/(1[0-9]{3}|20[0-9]{2})$/, {
    identifier: 'MonthDate',
    title: 'MonthDate',
    description: 'a valid month date (MM/YYYY)',
  }),
  S.brand('MonthDate')
);

export type MonthDate = typeof MonthDate.Type;

export const getMonthOfMonthDate = (monthDate: MonthDate): Effect.Effect<Month, ApplicationError> => {
  const parsedMonth = monthDate.split('/')[0];
  const month = Object.values(Month).find((m) => m === parsedMonth);

  return month ? Effect.succeed(month) : Effect.fail(new ApplicationError({ reason: 'Invalid month' }));
};

export const getYearOfMonthDate = (monthDate: MonthDate) => S.decode(Year)(parseInt(monthDate.split('/')[1] as string));

export const previousMonthDate = (monthDate: MonthDate) =>
  Effect.gen(function* () {
    const month = yield* getMonthOfMonthDate(monthDate);
    const year = yield* getYearOfMonthDate(monthDate);
    const newMonth = previousMonth(month);
    const newYear = yield* S.decode(Year)(month === Month.January ? year - 1 : year);

    return yield* S.decode(MonthDate)(`${newMonth}/${newYear}`);
  });

export const getMonthDateFromDay = (day: Day) =>
  Effect.gen(function* () {
    const month = yield* getMonthOfDay(day);
    const year = yield* getYearOfDay(day);
    return yield* S.decode(MonthDate)(`${month}/${year}`);
  });

export const compareMonthDates = (monthDate1: MonthDate, monthDate2: MonthDate) =>
  Effect.gen(function* () {
    const month1 = yield* getMonthOfMonthDate(monthDate1);
    const month2 = yield* getMonthOfMonthDate(monthDate2);
    const year1 = yield* getYearOfMonthDate(monthDate1);
    const year2 = yield* getYearOfMonthDate(monthDate2);

    const yearComparison = compareYears(year1, year2);

    return yearComparison !== 0 ? yearComparison : compareMonths(month1, month2);
  });

export const firstDayOfMonthDate = (monthDate: MonthDate) =>
  Effect.gen(function* () {
    const month = yield* getMonthOfMonthDate(monthDate);
    const year = yield* getYearOfMonthDate(monthDate);

    return yield* S.decode(Day)(`${year}-${month}-01T00:00:00Z`);
  });

export const lastDayOfMonthDate = (monthDate: MonthDate) =>
  Effect.gen(function* () {
    const month = yield* getMonthOfMonthDate(monthDate);
    const year = yield* getYearOfMonthDate(monthDate);
    const numberOfDays = numberOfDaysInMonth(month, year);

    return yield* S.decode(Day)(`${year}-${month}-${numberOfDays < 10 ? `0${numberOfDays}` : numberOfDays}T00:00:00Z`);
  });

export const formatMonthDate = (monthDate: MonthDate, locale: LocaleLanguage) =>
  Effect.gen(function* () {
    const month = yield* getMonthOfMonthDate(monthDate);
    const year = yield* getYearOfMonthDate(monthDate);
    const formattedMonth = formatMonth({ month, locale, capitalizeFirstLetter: true });
    return { formattedMonth, formattedMonthYear: `${formattedMonth} ${year}` };
  });
