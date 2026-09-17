import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { ArrowLeftRightCircle } from '@/assets/icons/core/ArrowLeftRightCircle.js';
import { ArrowUpRightCircle } from '@/assets/icons/core/ArrowUpRightCircle.js';
import BrandBg from '@/assets/icons/core/BrandBg.js';
import CheckMark from '@/assets/icons/core/CheckMark.js';
import { FileTextCentered } from '@/assets/icons/core/FileTextCentered.js';
import { PartyPopperGradient } from '@/assets/icons/core/PartyPopperGradient.js';
import Spinner from '@/assets/icons/core/spinner.js';
import { EULogo } from '@/assets/icons/flags/EULogo.js';
import { Flag } from '@/assets/icons/flags/Flag.js';
import { UKLogo } from '@/assets/icons/flags/UKLogo.js';
import { USALogo } from '@/assets/icons/flags/USALogo.js';

const meta = {
  title: 'Icons/All',
  parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const IconCell = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="flex flex-col items-center gap-2 rounded-lg border border-border p-3 text-center">
    <div className="flex h-12 w-12 items-center justify-center overflow-hidden [&_svg]:max-h-10 [&_svg]:max-w-10">
      {children}
    </div>
    <span className="text-xs text-muted-foreground break-all">{label}</span>
  </div>
);

const iconClass = 'size-8';

const coreIcons: { label: string; node: ReactNode }[] = [
  { label: 'ArrowLeftRightCircle', node: <ArrowLeftRightCircle className={iconClass} /> },
  { label: 'ArrowUpRightCircle', node: <ArrowUpRightCircle className={iconClass} /> },
  { label: 'BrandBg', node: <BrandBg width="40" height="56" /> },
  { label: 'CheckMark', node: <CheckMark /> },
  { label: 'FileTextCentered', node: <FileTextCentered className={iconClass} /> },
  { label: 'PartyPopperGradient', node: <PartyPopperGradient className={iconClass} /> },
  { label: 'Spinner', node: <Spinner size="lg" /> },
];

const flagIcons: { label: string; node: ReactNode }[] = [
  { label: 'EULogo', node: <EULogo className={iconClass} /> },
  { label: 'UKLogo', node: <UKLogo className={iconClass} /> },
  { label: 'USALogo', node: <USALogo className={iconClass} /> },
  { label: 'Flag (FR)', node: <Flag country="FR" countryName="France" /> },
];

const Section = ({ title, items }: { title: string; items: { label: string; node: ReactNode }[] }) => (
  <section className="flex flex-col gap-3">
    <h3 className="text-sm font-semibold">{title}</h3>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {items.map((item) => (
        <IconCell key={item.label} label={item.label}>
          {item.node}
        </IconCell>
      ))}
    </div>
  </section>
);

export const All: Story = {
  render: () => (
    <div className="flex w-full max-w-5xl flex-col gap-8">
      <Section title="Core" items={coreIcons} />
      <Section title="Flags" items={flagIcons} />
    </div>
  ),
};
