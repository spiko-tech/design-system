import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertCircleIcon, CheckCircle2Icon, InfoIcon, TriangleAlertIcon } from 'lucide-react';
import { Icon } from '../../assets/icons/core/Icon.js';
import { Alert, AlertDescription, AlertTitle } from '../alert/alert.js';
import { Button } from '../button/button.js';
import { AlertAction } from './alert.js';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'UI/Alert',
  tags: ['autodocs'],
  argTypes: { variant: { control: 'select', options: ['default', 'destructive', 'information', 'warning'] } },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <CheckCircle2Icon />
      <AlertTitle>Success! Your changes have been saved</AlertTitle>
      <AlertDescription>This is an alert with icon, title and description.</AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: (args) => (
    <Alert {...args} variant="destructive">
      <AlertCircleIcon />
      <AlertTitle>Unable to process your payment.</AlertTitle>
      <AlertDescription>Please verify your billing information and try again.</AlertDescription>
    </Alert>
  ),
};

export const Information: Story = {
  render: (args) => (
    <Alert {...args} variant="information">
      <InfoIcon />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: (args) => (
    <Alert {...args} variant="warning">
      <TriangleAlertIcon />
      <AlertTitle>Your subscription expires soon.</AlertTitle>
      <AlertDescription>Renew before the end of the month to avoid interruption.</AlertDescription>
    </Alert>
  ),
};

export const WithAction: Story = {
  render: (args) => (
    <Alert {...args} variant="warning">
      <TriangleAlertIcon />
      <AlertTitle>Your subscription expires soon.</AlertTitle>
      <AlertDescription>Renew before the end of the month to avoid interruption.</AlertDescription>
      <AlertAction>
        <Button size="icon" variant="ghost">
          <Icon.X />
        </Button>
      </AlertAction>
    </Alert>
  ),
};

export const TitleOnly: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>A simple alert with only a title.</AlertTitle>
    </Alert>
  ),
};

export const WithoutIcon: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>No icon here</AlertTitle>
      <AlertDescription>The grid collapses the icon column when no svg is present.</AlertDescription>
    </Alert>
  ),
};
