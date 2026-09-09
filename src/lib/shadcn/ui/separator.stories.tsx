import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from './separator.js';

const meta: Meta<typeof Separator> = { component: Separator, title: 'UI/Separator', tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <p className="text-sm">An open-source UI component library.</p>
      <Separator />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Source</span>
      </div>
    </div>
  ),
};
