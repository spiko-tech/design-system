import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from '../progress/progress.js';

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  tags: ['autodocs'],
  args: { className: 'w-72', value: 40 },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {};

export const Empty: Story = { args: { value: 0 } };

export const Half: Story = { args: { value: 50 } };

export const Complete: Story = { args: { value: 100 } };
