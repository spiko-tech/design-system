import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button.js';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible.js';

const meta: Meta<typeof Collapsible> = {
  component: Collapsible,
  title: 'UI/Collapsible',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-80 space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="outline">Toggle details</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-md border px-4 py-2 text-sm">
        Extra details revealed when expanded.
      </CollapsibleContent>
    </Collapsible>
  ),
};
