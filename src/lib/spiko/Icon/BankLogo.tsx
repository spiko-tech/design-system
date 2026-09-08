/* oxlint-disable no-restricted-imports */
import { getBankBrand } from '@spiko/primitives/BankAccount/bankBrand';
import { cn } from '@spiko/ui/utils';
import { Option } from 'effect';
import { Landmark } from 'lucide-react';
import { BANK_MARKS } from './banks/bankMarks.js';

const containerClassName = 'flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full';

const GenericBankAvatar = () => (
  <div className={`${containerClassName} bg-background-secondary-accent`}>
    <Landmark className="size-4 text-text-secondary" />
  </div>
);

export const BankLogo = ({ details, className }: { details: Record<string, unknown>; className?: string }) => {
  const brand = getBankBrand(details);

  if (Option.isNone(brand)) return <GenericBankAvatar />;

  const { id, name, fallback } = brand.value;
  const mark = BANK_MARKS[id];

  if (mark !== undefined) {
    return (
      <div className={cn(`${containerClassName} border border-border bg-white p-1`, className)} title={name}>
        <img src={mark} alt={name} className="size-full object-contain" />
      </div>
    );
  }

  if (fallback === undefined) return <GenericBankAvatar />;

  return (
    <div
      className={cn(`${containerClassName} font-semibold text-white`, className)}
      style={{ backgroundColor: fallback.color, fontSize: fallback.monogram.length > 2 ? '9px' : '11px' }}
      role="img"
      aria-label={name}
      title={name}
    >
      {fallback.monogram}
    </div>
  );
};
