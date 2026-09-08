import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button.js';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './dialog.js';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: 'UI/Dialog',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
