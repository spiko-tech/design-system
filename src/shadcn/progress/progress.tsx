import { cn } from '@/utils.js';
import { Progress as ProgressPrimitive } from 'radix-ui';
import * as React from 'react';

const Progress = ({
  className,
  value,
  marker,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & { marker?: 'dot' }) => {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn('relative h-1 w-full rounded-full bg-muted', !marker && 'overflow-hidden', className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          'spiko-gradient-bg-black-to-spiko-blue h-full w-full flex-1 transition-all',
          marker && 'relative rounded-full'
        )}
        style={{ width: `${value || 0}%` }}
      >
        {marker === 'dot' && (
          <div className="absolute top-1/2 right-0 size-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-information" />
        )}
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
  );
};

export { Progress };
