// src/utils/function/noop.ts

/**
 * A "no-operation" function. Always returns `undefined` regardless of input.
 */
export function noop(..._args: unknown[]): void {
  return;
}
