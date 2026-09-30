import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from '../separator/separator.js';

const meta: Meta<typeof Separator> = {
  component: Separator,
  title: 'UI/Separator',
  tags: ['autodocs'],
  argTypes: { orientation: { control: 'select', options: ['horizontal', 'vertical'] } },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: (args) => (
    <div className="w-64">
      <p className="text-sm">Section one</p>
      <Separator {...args} className="my-4" />
      <p className="text-sm">Section two</p>
    </div>
  ),
};

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <div className="flex h-8 items-center gap-4">
      <span className="text-sm">Left</span>
      <Separator {...args} />
      <span className="text-sm">Right</span>
    </div>
  ),
};
