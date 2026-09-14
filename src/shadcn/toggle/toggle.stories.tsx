import type { Meta, StoryObj } from '@storybook/react-vite';
import { BookmarkIcon } from 'lucide-react';
import { Toggle } from './toggle.js';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'UI/Toggle',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline'] },
    size: { control: 'select', options: ['default', 'sm', 'lg'] },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Bookmark: Story = {
  args: { variant: 'outline', size: 'sm', disabled: false },
  render: (args) => (
    <Toggle aria-label="Toggle bookmark" {...args}>
      <BookmarkIcon className="group-aria-pressed/toggle:fill-foreground" />
      Bookmark
    </Toggle>
  ),
};
