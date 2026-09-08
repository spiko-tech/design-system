import { Schema } from 'effect';
import {
  arbitrum,
  arbitrumSepolia,
  base,
  baseSepolia,
  etherlink,
  etherlinkTestnet,
  mainnet,
  polygon,
  polygonAmoy,
  sepolia,
} from 'viem/chains';

export const EVM_TESTNET_NETWORKS = [
  'Sepolia',
  'PolygonAmoy',
  'BaseSepolia',
  'ArbitrumSepolia',
  'EtherlinkTestnet',
] as const;

export const EVM_MAINNET_NETWORKS = ['Ethereum', 'Polygon', 'Base', 'Arbitrum', 'Etherlink'] as const;

export const EVM_NETWORKS = [...EVM_TESTNET_NETWORKS, ...EVM_MAINNET_NETWORKS] as const;

export const EVMNetwork = Schema.Literal(...EVM_NETWORKS).annotations({
  title: 'EVM Network',
  identifier: 'EVMNetwork',
  description: 'an EVM blockchain network e.g. "Ethereum", "Polygon", "Arbitrum"',
});
export type EVMNetwork = typeof EVMNetwork.Type;

export const isEVMNetwork = (network: string): network is EVMNetwork => EVM_NETWORKS.includes(network as EVMNetwork);

export const isEtherlinkNetwork = (network: string): network is 'Etherlink' | 'EtherlinkTestnet' =>
  network === 'Etherlink' || network === 'EtherlinkTestnet';

const NETWORK_TO_VIEM_CHAIN_MAPPING = {
  Ethereum: mainnet,
  Sepolia: sepolia,
  Polygon: polygon,
  PolygonAmoy: polygonAmoy,
  Base: base,
  BaseSepolia: baseSepolia,
  Arbitrum: arbitrum,
  ArbitrumSepolia: arbitrumSepolia,
  Etherlink: etherlink,
  EtherlinkTestnet: etherlinkTestnet,
} as const;

export const EVMNetworkToViemChain = (network: EVMNetwork) => NETWORK_TO_VIEM_CHAIN_MAPPING[network];

export const EVMNetworkFromChainId = (chainId: number): EVMNetwork | undefined => {
  const network = Object.entries(NETWORK_TO_VIEM_CHAIN_MAPPING).find(([, viemChain]) => viemChain.id === chainId);
  return network ? (network[0] as EVMNetwork) : undefined;
};
