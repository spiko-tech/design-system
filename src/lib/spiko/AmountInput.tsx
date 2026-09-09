import { LocaleLanguage } from "../../shared/LocaleLanguage.js";
import React from "react";
import { NumericFormat } from "react-number-format";
import { cn } from "../../utils.js";
import { Input } from "../shadcn/ui/input.js";

export interface AmountInputProps extends React.ComponentProps<
  typeof NumericFormat
> {
  locale: LocaleLanguage;
}

const THOUSAND_SEPARATOR_BY_LOCALE: Record<LocaleLanguage, string> = {
  en: ",",
  es: ".",
  it: ".",
  de: ".",
  fr: " ", // non-breaking space
  nl: ".",
};

const DECIMAL_SEPARATOR_BY_LOCALE: Record<LocaleLanguage, string> = {
  en: ".",
  es: ",",
  it: ",",
  de: ",",
  fr: ",",
  nl: ",",
};
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
  inputMode = "text",
  ...props
}: AmountInputProps & {
  ref?: React.Ref<React.ComponentRef<typeof NumericFormat>>;
  inputMode?: "text" | "numeric" | "decimal";
  disabled?: boolean;
}) => (
  <NumericFormat
    {...props}
    allowNegative={false}
    valueIsNumericString={true}
    thousandSeparator={THOUSAND_SEPARATOR_BY_LOCALE[locale]}
    decimalSeparator={DECIMAL_SEPARATOR_BY_LOCALE[locale]}
    placeholder="0"
    customInput={Input}
    inputMode={inputMode}
    className={cn(
      "border-none text-right text-xl shadow-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-0 md:text-xl",
      className,
    )}
    disabled={props.disabled}
  />
);
AmountInput.displayName = "AmountInput";

export { AmountInput };
