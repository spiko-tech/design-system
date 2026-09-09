import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button.js';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card.js';

const meta: Meta<typeof Card> = { component: Card, title: 'UI/Card', tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one click.</CardDescription>
      </CardHeader>
      <CardContent>Your project will be created in the default workspace.</CardContent>
      <CardFooter>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};
