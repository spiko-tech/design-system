---
name: create-story
description: Create a Storybook story file for a component in this design system. Use whenever a new component is added under src/shadcn/, when a component lacks a .stories.tsx file, or when the user mentions Storybook, stories, or previewing a component.
---

# Create a story

Place the file next to the component: `src/shadcn/<name>/<name>.stories.tsx`.

Before writing, read the component file and copy the real `variant` and prop values from its `cva` definition or prop types. Guessed option lists produce broken controls.

## Simple components

Structure (live example: `src/shadcn/button/button.stories.tsx`):

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button.js';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'UI/Button',
  tags: ['autodocs'],
  argTypes: { size: { control: 'select', options: ['default', 'sm', 'lg', 'icon'] } },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { children: 'Primary', variant: 'default' } };
```

## Compound components

Components built from subparts (Accordion, Tabs, Dialog, ...) can't be rendered from flat `args` alone. Define realistic children once in a shared constant, then give each variant a `render`-based story that wraps those children, so stories differ only by variant. Live example: `src/shadcn/accordion/accordion.stories.tsx`.

## Rules

- **One story per variant.** Every value of the component's `variant` prop gets its own named export, and nothing else does. All other props (`size`, `disabled`, ...) are exposed as `argTypes` controls, never as extra story exports. A component without a `variant` prop gets a single `Default` story.
- `title` is `UI/<ComponentName>`.
- Import the component with a relative `.js` extension.
- Add `argTypes` controls for enum and boolean props.
