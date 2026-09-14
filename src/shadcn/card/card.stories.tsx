import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/button.js';
import { Input } from '../input/input.js';
import { Label } from '../label/label.js';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card.js';

const meta: Meta<typeof Card> = { component: Card, title: 'UI/Card', tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a className="ml-auto inline-block text-sm underline-offset-4 hover:underline">Forgot your password?</a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="justify-between gap-2">
        <Button variant="outline">Login with Google</Button>
        <Button type="submit">Login</Button>
      </CardFooter>
    </Card>
  ),
};
