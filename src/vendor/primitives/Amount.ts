import { BigDecimal, Effect, Function, pipe, Schema as S } from 'effect';
import { AMOUNT_DECIMALIZATION } from './constants.js';
import { CurrencyCode } from './Currency.js';

export const ValidBigDecimal = S.BigDecimal.pipe(
  S.annotations({
    arbitrary: () => (fc) =>
      fc
        .tuple(fc.bigInt(), fc.integer({ min: 0, max: 20 }))
        .map(([value, scale]) => BigDecimal.make(value, scale))
        .map(BigDecimal.normalize),
    jsonSchema: {
      type: 'string',
      title: 'decimal number as a string',
      description: 'a string representation of a decimal number e.g. "10000", "0.00" or "-7432092.04"',
    },
  })
);

export type ValidBigDecimal = typeof ValidBigDecimal.Type;

export const ValidNonNegativeBigDecimal = S.BigDecimal.pipe(
  S.nonNegativeBigDecimal({
    arbitrary: () => (fc) =>
      fc
        .tuple(fc.bigInt({ min: BigInt(0) }), fc.integer({ min: 0, max: 20 }))
        .map(([value, scale]) => BigDecimal.make(value, scale))
        .map(BigDecimal.normalize),
    jsonSchema: {
      type: 'string',
      title: 'non-negative decimal number as a string',
      description: 'a string representation of a non-negative decimal number e.g. "10000", "0.00" or "3420.92"',
    },
  })
);

export type ValidNonNegativeBigDecimal = typeof ValidNonNegativeBigDecimal.Type;

export const isValidAmount = (amount: BigDecimal.BigDecimal): boolean => {
  return BigDecimal.normalize(amount).scale <= 2;
};

export class AmountError extends S.TaggedError<AmountError>()('AmountError', { reason: S.String }) {}

export class Amount extends S.Class<Amount>('Amount')({ value: ValidBigDecimal, currency: CurrencyCode }) {
  static create = (value: BigDecimal.BigDecimal, currency: CurrencyCode) => new Amount({ value, currency });

  private static map = (fn: (x: BigDecimal.BigDecimal) => BigDecimal.BigDecimal) => (amount: Amount) =>
    Amount.create(fn(amount.value), amount.currency);

  static relu = (amount: Amount) => Amount.map((x) => BigDecimal.max(x, BigDecimal.fromBigInt(0n)))(amount);

  static round = (a: Amount, decimals = AMOUNT_DECIMALIZATION) => Amount.map((x) => round(x, decimals))(a);

  static negate = Amount.map(BigDecimal.negate);

  static sum: {
    (that: Amount): (self: Amount) => Effect.Effect<Amount, AmountError>;
    (self: Amount, that: Amount): Effect.Effect<Amount, AmountError>;
  } = Function.dual(2, (self: Amount, that: Amount) =>
    Effect.gen(function* () {
      if (self.currency !== that.currency) {
        return yield* new AmountError({ reason: 'Currency mismatch' });
      }
      return Amount.create(BigDecimal.sum(self.value, that.value), self.currency);
    })
  );

  static subtract = (amount: Amount, amountToSubtract: Amount): Effect.Effect<Amount, AmountError> =>
    Effect.gen(function* () {
      if (amount.currency !== amountToSubtract.currency) {
        return yield* new AmountError({ reason: 'Currency mismatch' });
      }
      return Amount.create(BigDecimal.subtract(amount.value, amountToSubtract.value), amount.currency);
    });

  static multiply = (amount: Amount, multiplier: BigDecimal.BigDecimal): Amount =>
    Amount.create(BigDecimal.multiply(amount.value, multiplier), amount.currency);

  static divide = (amount: Amount, divisor: Amount): Effect.Effect<BigDecimal.BigDecimal, AmountError> =>
    Effect.gen(function* () {
      if (amount.currency !== divisor.currency) {
        return yield* new AmountError({ reason: 'Currency mismatch' });
      }

      return yield* pipe(
        BigDecimal.divide(amount.value, divisor.value),
        Effect.orElseFail(() => new AmountError({ reason: 'Division by zero' }))
      );
    });

  static zero = (currency: CurrencyCode) => Amount.create(BigDecimal.make(BigInt(0), 0), currency);

  static toCents = (amount: Amount): bigint =>
    BigDecimal.round(BigDecimal.multiply(amount.value, BigDecimal.unsafeFromNumber(100)), {
      scale: 0,
      mode: 'half-from-zero',
    }).value;

  static isZero = (amount: Amount) => BigDecimal.isZero(amount.value);

  static isNonNegative = (amount: Amount) => !BigDecimal.isNegative(amount.value);

  static equals = (amount: Amount, other: Amount) =>
    Effect.gen(function* () {
      if (amount.currency !== other.currency) {
        return yield* new AmountError({ reason: 'Currency mismatch' });
      }
      return BigDecimal.equals(amount.value, other.value);
    });

  static lessThan = (self: Amount, that: Amount) =>
    Effect.gen(function* () {
      if (self.currency !== that.currency) {
        return yield* new AmountError({ reason: 'Currency mismatch' });
      }
      return BigDecimal.lessThan(self.value, that.value);
    });
}

export class NonNegativeAmount extends S.Class<NonNegativeAmount>('NonNegativeAmount')(
  { ...Amount.fields, value: ValidNonNegativeBigDecimal },
  [undefined, { title: 'Non-Negative Amount', identifier: 'NonNegativeAmount' }]
) {
  static create = (value: ValidNonNegativeBigDecimal, currency: CurrencyCode) =>
    new NonNegativeAmount({ value, currency });

  private static mapValue =
    (fn: (x: BigDecimal.BigDecimal) => BigDecimal.BigDecimal) => (nonNegativeAmount: NonNegativeAmount) =>
      NonNegativeAmount.create(fn(nonNegativeAmount.value), nonNegativeAmount.currency);

  static round = (nonNegativeAmount: NonNegativeAmount, decimals = AMOUNT_DECIMALIZATION) =>
    NonNegativeAmount.mapValue((x) => round(x, decimals))(nonNegativeAmount);

  static sum: {
    (that: NonNegativeAmount): (self: NonNegativeAmount) => Effect.Effect<NonNegativeAmount, AmountError>;
    (self: NonNegativeAmount, that: NonNegativeAmount): Effect.Effect<NonNegativeAmount, AmountError>;
  } = Function.dual(2, (self: Amount, that: Amount) =>
    Effect.gen(function* () {
      if (self.currency !== that.currency) {
        return yield* new AmountError({ reason: 'Currency mismatch' });
      }
      if (BigDecimal.isNegative(self.value) || BigDecimal.isNegative(that.value)) {
        return yield* new AmountError({ reason: 'Strictly negative amount' });
      }
      return NonNegativeAmount.make({ value: BigDecimal.sum(self.value, that.value), currency: self.currency });
    })
  );

  static multiply = (
    amount: NonNegativeAmount,
    multiplier: BigDecimal.BigDecimal
  ): Effect.Effect<NonNegativeAmount, AmountError> =>
    Effect.gen(function* () {
      if (BigDecimal.lessThan(multiplier, BigDecimal.fromBigInt(0n))) {
        return yield* new AmountError({ reason: 'Strictly negative multiplier' });
      }
      if (BigDecimal.isNegative(amount.value)) {
        return yield* new AmountError({ reason: 'Strictly negative amount' });
      }
      return NonNegativeAmount.make({
        value: BigDecimal.multiply(amount.value, multiplier),
        currency: amount.currency,
      });
    });

  static divide = (
    nonNegativeAmount: NonNegativeAmount,
    divisor: NonNegativeAmount
  ): Effect.Effect<BigDecimal.BigDecimal, AmountError> =>
    Effect.gen(function* () {
      if (nonNegativeAmount.currency !== divisor.currency) {
        return yield* new AmountError({ reason: 'Currency mismatch' });
      }

      return yield* pipe(
        BigDecimal.divide(nonNegativeAmount.value, divisor.value),
        Effect.orElseFail(() => new AmountError({ reason: 'Division by zero' }))
      );
    });

  static zero = (currency: CurrencyCode) => NonNegativeAmount.create(BigDecimal.make(BigInt(0), 0), currency);

  static isZero = (amount: NonNegativeAmount) => BigDecimal.isZero(amount.value);

  static equals = (amount: NonNegativeAmount, other: NonNegativeAmount) =>
    Effect.gen(function* () {
      if (amount.currency !== other.currency) {
        return yield* new AmountError({ reason: 'Currency mismatch' });
      }
      return BigDecimal.equals(amount.value, other.value);
    });

  static lessThanOrEqualTo = (amount: NonNegativeAmount, other: NonNegativeAmount) =>
    Effect.gen(function* () {
      if (amount.currency !== other.currency) {
        return yield* new AmountError({ reason: 'Currency mismatch' });
      }
      return BigDecimal.lessThanOrEqualTo(amount.value, other.value);
    });

  static subtract = (
    amount: NonNegativeAmount,
    amountToSubtract: Amount | NonNegativeAmount
  ): Effect.Effect<NonNegativeAmount, AmountError> =>
    Effect.gen(function* () {
      if (amount.currency !== amountToSubtract.currency) {
        return yield* new AmountError({ reason: 'Currency mismatch' });
      }
      if (BigDecimal.lessThan(amount.value, amountToSubtract.value)) {
        return yield* new AmountError({ reason: 'Subtraction would result in a strictly negative amount' });
      }
      return NonNegativeAmount.create(BigDecimal.subtract(amount.value, amountToSubtract.value), amount.currency);
    });

  static max: {
    (that: NonNegativeAmount): (self: NonNegativeAmount) => Effect.Effect<NonNegativeAmount, AmountError>;
    (self: NonNegativeAmount, that: NonNegativeAmount): Effect.Effect<NonNegativeAmount, AmountError>;
  } = Function.dual(2, (self: Amount, that: Amount) =>
    Effect.gen(function* () {
      if (self.currency !== that.currency) {
        return yield* new AmountError({ reason: 'Currency mismatch' });
      }
      return NonNegativeAmount.make({ value: BigDecimal.max(self.value, that.value), currency: self.currency });
    })
  );
}

export const round = (a: BigDecimal.BigDecimal, decimals: number = AMOUNT_DECIMALIZATION): BigDecimal.BigDecimal =>
  BigDecimal.round(a, { scale: decimals, mode: 'half-from-zero' });
