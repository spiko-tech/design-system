import { Schema } from 'effect';

export const FundSlug = Schema.Literal('EUTBL', 'USTBL', 'SPKCC', 'UKTBL', 'SAFO').annotations({
  identifier: 'FundSlug',
});
export type FundSlug = typeof FundSlug.Type;
