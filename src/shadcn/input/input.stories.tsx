import { Input } from '@/shadcn/input/input.js';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Inputs/Input',
  component: Input,
  args: { placeholder: 'Enter text…', className: 'w-72' },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Email: Story = { args: { type: 'email', placeholder: 'you@example.com' } };

export const Password: Story = { args: { type: 'password', placeholder: 'Password' } };

export const Disabled: Story = { args: { disabled: true, placeholder: 'Disabled' } };

export const Invalid: Story = { args: { 'aria-invalid': true, defaultValue: 'Invalid' } };
