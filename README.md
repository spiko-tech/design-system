# @spiko-tech/design-system

Spiko's design system: React components, icons, logos and theme tokens, built on shadcn/ui, Base UI, Radix and Tailwind CSS v4.

## Install

Each push to `main` publishes a build to its own `release-<commit-sha>` branch. Install it from there:

```sh
pnpm add github:spiko-tech/design-system#release-<commit-sha>
```

Import the global stylesheet once, then use the components:

```tsx
import '@spiko-tech/design-system/global.css';
import { Button } from '@spiko-tech/design-system';
```

## Contents

Components (`src/shadcn`): Accordion, Alert, Badge, Button, Calendar, Checkbox, DatePicker, DropdownMenu, Input, Label, Pagination, Progress, RadioGroup, Separator, Sidebar, Skeleton, SpikoDialog, Switch, Tabs, Tooltip.

Assets (`src/assets`): core icons, flags, bank and partner logos, Spiko logo.

Utilities: `cn`, `useIsMobile`.

Popover and Dialog live in `src/shadcn` because other components depend on them. They are internal: they have no story and are not exported.

## Development

```sh
pnpm install
pnpm storybook   # http://localhost:6006
pnpm build       # library build to dist/
pnpm typecheck
pnpm lint
pnpm format
```

New components go in `src/shadcn/<name>/`, with a story, and get exported from `src/index.ts`.
