import { Label } from '@/shadcn/label/label.js';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'UI/Label',
  component: Label,
  args: { children: 'Email address' },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithInput: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-2">
      <Label htmlFor="email">Email address</Label>
      <input
        id="email"
        className="h-11 rounded-md border border-input px-3 text-sm"
        placeholder="you@example.com"
      />
    </div>
  ),
};
