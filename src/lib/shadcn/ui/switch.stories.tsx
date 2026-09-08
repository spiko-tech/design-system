import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './label.js';
import { Switch } from './switch.js';

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'UI/Switch',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};
