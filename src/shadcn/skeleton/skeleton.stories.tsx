import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from '../skeleton/skeleton.js';

const meta: Meta<typeof Skeleton> = { component: Skeleton, title: 'UI/Skeleton', tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = { args: { className: 'h-4 w-48' } };

export const Card: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  ),
};
