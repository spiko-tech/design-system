import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../select/select.js';

const meta: Meta<typeof Select> = { component: Select, title: 'UI/Select', tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-64">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
