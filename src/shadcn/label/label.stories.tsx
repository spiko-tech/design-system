import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from '../label/label.js';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
  args: { children: 'Email address' },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const WithInput: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-2">
      <Label htmlFor="email">Email address</Label>
      <input id="email" className="h-11 rounded-md border border-input px-3 text-sm" placeholder="you@example.com" />
    </div>
  ),
};
