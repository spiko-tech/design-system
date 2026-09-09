import { CURRENCY_SYMBOLS, CurrencyCode } from '@/shared/Currency.js';
import { cn } from '@/utils.js';
import * as React from 'react';
import { NumericFormat } from 'react-number-format';
import { Input } from '../input/input.js';

const CurrencyInput = React.forwardRef<
  HTMLInputElement,
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'defaultValue' | 'onChange'> & {
    currency?: CurrencyCode | undefined;
    value?: string | number | undefined;
    defaultValue?: string | number | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  }
>(({ className, currency, ...props }, ref) => {
  const currencySymbol = currency ? CURRENCY_SYMBOLS[currency] : '---';
  // `prefix` is an HTML/RDFa attribute on React inputs; it conflicts with NumericFormat's `prefix` prop type.
  const { value, defaultValue, onChange, prefix: _htmlPrefix, ...inputProps } = props;
  const numericValue = typeof value === 'number' ? value.toString() : value;
  const numericDefaultValue = typeof defaultValue === 'number' ? defaultValue.toString() : defaultValue;

  return (
    <div className="relative">
      <NumericFormat
        {...inputProps}
        getInputRef={ref}
        {...(numericValue !== undefined ? { value: numericValue } : {})}
        {...(numericDefaultValue !== undefined ? { defaultValue: numericDefaultValue } : {})}
        allowNegative={false}
        valueIsNumericString={true}
        thousandSeparator=" "
        decimalSeparator="."
        customInput={Input}
        className={cn('pr-16', className)}
        onValueChange={(values) => {
          onChange?.({
            // This shape works for React Hook Form (and normal handlers).
            target: { name: inputProps.name, value: values.value },
          } as unknown as React.ChangeEvent<HTMLInputElement>);
        }}
      />
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 flex items-center">
        <div className="-z-10 h-full w-px bg-border" />
        <div className="flex h-full items-center bg-muted/30 px-4">
          <span className="text-base text-muted-foreground">{currencySymbol}</span>
        </div>
      </div>
    </div>
  );
});

CurrencyInput.displayName = 'CurrencyInput';

export { CurrencyInput };
