// src/utils/function/noop.ts

/**
 * A "no-operation" function. Always returns `undefined` regardless of input.
 *
 * @example
 * noop(); // => undefined
 * noop(1, 2, 3); // => undefined
 *
 * @returns undefined
 */
export function noop(..._args: unknown[]): void {
  return;
}
