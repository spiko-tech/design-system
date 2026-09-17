import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@/shadcn/button/button.js';
import { Popover, PopoverContent, PopoverTrigger } from '@/shadcn/popover/popover.js';

const meta = {
  title: 'Overlay/Popover',
  component: Popover,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-2">
          <p className="spiko-text-sm-medium">Dimensions</p>
          <p className="spiko-text-sm-regular text-text-secondary">
            Set the width and height for this panel.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const AlignStart: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Align start</Button>
      </PopoverTrigger>
      <PopoverContent align="start">
        <p className="spiko-text-sm-regular">Content aligned to the start of the trigger.</p>
      </PopoverContent>
    </Popover>
  ),
};
