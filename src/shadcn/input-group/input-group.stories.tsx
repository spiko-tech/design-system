import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText } from '../input-group/input-group.js';

const meta: Meta<typeof InputGroup> = { component: InputGroup, title: 'UI/InputGroup', tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
  render: () => (
    <InputGroup className="w-80">
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>Copy</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};
