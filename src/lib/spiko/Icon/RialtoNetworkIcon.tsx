import { RialtoNetwork } from '@spiko/primitives/RialtoNetwork';
import { ArbitrumIcon } from './chains/ArbitrumIcon.js';
import { BaseIcon } from './chains/BaseIcon.js';
import { BinanceSmartChainIcon } from './chains/BinanceSmartChainIcon.js';
import { EthereumIcon } from './chains/EthereumIcon.js';
import { PolygonIcon } from './chains/PolygonIcon.js';
import { SolanaIcon } from './chains/SolanaIcon.js';

export const RialtoNetworkIcon = ({ rialtoNetwork }: { rialtoNetwork: RialtoNetwork }) => {
  if (rialtoNetwork === 'Arbitrum') {
    return <ArbitrumIcon className="h-4 w-4" />;
  } else if (rialtoNetwork === 'Base') {
    return <BaseIcon className="h-4 w-4" />;
  } else if (rialtoNetwork === 'Binance Smart Chain') {
    return <BinanceSmartChainIcon className="h-4 w-4" />;
  } else if (rialtoNetwork === 'Ethereum') {
    return <EthereumIcon className="h-4 w-4" />;
  } else if (rialtoNetwork === 'Polygon') {
    return <PolygonIcon className="h-4 w-4" />;
  } else if (rialtoNetwork === 'Solana') {
    return <SolanaIcon className="h-4 w-4" />;
  }
  // Exhaustive check - TypeScript ensures all RialtoNetwork values are handled
  return rialtoNetwork satisfies never;
};
