import { Alert, AlertDescription, AlertTitle } from '@/shadcn/alert/alert.js';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'UI/Alert',
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert className="w-96">
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-96">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please sign in again.</AlertDescription>
    </Alert>
  ),
};

export const Informative: Story = {
  render: () => (
    <Alert variant="informative" className="w-96">
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>A new software update is available.</AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert variant="warning" className="w-96">
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>Your trial ends in 3 days.</AlertDescription>
    </Alert>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-96 flex-col gap-4">
      <Alert>
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>Default alert message.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>Destructive</AlertTitle>
        <AlertDescription>Destructive alert message.</AlertDescription>
      </Alert>
      <Alert variant="informative">
        <AlertTitle>Informative</AlertTitle>
        <AlertDescription>Informative alert message.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Warning alert message.</AlertDescription>
      </Alert>
    </div>
  ),
};
