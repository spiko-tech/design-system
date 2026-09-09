import { Icon } from '@/assets/icons/core/Icon.js';
import { cn } from '@/utils.js';
import { cva, type VariantProps } from 'class-variance-authority';

const defaultVariant = 'info';

const spikoAlertVariants = cva('flex items-center gap-4 rounded-md px-4 py-3 spiko-text-sm-regular', {
  variants: {
    variant: { info: 'bg-information-background text-information', warning: 'bg-warning-background text-warning' },
  },
  defaultVariants: { variant: defaultVariant },
});

const variantIcons = { info: Icon.Info, warning: Icon.AlertTriangle } as const;

export const SpikoAlert = ({
  className,
  children,
  variant,
}: { className?: string; children: React.ReactNode } & VariantProps<typeof spikoAlertVariants>) => {
  const IconComponent = variantIcons[variant ?? defaultVariant];

  return (
    <div className={cn(spikoAlertVariants({ variant }), className)} role="alert" aria-live="polite">
      <IconComponent className="size-5 shrink-0" />
      {children}
    </div>
  );
};
