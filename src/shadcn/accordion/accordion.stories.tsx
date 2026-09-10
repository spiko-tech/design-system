import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion.js';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'UI/Accordion',
  tags: ['autodocs'],
  argTypes: { type: { control: 'select', options: ['single', 'multiple'] } },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const items = (
  <>
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>Yes. It comes with default styles that match the design system.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Is it animated?</AccordionTrigger>
      <AccordionContent>Yes. It animates open and closed by default.</AccordionContent>
    </AccordionItem>
  </>
);

export const Default: Story = {
  args: { type: 'single' },
  render: (args) =>
    args.type === 'multiple' ? (
      <Accordion variant="default" type="multiple" className="w-96">
        {items}
      </Accordion>
    ) : (
      <Accordion variant="default" type="single" collapsible className="w-96">
        {items}
      </Accordion>
    ),
};

export const Card: Story = {
  args: { type: 'single' },
  render: (args) =>
    args.type === 'multiple' ? (
      <Accordion variant="card" type="multiple" className="w-96">
        {items}
      </Accordion>
    ) : (
      <Accordion variant="card" type="single" collapsible className="w-96">
        {items}
      </Accordion>
    ),
};
