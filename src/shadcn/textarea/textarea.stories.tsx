import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './textarea.js';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'UI/Textarea',
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    rows: { control: 'number' },
    label: { control: 'text' },
    caption: { control: 'text' },
    captionPosition: { control: 'inline-radio', options: ['top', 'bottom'] },
  },
  args: { placeholder: 'Type your message here' },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const WithLabel: Story = { args: { label: 'Your message' } };

export const WithCaption: Story = {
  args: { label: 'Your message', caption: 'Account details attached automatically' },
};

export const WithCaptionBelow: Story = {
  args: { label: 'Your message', caption: 'Account details attached automatically', captionPosition: 'bottom' },
};

export const Disabled: Story = { args: { label: 'Your message', disabled: true } };

export const Invalid: Story = { args: { label: 'Your message', 'aria-invalid': true } };
