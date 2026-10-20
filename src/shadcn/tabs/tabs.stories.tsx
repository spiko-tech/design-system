import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { expect, userEvent, within } from 'storybook/test';
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

const manyTabs = [
  { value: 'general', label: 'General' },
  { value: 'users', label: 'Users' },
  { value: 'banks-wallets', label: 'Bank accounts & wallets' },
  { value: 'security', label: 'Security' },
  { value: 'preferences', label: 'Preferences' },
  { value: 'notifications', label: 'Notifications' },
];

export const UnderlineManyTabsNarrow: Story = {
  args: { defaultValue: 'general' },
  render: ({ disabled, ...args }) => (
    <Tabs {...args}>
      <TabsList variant="underline" className="w-90">
        {manyTabs.map(({ value, label }) => (
          <TabsTrigger key={value} value={value} variant="underline" disabled={disabled}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  ),
};

const hasFocusRing = (element: Element) => getComputedStyle(element).outlineStyle !== 'none';

export const FocusRingOnlyForKeyboard: Story = {
  render: renderTabs('underline'),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const overview = canvas.getByRole('tab', { name: 'Overview' });
    const positions = canvas.getByRole('tab', { name: 'Positions' });

    await userEvent.click(overview);
    await expect(overview).toHaveFocus();
    await expect(hasFocusRing(overview)).toBe(false);

    await userEvent.keyboard('{ArrowRight}');
    await expect(positions).toHaveFocus();
    await expect(hasFocusRing(positions)).toBe(true);

    await userEvent.click(overview);
    await expect(hasFocusRing(overview)).toBe(false);
  },
};
