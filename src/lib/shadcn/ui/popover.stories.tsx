import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button.js';
import { Popover, PopoverContent, PopoverTrigger } from './popover.js';

const meta: Meta<typeof Popover> = {
  component: Popover,
  title: 'UI/Popover',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  ),
};
