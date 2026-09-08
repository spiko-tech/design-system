import { Data } from 'effect';

// ponytail: minimal stand-in for @spiko/api-errors' ApplicationError; vendor the real lib if more of its API is needed
export class ApplicationError extends Data.TaggedError('ApplicationError')<{ reason: string }> {}
