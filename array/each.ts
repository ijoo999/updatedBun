/**
 * Returns a new array containing the results.
 */
export function each<T, R>(
  arr: T[],
  fn: (value: T, index: number, array: T[]) => R,
  thisArg?: unknown
): R[] {
  if (!Array.isArray(arr)) {
    throw new TypeError('each() expects the first argument to be an array.');
  }

  return arr.map(fn, thisArg);
}
