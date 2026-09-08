import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './progress.js';

const meta: Meta<typeof Progress> = {
  component: Progress,
  title: 'UI/Progress',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = { args: { value: 60, className: 'w-80' } };
