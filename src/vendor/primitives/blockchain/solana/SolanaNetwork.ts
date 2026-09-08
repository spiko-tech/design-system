import { Schema } from 'effect';

export const SOLANA_TESTNET_NETWORKS = ['SolanaDevnet'] as const;

export const SOLANA_MAINNET_NETWORKS = ['Solana'] as const;

export const SOLANA_NETWORKS = [...SOLANA_MAINNET_NETWORKS, ...SOLANA_TESTNET_NETWORKS] as const;

export const SolanaNetwork = Schema.Literal(...SOLANA_NETWORKS);

export type SolanaNetwork = typeof SolanaNetwork.Type;

export const isSolanaNetwork = (network: string): network is SolanaNetwork =>
  network === 'Solana' || network === 'SolanaDevnet';
