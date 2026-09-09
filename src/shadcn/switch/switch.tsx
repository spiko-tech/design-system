'use client';

import { Switch as SwitchPrimitive } from 'radix-ui';
import * as React from 'react';
import { cn } from '../../utils.js';

const Switch = ({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) => (
  <SwitchPrimitive.Root
    data-slot="switch"
    className={cn(
      'peer shadow-xs inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      className
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      data-slot="switch-thumb"
      className={cn(
        'shadow-lg pointer-events-none block size-4 rounded-full bg-background ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0'
      )}
    />
  </SwitchPrimitive.Root>
);

export { Switch };
