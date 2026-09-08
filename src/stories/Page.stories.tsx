import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Page } from './Page';

const meta = {
  component: Page,
  parameters: { layout: 'fullscreen' },
  tags: ['ai-generated'],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

export const LoggedIn: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Log in' }));
    await expect(canvas.getByText('Jane Doe')).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'Log out' })).toBeVisible();
  },
};
