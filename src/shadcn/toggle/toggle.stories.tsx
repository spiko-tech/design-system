import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from '@/shadcn/toggle/toggle.js';

const meta = {
  title: 'UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  args: { children: 'Toggle', 'aria-label': 'Toggle' },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Outline: Story = { args: { variant: 'outline' } };

export const Small: Story = { args: { size: 'sm' } };

export const Large: Story = { args: { size: 'lg' } };

export const Pressed: Story = { args: { defaultPressed: true } };
