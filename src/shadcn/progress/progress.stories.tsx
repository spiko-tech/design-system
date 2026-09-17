import { Progress } from '@/shadcn/progress/progress.js';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Feedback/Progress',
  component: Progress,
  args: { className: 'w-72', value: 40 },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = { args: { value: 0 } };

export const Half: Story = { args: { value: 50 } };

export const Complete: Story = { args: { value: 100 } };
