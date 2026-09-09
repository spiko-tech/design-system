'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { Tabs as TabsPrimitive } from 'radix-ui';
import * as React from 'react';
import { cn } from '../../utils.js';

const Tabs = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) => (
  <TabsPrimitive.Root data-slot="tabs" className={cn('flex flex-col gap-2', className)} {...props} />
);

const tabsListVariants = cva('inline-flex items-center justify-center text-text-secondary', {
  variants: {
    variant: {
      default: 'h-9 w-fit rounded-lg bg-secondary p-1',
      underline:
        'relative h-auto w-full items-stretch justify-start gap-1 overflow-x-auto rounded-none bg-transparent p-0 shadow-[inset_0_-1px_0_0_var(--color-border)] sm:gap-4 lg:items-center lg:gap-6',
    },
  },
  defaultVariants: { variant: 'default' },
});

const useUnderlineIndicator = (enabled: boolean) => {
  const listRef = React.useRef<HTMLDivElement>(null);
  const indicatorRef = React.useRef<HTMLSpanElement>(null);

  React.useLayoutEffect(() => {
    const list = listRef.current;
    const indicator = indicatorRef.current;
    if (!enabled || !list || !indicator) return;

    const update = (animate: boolean) => {
      const active = list.querySelector<HTMLElement>('[data-state="active"]');
      if (!active) {
        indicator.style.width = '0';
        return;
      }

      const previousWidth = indicator.getBoundingClientRect().width;
      const previousLeft = indicator.getBoundingClientRect().left - list.getBoundingClientRect().left + list.scrollLeft;
      for (const animation of indicator.getAnimations()) animation.cancel();

      const { offsetLeft, offsetWidth } = active;
      indicator.style.left = `${offsetLeft}px`;
      indicator.style.width = `${offsetWidth}px`;

      if (!animate || previousWidth === 0 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const movingRight = offsetLeft >= previousLeft;
      const expanded = movingRight
        ? { left: `${previousLeft}px`, width: `${offsetLeft + offsetWidth - previousLeft}px` }
        : { left: `${offsetLeft}px`, width: `${previousLeft + previousWidth - offsetLeft}px` };

      indicator.animate(
        [
          { left: `${previousLeft}px`, width: `${previousWidth}px` },
          { ...expanded, offset: 0.5 },
          { left: `${offsetLeft}px`, width: `${offsetWidth}px` },
        ],
        { duration: 300, easing: 'ease-in-out' }
      );
    };

    update(false);

    const resizeObserver = new ResizeObserver(() => update(false));
    const observeChildren = () => {
      for (const child of list.children) {
        if (child !== indicator) resizeObserver.observe(child);
      }
    };
    resizeObserver.observe(list);
    observeChildren();

    const mutationObserver = new MutationObserver((mutations) => {
      update(mutations.some((mutation) => mutation.type === 'attributes'));
      observeChildren();
    });
    mutationObserver.observe(list, { subtree: true, childList: true, attributeFilter: ['data-state'] });

    return () => {
      mutationObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, [enabled]);

  return { listRef, indicatorRef };
};

const TabsList = ({
  className,
  variant,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>) => {
  const { listRef, indicatorRef } = useUnderlineIndicator(variant === 'underline');

  return (
    <TabsPrimitive.List
      ref={listRef}
      data-slot="tabs-list"
      className={cn(tabsListVariants({ variant, className }))}
      {...props}
    >
      {children}
      {variant === 'underline' && <span ref={indicatorRef} className="absolute bottom-0 h-0.5 bg-information" />}
    </TabsPrimitive.List>
  );
};

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center gap-1.5 transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          'data-[state=active]:shadow-sm flex-1 rounded-md px-2 py-1 spiko-text-sm-semibold whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground',
        underline:
          'min-w-0 flex-1 basis-0 rounded-none border-b-2 border-transparent px-1 py-2 text-center spiko-text-base-semibold whitespace-normal text-text data-[state=active]:text-information data-[state=inactive]:hover:border-border data-[state=inactive]:hover:text-information max-sm:spiko-text-xs-semibold sm:px-2 lg:flex-none lg:px-3 lg:whitespace-nowrap',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

const TabsTrigger = ({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & VariantProps<typeof tabsTriggerVariants>) => (
  <TabsPrimitive.Trigger
    data-slot="tabs-trigger"
    className={cn(tabsTriggerVariants({ variant, className }))}
    {...props}
  />
);

const TabsContent = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content data-slot="tabs-content" className={cn('flex-1 outline-none', className)} {...props} />
);

export { Tabs, TabsContent, TabsList, TabsTrigger };
