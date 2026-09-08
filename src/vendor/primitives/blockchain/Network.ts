import { Schema } from 'effect';
import { EVM_MAINNET_NETWORKS, EVM_NETWORKS, EVM_TESTNET_NETWORKS } from './evm/EVMNetwork.js';
import { SOLANA_MAINNET_NETWORKS, SOLANA_NETWORKS, SOLANA_TESTNET_NETWORKS } from './solana/SolanaNetwork.js';
import { STARKNET_MAINNET_NETWORKS, STARKNET_NETWORKS, STARKNET_TESTNET_NETWORKS } from './starknet/StarknetNetwork.js';
import { STELLAR_MAINNET_NETWORKS, STELLAR_NETWORKS, STELLAR_TESTNET_NETWORKS } from './stellar/StellarNetwork.js';

export const Network = Schema.Literal(
  ...EVM_NETWORKS,
  ...STARKNET_NETWORKS,
  ...STELLAR_NETWORKS,
  ...SOLANA_NETWORKS
).annotations({
  title: 'Network',
  identifier: 'Network',
  description: 'a blockchain network e.g. "Ethereum", "Polygon", "Arbitrum", "Starknet"',
});

export type Network = typeof Network.Type;

export const TESTNET_NETWORKS: Network[] = [
  ...EVM_TESTNET_NETWORKS,
  ...STARKNET_TESTNET_NETWORKS,
  ...STELLAR_TESTNET_NETWORKS,
  ...SOLANA_TESTNET_NETWORKS,
];

export const MAINNET_NETWORKS: Network[] = [
  ...EVM_MAINNET_NETWORKS,
  ...STARKNET_MAINNET_NETWORKS,
  ...STELLAR_MAINNET_NETWORKS,
  ...SOLANA_MAINNET_NETWORKS,
];

export const NETWORKS: Network[] = [...TESTNET_NETWORKS, ...MAINNET_NETWORKS];
