import { cn } from '@/utils.js';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const alertVariants = cva(
  'relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 spiko-text-sm-regular has-[>[data-slot=alert-action]]:pr-12 has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&:has([data-slot=alert-title])>svg]:translate-y-0.5 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
  {
    variants: {
      variant: {
        default: 'bg-background-secondary-accent text-text-secondary',
        destructive:
          'border-error bg-error-background text-error *:data-[slot=alert-description]:text-error/80 [&>svg]:text-current',
        information:
          'border-information bg-information-background text-information *:data-[slot=alert-description]:text-information/80 [&>svg]:text-current',
        warning:
          'border-warning bg-warning-background text-warning *:data-[slot=alert-description]:text-warning/80 [&>svg]:text-current',
        gradient:
          'border-transparent [background:linear-gradient(var(--background),var(--background))_padding-box,linear-gradient(90deg,var(--text)_0%,var(--core-blue)_100%)_border-box] has-[>svg]:grid-cols-[calc(var(--spacing)*8)_1fr] *:data-[slot=alert-title]:justify-self-start *:data-[slot=alert-title]:bg-linear-to-r *:data-[slot=alert-title]:from-(--text) *:data-[slot=alert-title]:to-(--core-blue) *:data-[slot=alert-title]:bg-clip-text *:data-[slot=alert-title]:spiko-heading-4-semibold *:data-[slot=alert-title]:text-transparent [&:has([data-slot=alert-title])>svg]:translate-y-0 [&>svg]:size-8 [&>svg]:translate-y-0 [&>svg]:rounded-md [&>svg]:bg-background-secondary-accent [&>svg]:p-2',
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
      className={cn('col-start-2 line-clamp-1 min-h-4 spiko-text-sm-semibold tracking-tight', className)}
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

function AlertAction({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="alert-action" className={cn('absolute top-2 right-2', className)} {...props} />;
}

export { Alert, AlertAction, AlertDescription, AlertTitle };
