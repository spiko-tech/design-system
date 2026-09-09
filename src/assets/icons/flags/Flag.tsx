import { JSX } from 'react';
import * as RPNI from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';

export const Flag = ({ country, countryName }: RPNI.FlagProps) => {
  const Flag = flags[country] as (props: RPNI.EmbeddedFlagProps & { className?: string }) => JSX.Element;

  return (
    <span className="flex h-4 w-6 overflow-hidden rounded-xs bg-foreground/20">
      {Flag && <Flag title={countryName} className="-mt-1 size-6 rounded-xs" />}
    </span>
  );
};

Flag.displayName = 'Flag';
