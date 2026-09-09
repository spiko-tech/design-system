import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './textarea.js';

const meta: Meta<typeof Textarea> = { component: Textarea, title: 'UI/Textarea', tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = { args: { placeholder: 'Type your message here.' } };
