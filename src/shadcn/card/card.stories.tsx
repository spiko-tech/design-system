import { Button } from '@/shadcn/button/button.js';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shadcn/card/card.js';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'UI/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Short supporting description for this card.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-text-secondary">Card content goes here. Use this area for the main body copy.</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">Confirm</Button>
        <Button size="sm" variant="outline">
          Cancel
        </Button>
      </CardFooter>
    </Card>
  ),
};
