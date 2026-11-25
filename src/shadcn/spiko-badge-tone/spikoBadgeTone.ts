export const spikoBadgeToneClassNames = {
  neutral:
    'bg-linear-to-b from-background to-background-secondary-accent text-text shadow-sm shadow-black/10 ring-1 ring-border',
  warning:
    'bg-linear-to-b from-background to-warning-background text-warning shadow-sm shadow-warning/20 ring-1 ring-warning/15',
  information:
    'bg-linear-to-b from-background to-information-background text-information shadow-sm shadow-information/20 ring-1 ring-information/15',
  destructive:
    'bg-linear-to-b from-background to-error-background text-error shadow-sm shadow-error/20 ring-1 ring-error/15',
};

export type SpikoTone = keyof typeof spikoBadgeToneClassNames;
