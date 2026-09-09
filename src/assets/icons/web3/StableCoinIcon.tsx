import { StableCoinCode } from '@/shared/Currency.js';
import { EurcIcon } from './EurcIcon.js';
import { UsdcIcon } from './UsdcIcon.js';

export const StableCoinIcon: React.FC<{ stableCoinCode: StableCoinCode; className?: string }> = ({
  stableCoinCode,
  className,
}) => (stableCoinCode === 'USDC' ? <UsdcIcon className={className} /> : <EurcIcon className={className} />);
