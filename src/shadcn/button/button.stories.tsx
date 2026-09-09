import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/button.js';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'UI/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] },
    size: { control: 'select', options: ['default', 'sm', 'lg', 'icon'] },
    asChild: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Destructive: Story = { args: { children: 'Destructive', variant: 'destructive' } };

export const Outline: Story = { args: { children: 'Outline', variant: 'outline' } };

export const Secondary: Story = { args: { children: 'Secondary', variant: 'secondary' } };

export const Ghost: Story = { args: { children: 'Ghost', variant: 'ghost' } };

export const Link: Story = { args: { children: 'Link', variant: 'link' } };

export const Small: Story = { args: { children: 'Small', size: 'sm' } };

export const Icon: Story = { args: { children: '→', size: 'icon' } };

export const Disabled: Story = { args: { children: 'Disabled', disabled: true } };
