import { Combobox as ComboboxPrimitive } from '@base-ui/react';
import { cn } from '@spiko/ui/utils';
import { useCallback, useState } from 'react';
import { Skeleton } from '../shadcn/ui/skeleton.js';

export const SearchInput = <SuggestionT,>({
  suggestions,
  placeholder = '',
  emptyMessage = '...',
  value,
  onChange,
  onSelect,
  onBlur,
  disabled,
  isLoading = false,
  suggestionToId,
  suggestionToValue,
  renderSuggestions,
  showForEmptyValue = false,
  className,
}: {
  suggestions: readonly SuggestionT[] | undefined;
  emptyMessage?: string;
  value: string;
  onChange: (value: string) => void;
  onSelect: (suggestion: SuggestionT) => void;
  onBlur?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  suggestionToId: (suggestion: SuggestionT) => string;
  suggestionToValue: (suggestion: SuggestionT) => string;
  renderSuggestions: (suggestion: SuggestionT) => React.ReactNode;
  showForEmptyValue?: boolean;
  className?: string;
}) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const showPopup = isOpen && (showForEmptyValue || !!value) && (isLoading || !!suggestions);

  const handleValueChange = useCallback(
    (nextSelectedId: string | null) => {
      if (nextSelectedId === null) return;
      setSelectedId(nextSelectedId);
      const suggestion = suggestions?.find((s) => suggestionToId(s) === nextSelectedId);
      if (suggestion) {
        onSelect(suggestion);
        onChange(suggestionToValue(suggestion));
      }
    },
    [suggestions, suggestionToId, suggestionToValue, onSelect, onChange]
  );

  const itemToStringLabel = useCallback(
    (itemValue: string) => {
      const suggestion = suggestions?.find((s) => suggestionToId(s) === itemValue);
      return suggestion ? suggestionToValue(suggestion) : '';
    },
    [suggestions, suggestionToId, suggestionToValue]
  );

  const handleInputValueChange = useCallback(
    (nextValue: string, eventDetails: { reason: string }) => {
      if (eventDetails.reason === 'input-change') {
        onChange(nextValue);
      }
    },
    [onChange]
  );

  const handleOpenChange = useCallback(
    (open: boolean) => {
      setOpen(open);
      if (!open) {
        onBlur?.();
      }
    },
    [onBlur]
  );

  return (
    <ComboboxPrimitive.Root
      value={selectedId}
      onValueChange={handleValueChange}
      inputValue={value}
      onInputValueChange={handleInputValueChange}
      itemToStringLabel={itemToStringLabel}
      autoComplete="none"
      open={showPopup}
      onOpenChange={handleOpenChange}
      disabled={disabled}
    >
      <ComboboxPrimitive.Input
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          'shadow-sm flex h-12 w-full [appearance:textfield] rounded-md border border-input bg-transparent px-3 py-3 text-base transition-colors file:border-0 file:bg-transparent file:spiko-text-base-medium file:text-base placeholder:text-text-secondary focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
          className
        )}
      />
      <ComboboxPrimitive.Portal>
        <ComboboxPrimitive.Positioner side="bottom" sideOffset={4} className="pointer-events-auto z-50">
          <ComboboxPrimitive.Popup className="max-h-[200px] w-(--anchor-width) animate-in overflow-y-auto rounded-xl bg-popover ring-1 ring-slate-200 outline-hidden fade-in-0 zoom-in-95">
            {isLoading ? (
              <div className="p-1">
                <Skeleton className="h-8 w-full" />
              </div>
            ) : suggestions?.length === 0 ? (
              <div className="rounded-xs px-2 py-3 text-center text-base select-none">{emptyMessage}</div>
            ) : (
              <ComboboxPrimitive.List className="scroll-py-1 overflow-y-auto p-1">
                {suggestions?.map((suggestion) => (
                  <ComboboxPrimitive.Item
                    key={suggestionToId(suggestion)}
                    value={suggestionToId(suggestion)}
                    className="relative flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 spiko-text-sm-regular outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-text-secondary"
                  >
                    {renderSuggestions(suggestion)}
                  </ComboboxPrimitive.Item>
                ))}
              </ComboboxPrimitive.List>
            )}
          </ComboboxPrimitive.Popup>
        </ComboboxPrimitive.Positioner>
      </ComboboxPrimitive.Portal>
    </ComboboxPrimitive.Root>
  );
};
