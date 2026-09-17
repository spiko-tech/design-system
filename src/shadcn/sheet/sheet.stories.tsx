import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@/shadcn/button/button.js';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shadcn/sheet/sheet.js';

const meta = {
  title: 'Overlay/Sheet',
  component: Sheet,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

const SheetExample = ({ side }: { side: 'top' | 'right' | 'bottom' | 'left' }) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open {side}</Button>
    </SheetTrigger>
    <SheetContent side={side}>
      <SheetHeader>
        <SheetTitle>Sheet ({side})</SheetTitle>
        <SheetDescription>Slide-over panel anchored to the {side} edge.</SheetDescription>
      </SheetHeader>
      <div className="px-4 spiko-text-sm-regular text-text-secondary">
        Place filters, forms, or navigation inside the sheet.
      </div>
      <SheetFooter>
        <Button>Continue</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export const Right: Story = {
  render: () => <SheetExample side="right" />,
};

export const Left: Story = {
  render: () => <SheetExample side="left" />,
};

export const Top: Story = {
  render: () => <SheetExample side="top" />,
};

export const Bottom: Story = {
  render: () => <SheetExample side="bottom" />,
};
