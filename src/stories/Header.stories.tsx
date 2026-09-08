import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import { Header } from './Header';

const meta = {
  component: Header,
  args: { onLogin: fn(), onLogout: fn(), onCreateAccount: fn() },
  parameters: { layout: 'fullscreen' },
  tags: ['ai-generated'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Log in' }));
    await expect(args.onLogin).toHaveBeenCalledOnce();
  },
};

export const LoggedIn: Story = {
  args: { user: { name: 'Jane Doe' } },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Jane Doe')).toBeVisible();
    await expect(canvas.queryByRole('button', { name: 'Log in' })).not.toBeInTheDocument();
  },
};
