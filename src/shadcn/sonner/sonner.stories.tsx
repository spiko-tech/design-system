import type { Meta, StoryObj } from '@storybook/react-vite';
import { toast } from 'sonner';
import { Button } from '../button/button.js';
import { Toaster } from '../sonner/sonner.js';

const meta: Meta<typeof Toaster> = { component: Toaster, title: 'UI/Toaster', tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button variant="outline" onClick={() => toast('Event has been created')}>
        Show toast
      </Button>
    </div>
  ),
};
