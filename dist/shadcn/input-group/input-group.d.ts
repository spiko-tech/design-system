import { VariantProps } from 'class-variance-authority';
import { Button } from '../button/button.js';
import * as React from 'react';
declare const InputGroup: ({ className, ...props }: React.ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
declare const inputGroupAddonVariants: (props?: ({
    align?: "inline-start" | "inline-end" | "block-start" | "block-end" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const InputGroupAddon: ({ className, align, ...props }: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) => import("react/jsx-runtime").JSX.Element;
declare const inputGroupButtonVariants: (props?: ({
    size?: "sm" | "xs" | "icon-xs" | "icon-sm" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const InputGroupButton: ({ className, type, variant, size, ...props }: Omit<React.ComponentProps<typeof Button>, "size"> & VariantProps<typeof inputGroupButtonVariants>) => import("react/jsx-runtime").JSX.Element;
declare const InputGroupText: ({ className, ...props }: React.ComponentProps<"span">) => import("react/jsx-runtime").JSX.Element;
declare const InputGroupInput: ({ className, ...props }: React.ComponentProps<"input">) => import("react/jsx-runtime").JSX.Element;
declare const InputGroupTextarea: ({ className, ...props }: React.ComponentProps<"textarea">) => import("react/jsx-runtime").JSX.Element;
export { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea };
