import { fromZonedTime } from 'date-fns-tz';
import { addHours, format, parse, subHours } from 'date-fns/fp';
import { Arbitrary, Clock, Effect, ParseResult, pipe, Schema as S } from 'effect';
import { Month } from './Month.js';
import { Timezone } from './TimezonedHour.js';
import { Year } from './Year.js';

export const formatAsDay = (date: Date) => {
  const day = date.toISOString().split('T')[0];
  return day || ''; // TODO: Make this function effectful to handle errors
};

export const formatAsDayFrench = (date: Date) => format('dd/MM/yyyy')(date);

export const formatAsDayInternational = (date: Date) => format('yyyyMMdd')(date);

export const startOfUTCDay = (date: Date) => {
  const clonedDate = new Date(date.getTime());
  clonedDate.setUTCHours(0, 0, 0, 0);
  return clonedDate;
};

export const endOfUTCDay = (date: Date) => {
  const clonedDate = new Date(date.getTime());
  clonedDate.setUTCHours(23, 59, 59, 999);
  return clonedDate;
};

// A calendar day in a timezone runs from local midnight to the last millisecond before the next
// local midnight. We read the local calendar date (en-CA formats as YYYY-MM-DD) and let
// `fromZonedTime` resolve that wall-clock bound to the correct UTC instant. `fromZonedTime` handles
// DST transitions (e.g. the 23h day on spring-forward) that manual offset arithmetic gets wrong at
// the boundary.
export const startOfDayInTimezone =
  (timezone: string) =>
  (date: Date): Date =>
    fromZonedTime(`${date.toLocaleDateString('en-CA', { timeZone: timezone })}T00:00:00.000`, timezone);

export const endOfDayInTimezone =
  (timezone: string) =>
  (date: Date): Date =>
    fromZonedTime(`${date.toLocaleDateString('en-CA', { timeZone: timezone })}T23:59:59.999`, timezone);

export const latestOperatingDay = (isOperatingDay: (day: Day) => boolean) => (today: Day) => {
  let day = today;
  while (!isOperatingDay(day)) {
    day = previousDay(day);
  }
  return day;
};

export const firstOperatingDayAfter = (isOperatingDay: (day: Day) => boolean) => (targetDay: Day) => {
  let day = nextDay(targetDay);
  while (!isOperatingDay(day)) {
    day = nextDay(day);
  }
  return day;
};

export const firstDayOfWeek = (day: Day) =>
  startOfUTCDay(
    subHours(24 * (day.getUTCDay() === 0 ? 6 : day.getUTCDay() - 1))(
      // UTC week starts on Sunday
      day
    )
  ) as Day;

export const isBusinessDay =
  (nonOperatingDays: readonly Day[]) =>
  (day: Day): boolean =>
    !nonOperatingDays.some((d) => d.getTime() === day.getTime()) && day.getUTCDay() !== 0 && day.getUTCDay() !== 6;

export const previousDay: (day: Day) => Day = (day) => subHours(24)(day) as Day;

export const addDays =
  (n: number) =>
  (day: Day): Day =>
    addHours(24 * n)(day) as Day;

export const subtractDays =
  (n: number) =>
  (day: Day): Day =>
    subHours(24 * n)(day) as Day;

export const previousBusinessDay =
  (nonOperatingDays: readonly Day[]) =>
  (day: Day): Day => {
    day = previousDay(day);
    while (!isBusinessDay(nonOperatingDays)(day)) {
      day = previousDay(day);
    }
    return day;
  };

export const nextDay: (day: Day) => Day = (day) => addHours(24)(day) as Day;

export const nextBusinessDay =
  (nonOperatingDays: readonly Day[]) =>
  (day: Day): Day => {
    day = nextDay(day);
    while (!isBusinessDay(nonOperatingDays)(day)) {
      day = nextDay(day);
    }
    return day;
  };

export const addBusinessDays =
  (nonOperatingDays: readonly Day[]) =>
  (day: Day, count: number): Day => {
    let result = day;
    for (let i = 0; i < count; i++) {
      result = nextBusinessDay(nonOperatingDays)(result);
    }
    return result;
  };

export const subtractBusinessDays =
  (nonOperatingDays: readonly Day[]) =>
  (day: Day, count: number): Day => {
    let result = day;
    for (let i = 0; i < count; i++) {
      result = previousBusinessDay(nonOperatingDays)(result);
    }
    return result;
  };

export const differenceInDays = (day1: Day, day2: Day): number =>
  Math.floor((day2.getTime() - day1.getTime()) / (1000 * 60 * 60 * 24));

export const getDayInTimezoneFromDate = (timezone: string) => (date: Date) =>
  S.decodeSync(Day)(date.toLocaleString('en-US', { timeZone: timezone }) + ' UTC');

export const getTodayInTimezone = (timezone: Timezone) =>
  pipe(
    Clock.currentTimeMillis,
    Effect.map((currentTime) => new Date(currentTime)),
    Effect.map(getDayInTimezoneFromDate(timezone))
  );

export const DayFromDate = pipe(
  S.transform(S.ValidDateFromSelf, S.ValidDateFromSelf, { decode: startOfUTCDay, encode: startOfUTCDay }),
  S.validDate({
    arbitrary: () => (fc) => fc.date({ min: new Date('2020-01-01'), max: new Date('2100-01-01') }).map(startOfUTCDay),
  }),
  S.brand('Day')
);

export const Day = S.compose(S.Date, DayFromDate).pipe(
  S.annotations({
    jsonSchema: { type: 'string', title: 'Day', description: 'a day in ISO format "YYYY-MM-DD"' },
    arbitrary: () => () => Arbitrary.make(DayFromDate),
  })
);
export type Day = typeof Day.Type;

const referenceDay = DayFromDate.make(new Date(0));

export const DayFromFormat = (
  formattingConvention: string // for instance, formattingConvention = 'dd/MM/yyyy'
) =>
  pipe(
    S.transformOrFail(S.String, DayFromDate, {
      strict: true,
      decode: (s, _, ast) =>
        pipe(
          ParseResult.try({
            try: () => {
              const parsedDate = parse(referenceDay)(formattingConvention)(s);
              return new Date(parsedDate.valueOf() - parsedDate.getTimezoneOffset() * 60 * 1000);
            },
            catch: (e: unknown) => new ParseResult.Type(ast, s, (e as Error).message),
          })
        ),

      encode: (d, _, ast) =>
        Effect.try({
          try: () => format(formattingConvention)(d),
          catch: (e: unknown) => new ParseResult.Type(ast, d, (e as Error).message),
        }),
    }),
    S.annotations({
      jsonSchema: { type: 'string', title: 'Day', description: `a day formatted as "${formattingConvention}"` },
    })
  );

export const getMonthOfDay = (day: Day): Effect.Effect<Month> => {
  const monthNumber = day.getUTCMonth() + 1;
  const parsedMonth = monthNumber < 10 ? `0${monthNumber}` : `${monthNumber}`;
  const month = Object.values(Month).find((m) => m === parsedMonth);

  return month
    ? Effect.succeed(month)
    : Effect.dieMessage(`Invalid month when calling getMonthOfDay on ${formatAsDay(day)}`);
};

export const getYearOfDay = (day: Day) => S.decode(Year)(day.getUTCFullYear());
