import { Control, ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../shadcn/ui/form.js';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemSimple,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '../shadcn/ui/select.js';

export type OptionGroup = {
  key: string;
  label: string | React.ReactNode;
  options: Record<string, string | React.ReactNode>;
};

export type GroupedSelectFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues extends FieldValues = TFieldValues,
> = Omit<ControllerProps<TFieldValues, TName, TTransformedValues>, 'render'> & {
  control: Control<TFieldValues, unknown, TTransformedValues>;
  groups: OptionGroup[];
  placeholder?: string;
  disabled?: boolean;
  hideSelectedIndicator?: boolean;
  label?: string;
  labelClassName?: string;
  onValueChange?: (value: string) => void;
  showSeparators?: boolean;
  hideLabelIfSingleGroup?: boolean;
};

export const GroupedSelectField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues extends FieldValues = TFieldValues,
>({
  control,
  name,
  groups,
  placeholder,
  disabled = false,
  hideSelectedIndicator = false,
  label,
  labelClassName,
  onValueChange,
  showSeparators = false,
  hideLabelIfSingleGroup = false,
  ...controllerProps
}: GroupedSelectFieldProps<TFieldValues, TName, TTransformedValues>) => {
  const ItemComponent = hideSelectedIndicator ? SelectItemSimple : SelectItem;

  return (
    <FormField
      control={control}
      name={name}
      {...controllerProps}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-2">
          {label !== undefined && <FormLabel className={labelClassName}>{label}</FormLabel>}
          <Select
            disabled={disabled}
            value={field.value}
            onValueChange={(value) => {
              onValueChange?.(value);
              field.onChange(value);
            }}
          >
            <FormControl>
              <SelectTrigger className="truncate spiko-text-sm-regular hover:bg-accent">
                <SelectValue placeholder={placeholder} className="spiko-text-sm-regular" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="spk-scrollablePopper max-h-96">
              {groups.map((group, groupIndex) => (
                <div key={group.key}>
                  {showSeparators && groupIndex > 0 && <SelectSeparator />}
                  <SelectGroup>
                    <SelectLabel className={hideLabelIfSingleGroup && groups.length === 1 ? 'sr-only' : undefined}>
                      {group.label}
                    </SelectLabel>
                    {Object.entries(group.options).map(([key, option]) => (
                      <ItemComponent key={`${name}-${group.key}-${key}`} value={key}>
                        {option}
                      </ItemComponent>
                    ))}
                  </SelectGroup>
                </div>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
