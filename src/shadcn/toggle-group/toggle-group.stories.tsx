import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bold, Italic, Underline } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from './toggle-group.js';

const meta: Meta<typeof ToggleGroup> = {
  component: ToggleGroup,
  title: 'UI/ToggleGroup',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline'] },
    size: { control: 'select', options: ['default', 'sm', 'lg'] },
    spacing: { control: { type: 'number', min: 0 } },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
  args: { variant: 'outline', size: 'default', spacing: 0, orientation: 'horizontal' },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  render: ({ variant, size, spacing, orientation }) => (
    <ToggleGroup variant={variant} size={size} spacing={spacing} orientation={orientation} type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
