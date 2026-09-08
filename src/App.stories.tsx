import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import App from './App';

const meta = {
  component: App,
  parameters: { layout: 'fullscreen' },
  tags: ['ai-generated'],
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /count is 0/i }));
    await expect(canvas.getByRole('button', { name: /count is 1/i })).toBeVisible();
  },
};

export const CssCheck: Story = {
  play: async ({ canvas }) => {
    const counter = canvas.getByRole('button', { name: /count is/i });
    await expect(getComputedStyle(counter).color).toBe('rgb(170, 59, 255)');
  },
};
