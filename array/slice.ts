/**
 * Returns a shallow copy of a portion of an array into a new array object.
 * Equivalent to `Array.prototype.slice`, with optional start and end indexes.
 */
export function slice<T>(arr: T[], start?: number, end?: number): T[] {
  if (!Array.isArray(arr)) {
    throw new TypeError('slice() expects the first argument to be an array.');
  }

  return arr.slice(start, end);
}
