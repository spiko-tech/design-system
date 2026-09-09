import { ChangeEvent, ChangeEventHandler, FunctionComponent } from "react";
import { NumberFormatBase, NumberFormatBaseProps } from "react-number-format";
import { Input } from "../input/input.js";

interface SortCodeInputProps extends NumberFormatBaseProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SortCodeInputDef: FunctionComponent<SortCodeInputProps> = ({
  onChange,
  ...props
}) => (
  <NumberFormatBase
    {...props}
    type="text"
    customInput={Input}
    format={(value) => {
      const digits = value.replace(/\D/g, "").slice(0, 6);
      if (digits.length <= 2) return digits;
      if (digits.length <= 4) return `${digits.slice(0, 2)}-${digits.slice(2)}`;
      return `${digits.slice(0, 2)}-${digits.slice(2, 4)}-${digits.slice(4)}`;
    }}
    removeFormatting={(value) => value.replace(/-/g, "")}
    isValidInputCharacter={(char) => /^[0-9-]$/.test(char)}
    getCaretBoundary={(value) =>
      Array(value.length + 1)
        .fill(0)
        .map(() => true)
    }
    onValueChange={(values, { event }) =>
      onChange(
        Object.assign({} as ChangeEvent<HTMLInputElement>, event, {
          target: { name: props.name, value: values.value },
        }),
      )
    }
    onKeyDown={(e) => {
      if (e.metaKey || e.ctrlKey) {
        return;
      }

      if (
        !/^(?:[0-9]|-|Backspace|Delete|Home|End|ArrowLeft|ArrowRight|Shift|CapsLock|Control|NumLock|Tab)$/i.test(
          e.key,
        )
      ) {
        e.preventDefault();
      }
    }}
  />
);

export const SortCodeInput = ({
  ref,
  ...props
}: SortCodeInputProps & { ref?: React.Ref<HTMLInputElement> }) => {
  const sortCodeInputDefProps = ref ? { ...props, getInputRef: ref } : props;
  return <SortCodeInputDef {...sortCodeInputDefProps} />;
};
SortCodeInput.displayName = "SortCodeInput";
