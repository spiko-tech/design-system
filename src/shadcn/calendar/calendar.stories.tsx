/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta, StoryObj } from '@storybook/react-vite';
import type { DateRange } from 'react-day-picker';
import * as React from 'react';
import { Calendar } from '../calendar/calendar.js';

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: 'UI/Calendar',
  tags: ['autodocs'],
  argTypes: {
    captionLayout: { control: 'select', options: ['label', 'dropdown', 'dropdown-months', 'dropdown-years'] },
    showOutsideDays: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = React.useState<Date | undefined>(new Date());
    return <Calendar {...args} mode="single" selected={selected} onSelect={setSelected} />;
  },
};

export const Range: Story = {
  render: (args) => {
    const [range, setRange] = React.useState<DateRange | undefined>();
    return <Calendar {...args} mode="range" selected={range} onSelect={setRange} numberOfMonths={2} />;
  },
};

export const Multiple: Story = {
  render: (args) => {
    const [selected, setSelected] = React.useState<Date[] | undefined>();
    return <Calendar {...args} mode="multiple" selected={selected} onSelect={setSelected} />;
  },
};

export const DisabledDates: Story = {
  render: (args) => {
    const [selected, setSelected] = React.useState<Date | undefined>();
    return (
      <Calendar {...args} mode="single" selected={selected} onSelect={setSelected} disabled={{ dayOfWeek: [0, 6] }} />
    );
  },
};
