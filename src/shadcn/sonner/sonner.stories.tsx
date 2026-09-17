import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from 'next-themes';
import { toast } from 'sonner';
import { Button } from '@/shadcn/button/button.js';
import { Toaster } from '@/shadcn/sonner/sonner.js';

const meta = {
  title: 'Feedback/Sonner',
  component: Toaster,
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <Story />
        <Toaster />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast('Event scheduled', {
          description: 'Friday, February 10 at 5:57 PM',
        })
      }
    >
      Show toast
    </Button>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => toast.success('Payment confirmed')}>Success</Button>
      <Button variant="outline" onClick={() => toast.info('Sync started')}>
        Info
      </Button>
      <Button variant="secondary" onClick={() => toast.warning('Quota nearly full')}>
        Warning
      </Button>
      <Button variant="destructive" onClick={() => toast.error('Transfer failed')}>
        Error
      </Button>
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast('File deleted', {
          description: 'document.pdf was moved to trash.',
          action: {
            label: 'Undo',
            onClick: () => toast.success('Restored'),
          },
        })
      }
    >
      Toast with action
    </Button>
  ),
};
