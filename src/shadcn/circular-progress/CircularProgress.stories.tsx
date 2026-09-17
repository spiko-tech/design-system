import type { Meta, StoryObj } from '@storybook/react-vite';
import { CircularProgress } from '@/shadcn/circular-progress/CircularProgress.js';

const meta = {
  title: 'Feedback/CircularProgress',
  component: CircularProgress,
  parameters: { layout: 'centered' },
  argTypes: {
    initialPercentage: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    animateDurationMs: { control: { type: 'number', min: 0 } },
    size: { control: { type: 'number', min: 8 } },
    outerLoopDurationMs: { control: { type: 'number', min: 0 } },
  },
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialPercentage: 0,
    animateDurationMs: 4000,
    size: 64,
    outerLoopDurationMs: 10000,
  },
};

export const PartialStart: Story = {
  args: {
    initialPercentage: 40,
    animateDurationMs: 3000,
    size: 64,
    outerLoopDurationMs: 8000,
  },
};

export const WithoutBorderLoop: Story = {
  args: {
    initialPercentage: 0,
    animateDurationMs: 2500,
    size: 64,
    outerLoopDurationMs: 0,
  },
};

export const CustomColors: Story = {
  args: {
    initialPercentage: 10,
    animateDurationMs: 3500,
    size: 72,
    outerLoopDurationMs: 6000,
    innerColor: '#2563EB',
    outerColor: '#DBEAFE',
    borderColor: '#1D4ED8',
  },
};

export const SmallInline: Story = {
  args: {
    initialPercentage: 0,
    animateDurationMs: 5000,
    size: 16,
    outerLoopDurationMs: 10000,
  },
};
