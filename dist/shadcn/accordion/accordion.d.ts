import { VariantProps } from 'class-variance-authority';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import * as React from 'react';
declare const accordionItemVariants: (props?: ({
    variant?: "default" | "card" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type AccordionVariant = VariantProps<typeof accordionItemVariants>['variant'];
declare const Accordion: ({ variant, className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Root> & {
    variant?: AccordionVariant;
}) => import("react/jsx-runtime").JSX.Element;
declare const AccordionItem: ({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) => import("react/jsx-runtime").JSX.Element;
declare const AccordionTrigger: ({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) => import("react/jsx-runtime").JSX.Element;
declare const AccordionContent: ({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) => import("react/jsx-runtime").JSX.Element;
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
