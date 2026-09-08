import { getTimezoneOffset } from 'date-fns-tz';
import { Duration, Schema as S } from 'effect';
import { Day } from './Day.js';

export const TWENTYFOUR_HOURS = 24 * 60 * 60 * 1000;

// these are the main UCITS domiciliation timezones
export const Timezone = S.Literal('Europe/Paris', 'Europe/Dublin', 'Europe/London', 'Europe/Luxembourg');

export type Timezone = typeof Timezone.Type;

export class TimezonedHour extends S.Class<TimezonedHour>('TimezonedHour')({
  milliseconds: S.Number.pipe(S.int(), S.nonNegative(), S.lessThanOrEqualTo(TWENTYFOUR_HOURS)),
  timezone: Timezone,
}) {
  private getCurrentHourInTimezone(date: Date): number {
    const localizedDate = new Date(date.toLocaleString('en-US', { timeZone: this.timezone }) + ' UTC');
    const clonedDate = new Date(localizedDate.getTime());
    clonedDate.setUTCHours(0, 0, 0, 0);
    return localizedDate.getTime() - clonedDate.getTime();
  }

  isStrictlyAfter = (date: Date): boolean => this.getCurrentHourInTimezone(date) < this.milliseconds;

  isStrictlyBefore = (date: Date): boolean => this.getCurrentHourInTimezone(date) > this.milliseconds;

  asDateOfDay = (day: Day) => {
    const offset = getTimezoneOffset(this.timezone, day);
    return new Date(day.getTime() + this.milliseconds - offset);
  };

  addDuration = (duration: Duration.Duration) => {
    const durationInMilliseconds = Duration.toMillis(duration);
    const newMilliseconds = this.milliseconds + durationInMilliseconds;
    return new TimezonedHour({ milliseconds: newMilliseconds % TWENTYFOUR_HOURS, timezone: this.timezone });
  };
}
