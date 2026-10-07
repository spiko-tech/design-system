import { Tooltip as TooltipPrimitive } from 'radix-ui';
import * as React from 'react';
declare const TooltipProvider: ({ delayDuration, ...props }: React.ComponentProps<typeof TooltipPrimitive.Provider>) => import("react/jsx-runtime").JSX.Element;
declare const Tooltip: ({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) => import("react/jsx-runtime").JSX.Element;
declare const TooltipTrigger: ({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) => import("react/jsx-runtime").JSX.Element;
declare const TooltipContent: ({ className, sideOffset, children, showArrow, ...props }: React.ComponentProps<typeof TooltipPrimitive.Content> & {
    showArrow?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
