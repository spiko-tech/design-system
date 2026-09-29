import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../button/button.js';
import { SpikoDialog, type SpikoDialogProps } from './SpikoDialog.js';

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
    steps: { table: { disable: true } },
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

const STEP_COUNT = 3;

const SpikoDialogWithArrows = (props: SpikoDialogProps) => {
  const [step, setStep] = useState(0);
  return (
    <SpikoDialog
      {...props}
      steps={{
        onPrevious: () => setStep((current) => current - 1),
        onNext: () => setStep((current) => current + 1),
        disablePrevious: step === 0,
        disableNext: step === STEP_COUNT - 1,
      }}
    >
      Step {step + 1} of {STEP_COUNT}
    </SpikoDialog>
  );
};

export const WithArrows: Story = { render: (args) => <SpikoDialogWithArrows {...args} /> };
