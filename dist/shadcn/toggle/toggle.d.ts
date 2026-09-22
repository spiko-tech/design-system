import { VariantProps } from 'class-variance-authority';
import { Toggle as TogglePrimitive } from 'radix-ui';
import * as React from 'react';
declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "sm" | "lg" | "default" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const Toggle: ({ className, variant, size, ...props }: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>) => import("react/jsx-runtime").JSX.Element;
export { Toggle, toggleVariants };
