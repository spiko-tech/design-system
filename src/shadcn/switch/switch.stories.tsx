import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from '../label/label.js';
import { Switch } from './switch.js';

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'UI/Switch',
  tags: ['autodocs'],
  argTypes: { disabled: { control: 'boolean' } },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: { disabled: false },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" {...args} />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};
