import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '@/assets/icons/core/Icon.js';
import { useState } from 'react';
import { Button } from '../button/button.js';
import { Checkbox } from '../checkbox/checkbox.js';
import { Label } from '../label/label.js';
import { SpikoNoticeDialog, type SpikoNoticeDialogProps } from './SpikoNoticeDialog.js';

const WithTrigger = (props: Omit<SpikoNoticeDialogProps, 'open' | 'onOpenChange'>) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <SpikoNoticeDialog {...props} open={open} onOpenChange={setOpen} />
    </>
  );
};

const meta: Meta<typeof SpikoNoticeDialog> = {
  component: SpikoNoticeDialog,
  title: 'UI/SpikoNoticeDialog',
  tags: ['autodocs'],
  render: (args) => <WithTrigger {...args} />,
  argTypes: {
    open: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
    description: { table: { disable: true } },
    children: { table: { disable: true } },
    badge: {
      control: false,
      description:
        "Optional icon badge. `tone` sets its colour: `neutral` names the action, `warning` flags a risk or a blocker, `destructive` an action that can't be undone.",
    },
    action: {
      control: false,
      description:
        'The primary button. Leave it unset for a single-button dialog, where the dismiss button becomes the primary one. Pair `variant: "destructive"` with the `destructive` badge.',
    },
  },
  args: { closeLabel: 'Close' },
};

export default meta;
type Story = StoryObj<typeof SpikoNoticeDialog>;

export const Neutral: Story = {
  args: {
    badge: { tone: 'neutral', icon: <Icon.Pause /> },
    title: 'Pause Spiko Autopilot?',
    description:
      'Your rules are kept, but no cash will move and your surplus stops earning daily interest. You can resume anytime.',
    action: { label: 'Pause', onAction: () => {} },
    dismissLabel: 'Cancel',
  },
};

export const Warning: Story = {
  args: {
    badge: { tone: 'warning', icon: <Icon.AlertTriangle /> },
    title: 'Not enough balance for your next withdrawal',
    description: (
      <>
        <b>€2,000.00</b> is scheduled for November 3 and <b>€1,240.50</b> is available. Add funds or lower the amount
        before then, or this withdrawal will be skipped.
      </>
    ),
    action: { label: 'Edit withdrawal', onAction: () => {} },
    dismissLabel: 'Not now',
  },
};

export const Destructive: Story = {
  args: {
    badge: { tone: 'destructive', icon: <Icon.Trash2 /> },
    title: 'Delete this account?',
    description: "This can't be undone. Your past statements stay available in Statements.",
    action: { label: 'Delete account', onAction: () => {}, variant: 'destructive' },
    dismissLabel: 'Cancel',
  },
};

export const SingleButton: Story = {
  args: {
    badge: { tone: 'warning', icon: <Icon.CircleAlert /> },
    title: "This product can't be deleted yet",
    description:
      'It still has a remaining balance. Transfer it to another product or withdraw it to your bank account, then try again.',
    dismissLabel: 'Got it',
  },
};

const WithAcknowledgement = (props: Omit<SpikoNoticeDialogProps, 'open' | 'onOpenChange'>) => {
  const [isAcknowledged, setIsAcknowledged] = useState(false);
  return (
    <WithTrigger {...props} action={{ label: 'Continue to deposit', onAction: () => {}, disabled: !isAcknowledged }}>
      <Label className="cursor-pointer items-start gap-3 rounded-lg border border-border p-3 leading-5 text-text">
        <Checkbox
          className="mt-0.5"
          checked={isAcknowledged}
          onCheckedChange={(checked) => setIsAcknowledged(checked === true)}
        />
        <span className="spiko-text-sm-regular">
          I plan to keep this deposit for at least 6 months, and I understand its value can fall below the amount I
          deposited
        </span>
      </Label>
    </WithTrigger>
  );
};

export const WithContent: Story = {
  render: (args) => <WithAcknowledgement {...args} />,
  args: {
    badge: { tone: 'neutral', icon: <Icon.Hourglass /> },
    title: 'Plan to keep this deposit for 6 months or more',
    description:
      'Spiko Cash & Carry builds gains over monthly cycles, and your balance can dip in between. Your money stays available at all times.',
    dismissLabel: 'Not now',
  },
};
