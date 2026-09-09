// copied from https://s-yadav.github.io/react-number-format/docs/customization/#iban-account-input-field-with-pattern

import { ChangeEvent, ChangeEventHandler, FunctionComponent } from "react";
import { NumberFormatBase, NumberFormatBaseProps } from "react-number-format";
import { Input } from "../input/input.js";

interface IBANInputProps extends NumberFormatBaseProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const IBANInputDef: FunctionComponent<IBANInputProps> = ({
  onChange,
  ...props
}) => (
  <NumberFormatBase
    {...props}
    type="text"
    customInput={Input}
    format={(value) =>
      value
        .replace(/\s+/g, "")
        .replace(/([a-z0-9]{4})/gi, "$1 ")
        .trim()
        .toLocaleUpperCase()
    }
    removeFormatting={(value) => value.replace(/\s+/gi, "")}
    isValidInputCharacter={(char) => /^[a-z0-9]$/i.test(char)}
    getCaretBoundary={(value) =>
      Array(value.length + 1)
        .fill(0)
        .map(() => true)
    }
    onValueChange={(values, { event }) =>
      onChange(
        Object.assign({} as ChangeEvent<HTMLInputElement>, event, {
          target: { name: props.name, value: values.value.toLocaleUpperCase() },
        }),
      )
    }
    onKeyDown={(e) =>
      !/^(?:[a-z0-9]|Backspace|Delete|Home|End|ArrowLeft|ArrowRight|Shift|CapsLock|Control|NumLock|Tab|Paste|Redo|Undo)$/i.test(
        e.key,
      ) && e.preventDefault()
    }
  />
);

export const IBANInput = ({
  ref,
  ...props
}: IBANInputProps & { ref?: React.Ref<HTMLInputElement> }) => {
  const ibanInputDefProps = ref ? { ...props, getInputRef: ref } : props;
  return <IBANInputDef {...ibanInputDefProps} />;
};
IBANInput.displayName = "IBANInput";
