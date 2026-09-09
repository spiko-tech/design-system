import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/button.js';
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip/tooltip.js';

const meta: Meta<typeof Tooltip> = { component: Tooltip, title: 'UI/Tooltip', tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>Add to library</TooltipContent>
    </Tooltip>
  ),
};
