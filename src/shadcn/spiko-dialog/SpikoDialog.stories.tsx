import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../button/button.js';
import { ControlledSpikoDialog, SpikoDialog } from './SpikoDialog.js';

const meta: Meta<typeof SpikoDialog> = {
  component: SpikoDialog,
  title: 'UI/SpikoDialog',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    trigger: { table: { disable: true } },
    description: { table: { disable: true } },
    onSubmit: { table: { disable: true } },
    submitVariant: { table: { disable: true } },
    contentProps: { table: { disable: true } },
    secondaryAction: { table: { disable: true } },
    children: { table: { disable: true } },
  },
  args: {
    title: 'Heading Title',
    trigger: <Button>Open dialog</Button>,
    cancelLabel: 'Cancel',
    submitLabel: 'Submit',
    onSubmit: () => {},
    children: <div className="h-64 rounded-md border border-dashed border-information bg-information-background" />,
  },
};

export default meta;
type Story = StoryObj<typeof SpikoDialog>;

export const Default: Story = { args: { size: 'sm' } };

export const Sizes: Story = {
  args: {
    title: 'Sized dialog',
    description: 'Use the size control to compare xs / sm / md / lg.',
    trigger: <Button variant="outline">Open sized dialog</Button>,
    size: 'md',
    children: <p className="spiko-text-sm-regular">Dialog body scales with the size variant.</p>,
  },
};

export const Submitting: Story = {
  args: {
    title: 'Processing request',
    description: 'Please wait while we submit your request.',
    trigger: <Button>Open submitting state</Button>,
    isSubmitting: true,
    children: <p className="spiko-text-sm-regular">The submit button shows a spinner while busy.</p>,
  },
};

export const DisabledSubmit: Story = {
  args: {
    title: 'Incomplete form',
    description: 'Fill in all required fields to continue.',
    trigger: <Button variant="outline">Open disabled submit</Button>,
    submitLabel: 'Continue',
    disableSubmit: true,
    children: <p className="spiko-text-sm-regular">The primary action stays disabled until the form is valid.</p>,
  },
};

export const WithSecondaryAction: Story = {
  args: {
    title: 'Export report',
    description: 'Choose how you want to export this report.',
    trigger: <Button>Open with secondary action</Button>,
    submitLabel: 'Download PDF',
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
      <ul className="list-disc space-y-1 pl-5 spiko-text-sm-regular">
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
