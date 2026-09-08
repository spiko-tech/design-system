import { Network } from '@spiko/primitives/blockchain/Network';
import { Match } from 'effect/index';
import { ArbitrumIcon } from './chains/ArbitrumIcon.js';
import { BaseIcon } from './chains/BaseIcon.js';
import { EthereumIcon } from './chains/EthereumIcon.js';
import { EtherlinkIcon } from './chains/EtherlinkIcon.js';
import { PolygonIcon } from './chains/PolygonIcon.js';
import { SolanaIcon } from './chains/SolanaIcon.js';
import { StarknetIcon } from './chains/StarknetIcon.js';
import { StellarIcon } from './chains/StellarIcon.js';

const displayNameByNetwork = {
  Ethereum: 'Ethereum',
  Sepolia: 'Sepolia',
  Polygon: 'Polygon',
  PolygonAmoy: 'Amoy',
  Base: 'Base',
  BaseSepolia: 'BaseSepolia',
  Arbitrum: 'Arbitrum',
  ArbitrumSepolia: 'ArbitrumSepolia',
  Etherlink: 'Etherlink',
  EtherlinkTestnet: 'EtherlinkTestnet',
  Starknet: 'Starknet',
  StarknetSepolia: 'StarknetSepolia',
  Stellar: 'Stellar',
  StellarTestnet: 'StellarTestnet',
  Solana: 'Solana',
  SolanaDevnet: 'SolanaDevnet',
};

export const NetworkIcon = ({
  network,
  displayName = false,
  className,
}: {
  network: Network;
  displayName?: boolean;
  className?: string;
}) => {
  const IconComponent = Match.value(network).pipe(
    Match.whenOr('Ethereum', 'Sepolia', () => EthereumIcon),
    Match.whenOr('Polygon', 'PolygonAmoy', () => PolygonIcon),
    Match.whenOr('Arbitrum', 'ArbitrumSepolia', () => ArbitrumIcon),
    Match.whenOr('Starknet', 'StarknetSepolia', () => StarknetIcon),
    Match.whenOr('Base', 'BaseSepolia', () => BaseIcon),
    Match.whenOr('Etherlink', 'EtherlinkTestnet', () => EtherlinkIcon),
    Match.whenOr('Stellar', 'StellarTestnet', () => StellarIcon),
    Match.when('Solana', () => SolanaIcon),
    Match.when('SolanaDevnet', () => SolanaIcon),
    Match.exhaustive
  );
  return (
    <div className="flex flex-row items-center gap-1">
      <IconComponent className={className} />
      {displayName && <div className="inline">{displayNameByNetwork[network]}</div>}
    </div>
  );
};
