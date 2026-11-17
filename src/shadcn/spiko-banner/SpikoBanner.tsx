import type { ReactNode } from 'react';
import { Icon } from '@/assets/icons/core/Icon.js';
import { cn } from '@/utils.js';
import { spikoBadgeToneClassNames, type SpikoTone } from '../spiko-badge-tone/spikoBadgeTone.js';

const surfaceToneClassNames: Record<SpikoTone, string> = {
  neutral: 'border-border bg-background-secondary-accent',
  warning: 'border-warning/20 bg-warning-background',
  destructive: 'border-error/20 bg-error-background',
};

const accentToneClassNames: Record<SpikoTone, string> = {
  neutral: 'text-text-secondary',
  warning: 'text-warning',
  destructive: 'text-error',
};

const inlineTitleToneClassNames: Record<SpikoTone, string> = {
  neutral: 'text-text',
  warning: 'text-warning',
  destructive: 'text-error',
};

const inlineDescriptionToneClassNames: Record<SpikoTone, string> = {
  neutral: 'text-text-secondary',
  warning: 'text-warning',
  destructive: 'text-error',
};

const linkClassNames = '[&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:no-underline';

const roleForTone = (tone: SpikoTone) => (tone === 'destructive' ? 'alert' : 'status');

interface SpikoBannerCommonProps {
  tone: SpikoTone;
  icon: ReactNode;
  className?: string;
}

export interface SpikoBannerPageProps extends SpikoBannerCommonProps {
  size?: 'banner';
  title: string;
  description?: ReactNode;
  action?: ReactNode;
  dismiss?: { label: string; onDismiss: () => void };
}

export interface SpikoBannerStripProps extends SpikoBannerCommonProps {
  size: 'strip';
  description: ReactNode;
  action?: ReactNode;
}

export interface SpikoBannerInlineProps extends SpikoBannerCommonProps {
  size: 'inline';
  title?: string;
  description?: ReactNode;
}

export type SpikoBannerProps = SpikoBannerPageProps | SpikoBannerStripProps | SpikoBannerInlineProps;

const PageBanner = ({ tone, icon, title, description, action, dismiss, className }: SpikoBannerPageProps) => (
  <div
    data-slot="spiko-banner"
    data-size="banner"
    role={roleForTone(tone)}
    className={cn(
      'relative flex w-full flex-col gap-3 rounded-xl border p-4 sm:flex-row sm:items-center sm:gap-4',
      surfaceToneClassNames[tone],
      dismiss !== undefined && 'pr-12',
      className
    )}
  >
    <div className="flex min-w-0 flex-1 items-start gap-3">
      <span
        aria-hidden="true"
        className={cn(
          'flex size-8 shrink-0 items-center justify-center rounded-full [&>svg]:size-4',
          spikoBadgeToneClassNames[tone]
        )}
      >
        {icon}
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-0.5 pt-1.5">
        <p className="spiko-text-sm-semibold text-balance text-text">{title}</p>
        {description !== undefined && (
          <div className={cn('spiko-text-sm-regular text-text-secondary', linkClassNames)}>{description}</div>
        )}
      </div>
    </div>
    {action !== undefined && <div className="shrink-0 *:w-full sm:*:w-auto">{action}</div>}
    {dismiss !== undefined && (
      <button
        type="button"
        aria-label={dismiss.label}
        onClick={dismiss.onDismiss}
        className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-text"
      >
        <Icon.X className="size-4" />
      </button>
    )}
  </div>
);

const StripBanner = ({ tone, icon, description, action, className }: SpikoBannerStripProps) => (
  <div
    data-slot="spiko-banner"
    data-size="strip"
    role={roleForTone(tone)}
    className={cn(
      'flex w-full flex-col gap-1 rounded-lg border px-3 py-2 sm:flex-row sm:items-center sm:gap-3',
      surfaceToneClassNames[tone],
      className
    )}
  >
    <div className="flex min-w-0 flex-1 items-start gap-2">
      <span aria-hidden="true" className={cn('mt-0.5 shrink-0 [&>svg]:size-4', accentToneClassNames[tone])}>
        {icon}
      </span>
      <div className={cn('min-w-0 flex-1 spiko-text-sm-regular text-text-secondary', linkClassNames)}>
        {description}
      </div>
    </div>
    {action !== undefined && <div className="shrink-0 pl-6 spiko-text-sm-semibold text-text sm:pl-0">{action}</div>}
  </div>
);

const InlineBanner = ({ tone, icon, title, description, className }: SpikoBannerInlineProps) => (
  <div
    data-slot="spiko-banner"
    data-size="inline"
    role={roleForTone(tone)}
    className={cn(
      'flex w-full items-start gap-2 rounded-lg border px-3 py-2.5',
      surfaceToneClassNames[tone],
      className
    )}
  >
    <span aria-hidden="true" className={cn('mt-0.5 shrink-0 [&>svg]:size-4', accentToneClassNames[tone])}>
      {icon}
    </span>
    <div className="flex min-w-0 flex-1 flex-col gap-0.5">
      {title !== undefined && <p className={cn('spiko-text-sm-semibold', inlineTitleToneClassNames[tone])}>{title}</p>}
      {description !== undefined && (
        <div
          className={cn(
            'spiko-text-sm-regular [&_b]:font-semibold',
            inlineDescriptionToneClassNames[tone],
            linkClassNames
          )}
        >
          {description}
        </div>
      )}
    </div>
  </div>
);

export const SpikoBanner = (props: SpikoBannerProps) => {
  switch (props.size) {
    case 'strip':
      return <StripBanner {...props} />;
    case 'inline':
      return <InlineBanner {...props} />;
    default:
      return <PageBanner {...props} />;
  }
};
