import { COUNTRY_CODES_ALPHA2, CountryCodeAlpha2, LocaleLanguage } from '@spiko/constants';
import { formatCountry } from '@spiko/primitives/Formatters';
import { cn } from '@spiko/ui/utils';
import { HashSet } from 'effect';
import { useState } from 'react';
import * as RPNI from 'react-phone-number-input';
import { Button } from '../shadcn/ui/button.js';
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from '../shadcn/ui/command.js';
import { Popover, PopoverContent, PopoverTrigger } from '../shadcn/ui/popover.js';
import { Flag } from './Icon/Flag.js';
import { Icon } from './Icon/Icon.js';

export const SelectCountry = ({
  country,
  onSelect,
  locale,
  placeholder = '',
  className = '',
  showFlagInTrigger = false,
  excludeCountries = HashSet.empty(),
}: {
  country?: CountryCodeAlpha2;
  onSelect: (country: CountryCodeAlpha2) => void;
  locale: LocaleLanguage;
  placeholder?: string;
  className?: string;
  showFlagInTrigger?: boolean;
  excludeCountries?: HashSet.HashSet<CountryCodeAlpha2>;
}) => {
  const [open, setOpen] = useState(false);
  const countryCodes = COUNTRY_CODES_ALPHA2.filter((alpha2) => !HashSet.has(excludeCountries, alpha2));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn('w-full justify-between', className)}
        >
          {country !== undefined ? (
            <span className="flex items-center gap-2 spiko-text-base-regular">
              {showFlagInTrigger && country !== undefined && RPNI.isSupportedCountry(country) && (
                <Flag country={country} countryName={country} />
              )}
              {formatCountry(country, locale)}
            </span>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <Icon.ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        style={{ width: 'var(--radix-popover-trigger-width)' }}
        className="overflow-hidden p-0"
      >
        <Command className="flex flex-col overflow-hidden">
          <CommandInput placeholder={placeholder} className="shrink-0" />
          <div className="max-h-[300px] overflow-x-hidden overflow-y-auto" onWheel={(e) => e.stopPropagation()}>
            <CommandList className="max-h-none">
              <CommandGroup>
                {countryCodes.map((alpha2) => (
                  <CommandItem
                    key={alpha2}
                    value={formatCountry(alpha2, locale)}
                    onSelect={() => {
                      onSelect(alpha2);
                      setOpen(false);
                    }}
                    className="flex justify-between gap-2"
                  >
                    <div className="flex items-center gap-2">
                      {RPNI.isSupportedCountry(alpha2) ? (
                        <Flag country={alpha2} countryName={alpha2} />
                      ) : (
                        <span className="h-4 w-6 shrink-0 rounded-xs bg-muted" aria-hidden />
                      )}
                      <p className="spiko-text-sm-regular">{formatCountry(alpha2, locale)}</p>
                    </div>
                    {country === alpha2 && <Icon.Check className="size-4" />}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </div>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
