import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input.js';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'UI/Input',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { placeholder: 'Email', type: 'email' } };
