import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { cn } from '@spiko/ui/utils';
import React, { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '../shadcn/ui/button.js';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../shadcn/ui/command.js';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../shadcn/ui/form.js';
import { Popover, PopoverContent, PopoverTrigger } from '../shadcn/ui/popover.js';

// practically copied from https://ui.shadcn.com/docs/components/combobox
export const ComboboxField = ({
  name,
  label,
  choices,
  placeholder,
  onChange,
  onSearchChange,
  emptyMessage = 'No match.',
  searchPlaceholder = 'Search...',
}: {
  name: string;
  label: string;
  choices: readonly { label: ReactElement | string; value: string; searchText?: string }[];
  placeholder: string;
  onChange?: (value: string) => void;
  onSearchChange?: (search: string) => void;
  emptyMessage?: string;
  searchPlaceholder?: string;
}) => {
  const form = useFormContext();
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onSearchChange?.(value);
  };

  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{label}</FormLabel>
          <Popover open={open} onOpenChange={setOpen} modal={true}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    'h-auto min-h-10 justify-between px-3 py-2 spiko-text-base-regular',
                    !field.value && 'text-text-secondary'
                  )}
                >
                  {field.value ? choices.find((choice) => choice.value === field.value)?.label : placeholder}
                  <CaretSortIcon className="ml-2 size-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[var(--radix-popper-anchor-width)] overflow-hidden p-0">
              <Command shouldFilter={!onSearchChange} className="flex flex-col">
                <CommandInput placeholder={searchPlaceholder} value={searchValue} onValueChange={handleSearchChange} />
                <CommandList className="max-h-[300px] flex-1 overflow-y-auto">
                  <CommandEmpty>{emptyMessage}</CommandEmpty>
                  <CommandGroup>
                    {choices.map((choice) => (
                      <CommandItem
                        key={choice.value}
                        value={choice.searchText ?? (typeof choice.label === 'string' ? choice.label : choice.value)}
                        onSelect={() => {
                          onChange?.(choice.value);
                          form.setValue(name, choice.value);
                          setOpen(false);
                        }}
                        className="text-base"
                      >
                        {choice.label}
                        <CheckIcon
                          className={cn('ml-auto size-4', choice.value === field.value ? 'opacity-100' : 'opacity-0')}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
