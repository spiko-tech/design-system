import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '@/shadcn/button/button.js';
import { ControlledSpikoDialog, SpikoDialog } from '@/shadcn/spiko-dialog/SpikoDialog.js';

const meta = {
  title: 'Overlay/SpikoDialog',
  component: SpikoDialog,
  parameters: { layout: 'centered' },
  args: {
    title: 'Confirm transfer',
    description: 'You are about to transfer funds to another account. This action cannot be undone.',
    trigger: <Button>Open Spiko dialog</Button>,
    submitLabel: 'Confirm',
    cancelLabel: 'Cancel',
    onSubmit: () => undefined,
    children: (
      <p className="spiko-text-sm-regular text-text-secondary">
        Review the transfer details before confirming.
      </p>
    ),
  },
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    submitVariant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
  },
} satisfies Meta<typeof SpikoDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  args: {
    title: 'Sized dialog',
    description: 'Use the size control to compare xs / sm / md / lg breakpoints.',
    trigger: <Button variant="outline">Open sized dialog</Button>,
    submitLabel: 'Save',
    cancelLabel: 'Cancel',
    onSubmit: () => undefined,
    size: 'md',
    children: <p className="spiko-text-sm-regular">Dialog body scales with the size variant.</p>,
  },
};

export const Submitting: Story = {
  args: {
    title: 'Processing request',
    description: 'Please wait while we submit your request.',
    trigger: <Button>Open submitting state</Button>,
    submitLabel: 'Submit',
    cancelLabel: 'Cancel',
    onSubmit: () => undefined,
    isSubmitting: true,
    children: <p className="spiko-text-sm-regular">Submit button shows a spinner while busy.</p>,
  },
};

export const DisabledSubmit: Story = {
  args: {
    title: 'Incomplete form',
    description: 'Fill in all required fields to continue.',
    trigger: <Button variant="outline">Open disabled submit</Button>,
    submitLabel: 'Continue',
    cancelLabel: 'Cancel',
    onSubmit: () => undefined,
    disableSubmit: true,
    children: <p className="spiko-text-sm-regular">Primary action stays disabled until valid.</p>,
  },
};

export const WithSecondaryAction: Story = {
  args: {
    title: 'Export report',
    description: 'Choose how you want to export this report.',
    trigger: <Button>Open with secondary action</Button>,
    submitLabel: 'Download PDF',
    cancelLabel: 'Cancel',
    onSubmit: () => undefined,
    secondaryAction: (
      <Button variant="secondary" type="button">
        Send by email
      </Button>
    ),
    children: <p className="spiko-text-sm-regular">Secondary actions sit between cancel and submit.</p>,
  },
};

export const ContentOnly: Story = {
  args: {
    title: 'Information',
    description: 'A dialog without footer actions.',
    trigger: <Button variant="ghost">Open content-only</Button>,
    submitLabel: undefined,
    cancelLabel: undefined,
    onSubmit: undefined,
    children: (
      <ul className="list-disc space-y-1 pl-5 spiko-text-sm-regular text-text-secondary">
        <li>No cancel or submit buttons</li>
        <li>Useful for read-only explanations</li>
      </ul>
    ),
  },
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-center gap-4">
        <Button onClick={() => setOpen(true)}>Open controlled dialog</Button>
        <ControlledSpikoDialog
          open={open}
          onOpenChange={setOpen}
          title="Controlled dialog"
          description="Open state is managed by the parent via open / onOpenChange."
          submitLabel="Done"
          cancelLabel="Close"
          onSubmit={() => setOpen(false)}
        >
          <p className="spiko-text-sm-regular">Use ControlledSpikoDialog when you need external state.</p>
        </ControlledSpikoDialog>
      </div>
    );
  },
};
