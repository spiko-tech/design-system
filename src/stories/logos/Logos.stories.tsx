import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { BANK_MARKS } from '@/assets/logos/banks/bankMarks.js';
import { AmundiLogo } from '@/assets/logos/partners/AmundiLogo.js';
import { BnpLogo } from '@/assets/logos/partners/BnpLogo.js';
import { CaceisLogo } from '@/assets/logos/partners/CaceisLogo.js';
import { CMEGroupLogo } from '@/assets/logos/partners/CMEGroupLogo.js';
import { CreditAgricoleLogo } from '@/assets/logos/partners/CreditAgricoleLogo.js';
import { MarexLogo } from '@/assets/logos/partners/MarexLogo.js';
import { MsciLogo } from '@/assets/logos/partners/MsciLogo.js';
import { PwcLogo } from '@/assets/logos/partners/PwcLogo.js';
import { ChristmasPorcupine, ClassicPorcupine, Porcupine } from '@/assets/spiko/Porcupine.js';

const meta = {
  title: 'Logos/All',
  parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const LogoCell = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="flex flex-col items-center gap-2 rounded-lg border border-border p-4 text-center">
    <div className="flex h-16 w-full items-center justify-center [&_img]:max-h-14 [&_svg]:max-h-14 [&_svg]:max-w-full">
      {children}
    </div>
    <span className="text-xs text-muted-foreground break-all">{label}</span>
  </div>
);

const logoClass = 'h-10 w-auto max-w-[9rem]';

const partnerLogos: { label: string; node: ReactNode }[] = [
  { label: 'AmundiLogo', node: <AmundiLogo className={logoClass} /> },
  { label: 'BnpLogo', node: <BnpLogo className={logoClass} /> },
  { label: 'CaceisLogo', node: <CaceisLogo className={logoClass} /> },
  { label: 'CMEGroupLogo', node: <CMEGroupLogo className={logoClass} /> },
  { label: 'CreditAgricoleLogo', node: <CreditAgricoleLogo className={logoClass} /> },
  { label: 'MarexLogo', node: <MarexLogo className={logoClass} /> },
  { label: 'MsciLogo', node: <MsciLogo className={logoClass} /> },
  { label: 'PwcLogo', node: <PwcLogo className={logoClass} /> },
];

const porcupineLogos: { label: string; node: ReactNode }[] = [
  { label: 'Porcupine', node: <Porcupine className="h-14 w-auto" /> },
  { label: 'ClassicPorcupine', node: <ClassicPorcupine className="h-14 w-auto" /> },
  { label: 'ChristmasPorcupine', node: <ChristmasPorcupine className="h-14 w-auto" /> },
];

const uniqueBankMarks = Object.entries(BANK_MARKS).filter(([key], index, all) => {
  const src = BANK_MARKS[key];
  return all.findIndex(([, value]) => value === src) === index;
});

const bankLogos: { label: string; node: ReactNode }[] = uniqueBankMarks.map(([label, src]) => ({
  label,
  node: <img src={src} alt={label} className={logoClass} />,
}));

const Section = ({ title, items }: { title: string; items: { label: string; node: ReactNode }[] }) => (
  <section className="flex flex-col gap-3">
    <h3 className="text-sm font-semibold">{title}</h3>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {items.map((item) => (
        <LogoCell key={item.label} label={item.label}>
          {item.node}
        </LogoCell>
      ))}
    </div>
  </section>
);

export const All: Story = {
  render: () => (
    <div className="flex w-full max-w-5xl flex-col gap-8">
      <Section title="Partners" items={partnerLogos} />
      <Section title="Porcupine" items={porcupineLogos} />
      <Section title="Banks" items={bankLogos} />
    </div>
  ),
};
