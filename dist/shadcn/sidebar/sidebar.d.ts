import { VariantProps } from 'class-variance-authority';
import { Button } from '../button/button.js';
import { Input } from '../input/input.js';
import { Separator } from '../separator/separator.js';
import { TooltipContent } from '../tooltip/tooltip.js';
import * as React from 'react';
type SidebarContextProps = {
    state: 'expanded' | 'collapsed';
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};
declare const useSidebar: () => SidebarContextProps;
declare const SidebarProvider: ({ defaultOpen, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }: React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}) => import("react/jsx-runtime").JSX.Element;
declare const Sidebar: ({ side, variant, collapsible, className, children, ...props }: React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
}) => import("react/jsx-runtime").JSX.Element;
declare const SidebarTrigger: ({ className, onClick, ...props }: React.ComponentProps<typeof Button>) => import("react/jsx-runtime").JSX.Element;
declare const SidebarRail: ({ className, ...props }: React.ComponentProps<"button">) => import("react/jsx-runtime").JSX.Element;
declare const SidebarInset: ({ className, ...props }: React.ComponentProps<"main">) => import("react/jsx-runtime").JSX.Element;
declare const SidebarInput: ({ className, ...props }: React.ComponentProps<typeof Input>) => import("react/jsx-runtime").JSX.Element;
declare const SidebarHeader: ({ className, ...props }: React.ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
declare const SidebarFooter: ({ className, ...props }: React.ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
declare const SidebarSeparator: ({ className, ...props }: React.ComponentProps<typeof Separator>) => import("react/jsx-runtime").JSX.Element;
declare const SidebarContent: ({ className, ...props }: React.ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
declare const SidebarGroup: ({ className, ...props }: React.ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
declare const SidebarGroupLabel: ({ className, asChild, ...props }: React.ComponentProps<"div"> & {
    asChild?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
declare const SidebarGroupAction: ({ className, asChild, ...props }: React.ComponentProps<"button"> & {
    asChild?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
declare const SidebarGroupContent: ({ className, ...props }: React.ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
declare const SidebarMenu: ({ className, ...props }: React.ComponentProps<"ul">) => import("react/jsx-runtime").JSX.Element;
declare const SidebarMenuItem: ({ className, ...props }: React.ComponentProps<"li">) => import("react/jsx-runtime").JSX.Element;
declare const sidebarMenuButtonVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "sm" | "lg" | "default" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const SidebarMenuButton: ({ asChild, isActive, variant, size, tooltip, className, ...props }: React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>) => import("react/jsx-runtime").JSX.Element;
declare const SidebarMenuAction: ({ className, asChild, showOnHover, ...props }: React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
declare const SidebarMenuBadge: ({ className, ...props }: React.ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
declare const SidebarMenuSkeleton: ({ className, showIcon, ...props }: React.ComponentProps<"div"> & {
    showIcon?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
declare const SidebarMenuSub: ({ className, ...props }: React.ComponentProps<"ul">) => import("react/jsx-runtime").JSX.Element;
declare const SidebarMenuSubItem: ({ className, ...props }: React.ComponentProps<"li">) => import("react/jsx-runtime").JSX.Element;
declare const SidebarMenuSubButton: ({ asChild, size, isActive, className, ...props }: React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, useSidebar, };
