import type { Meta, StoryObj } from '@storybook/react-vite';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { useState } from 'react';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from './input-otp.js';

type Args = { disabled: boolean; invalid: boolean };

const meta: Meta<Args> = { title: 'UI/InputOTP', tags: ['autodocs'], args: { disabled: false, invalid: false } };

export default meta;
type Story = StoryObj<Args>;

const Slots = ({
  from,
  to,
  invalid,
  className,
}: {
  from: number;
  to: number;
  invalid: boolean;
  className?: string;
}) => (
  <InputOTPGroup className={className}>
    {Array.from({ length: to - from }, (_, i) => (
      <InputOTPSlot key={from + i} index={from + i} aria-invalid={invalid || undefined} />
    ))}
  </InputOTPGroup>
);

const Otp = ({ disabled, invalid, split }: Args & { split: boolean }) => {
  const [value, setValue] = useState('');
  return (
    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} value={value} onChange={setValue} disabled={disabled}>
      {split ? (
        <>
          <Slots from={0} to={3} invalid={invalid} />
          <InputOTPSeparator />
          <Slots from={3} to={6} invalid={invalid} />
        </>
      ) : (
        <Slots from={0} to={6} invalid={invalid} className="gap-2" />
      )}
    </InputOTP>
  );
};

export const Default: Story = { render: (args) => <Otp {...args} split={false} /> };

export const WithSeparator: Story = { render: (args) => <Otp {...args} split /> };
