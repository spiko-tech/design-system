import { Progress as ProgressPrimitive } from 'radix-ui';
import * as React from 'react';
import { cn } from '../../../utils.js';

const Progress = ({ className, value, ...props }: React.ComponentProps<typeof ProgressPrimitive.Root>) => {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn('relative h-1 w-full overflow-hidden rounded-full bg-muted', className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="spiko-gradient-bg-black-to-spiko-blue h-full w-full flex-1 transition-all"
        style={{ width: `${value || 0}%` }}
      />
    </ProgressPrimitive.Root>
  );
};

export { Progress };
