import { VariantProps } from 'class-variance-authority';
import { Tabs as TabsPrimitive } from 'radix-ui';
import * as React from 'react';
declare const Tabs: ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) => import("react/jsx-runtime").JSX.Element;
declare const tabsListVariants: (props?: ({
    variant?: "default" | "underline" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const TabsList: ({ className, variant, children, ...props }: React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>) => import("react/jsx-runtime").JSX.Element;
declare const tabsTriggerVariants: (props?: ({
    variant?: "default" | "underline" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const TabsTrigger: ({ className, variant, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger> & VariantProps<typeof tabsTriggerVariants>) => import("react/jsx-runtime").JSX.Element;
declare const TabsContent: ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) => import("react/jsx-runtime").JSX.Element;
export { Tabs, TabsContent, TabsList, TabsTrigger };
