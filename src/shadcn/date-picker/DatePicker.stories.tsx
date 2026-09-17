import type { Meta, StoryObj } from '@storybook/react-vite';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { useState } from 'react';
import { DatePicker } from '@/shadcn/date-picker/DatePicker.js';

const meta = {
  title: 'Inputs/DatePicker',
  component: DatePicker,
  parameters: { layout: 'centered' },
  args: {
    date: undefined,
    locale: enUS,
    placeholder: 'Pick a date',
    onChange: () => undefined,
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: undefined,
    locale: enUS,
    placeholder: 'Pick a date',
    onChange: () => undefined,
  },
  render: function Render(args) {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <DatePicker
        {...args}
        date={date}
        onChange={setDate}
        formatDate={(d) => format(d, 'PPP', { locale: enUS })}
      />
    );
  },
};

export const WithValue: Story = {
  args: {
    date: new Date(Date.UTC(2024, 5, 15)),
    locale: enUS,
    placeholder: 'Pick a date',
    onChange: () => undefined,
  },
  render: function Render(args) {
    const [date, setDate] = useState<Date | undefined>(args.date);
    return (
      <DatePicker
        {...args}
        date={date}
        onChange={setDate}
        formatDate={(d) => format(d, 'PPP', { locale: enUS })}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    date: new Date(Date.UTC(2024, 5, 15)),
    locale: enUS,
    placeholder: 'Pick a date',
    onChange: () => undefined,
    disabled: true,
  },
};
