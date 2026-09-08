import { MonthDate } from '@spiko/primitives/MonthDate';
import { Array, Option, pipe, Schema } from 'effect';
import { FieldValues, Path, useFormContext } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../shadcn/ui/form.js';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../shadcn/ui/select.js';

export const MonthPicker = <T extends FieldValues>({
  name,
  label,
  onValueChange,
  formatMonthDate,
  monthDates,
  labelClassName,
}: {
  name: Path<T> & keyof T;
  label: string;
  onValueChange: (monthDate: MonthDate) => void;
  formatMonthDate: (monthDate: MonthDate) => string;
  monthDates: readonly MonthDate[];
  labelClassName?: string;
}) => {
  const { control } = useFormContext<T>();
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={labelClassName}>{label}</FormLabel>
          <Select onValueChange={onValueChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="spiko-text-sm-regular hover:bg-accent">
                <SelectValue>
                  {pipe(
                    field.value,
                    Schema.decodeUnknownOption(MonthDate),
                    Option.map(formatMonthDate),
                    Option.getOrNull
                  )}
                </SelectValue>
              </SelectTrigger>
            </FormControl>
            <SelectContent className="spk-scrollablePopper max-h-screen">
              <SelectGroup>
                {Array.map(monthDates, (monthDate) => (
                  <SelectItem key={monthDate} value={monthDate} className="spiko-text-sm-regular">
                    {formatMonthDate(monthDate)}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
