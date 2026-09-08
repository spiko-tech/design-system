import { Networks } from '@stellar/stellar-sdk';
import { Schema } from 'effect';

export const STELLAR_TESTNET_NETWORKS = ['StellarTestnet'] as const;

export const STELLAR_MAINNET_NETWORKS = ['Stellar'] as const;

export const STELLAR_NETWORKS = [...STELLAR_MAINNET_NETWORKS, ...STELLAR_TESTNET_NETWORKS] as const;

export const StellarNetwork = Schema.Literal(...STELLAR_NETWORKS);

export type StellarNetwork = typeof StellarNetwork.Type;

export const isStellarNetwork = (network: string): network is StellarNetwork =>
  network === 'Stellar' || network === 'StellarTestnet';

export const STELLAR_NETWORK_PASSPHRASES = { Stellar: Networks.PUBLIC, StellarTestnet: Networks.TESTNET } as const;
