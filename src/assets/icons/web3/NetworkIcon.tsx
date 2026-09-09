import { Network } from "../../../shared/Network.js";
import { ArbitrumIcon } from "./ArbitrumIcon.js";
import { BaseIcon } from "./BaseIcon.js";
import { EthereumIcon } from "./EthereumIcon.js";
import { EtherlinkIcon } from "./EtherlinkIcon.js";
import { PolygonIcon } from "./PolygonIcon.js";
import { SolanaIcon } from "./SolanaIcon.js";
import { StarknetIcon } from "./StarknetIcon.js";
import { StellarIcon } from "./StellarIcon.js";

const displayNameByNetwork = {
  Ethereum: "Ethereum",
  Sepolia: "Sepolia",
  Polygon: "Polygon",
  PolygonAmoy: "Amoy",
  Base: "Base",
  BaseSepolia: "BaseSepolia",
  Arbitrum: "Arbitrum",
  ArbitrumSepolia: "ArbitrumSepolia",
  Etherlink: "Etherlink",
  EtherlinkTestnet: "EtherlinkTestnet",
  Starknet: "Starknet",
  StarknetSepolia: "StarknetSepolia",
  Stellar: "Stellar",
  StellarTestnet: "StellarTestnet",
  Solana: "Solana",
  SolanaDevnet: "SolanaDevnet",
};

const iconByNetwork: Record<Network, React.FC<{ className?: string }>> = {
  Ethereum: EthereumIcon,
  Sepolia: EthereumIcon,

  Polygon: PolygonIcon,
  PolygonAmoy: PolygonIcon,

  Base: BaseIcon,
  BaseSepolia: BaseIcon,

  Arbitrum: ArbitrumIcon,
  ArbitrumSepolia: ArbitrumIcon,

  Etherlink: EtherlinkIcon,
  EtherlinkTestnet: EtherlinkIcon,

  Stellar: StellarIcon,
  StellarTestnet: StellarIcon,

  Starknet: StarknetIcon,
  StarknetSepolia: StarknetIcon,

  Solana: SolanaIcon,
  SolanaDevnet: SolanaIcon,
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
  const IconComponent = iconByNetwork[network];
  return (
    <div className="flex flex-row items-center gap-1">
      <IconComponent className={className} />
      {displayName && (
        <div className="inline">{displayNameByNetwork[network]}</div>
      )}
    </div>
  );
};
