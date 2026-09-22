import { DayButtonProps, DayPicker } from 'react-day-picker';
import { Button } from '../button/button.js';
import * as React from 'react';
type DistributiveOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;
declare const Calendar: ({ className, classNames, showOutsideDays, fixedWeeks, captionLayout, buttonVariant, formatters, components, ...props }: DistributiveOmit<React.ComponentProps<typeof DayPicker>, "showWeekNumber"> & {
    buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) => import("react/jsx-runtime").JSX.Element;
declare const CalendarDayButton: ({ className, day, modifiers, ...props }: DayButtonProps) => import("react/jsx-runtime").JSX.Element;
export { Calendar, CalendarDayButton };
