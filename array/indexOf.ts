/**
 * Finds the index of the first occurrence of `element` in the array,
 * starting the search at the specified index. Supports negative start offsets.
 */
export function indexOf<T>(arr: T[], element: T, start: number = 0): number {
  if (!Array.isArray(arr)) {
    throw new TypeError('indexOf() expects the first argument to be an array.');
  }

  const len = arr.length;
  let i = start < 0 ? Math.max(0, len + start) : start;

  while (i < len) {
    if (arr[i] === element) return i;
    i++;
  }

  return -1;
}
