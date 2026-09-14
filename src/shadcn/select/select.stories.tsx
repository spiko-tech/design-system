import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '../select/select.js';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'UI/Select',
  tags: ['autodocs'],
  argTypes: { disabled: { control: 'boolean' } },
  args: { disabled: false },
};

export default meta;
type Story = StoryObj<typeof Select>;

const fruits = [
  { label: 'A fruit with a super super long name', value: 'long-name' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blueberry', value: 'blueberry' },
];

const vegetables = [
  { label: 'Carrot', value: 'carrot' },
  { label: 'Broccoli', value: 'broccoli' },
  { label: 'Spinach', value: 'spinach' },
];

export const Groups: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {fruits.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          {vegetables.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
