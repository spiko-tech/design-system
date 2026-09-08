import { Locale } from 'date-fns/locale';
import { useState } from 'react';
import { Button } from '../shadcn/ui/button.js';
import { Calendar } from '../shadcn/ui/calendar.js';
import { Popover, PopoverContent, PopoverTrigger } from '../shadcn/ui/popover.js';
import { Icon } from './Icon/Icon.js';

export const DatePicker = ({
  date,
  formatDate = (date) => date.toISOString(),
  disabled = false,
  locale,
  placeholder,
  onChange,
  availableDate = (_date) => true,
}: {
  date: Date | undefined;
  formatDate?: (date: Date) => string;
  disabled?: boolean;
  locale: Locale;
  placeholder: string;
  onChange: (date: Date | undefined) => void;
  availableDate?: (date: Date) => boolean;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant={'outline'} className="spiko-text-sm-regular" disabled={disabled}>
          {date ? formatDate(date) : <span>{placeholder}</span>}
          <Icon.Calendar className="ml-auto size-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => {
            if (date !== undefined) {
              onChange(new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())));
            }

            setOpen(false);
          }}
          disabled={(date) => !availableDate(new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())))}
          locale={locale}
        />
      </PopoverContent>
    </Popover>
  );
};
