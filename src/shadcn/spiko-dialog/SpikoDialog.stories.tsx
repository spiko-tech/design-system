import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../button/button.js';
import { Input } from '../input/input.js';
import { SpikoDialog, type SpikoDialogProps } from './SpikoDialog.js';

const meta: Meta<typeof SpikoDialog> = {
  component: SpikoDialog,
  title: 'UI/SpikoDialog',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    trigger: { table: { disable: true } },
    description: { table: { disable: true } },
    contentProps: { table: { disable: true } },
    secondaryAction: { table: { disable: true } },
    steps: { table: { disable: true } },
    submit: {
      control: false,
      description:
        "The footer submit button, shown only when this is set. `target` is either `{ type: 'default', onClick }`, or `{ type: 'inner-form', formId }` to submit a form rendered in the dialog body, so the form runs its own `onSubmit` and validation.",
    },
    children: { table: { disable: true } },
  },
  args: {
    title: 'Heading Title',
    trigger: <Button>Open dialog</Button>,
    cancelLabel: 'Cancel',
    submit: { label: 'Submit', target: { type: 'default', onClick: () => {} } },
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

const SpikoDialogWithBackArrowOnly = (props: SpikoDialogProps) => {
  const [step, setStep] = useState(0);
  const isLastStep = step === STEP_COUNT - 1;
  return (
    <SpikoDialog
      {...props}
      submit={{
        label: isLastStep ? 'Submit' : 'Next',
        target: { type: 'default', onClick: () => setStep((current) => Math.min(current + 1, STEP_COUNT - 1)) },
      }}
      steps={step === 0 ? undefined : { onPrevious: () => setStep((current) => current - 1) }}
    >
      Step {step + 1} of {STEP_COUNT}
    </SpikoDialog>
  );
};

export const WithBackArrowOnly: Story = { render: (args) => <SpikoDialogWithBackArrowOnly {...args} /> };

const STEP_HEIGHTS = ['h-24', 'h-96', 'h-48'];

const SteppedContent = () => {
  const [step, setStep] = useState(0);
  return (
    <>
      <div
        className={`${STEP_HEIGHTS[step]} rounded-md border border-dashed border-information bg-information-background`}
      />
      <Button variant="outline" onClick={() => setStep((step + 1) % STEP_HEIGHTS.length)}>
        Next step
      </Button>
    </>
  );
};

export const AnimatedHeight: Story = { args: { size: 'xs', animateHeight: true, children: <SteppedContent /> } };

const FORM_ID = 'spiko-dialog-story-form';

export const SubmitsAForm: Story = {
  args: {
    size: 'xs',
    submit: { label: 'Submit', target: { type: 'inner-form', formId: FORM_ID } },
    children: (
      <form id={FORM_ID} onSubmit={(event) => event.preventDefault()}>
        <Input placeholder="Press Submit in the footer" required />
      </form>
    ),
  },
};
