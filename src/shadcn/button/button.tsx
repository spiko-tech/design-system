import { cn } from '@/utils.js';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot as SlotPrimitive } from 'radix-ui';
import * as React from 'react';

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'shadow-xs bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'shadow-xs bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        outline: 'shadow-xs border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'shadow-xs bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-information underline-offset-4 hover:underline',
        externalLink: 'text-information underline underline-offset-4 hover:no-underline',
      },
      size: {
        // xs: 'h-6 px-2.5 py-1.5 has-[>svg]:px-2',
        sm: 'h-10 px-4 text-sm font-medium has-[>svg]:px-4',
        md: 'h-11 px-4 text-sm font-medium has-[>svg]:px-4',
        // lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        // xl: 'h-12 rounded-md px-6 has-[>svg]:px-4',
        // '2xl': 'h-14 rounded-md px-8 has-[>svg]:px-5',
        icon: 'size-9',
      },
    },
    defaultVariants: { variant: 'default', size: 'md' },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) => {
  const Comp = asChild ? SlotPrimitive.Slot : 'button';

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
};

export { Button, buttonVariants };
