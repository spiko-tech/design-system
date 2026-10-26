import type { ReactNode } from 'react';
import { Icon } from '@/assets/icons/core/Icon.js';
import { cn } from '@/utils.js';
import { Button } from '../button/button.js';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from '../dialog/dialog.js';
import { spikoDialogVariants } from '../spiko-dialog/SpikoDialog.js';

const badgeToneClassNames = {
  neutral:
    'bg-linear-to-b from-background to-background-secondary-accent text-text shadow-sm shadow-black/10 ring-1 ring-border',
  warning:
    'bg-linear-to-b from-background to-warning-background text-warning shadow-sm shadow-warning/20 ring-1 ring-warning/15',
  destructive:
    'bg-linear-to-b from-background to-error-background text-error shadow-sm shadow-error/20 ring-1 ring-error/15',
};

export type SpikoNoticeDialogBadgeTone = keyof typeof badgeToneClassNames;

export interface SpikoNoticeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  badge?: { tone: SpikoNoticeDialogBadgeTone; icon: ReactNode };
  title: string;
  description: ReactNode;
  action?: {
    label: string;
    onAction: () => void;
    variant?: 'default' | 'destructive';
    disabled?: boolean;
    isPending?: boolean;
  };
  dismissLabel: string;
  closeLabel: string;
  children?: ReactNode;
}

export const SpikoNoticeDialog = ({
  open,
  onOpenChange,
  badge,
  title,
  description,
  action,
  dismissLabel,
  closeLabel,
  children,
}: SpikoNoticeDialogProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent
      className={cn(spikoDialogVariants({ size: 'xs' }), 'sm:max-w-[400px]')}
      onOpenAutoFocus={(event) => event.preventDefault()}
    >
      <DialogClose
        aria-label={closeLabel}
        className="absolute top-3 right-3 z-10 flex size-8 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-text"
      >
        <Icon.X className="size-4" />
      </DialogClose>
      <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-5 pt-6 pb-5 sm:px-7 sm:pt-7">
        {badge !== undefined && (
          <span
            className={cn(
              'flex size-12 shrink-0 items-center justify-center rounded-full [&>svg]:size-6',
              badgeToneClassNames[badge.tone]
            )}
            aria-hidden="true"
          >
            {badge.icon}
          </span>
        )}
        <DialogTitle className="pr-6 spiko-heading-4-semibold text-balance text-text">{title}</DialogTitle>
        <DialogDescription className="spiko-text-sm-regular text-text-secondary [&_b]:font-semibold [&_b]:text-text">
          {description}
        </DialogDescription>
        {children}
      </div>
      <div className="flex flex-col-reverse gap-2 px-5 pb-5 sm:flex-row sm:px-7 sm:pb-7">
        <DialogClose asChild>
          <Button variant={action === undefined ? 'default' : 'outline'} className="sm:flex-1">
            {dismissLabel}
          </Button>
        </DialogClose>
        {action !== undefined && (
          <Button
            variant={action.variant}
            onClick={action.onAction}
            disabled={action.disabled === true || action.isPending === true}
            className="sm:flex-1"
          >
            {action.isPending === true ? <Icon.Loader className="animate-spin" /> : action.label}
          </Button>
        )}
      </div>
    </DialogContent>
  </Dialog>
);
