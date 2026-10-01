import type { Meta, StoryObj } from '@storybook/react-vite';
import { toast } from 'sonner';
import { Button } from '../button/button.js';
import { Toaster } from './sonner.js';

const meta: Meta<typeof Toaster> = {
  component: Toaster,
  title: 'UI/Sonner',
  tags: ['autodocs'],
  args: { richColors: true, closeButton: true, position: 'top-center' },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Toaster {...args} />
      <Button variant="outline" onClick={() => toast.info('Subscription request received')}>
        Information
      </Button>
      <Button variant="outline" onClick={() => toast.error('Subscription request failed')}>
        Error
      </Button>
      <Button variant="outline" onClick={() => toast.success('Subscription request confirmed')}>
        Success
      </Button>
    </div>
  ),
};
