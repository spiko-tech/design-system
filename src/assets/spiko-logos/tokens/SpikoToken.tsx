import { ShareClassSymbol } from '@/shared/ShareClassSymbol.js';
import { cn } from '@/utils.js';
import { ChfSAFO } from './ChfSAFO.js';
import { EurSAFO } from './EurSAFO.js';
import { EurSPKCC } from './EurSPKCC.js';
import { EUTBL } from './EUTBL.js';
import { GbpSAFO } from './GbpSAFO.js';
import { SAFO } from './SAFO.js';
import { SPKCC } from './SPKCC.js';
import { UKTBL } from './UKTBL.js';
import { USTBL } from './USTBL.js';

const SPIKO_TOKEN_LOGOS: Record<ShareClassSymbol, React.FC<React.SVGProps<SVGSVGElement>>> = {
  EUTBL: EUTBL,
  USTBL: USTBL,
  eurUSTBL: USTBL,
  SPKCC: SPKCC,
  eurSPKCC: EurSPKCC,
  UKTBL: UKTBL,
  eurUKTBL: UKTBL,
  chfSAFO: ChfSAFO,
  eurSAFO: EurSAFO,
  eurSAFOd: EurSAFO,
  gbpSAFO: GbpSAFO,
  gbpSAFOd: GbpSAFO,
  SAFO: SAFO,
  SAFOd: SAFO,
};

// Previously named TokenLogo
export const SpikoToken = ({
  shareClassSymbol,
  ...props
}: {
  shareClassSymbol: ShareClassSymbol;
  className?: string;
}) => {
  const className = cn('size-6', props.className);

  const TokenLogo = SPIKO_TOKEN_LOGOS[shareClassSymbol];

  if (TokenLogo === null) {
    return (
      <div
        className={cn(
          'flex size-6 items-center justify-center rounded-full bg-neutral-300 spiko-text-xs-regular',
          props.className
        )}
      >
        N/A
      </div>
    );
  }

  return <TokenLogo className={className} />;
};
