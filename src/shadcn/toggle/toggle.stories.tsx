import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from '../toggle/toggle.js';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'UI/Toggle',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline'] },
    size: { control: 'select', options: ['default', 'sm', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = { args: { children: 'Bold', 'aria-label': 'Toggle bold' } };

export const Outline: Story = { args: { children: 'Italic', variant: 'outline', 'aria-label': 'Toggle italic' } };
