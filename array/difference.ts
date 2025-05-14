// src/utils/array/difference.ts

/**
 * Returns the difference between the first array and additional arrays.
 *
 * @example
 * difference(['a', 'b', 'c', 'd'], ['b', 'c']);
 * // => ['a', 'd']
 *
 * @param arr - The main array to compare from
 * @param others - Other arrays to subtract from the main one
 * @returns A new array with values not present in the others
 */
export function difference<T>(arr: T[], ...others: T[][]): T[] {
  if (!Array.isArray(arr)) {
    throw new TypeError('difference() expects the first argument to be an array.');
  }

  const exclude = new Set(others.flat());
  return arr.filter(item => !exclude.has(item));
}
