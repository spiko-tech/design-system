import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bar, BarChart, XAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from './chart.js';

const meta: Meta<typeof ChartContainer> = {
  component: ChartContainer,
  title: 'UI/Chart',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChartContainer>;

const data = [
  { month: 'January', revenue: 186 },
  { month: 'February', revenue: 305 },
  { month: 'March', revenue: 237 },
  { month: 'April', revenue: 273 },
];

const config = {
  revenue: { label: 'Revenue', color: 'var(--color-primary)' },
} satisfies ChartConfig;

export const Default: Story = {
  render: () => (
    <ChartContainer config={config} className="min-h-[200px] w-full max-w-lg">
      <BarChart data={data}>
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
};
