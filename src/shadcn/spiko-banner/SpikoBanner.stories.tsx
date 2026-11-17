import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '@/assets/icons/core/Icon.js';
import { Button } from '../button/button.js';
import { SpikoBanner } from './SpikoBanner.js';

const meta: Meta<typeof SpikoBanner> = {
  component: SpikoBanner,
  title: 'UI/SpikoBanner',
  tags: ['autodocs'],
  argTypes: {
    tone: {
      control: 'select',
      options: ['neutral', 'warning', 'destructive'],
      description:
        '`neutral` for information the user can safely ignore, `warning` when missing it costs money or time, `destructive` when something is broken or blocked.',
    },
    size: {
      control: 'select',
      options: ['banner', 'strip', 'inline'],
      description:
        '`banner` sits at the top of a page with an icon badge and one action. `strip` is a one-line, low-priority banner with a link. `inline` is the callout used inside forms, flows and dialogs: links only, no button.',
    },
    icon: { control: false },
    action: { control: false },
    description: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof SpikoBanner>;

export const BannerWarning: Story = {
  args: {
    tone: 'warning',
    icon: <Icon.FileText />,
    title: '2 documents required',
    description: 'Proof of address and proof of funds, required by regulation given the amount you have deposited.',
    action: <Button size="sm">Upload documents</Button>,
  },
};

export const BannerDestructive: Story = {
  args: {
    tone: 'destructive',
    icon: <Icon.Landmark />,
    title: 'BNP Paribas Pro connection lost',
    description: 'Autopilot is paused until you reconnect this bank account.',
    action: <Button size="sm">Reconnect</Button>,
  },
};

export const BannerDismissible: Story = {
  args: {
    tone: 'neutral',
    icon: <Icon.Info />,
    title: 'Your statements moved',
    description: 'Monthly statements now live under Documents.',
    dismiss: { label: 'Dismiss', onDismiss: () => {} },
  },
};

export const Strip: Story = {
  args: {
    size: 'strip',
    tone: 'neutral',
    icon: <Icon.Lightbulb />,
    description: 'New to Spiko Cash & Carry Dollar? See how the strategy works.',
    action: (
      <a href="#strategy" className="inline-flex items-center gap-1">
        Learn more <Icon.ArrowRight className="size-4" />
      </a>
    ),
  },
};

export const InlineWarning: Story = {
  args: {
    size: 'inline',
    tone: 'warning',
    icon: <Icon.AlertTriangle />,
    title: 'Exchange rate set at 11:30 AM CET',
    description: (
      <>
        The amount you receive may differ from the rate shown now. We do not charge any conversion fees.{' '}
        <a href="#fx">Learn more</a>
      </>
    ),
  },
};

export const InlineDestructive: Story = {
  args: {
    size: 'inline',
    tone: 'destructive',
    icon: <Icon.AlertCircle />,
    title: "Spiko isn't available in this country",
    description: (
      <>
        See our <a href="#restrictions">geographic restrictions</a>.
      </>
    ),
  },
};

export const InlineNeutral: Story = {
  args: {
    size: 'inline',
    tone: 'neutral',
    icon: <Icon.Clock />,
    description: (
      <>
        A manual withdrawal to this bank account is scheduled, so Autopilot won't debit it before{' '}
        <b>November 4, 2026</b>.
      </>
    ),
  },
};
