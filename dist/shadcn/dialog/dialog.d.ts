import { Dialog as DialogPrimitive } from 'radix-ui';
import * as React from 'react';
declare const Dialog: ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) => import("react/jsx-runtime").JSX.Element;
declare const DialogTrigger: ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) => import("react/jsx-runtime").JSX.Element;
declare const DialogPortal: ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) => import("react/jsx-runtime").JSX.Element;
declare const DialogClose: ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) => import("react/jsx-runtime").JSX.Element;
declare const DialogOverlay: ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>) => import("react/jsx-runtime").JSX.Element;
declare const DialogContent: ({ className, children, overlayProps, ...props }: React.ComponentProps<typeof DialogPrimitive.Content> & {
    overlayProps?: React.ComponentProps<typeof DialogPrimitive.Overlay>;
}) => import("react/jsx-runtime").JSX.Element;
declare const DialogHeader: ({ className, ...props }: React.ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
declare const DialogFooter: ({ className, ...props }: React.ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
declare const DialogTitle: ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) => import("react/jsx-runtime").JSX.Element;
declare const DialogDescription: ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>) => import("react/jsx-runtime").JSX.Element;
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, };
