import { Option, pipe } from 'effect';

/**
 * Extracts the BIC from bank account details, normalizing the return type.
 *
 * Handles the different BIC representations across bank account types:
 * - EUR accounts: bic is Option<string>
 * - Non-EUR accounts: bic is string
 * - GBP accounts: no bic field
 */
export const getBic = (details: Record<string, unknown>): Option.Option<string> =>
  pipe(
    details,
    Option.liftPredicate((d): d is Record<string, unknown> & { bic: unknown } => 'bic' in d),
    Option.flatMap(({ bic }) =>
      Option.isOption(bic)
        ? Option.filter(bic, (v): v is string => typeof v === 'string')
        : Option.liftPredicate(bic, (v): v is string => typeof v === 'string')
    )
  );
