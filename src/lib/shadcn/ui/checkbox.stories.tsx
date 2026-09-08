import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './checkbox.js';
import { Label } from './label.js';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'UI/Checkbox',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};
