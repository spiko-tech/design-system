import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs.js';

type Args = ComponentProps<typeof Tabs> & { disabled: boolean };

const meta: Meta<Args> = {
  component: Tabs,
  title: 'UI/Tabs',
  tags: ['autodocs'],
  args: { defaultValue: 'overview', disabled: false },
};

export default meta;
type Story = StoryObj<Args>;

const tabs = [
  { value: 'overview', label: 'Overview' },
  { value: 'positions', label: 'Positions' },
  { value: 'transactions', label: 'Transactions' },
  { value: 'documents', label: 'Documents' },
];

const renderTabs =
  (variant: 'default' | 'underline') =>
  ({ disabled, ...args }: Args) => (
    <Tabs {...args}>
      <TabsList variant={variant} className="w-150">
        {tabs.map(({ value, label }) => (
          <TabsTrigger key={value} value={value} variant={variant} disabled={disabled}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map(({ value, label }) => (
        <TabsContent key={value} value={value}>
          {label} content
        </TabsContent>
      ))}
    </Tabs>
  );

export const Default: Story = { render: renderTabs('default') };

export const Underline: Story = { render: renderTabs('underline') };
