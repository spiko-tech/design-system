import { Dialog as SheetPrimitive } from 'radix-ui';
import * as React from 'react';
declare const Sheet: ({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) => import("react/jsx-runtime").JSX.Element;
declare const SheetTrigger: ({ ...props }: React.ComponentProps<typeof SheetPrimitive.Trigger>) => import("react/jsx-runtime").JSX.Element;
declare const SheetClose: ({ ...props }: React.ComponentProps<typeof SheetPrimitive.Close>) => import("react/jsx-runtime").JSX.Element;
declare const SheetContent: ({ className, children, side, ...props }: React.ComponentProps<typeof SheetPrimitive.Content> & {
    side?: "top" | "right" | "bottom" | "left";
}) => import("react/jsx-runtime").JSX.Element;
declare const SheetHeader: ({ className, ...props }: React.ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
declare const SheetFooter: ({ className, ...props }: React.ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
declare const SheetTitle: ({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Title>) => import("react/jsx-runtime").JSX.Element;
declare const SheetDescription: ({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Description>) => import("react/jsx-runtime").JSX.Element;
export { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger };
