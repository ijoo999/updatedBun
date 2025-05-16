/**
 * Returns the last element, the last `n` elements, or the first element that matches a condition.
 */
export function last<T>(
  arr: T[],
  arg?: number | ((item: T, index: number, array: T[]) => boolean)
): T | T[] | undefined {
  if (!Array.isArray(arr)) {
    throw new TypeError('last() expects the first argument to be an array.');
  }

  if (arr.length === 0) return Array.isArray(arg) ? [] : undefined;

  if (arg === undefined) return arr[arr.length - 1];

  if (typeof arg === 'number') return arr.slice(-arg);

  if (typeof arg === 'function') {
    for (let i = arr.length - 1; i >= 0; i--) {
      const item = arr[i];
      if (item !== undefined && arg(item as T, i, arr)) return item;
    }
    return undefined;
  }

  return undefined;
}
