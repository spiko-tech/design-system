import { Progress as ProgressPrimitive } from 'radix-ui';
import * as React from 'react';
declare const Progress: ({ className, value, marker, ...props }: React.ComponentProps<typeof ProgressPrimitive.Root> & {
    marker?: "dot";
}) => React.JSX.Element;
export { Progress };
