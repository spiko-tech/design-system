import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/button.js';
import { SpikoDialog } from './SpikoDialog.js';

const meta: Meta<typeof SpikoDialog> = {
  component: SpikoDialog,
  title: 'UI/SpikoDialog',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    trigger: { table: { disable: true } },
    description: { table: { disable: true } },
    onSubmit: { table: { disable: true } },
    submitVariant: { table: { disable: true } },
    contentProps: { table: { disable: true } },
    secondaryAction: { table: { disable: true } },
    children: { table: { disable: true } },
  },
  args: {
    title: 'Heading Title',
    trigger: <Button>Open dialog</Button>,
    cancelLabel: 'Cancel',
    submitLabel: 'Submit',
    onSubmit: () => {},
    children: <div className="h-64 rounded-md border border-dashed border-information bg-information-background" />,
  },
};

export default meta;
type Story = StoryObj<typeof SpikoDialog>;

export const Default: Story = { args: { size: 'sm' } };
