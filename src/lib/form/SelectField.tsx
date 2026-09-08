import { LocaleLanguage } from '@spiko/constants';
import { Match } from 'effect';
import { FieldValues, Path, useFormContext } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../shadcn/ui/form.js';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemSimple,
  SelectTrigger,
  SelectValue,
} from '../shadcn/ui/select.js';

export const SelectField = <T extends FieldValues>({
  name,
  question,
  trigger,
  locale,
  onValueChange,
  disabled = false,
  labelClassName,
  hideSelectedIndicator = false,
}: {
  name: Path<T> & keyof T;
  question: {
    label?: string;
    options: Record<string, React.ReactNode | { disabled?: boolean; value: React.ReactNode }>;
  };
  trigger?: string;
  locale: LocaleLanguage;
  onValueChange?: (arg: string) => void;
  disabled?: boolean;
  labelClassName?: string;
  hideSelectedIndicator?: boolean;
}) => {
  const { control } = useFormContext<T>();
  const ItemComponent = hideSelectedIndicator ? SelectItemSimple : SelectItem;
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          {question.label !== undefined && <FormLabel className={labelClassName}>{question.label}</FormLabel>}
          <Select
            disabled={disabled}
            value={field.value}
            onValueChange={(value) => {
              if (onValueChange) {
                onValueChange(value);
              }
              return field.onChange(value);
            }}
          >
            <FormControl>
              <SelectTrigger className="truncate hover:bg-accent">
                <SelectValue
                  placeholder={
                    <span className="text-text-secondary">
                      {trigger ||
                        Match.value(locale).pipe(
                          Match.when('en', () => 'Select an option'),
                          Match.when('es', () => 'Selecciona una opción'),
                          Match.when('fr', () => 'Sélectionner une option'),
                          Match.when('it', () => "Seleziona un'opzione"),
                          Match.when('de', () => 'Option auswählen'),
                          Match.when('nl', () => 'Selecteer een optie'),
                          Match.exhaustive
                        )}
                    </span>
                  }
                />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="spk-scrollablePopper max-h-96">
              <SelectGroup>
                {Object.entries(question.options).map(([key, option]) => {
                  const isOptionObject = option !== null && typeof option === 'object' && 'value' in option;
                  const disabled = isOptionObject ? (option.disabled ?? false) : false;
                  const label = isOptionObject ? option.value : option;

                  return (
                    <ItemComponent disabled={disabled} key={`${name}-${key}`} value={key}>
                      {label}
                    </ItemComponent>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
