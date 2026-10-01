/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { format } from 'date-fns';
import { enUS, fr } from 'date-fns/locale';
import * as React from 'react';
import { DatePicker } from './DatePicker.js';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'UI/DatePicker',
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    locale: { control: 'select', options: ['en', 'fr'], mapping: { en: enUS, fr: fr } },
  },
  args: { locale: enUS },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: (args) => {
    const [date, setDate] = React.useState<Date | undefined>();
    return (
      <DatePicker
        {...args}
        date={date}
        onChange={setDate}
        placeholder={args.locale === enUS ? 'Pick a date' : 'Choisir une date'}
        formatDate={(date) => format(date, 'PPP', { locale: args.locale })}
      />
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [date, setDate] = React.useState<Date | undefined>();
    return <DatePicker {...args} date={date} onChange={setDate} placeholder="Pick a date" disabled />;
  },
};

export const WeekdaysOnly: Story = {
  render: (args) => {
    const [date, setDate] = React.useState<Date | undefined>();
    return (
      <DatePicker
        {...args}
        date={date}
        onChange={setDate}
        placeholder="Pick a weekday"
        formatDate={(date) => format(date, 'PPP')}
        availableDate={(date) => date.getUTCDay() !== 0 && date.getUTCDay() !== 6}
      />
    );
  },
};
