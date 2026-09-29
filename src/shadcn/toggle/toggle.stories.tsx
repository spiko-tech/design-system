import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from '../toggle/toggle.js';

const meta: Meta<typeof Toggle> = {
  title: 'UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  args: { children: 'Toggle', 'aria-label': 'Toggle' },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {};

export const Outline: Story = { args: { variant: 'outline' } };

export const Small: Story = { args: { size: 'sm' } };

export const Large: Story = { args: { size: 'lg' } };

export const Pressed: Story = { args: { defaultPressed: true } };
