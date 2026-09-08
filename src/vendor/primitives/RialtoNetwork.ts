import { Schema } from 'effect';

export const RialtoNetwork = Schema.Union(
  Schema.Literal('Ethereum'),
  Schema.Literal('Base'),
  Schema.Literal('Arbitrum'),
  Schema.Literal('Binance Smart Chain'),
  Schema.Literal('Polygon'),
  Schema.Literal('Solana')
);

export type RialtoNetwork = typeof RialtoNetwork.Type;

export const RIALTO_DEPOSIT_ADDRESSES: Record<RialtoNetwork, string> = {
  Ethereum: '0xBa6D61370e099530207E0E67C5A6206233c8889b',
  Base: '0x0100FaE035cD45CF5Da76939F9EF253B1A3e1fb2',
  Arbitrum: '0xdDF132470e1f1b324c9E411D87DE9911fA60752D',
  'Binance Smart Chain': '0x6Ba62E31780Fa23198f97A10e80c0514a586Db12',
  Polygon: '0xC6dD8C1828bd4CB0A641325A2d7987d3973E13BE',
  Solana: '55AUm1o1Je7zkWxFz2h5HfpufnkHppnsdkfep2VoAREz',
} as const;
