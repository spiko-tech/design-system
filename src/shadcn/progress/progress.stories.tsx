import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './progress.js';

const meta: Meta<typeof Progress> = {
  component: Progress,
  title: 'UI/Progress',
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    marker: { control: 'select', options: [undefined, 'dot'] },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = { args: { value: 50 } };

export const WithDotMarker: Story = { args: { value: 50, marker: 'dot' } };
