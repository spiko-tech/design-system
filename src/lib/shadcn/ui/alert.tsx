import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../../../utils.js';

const alertVariants = cva(
  'relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 spiko-text-sm-regular has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'text-destructive-foreground *:data-[slot=alert-description]:text-destructive-foreground/80 [&>svg]:text-current',
        informative:
          'text-informative-foreground *:data-[slot=alert-description]:text-informative-foreground/80 [&>svg]:text-current',
        warning:
          'bg-informative-background text-warning *:data-[slot=alert-description]:text-warning/80 [&>svg]:text-current',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

const Alert = ({ className, variant, ...props }: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) => {
  return <div data-slot="alert" role="alert" className={cn(alertVariants({ variant }), className)} {...props} />;
};

const AlertTitle = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="alert-title"
      className={cn('col-start-2 line-clamp-1 min-h-4 spiko-text-base-medium tracking-tight', className)}
      {...props}
    />
  );
};

const AlertDescription = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'col-start-2 grid justify-items-start gap-1 spiko-text-sm-regular text-text-secondary [&_p]:leading-relaxed',
        className
      )}
      {...props}
    />
  );
};

export { Alert, AlertDescription, AlertTitle };
