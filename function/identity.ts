// src/utils/function/identity.ts

/**
 * Returns the first argument passed to the function.
 *
 * @example
 * identity(42); // => 42
 * identity('hello'); // => 'hello'
 *
 * @param val - Any value
 * @returns The same value
 */
export function identity<T>(val: T): T {
  return val;
}
