import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { Icon } from '../../assets/icons/core/Icon.js';
import { Button } from '../button/button.js';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip.js';

type TooltipStoryArgs = ComponentProps<typeof Tooltip> &
  Pick<ComponentProps<typeof TooltipContent>, 'side' | 'align' | 'showArrow' | 'sideOffset'>;

const meta: Meta<TooltipStoryArgs> = {
  component: Tooltip,
  title: 'UI/Tooltip',
  tags: ['autodocs'],
  args: { side: 'top', align: 'center', showArrow: true, sideOffset: 0 },
  argTypes: {
    side: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
    align: { control: 'select', options: ['start', 'center', 'end'] },
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-40 items-center justify-center">
        <Story />
      </div>
    ),
  ],
  render: ({ side, align, showArrow, sideOffset, ...args }) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent side={side} align={align} showArrow={showArrow} sideOffset={sideOffset}>
        Add this fund to your library
      </TooltipContent>
    </Tooltip>
  ),
};

export default meta;
type Story = StoryObj<TooltipStoryArgs>;

export const Default: Story = {};

export const WithoutArrow: Story = { args: { showArrow: false, sideOffset: 4 } };

export const Open: Story = { args: { defaultOpen: true } };

export const Sides: Story = {
  render: ({ align }) => (
    <div className="flex gap-4">
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="outline">{side}</Button>
          </TooltipTrigger>
          <TooltipContent side={side} align={align}>
            Tooltip on {side}, aligned {align}
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
};

export const IconTrigger: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="More information">
          <Icon.Info />
        </Button>
      </TooltipTrigger>
      <TooltipContent>The NAV is updated every business day.</TooltipContent>
    </Tooltip>
  ),
};

export const LongContent: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        Subscriptions received before the cut-off time are processed at the next NAV. Later requests roll over to the
        following business day.
      </TooltipContent>
    </Tooltip>
  ),
};
