import type { Meta, StoryObj } from '@storybook/react-vite';
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from '../combobox/combobox.js';

const meta: Meta<typeof Combobox> = { component: Combobox, title: 'UI/Combobox', tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof Combobox>;

const frameworks = ['Next.js', 'Remix', 'Astro', 'SvelteKit'];

export const Default: Story = {
  render: () => (
    <Combobox items={frameworks}>
      <ComboboxInput placeholder="Select a framework" className="w-64" />
      <ComboboxContent>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList>
          {frameworks.map((framework) => (
            <ComboboxItem key={framework} value={framework}>
              {framework}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
};
