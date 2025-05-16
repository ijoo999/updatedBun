/**
 * Returns a new array with duplicate values removed.
 */
export function unique<T>(arr: T[]): T[] {
  if (!Array.isArray(arr)) {
    throw new TypeError('unique() expects an array.');
  }

  return Array.from(new Set(arr));
}
