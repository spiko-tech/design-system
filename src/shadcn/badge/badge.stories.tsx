import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '../../assets/icons/core/Icon.js';
import { Badge } from './badge.js';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'UI/Badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'info', 'error', 'destructive', 'success', 'outline', 'ghost', 'link'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { children: 'Default', variant: 'default' } };

export const Secondary: Story = { args: { children: 'Secondary', variant: 'secondary' } };

export const Info: Story = { args: { children: 'Info', variant: 'info' } };

export const Error: Story = { args: { children: 'Error', variant: 'error' } };

export const Destructive: Story = { args: { children: 'Destructive', variant: 'destructive' } };

export const Success: Story = { args: { children: 'Success', variant: 'success' } };

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Icon.Loader className="animate-spin" />
        Loading
      </>
    ),
    variant: 'secondary',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="success">Success</Badge>
    </div>
  ),
};
