import { VariantProps } from 'class-variance-authority';
import { ToggleGroup as ToggleGroupPrimitive } from 'radix-ui';
import { toggleVariants } from '../toggle/toggle.js';
import * as React from 'react';
declare const ToggleGroup: ({ className, variant, size, children, ...props }: React.ComponentProps<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>) => import("react/jsx-runtime").JSX.Element;
declare const ToggleGroupItem: ({ className, children, variant, size, ...props }: React.ComponentProps<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>) => import("react/jsx-runtime").JSX.Element;
export { ToggleGroup, ToggleGroupItem };
