/**
 * Remove all falsey values from an array.
 */

export function compact<T>(arr: T[]): NonNullable<T>[] {
  if (!Array.isArray(arr)) {
    throw new TypeError('compact() expects an array.');
  }
  return arr.filter(Boolean) as NonNullable<T>[];
}