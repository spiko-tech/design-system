import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, AlertDescription, AlertTitle } from './alert.js';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'UI/Alert',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'destructive', 'informative', 'warning'] },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  ...Default,
  args: { variant: 'destructive' },
};

export const Warning: Story = {
  ...Default,
  args: { variant: 'warning' },
};
