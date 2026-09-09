import * as React from 'react';
import { cn } from '../../utils.js';

const Card = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    data-slot="card"
    className={cn('shadow-sm flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground', className)}
    {...props}
  />
);

const CardHeader = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div data-slot="card-header" className={cn('flex flex-col gap-1.5 px-6', className)} {...props} />
);

const CardTitle = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div data-slot="card-title" className={cn('text-base-semibold leading-none', className)} {...props} />
);

const CardDescription = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div data-slot="card-description" className={cn('text-sm text-text-secondary', className)} {...props} />
);

const CardContent = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div data-slot="card-content" className={cn('px-6', className)} {...props} />
);

const CardFooter = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div data-slot="card-footer" className={cn('flex items-center px-6', className)} {...props} />
);

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
