import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../input/input.js';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'UI/Input',
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'file'] },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { placeholder: 'Enter text' } };

export const Email: Story = { args: { type: 'email', placeholder: 'you@example.com' } };

export const Password: Story = { args: { type: 'password', placeholder: 'Password' } };

export const Disabled: Story = { args: { disabled: true, placeholder: 'Disabled' } };

export const Invalid: Story = { args: { 'aria-invalid': true, defaultValue: 'Invalid' } };
