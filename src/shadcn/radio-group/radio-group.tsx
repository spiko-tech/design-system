'use client';

import { Icon } from '@/assets/icons/core/Icon.js';
import { cn } from '@/utils.js';
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';
import * as React from 'react';
import { Label } from '../label/label.js';

const RadioGroup = ({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>) => (
  <RadioGroupPrimitive.Root data-slot="radio-group" className={cn('grid gap-3', className)} {...props} />
);

const RadioGroupItem = ({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Item>) => (
  <RadioGroupPrimitive.Item
    data-slot="radio-group-item"
    className={cn(
      'shadow-xs aspect-square size-4 shrink-0 rounded-full border border-input text-primary transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
      className
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator
      data-slot="radio-group-indicator"
      className="relative flex items-center justify-center"
    >
      <Icon.Circle className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
);

type RadioGroupCardProps = React.ComponentProps<typeof RadioGroupPrimitive.Item> & {
  label: React.ReactNode;
  description?: React.ReactNode;
};

const RadioGroupCard = ({ label, description, className, ...props }: RadioGroupCardProps) => (
  <Label
    data-slot="radio-group-card"
    className={cn(
      'flex items-center gap-4 rounded-[6px] border p-3 spiko-text-sm-regular has-data-[state=checked]:border-border-accent',
      className
    )}
  >
    <RadioGroupItem {...props} />
    <div className="flex flex-col gap-1.5 leading-5">
      <span>{label}</span>
      {description && <p className="text-text-secondary">{description}</p>}
    </div>
  </Label>
);

export { RadioGroup, RadioGroupCard, RadioGroupItem };
