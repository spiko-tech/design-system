import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from '../label/label.js';
import { Textarea } from './textarea.js';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'UI/Textarea',
  tags: ['autodocs'],
  argTypes: { disabled: { control: 'boolean' }, rows: { control: 'number' } },
  args: { placeholder: 'Type your message here' },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: { className: 'h-40' },
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="message">Your message</Label>
      <p className="spiko-text-sm-regular text-text-secondary">Account details attached automatically</p>
      <Textarea id="message" {...args} />
    </div>
  ),
};

export const Disabled: Story = { args: { disabled: true } };

export const Invalid: Story = { args: { 'aria-invalid': true } };
