import { StableCoinCode } from '@spiko/primitives/Currency';
import { EurcIcon } from './stable-coins/EurcIcon.js';
import { UsdcIcon } from './stable-coins/UsdcIcon.js';

export const StableCoinIcon: React.FC<{ stableCoinCode: StableCoinCode; className?: string }> = ({
  stableCoinCode,
  className,
}) => {
  return (
    <>
      {stableCoinCode === 'USDC' && <UsdcIcon className={className} />}
      {stableCoinCode === 'EURC' && <EurcIcon className={className} />}
    </>
  );
};
