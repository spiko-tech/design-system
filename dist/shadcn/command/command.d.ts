import { Command as CommandPrimitive } from 'cmdk';
import { Dialog } from '../dialog/dialog.js';
import * as React from 'react';
declare const Command: ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) => import("react/jsx-runtime").JSX.Element;
declare const CommandDialog: ({ title, description, children, ...props }: React.ComponentProps<typeof Dialog> & {
    title?: string;
    description?: string;
}) => import("react/jsx-runtime").JSX.Element;
declare const CommandInput: ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Input>) => import("react/jsx-runtime").JSX.Element;
declare const CommandDefaultInput: ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Input>) => import("react/jsx-runtime").JSX.Element;
declare const CommandList: ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) => import("react/jsx-runtime").JSX.Element;
declare const CommandEmpty: ({ ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>) => import("react/jsx-runtime").JSX.Element;
declare const CommandGroup: ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Group>) => import("react/jsx-runtime").JSX.Element;
declare const CommandSeparator: ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Separator>) => import("react/jsx-runtime").JSX.Element;
declare const CommandItem: ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) => import("react/jsx-runtime").JSX.Element;
declare const CommandShortcut: ({ className, ...props }: React.ComponentProps<"span">) => import("react/jsx-runtime").JSX.Element;
export { Command, CommandDefaultInput, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, };
