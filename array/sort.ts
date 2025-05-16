/**
 * Sorts an array either:
 * - By default order (`Array.prototype.sort`)
 * - Using a comparator function
 * - By a specified object key
 */
export function sort<T>(
  arr: T[],
  keyOrFn?: keyof T | ((a: T, b: T) => number)
): T[] {
  if (!Array.isArray(arr)) {
    throw new TypeError('sort() expects the first argument to be an array.');
  }

  if (arr.length === 0) return [];

  if (typeof keyOrFn === 'function') {
    return arr.slice().sort(keyOrFn); // slice() to avoid mutating original
  }

  if (typeof keyOrFn === 'string') {
    return arr.slice().sort((a, b) => {
      const aVal = (a as any)[keyOrFn];
      const bVal = (b as any)[keyOrFn];

      if (aVal > bVal) return 1;
      if (aVal < bVal) return -1;
      return 0;
    });
  }

  return arr.slice().sort(); // default sort
}
