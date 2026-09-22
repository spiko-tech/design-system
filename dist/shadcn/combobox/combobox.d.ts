import { Combobox as ComboboxPrimitive } from '@base-ui/react';
import * as React from 'react';
declare const Combobox: typeof ComboboxPrimitive.Root;
declare const ComboboxValue: ({ ...props }: ComboboxPrimitive.Value.Props) => import("react/jsx-runtime").JSX.Element;
declare const ComboboxTrigger: ({ className, children, ...props }: ComboboxPrimitive.Trigger.Props) => import("react/jsx-runtime").JSX.Element;
declare const ComboboxInput: ({ className, children, disabled, showTrigger, showClear, ...props }: ComboboxPrimitive.Input.Props & {
    showTrigger?: boolean;
    showClear?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
declare const ComboboxContent: ({ className, side, sideOffset, align, alignOffset, anchor, container, ...props }: ComboboxPrimitive.Popup.Props & Pick<ComboboxPrimitive.Positioner.Props, "side" | "align" | "sideOffset" | "alignOffset" | "anchor"> & {
    container?: React.RefObject<HTMLElement | null> | HTMLElement | null;
}) => import("react/jsx-runtime").JSX.Element;
declare const ComboboxList: ({ className, ...props }: ComboboxPrimitive.List.Props) => import("react/jsx-runtime").JSX.Element;
declare const ComboboxItem: ({ className, children, ...props }: ComboboxPrimitive.Item.Props) => import("react/jsx-runtime").JSX.Element;
declare const ComboboxGroup: ({ className, ...props }: ComboboxPrimitive.Group.Props) => import("react/jsx-runtime").JSX.Element;
declare const ComboboxLabel: ({ className, ...props }: ComboboxPrimitive.GroupLabel.Props) => import("react/jsx-runtime").JSX.Element;
declare const ComboboxCollection: ({ ...props }: ComboboxPrimitive.Collection.Props) => import("react/jsx-runtime").JSX.Element;
declare const ComboboxEmpty: ({ className, ...props }: ComboboxPrimitive.Empty.Props) => import("react/jsx-runtime").JSX.Element;
declare const ComboboxSeparator: ({ className, ...props }: ComboboxPrimitive.Separator.Props) => import("react/jsx-runtime").JSX.Element;
declare const ComboboxChips: ({ className, ...props }: React.ComponentPropsWithRef<typeof ComboboxPrimitive.Chips> & ComboboxPrimitive.Chips.Props) => import("react/jsx-runtime").JSX.Element;
declare const ComboboxChip: ({ className, children, showRemove, ...props }: ComboboxPrimitive.Chip.Props & {
    showRemove?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
declare const ComboboxChipsInput: ({ className, ...props }: ComboboxPrimitive.Input.Props) => import("react/jsx-runtime").JSX.Element;
declare const useComboboxAnchor: () => React.RefObject<HTMLDivElement | null>;
export { Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxCollection, ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxLabel, ComboboxList, ComboboxSeparator, ComboboxTrigger, ComboboxValue, useComboboxAnchor, };
