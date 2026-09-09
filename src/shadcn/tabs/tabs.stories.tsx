import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../tabs/tabs.js';

const meta: Meta<typeof Tabs> = { component: Tabs, title: 'UI/Tabs', tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-96">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
};

export const Underline: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-96">
      <TabsList variant="underline">
        <TabsTrigger variant="underline" value="account">
          Account
        </TabsTrigger>
        <TabsTrigger variant="underline" value="password">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
};
