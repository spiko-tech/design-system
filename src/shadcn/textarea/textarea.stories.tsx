import { Textarea } from '@/shadcn/textarea/textarea.js';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Inputs/Textarea',
  component: Textarea,
  args: { placeholder: 'Type your message…', className: 'w-80' },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = { args: { disabled: true, placeholder: 'Disabled' } };

export const Invalid: Story = { args: { 'aria-invalid': true, defaultValue: 'Invalid value' } };
