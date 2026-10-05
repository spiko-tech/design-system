import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = { title: 'Foundations/Colors', parameters: { layout: 'padded' } };

export default meta;
type Story = StoryObj;

type Swatch = { name: string; variable: string };

const groups: { title: string; swatches: Swatch[] }[] = [
  {
    title: 'Primary / Secondary',
    swatches: [
      { name: 'primary', variable: '--primary' },
      { name: 'primary-foreground', variable: '--primary-foreground' },
      { name: 'secondary', variable: '--secondary' },
      { name: 'secondary-foreground', variable: '--secondary-foreground' },
      { name: 'core-blue', variable: '--core-blue' },
    ],
  },
  {
    title: 'Information / Success / Error / Warning / Destructive',
    swatches: [
      { name: 'information', variable: '--information' },
      { name: 'information-hover', variable: '--information-hover' },
      { name: 'information-background', variable: '--information-background' },
      { name: 'success', variable: '--success' },
      { name: 'success-background', variable: '--success-background' },
      { name: 'error', variable: '--error' },
      { name: 'error-background', variable: '--error-background' },
      { name: 'warning', variable: '--warning' },
      { name: 'warning-foreground', variable: '--warning-foreground' },
      { name: 'warning-background', variable: '--warning-background' },
      { name: 'informative', variable: '--informative' },
      { name: 'informative-foreground', variable: '--informative-foreground' },
      { name: 'informative-background', variable: '--informative-background' },
      { name: 'destructive', variable: '--destructive' },
      { name: 'destructive-foreground', variable: '--destructive-foreground' },
    ],
  },
  {
    title: 'Backgrounds',
    swatches: [
      { name: 'background', variable: '--background' },
      { name: 'background-secondary', variable: '--background-secondary' },
      { name: 'background-secondary-accent', variable: '--background-secondary-accent' },
      { name: 'card', variable: '--card' },
      { name: 'card-foreground', variable: '--card-foreground' },
      { name: 'popover', variable: '--popover' },
      { name: 'popover-foreground', variable: '--popover-foreground' },
      { name: 'muted', variable: '--muted' },
      { name: 'accent', variable: '--accent' },
      { name: 'accent-foreground', variable: '--accent-foreground' },
    ],
  },
  {
    title: 'Borders / Text',
    swatches: [
      { name: 'border', variable: '--border' },
      { name: 'border-secondary', variable: '--border-secondary' },
      { name: 'border-accent', variable: '--border-accent' },
      { name: 'input', variable: '--input' },
      { name: 'ring', variable: '--ring' },
      { name: 'text', variable: '--text' },
      { name: 'text-secondary', variable: '--text-secondary' },
      { name: 'foreground', variable: '--foreground' },
      { name: 'muted-foreground', variable: '--muted-foreground' },
    ],
  },
];

const SwatchCard = ({ name, variable }: Swatch) => (
  <div className="flex flex-col overflow-hidden rounded-lg border border-border">
    <div className="h-16 w-full border-b border-border" style={{ background: `var(${variable})` }} />
    <div className="flex flex-col gap-0.5 p-2">
      <span className="text-xs font-medium">{name}</span>
      <span className="font-mono text-[10px] text-muted-foreground">{`var(${variable})`}</span>
    </div>
  </div>
);

export const Colors: Story = {
  render: () => (
    <div className="flex w-full max-w-5xl flex-col gap-8">
      {groups.map((group) => (
        <section key={group.title} className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold">{group.title}</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {group.swatches.map((swatch) => (
              <SwatchCard key={swatch.variable} {...swatch} />
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};
