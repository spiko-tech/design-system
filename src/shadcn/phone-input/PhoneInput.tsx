import {
  InputHTMLAttributes,
  createContext,
  useCallback,
  useContext,
} from "react";
import RPNInput, * as RPNI from "react-phone-number-input";
import { cn } from "../../utils.js";
import { Button } from "../button/button.js";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../command/command.js";
import { Input } from "../input/input.js";
import { Popover, PopoverContent, PopoverTrigger } from "../popover/popover.js";
import { Flag } from "../../assets/icons/flags/Flag.js";
import { Icon } from "../../assets/icons/core/Icon.js";

const PhoneInputContext = createContext<{
  searchText: string;
  noCountryFoundText: string;
} | null>(null);

const usePhoneInputContext = () => {
  const context = useContext(PhoneInputContext);
  if (!context) {
    throw new Error(
      "PhoneInput compound components cannot be rendered outside the PhoneInput component",
    );
  }
  return context;
};

const PhoneInput = ({
  ref,
  className,
  onChange,
  searchText,
  noCountryFoundText,
  ...props
}: Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> &
  Omit<RPNI.Props<typeof RPNInput>, "onChange"> & {
    onChange?: (value: RPNI.Value) => void;
    searchText: string;
    noCountryFoundText: string;
  } & { ref?: React.Ref<React.ElementRef<typeof RPNInput>> }) => {
  return (
    <PhoneInputContext.Provider value={{ searchText, noCountryFoundText }}>
      <RPNInput
        ref={ref}
        className={cn("flex", className)}
        flagComponent={Flag}
        countrySelectComponent={CountrySelect}
        inputComponent={InputComponent}
        /**
         * Handles the onChange event.
         *
         * react-phone-number-input might trigger the onChange event as undefined
         * when a valid phone number is not entered. To prevent this,
         * the value is coerced to an empty string.
         *
         * @param {E164Number | undefined} value - The entered value
         */
        onChange={(value) => onChange?.(value ?? ("" as RPNI.Value))}
        {...props}
      />
    </PhoneInputContext.Provider>
  );
};
PhoneInput.displayName = "PhoneInput";

const InputComponent = ({
  ref,
  className,
  ...props
}: React.ComponentProps<"input"> & { ref?: React.Ref<HTMLInputElement> }) => (
  <Input
    className={cn("rounded-s-none rounded-e-lg", className)}
    {...props}
    ref={ref}
  />
);
InputComponent.displayName = "InputComponent";

const CountrySelect = ({
  disabled,
  value,
  onChange,
  options,
}: {
  disabled?: boolean;
  value: RPNI.Country;
  onChange: (value: RPNI.Country) => void;
  options: { label: string; value: RPNI.Country }[];
}) => {
  const handleSelect = useCallback(
    (country: RPNI.Country) => {
      onChange(country);
    },
    [onChange],
  );

  const { noCountryFoundText, searchText } = usePhoneInputContext();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant={"outline"}
          className={cn(
            "flex gap-1 rounded-s-lg rounded-e-none border-r-0 pr-1 pl-3",
          )}
          disabled={disabled}
        >
          <Flag country={value} countryName={value} />
          <Icon.ChevronsUpDown
            className={cn(
              "size-4 opacity-50",
              disabled ? "hidden" : "opacity-100",
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder={searchText} />
          <CommandList>
            <CommandEmpty>{noCountryFoundText}</CommandEmpty>
            <CommandGroup>
              {options
                .filter((x) => x.value)
                .map((option) => (
                  <CommandItem
                    className="gap-2"
                    key={option.value}
                    onSelect={() => handleSelect(option.value)}
                  >
                    <Flag country={option.value} countryName={option.label} />
                    <span className="flex-1 text-sm">{option.label}</span>
                    {option.value && (
                      <span className="text-sm text-foreground/50">
                        {`+${RPNI.getCountryCallingCode(option.value)}`}
                      </span>
                    )}
                    <Icon.Check
                      className={cn(
                        "ml-auto size-4",
                        option.value === value ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export { PhoneInput };
