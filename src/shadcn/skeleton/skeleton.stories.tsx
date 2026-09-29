import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from '../skeleton/skeleton.js';

const meta: Meta<typeof Skeleton> = { title: 'UI/Skeleton', component: Skeleton };

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = { render: () => <Skeleton className="h-4 w-48" /> };

export const Circle: Story = { render: () => <Skeleton className="size-12 rounded-full" /> };

export const CardPlaceholder: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-3">
      <Skeleton className="h-32 w-full rounded-xl" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  ),
};
