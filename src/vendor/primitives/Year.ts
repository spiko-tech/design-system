import { Schema as S } from 'effect';

export const Year = S.Number.pipe(S.int(), S.between(1970, 2999), S.brand('Year'));

export type Year = typeof Year.Type;

export const compareYears = (year1: Year, year2: Year) => {
  if (year1 > year2) {
    return 1;
  } else if (year1 < year2) {
    return -1;
  } else {
    return 0;
  }
};

export const isLeapYear = (year: Year): boolean => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
