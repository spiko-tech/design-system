import { ShareClassSymbol } from '@spiko/primitives/ShareClassSymbol';
import { cn } from '@spiko/ui/utils';
import { Match, Option } from 'effect';
import { ChfSAFO } from './tokens/ChfSAFO.js';
import { EurSAFO } from './tokens/EurSAFO.js';
import { EurSPKCC } from './tokens/EurSPKCC.js';
import { EUTBL } from './tokens/EUTBL.js';
import { GbpSAFO } from './tokens/GbpSAFO.js';
import { SAFO } from './tokens/SAFO.js';
import { SPKCC } from './tokens/SPKCC.js';
import { UKTBL } from './tokens/UKTBL.js';
import { USTBL } from './tokens/USTBL.js';

export const TokenLogo = ({
  shareClassSymbol,
  ...props
}: {
  shareClassSymbol: ShareClassSymbol;
  className?: string;
}) => {
  const className = cn('size-6', props.className);

  const tokenLogoOption = Match.value(shareClassSymbol).pipe(
    Match.when('EUTBL', () => EUTBL),
    Match.whenOr('USTBL', 'eurUSTBL', () => USTBL),
    Match.when('SPKCC', () => SPKCC),
    Match.when('eurSPKCC', () => EurSPKCC),
    Match.whenOr('UKTBL', 'eurUKTBL', () => UKTBL),
    Match.when('chfSAFO', () => ChfSAFO),
    Match.whenOr('eurSAFO', 'eurSAFOd', () => EurSAFO),
    Match.whenOr('gbpSAFO', 'gbpSAFOd', () => GbpSAFO),
    Match.whenOr('SAFO', 'SAFOd', () => SAFO),
    Match.option
  );

  return Option.match(tokenLogoOption, {
    onSome: (Logo) => <Logo className={className} />,
    onNone: () => (
      <div
        className={cn(
          'flex size-6 items-center justify-center rounded-full bg-neutral-300 spiko-text-xs-regular',
          props.className
        )}
      >
        N/A
      </div>
    ),
  });
};
