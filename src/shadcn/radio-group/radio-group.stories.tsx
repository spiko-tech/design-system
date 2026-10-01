import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup, RadioGroupCard } from './radio-group.js';

const meta: Meta<typeof RadioGroup> = { component: RadioGroup, title: 'UI/RadioGroup', tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const WithDescription: Story = {
  render: () => (
    <RadioGroup defaultValue="card" className="w-fit" aria-label="Payment method">
      <RadioGroupCard value="card" label="Card" description="Pay instantly with a credit or debit card." />
      <RadioGroupCard value="transfer" label="Bank transfer" description="Funds arrive within 1-2 business days." />
    </RadioGroup>
  ),
};
