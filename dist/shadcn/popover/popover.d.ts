import { Popover as PopoverPrimitive } from 'radix-ui';
import * as React from 'react';
declare const Popover: ({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>) => React.JSX.Element;
declare const PopoverTrigger: ({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>) => React.JSX.Element;
declare const PopoverContent: ({ className, align, sideOffset, ...props }: React.ComponentProps<typeof PopoverPrimitive.Content>) => React.JSX.Element;
declare const PopoverAnchor: ({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Anchor>) => React.JSX.Element;
export { Popover, PopoverAnchor, PopoverContent, PopoverTrigger };
