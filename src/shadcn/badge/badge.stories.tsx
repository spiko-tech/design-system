import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../badge/badge.js';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'UI/Badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'info', 'error', 'destructive', 'success', 'outline', 'ghost', 'link'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { children: 'Badge' } };

export const Success: Story = { args: { children: 'Success', variant: 'success' } };

export const Outline: Story = { args: { children: 'Outline', variant: 'outline' } };
