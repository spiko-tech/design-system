import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import * as React from 'react';
declare const DropdownMenu: ({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) => import("react/jsx-runtime").JSX.Element;
declare const DropdownMenuPortal: ({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) => import("react/jsx-runtime").JSX.Element;
declare const DropdownMenuTrigger: ({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) => import("react/jsx-runtime").JSX.Element;
declare const DropdownMenuContent: ({ className, sideOffset, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) => import("react/jsx-runtime").JSX.Element;
declare const DropdownMenuGroup: ({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) => import("react/jsx-runtime").JSX.Element;
declare const DropdownMenuItem: ({ className, inset, variant, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}) => import("react/jsx-runtime").JSX.Element;
declare const DropdownMenuCheckboxItem: ({ className, children, checked, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) => import("react/jsx-runtime").JSX.Element;
declare const DropdownMenuRadioGroup: ({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) => import("react/jsx-runtime").JSX.Element;
declare const DropdownMenuRadioItem: ({ className, children, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) => import("react/jsx-runtime").JSX.Element;
declare const DropdownMenuLabel: ({ className, inset, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
declare const DropdownMenuSeparator: ({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) => import("react/jsx-runtime").JSX.Element;
declare const DropdownMenuShortcut: ({ className, ...props }: React.ComponentProps<"span">) => import("react/jsx-runtime").JSX.Element;
declare const DropdownMenuSub: ({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) => import("react/jsx-runtime").JSX.Element;
declare const DropdownMenuSubTrigger: ({ className, inset, children, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
declare const DropdownMenuSubContent: ({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) => import("react/jsx-runtime").JSX.Element;
export { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, };
