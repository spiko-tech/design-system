import { ShareClassSymbol } from "../../../shared/ShareClassSymbol.js";
import { cn } from "../../../utils.js";
import { ChfSAFO } from "./tokens/ChfSAFO.js";
import { EurSAFO } from "./tokens/EurSAFO.js";
import { EurSPKCC } from "./tokens/EurSPKCC.js";
import { EUTBL } from "./tokens/EUTBL.js";
import { GbpSAFO } from "./tokens/GbpSAFO.js";
import { SAFO } from "./tokens/SAFO.js";
import { SPKCC } from "./tokens/SPKCC.js";
import { UKTBL } from "./tokens/UKTBL.js";
import { USTBL } from "./tokens/USTBL.js";

const TOKEN_LOGOS: Record<
  ShareClassSymbol,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
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

export const TokenLogo = ({
  shareClassSymbol,
  ...props
}: {
  shareClassSymbol: ShareClassSymbol;
  className?: string;
}) => {
  const className = cn("size-6", props.className);

  const TokenLogo = TOKEN_LOGOS[shareClassSymbol];

  if (TokenLogo === null) {
    return (
      <div
        className={cn(
          "flex size-6 items-center justify-center rounded-full bg-neutral-300 spiko-text-xs-regular",
          props.className,
        )}
      >
        N/A
      </div>
    );
  }

  return <TokenLogo className={className} />;
};
