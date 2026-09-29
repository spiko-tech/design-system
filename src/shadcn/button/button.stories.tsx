import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/button.js';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'UI/Button',
  tags: ['autodocs'],
  argTypes: { size: { control: 'select', options: ['default', 'sm', 'lg', 'icon'] }, disabled: { control: 'boolean' } },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { children: 'Primary', variant: 'default' } };

export const Destructive: Story = { args: { children: 'Destructive', variant: 'destructive' } };

export const Outline: Story = { args: { children: 'Outline', variant: 'outline' } };

export const Secondary: Story = { args: { children: 'Secondary', variant: 'secondary' } };

export const Ghost: Story = { args: { children: 'Ghost', variant: 'ghost' } };

export const Link: Story = { args: { children: 'Link', variant: 'link' } };

export const Small: Story = { args: { children: 'Small', size: 'sm' } };

export const Icon: Story = { args: { children: '→', size: 'icon' } };

export const ExternalLink: Story = { args: { children: 'External link', variant: 'externalLink' } };

export const Medium: Story = { args: { children: 'Medium', size: 'md' } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="externalLink">External link</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="icon" aria-label="Add">
        →
      </Button>
    </div>
  ),
};
