import { Schema } from 'effect';

export const SpikoEnvironment = Schema.Literal('development', 'staging', 'preprod', 'production');

export type SpikoEnvironment = typeof SpikoEnvironment.Type;
