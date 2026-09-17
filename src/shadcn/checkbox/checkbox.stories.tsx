import { Checkbox } from '@/shadcn/checkbox/checkbox.js';
import { Label } from '@/shadcn/label/label.js';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = { args: { defaultChecked: true } };

export const Disabled: Story = { args: { disabled: true } };

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};
