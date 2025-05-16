/**
 * Returns a new array containing all elements after the specified index.
 */
export function after<T>(arr: T[], n: number): T[] {
  if (!Array.isArray(arr)) {
    throw new TypeError('after() expects the first argument to be an array.');
  }
  return arr.slice(n);
}
