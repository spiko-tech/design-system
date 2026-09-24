import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../checkbox/checkbox.js';
import { Label } from './label.js';

const meta: Meta<typeof Label> = { component: Label, title: 'UI/Label', tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => (
    <div className="flex gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};
