'use client';

import { Icon } from '@/assets/icons/core/Icon.js';
import { cn } from '@/utils.js';
import { cva, type VariantProps } from 'class-variance-authority';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import * as React from 'react';

const accordionVariants = cva('', {
  variants: { variant: { default: '', card: 'flex flex-col gap-4' } },
  defaultVariants: { variant: 'default' },
});

const accordionItemVariants = cva('', {
  variants: { variant: { default: 'border-b last:border-b-0', card: 'rounded-md border px-4' } },
  defaultVariants: { variant: 'default' },
});

const accordionTriggerVariants = cva(
  'flex flex-1 items-start justify-between gap-4 text-left transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
  {
    variants: {
      variant: {
        default: 'rounded-md py-4 spiko-text-sm-medium hover:underline',
        card: 'rounded-md py-4 spiko-text-base-medium',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

const accordionChevronVariants = cva('pointer-events-none shrink-0 translate-y-0.5 transition-transform duration-200', {
  variants: { variant: { default: 'size-4 text-text-secondary', card: 'size-6 text-text' } },
  defaultVariants: { variant: 'default' },
});

const accordionContentVariants = cva(
  'overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
  {
    variants: { variant: { default: 'spiko-text-sm-regular', card: 'spiko-text-sm-regular' } },
    defaultVariants: { variant: 'default' },
  }
);

type AccordionVariant = VariantProps<typeof accordionItemVariants>['variant'];

const AccordionVariantContext = React.createContext<AccordionVariant>('default');

const Accordion = ({
  variant = 'default',
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root> & { variant?: AccordionVariant }) => {
  return (
    <AccordionVariantContext.Provider value={variant}>
      <AccordionPrimitive.Root
        data-slot="accordion"
        className={cn(accordionVariants({ variant }), className)}
        {...props}
      />
    </AccordionVariantContext.Provider>
  );
};

const AccordionItem = ({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) => {
  const variant = React.useContext(AccordionVariantContext);

  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(accordionItemVariants({ variant }), className)}
      {...props}
    />
  );
};

const AccordionTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) => {
  const variant = React.useContext(AccordionVariantContext);

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(accordionTriggerVariants({ variant }), className)}
        {...props}
      >
        {children}
        <Icon.ChevronDown className={accordionChevronVariants({ variant })} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};

const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) => {
  const variant = React.useContext(AccordionVariantContext);

  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={accordionContentVariants({ variant })}
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
};

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
