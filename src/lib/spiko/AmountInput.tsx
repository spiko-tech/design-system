import { LocaleLanguage } from '@spiko/constants';
import { cn } from '@spiko/ui/utils';
import { Match } from 'effect';
import React from 'react';
import { NumericFormat } from 'react-number-format';
import { Input } from '../shadcn/ui/input.js';

export interface AmountInputProps extends React.ComponentProps<typeof NumericFormat> {
  locale: LocaleLanguage;
}

/**
 *
 * IMPORTANT IMPORTANT IMPORTANT IMPORTANT
 * If this component is updated, it might be relevant to update the AmountField component in the mobile app as well
 *
 */
const AmountInput = ({
  ref,
  className,
  locale,
  type,
  inputMode = 'text',
  ...props
}: AmountInputProps & {
  ref?: React.Ref<React.ComponentRef<typeof NumericFormat>>;
  inputMode?: 'text' | 'numeric' | 'decimal';
  disabled?: boolean;
}) => (
  <NumericFormat
    {...props}
    allowNegative={false}
    valueIsNumericString={true}
    thousandSeparator={Match.value(locale).pipe(
      Match.when('en', () => ','),
      Match.when('es', () => '.'),
      Match.when('it', () => '.'),
      Match.when('de', () => '.'),
      Match.when('fr', () => ' '), // non-breaking space
      Match.when('nl', () => '.'),
      Match.exhaustive
    )}
    decimalSeparator={Match.value(locale).pipe(
      Match.when('en', () => '.'),
      Match.when('es', () => ','),
      Match.when('it', () => ','),
      Match.when('de', () => ','),
      Match.when('fr', () => ','),
      Match.when('nl', () => ','),
      Match.exhaustive
    )}
    placeholder="0"
    customInput={Input}
    inputMode={inputMode}
    className={cn(
      'border-none text-right text-xl shadow-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-0 md:text-xl',
      className
    )}
    disabled={props.disabled}
  />
);
AmountInput.displayName = 'AmountInput';

export { AmountInput };
