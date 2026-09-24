import type { ComponentProps, ReactNode } from 'react';
import { Icon } from '@/assets/icons/core/Icon.js';
import { cn } from '@/utils.js';
import { cva, VariantProps } from 'class-variance-authority';
import { motion, useReducedMotion } from 'motion/react';
import { useCallback, useState } from 'react';
import { Button, type ButtonProps } from '../button/button.js';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../dialog/dialog.js';

const spikoDialogVariants = cva(
  cn(
    // Mobile bottom-sheet: full width, anchored to bottom, slides up.
    // Desktop keeps the default centered dialog behavior from shadcn.
    'top-auto right-0 bottom-0 left-0 w-screen max-w-none translate-x-0 translate-y-0 rounded-t-xl rounded-b-none',
    // When content exceeds the viewport height, let the sheet grow up to the viewport
    // and scroll internally (instead of overflowing off-screen).
    'flex max-h-[95svh] flex-col gap-0 overflow-hidden overscroll-contain p-0',
    'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
    'sm:top-[50%] sm:right-auto sm:bottom-auto sm:left-[50%] sm:w-full sm:max-w-[calc(100%-4rem)] sm:translate-x-[-50%] sm:translate-y-[-50%] sm:rounded-xl',
    'sm:data-[state=closed]:zoom-out-95 sm:data-[state=open]:zoom-in-95'
  ),
  {
    variants: {
      size: { xs: 'sm:max-w-[480px]', sm: 'sm:max-w-[576px]', md: 'sm:max-w-[768px]', lg: 'sm:max-w-[960px]' },
    },
    defaultVariants: { size: 'sm' },
  }
);

const HEIGHT_TRANSITION = { duration: 0.2, ease: 'easeOut' } as const;

const useMeasuredHeight = () => {
  const [height, setHeight] = useState<number | 'auto'>('auto');
  const measure = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;
    const observer = new ResizeObserver(() => setHeight(node.offsetHeight));
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return { height, measure };
};

const AnimatedHeightBody = ({ children }: { children: ReactNode }) => {
  const { height, measure } = useMeasuredHeight();
  const [isResizing, setIsResizing] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn('min-h-0', isResizing ? 'overflow-clip' : 'overflow-y-auto')}
      initial={false}
      animate={{ height }}
      transition={prefersReducedMotion ? { duration: 0 } : HEIGHT_TRANSITION}
      onAnimationStart={() => setIsResizing(true)}
      onAnimationComplete={() => setIsResizing(false)}
    >
      <div ref={measure} className="flex flex-col gap-6 p-4 sm:p-6">
        {children}
      </div>
    </motion.div>
  );
};

const SpikoDialogContent = ({
  title,
  description,
  children,
  submitLabel,
  cancelLabel,
  onSubmit,
  submitFormId,
  size,
  isSubmitting,
  disableSubmit,
  submitVariant,
  contentProps,
  secondaryAction,
  animateHeight,
}: Omit<SpikoDialogProps, 'trigger'>) => {
  const { className: contentClassName, ...restContentProps } = contentProps ?? {};
  const hasSubmitButton = submitLabel !== undefined && (onSubmit !== undefined || submitFormId !== undefined);
  const body = (
    <>
      {description !== undefined && <DialogDescription>{description}</DialogDescription>}
      {children}
    </>
  );

  return (
    <DialogContent
      className={cn(spikoDialogVariants({ size, className: contentClassName }))}
      // Prevent auto-focus on open to avoid mobile keyboard overlapping the dialog
      onOpenAutoFocus={(e) => e.preventDefault()}
      {...restContentProps}
    >
      <DialogHeader className="px-6 py-4">
        <DialogTitle className="spiko-gradient-text-black-to-spiko-blue mx-auto w-fit text-center">{title}</DialogTitle>
      </DialogHeader>

      {animateHeight === true ? (
        <AnimatedHeightBody>{body}</AnimatedHeightBody>
      ) : (
        <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-4 sm:p-6">{body}</div>
      )}

      {(cancelLabel !== undefined || secondaryAction !== undefined || hasSubmitButton) && (
        <DialogFooter className="sticky -bottom-6 -mx-4 bg-background px-8 pt-4 pb-6 sm:static sm:bottom-0 sm:mx-0 sm:px-6 sm:py-4">
          {cancelLabel !== undefined && (
            <DialogClose asChild>
              <Button variant="outline" size="sm">
                {cancelLabel}
              </Button>
            </DialogClose>
          )}
          {secondaryAction}
          {hasSubmitButton && (
            <Button
              size="sm"
              variant={submitVariant}
              type={submitFormId === undefined ? 'button' : 'submit'}
              form={submitFormId}
              onClick={onSubmit}
              disabled={disableSubmit === true || isSubmitting}
              className="min-w-24"
            >
              {isSubmitting ? <Icon.Loader className="animate-spin" /> : submitLabel}
            </Button>
          )}
        </DialogFooter>
      )}
    </DialogContent>
  );
};

export interface SpikoDialogProps extends VariantProps<typeof spikoDialogVariants> {
  title: string;
  description?: string;
  trigger: ReactNode;
  submitLabel?: string;
  cancelLabel?: string;
  onSubmit?: () => void;
  submitFormId?: string;
  disableSubmit?: boolean;
  isSubmitting?: boolean;
  submitVariant?: ButtonProps['variant'];
  contentProps?: Omit<ComponentProps<typeof DialogContent>, 'children'>;
  secondaryAction?: ReactNode;
  animateHeight?: boolean;
  children: ReactNode;
}

export const SpikoDialog = ({ trigger, children, ...rest }: SpikoDialogProps) => (
  <Dialog>
    <DialogTrigger asChild>{trigger}</DialogTrigger>
    <SpikoDialogContent {...rest}>{children}</SpikoDialogContent>
  </Dialog>
);

export const ControlledSpikoDialog = ({
  open,
  onOpenChange,
  children = null,
  ...rest
}: Omit<SpikoDialogProps, 'trigger' | 'children'> & {
  children?: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <SpikoDialogContent {...rest}>{children}</SpikoDialogContent>
  </Dialog>
);
