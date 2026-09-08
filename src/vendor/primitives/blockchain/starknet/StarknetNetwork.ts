import { Schema } from 'effect';
import { constants } from 'starknet';

export const STARKNET_TESTNET_NETWORKS = ['StarknetSepolia'] as const;

export const STARKNET_MAINNET_NETWORKS = ['Starknet'] as const;

export const STARKNET_NETWORKS = [...STARKNET_MAINNET_NETWORKS, ...STARKNET_TESTNET_NETWORKS] as const;

export const StarknetNetwork = Schema.Literal(...STARKNET_NETWORKS);

export type StarknetNetwork = typeof StarknetNetwork.Type;

export const isStarknetNetwork = (network: string): network is StarknetNetwork =>
  STARKNET_NETWORKS.includes(network as StarknetNetwork);

const StarknetNetworks: Record<
  StarknetNetwork,
  { id: string; baseUrl: string; rpcNodes: readonly string[]; name: string }
> = {
  Starknet: {
    id: constants.StarknetChainId.SN_MAIN,
    baseUrl: constants.BaseUrl.SN_MAIN,
    rpcNodes: constants.RPC_DEFAULT_NODES.SN_MAIN,
    name: 'Starknet',
  },
  StarknetSepolia: {
    id: constants.StarknetChainId.SN_SEPOLIA,
    baseUrl: constants.BaseUrl.SN_SEPOLIA,
    rpcNodes: constants.RPC_DEFAULT_NODES.SN_SEPOLIA,
    name: 'Starknet Sepolia',
  },
} as const;

export const getStarknetNetwork = <N extends StarknetNetwork>(network: N) => StarknetNetworks[network];
