import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Calendar } from '../calendar/calendar.js';

const meta: Meta<typeof Calendar> = { component: Calendar, title: 'UI/Calendar', tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return <Calendar mode="single" selected={date} onSelect={setDate} />;
  },
};
