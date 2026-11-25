import { Dialog as DialogPrimitive } from 'radix-ui';
import * as React from 'react';
declare const Dialog: ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) => React.JSX.Element;
declare const DialogTrigger: ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) => React.JSX.Element;
declare const DialogPortal: ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) => React.JSX.Element;
declare const DialogClose: ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) => React.JSX.Element;
declare const DialogOverlay: ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>) => React.JSX.Element;
declare const DialogContent: ({ className, children, overlayProps, ...props }: React.ComponentProps<typeof DialogPrimitive.Content> & {
    overlayProps?: React.ComponentProps<typeof DialogPrimitive.Overlay>;
}) => React.JSX.Element;
declare const DialogHeader: ({ className, ...props }: React.ComponentProps<"div">) => React.JSX.Element;
declare const DialogFooter: ({ className, ...props }: React.ComponentProps<"div">) => React.JSX.Element;
declare const DialogTitle: ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) => React.JSX.Element;
declare const DialogDescription: ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>) => React.JSX.Element;
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, };
