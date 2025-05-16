/**
 * Returns the first element, the first `n` elements, or the first element that matches a condition.
 */
export function first<T>(
  arr: T[],
  arg?: number | ((item: T, index: number, array: T[]) => boolean)
): T | T[] | undefined {
  if (!Array.isArray(arr)) {
    throw new TypeError('first() expects the first argument to be an array.');
  }

  if (arr.length === 0) return typeof arg === 'number' ? [] : undefined;

  if (arg === undefined) return arr[0];

  if (typeof arg === 'number') return arr.slice(0, arg);

  if (typeof arg === 'function') {
    for (let i = 0; i < arr.length; i++) {
      // arr[i] is always defined here because i < arr.length
      if (arg(arr[i] as T, i, arr)) return arr[i];
    }
    return undefined;
  }

  return undefined;
}
