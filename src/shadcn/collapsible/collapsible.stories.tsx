import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@/shadcn/button/button.js';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/shadcn/collapsible/collapsible.js';

const meta = {
  title: 'UI/Collapsible',
  component: Collapsible,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-[min(100vw-3rem,20rem)] space-y-2">
      <div className="flex items-center justify-between gap-4">
        <h4 className="spiko-text-sm-medium">@peduarte starred 3 repositories</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            Toggle
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 spiko-text-sm-regular">@radix-ui/primitives</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 spiko-text-sm-regular">@radix-ui/colors</div>
        <div className="rounded-md border px-4 py-2 spiko-text-sm-regular">@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-[min(100vw-3rem,20rem)] space-y-2">
      <div className="flex items-center justify-between gap-4">
        <h4 className="spiko-text-sm-medium">More details</h4>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="sm">
            Collapse
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <p className="rounded-md border px-4 py-3 spiko-text-sm-regular text-text-secondary">
          This section starts expanded via <code>defaultOpen</code>.
        </p>
      </CollapsibleContent>
    </Collapsible>
  ),
};
