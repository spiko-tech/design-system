import { cn } from '../../utils.js';

const Skeleton = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div data-slot="skeleton" className={cn('animate-pulse rounded-md bg-primary/10', className)} {...props} />
);

export { Skeleton };
