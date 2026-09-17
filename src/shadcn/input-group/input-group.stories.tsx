import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from '@/shadcn/input-group/input-group.js';

const meta = {
  title: 'Inputs/InputGroup',
  component: InputGroup,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithPrefix: Story = {
  render: function Render() {
    const [value, setValue] = useState('');
    return (
      <InputGroup className="w-80">
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="example.com"
        />
      </InputGroup>
    );
  },
};

export const WithButton: Story = {
  render: function Render() {
    const [value, setValue] = useState('');
    return (
      <InputGroup className="w-80">
        <InputGroupInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search…"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="sm">Go</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    );
  },
};

export const WithSuffix: Story = {
  render: function Render() {
    const [value, setValue] = useState('42');
    return (
      <InputGroup className="w-48">
        <InputGroupInput value={value} onChange={(e) => setValue(e.target.value)} />
        <InputGroupAddon align="inline-end">
          <InputGroupText>kg</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    );
  },
};
