import { Popover as PopoverPrimitive } from 'radix-ui';
import * as React from 'react';
declare const Popover: ({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>) => import("react/jsx-runtime").JSX.Element;
declare const PopoverTrigger: ({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>) => import("react/jsx-runtime").JSX.Element;
declare const PopoverContent: ({ className, align, sideOffset, ...props }: React.ComponentProps<typeof PopoverPrimitive.Content>) => import("react/jsx-runtime").JSX.Element;
declare const PopoverAnchor: ({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Anchor>) => import("react/jsx-runtime").JSX.Element;
export { Popover, PopoverAnchor, PopoverContent, PopoverTrigger };
