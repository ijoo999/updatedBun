/**
 * Returns a new array excluding the last `n` items.
 */
export function before<T>(arr: T[], n: number): T[] {
  if (!Array.isArray(arr)) {
    throw new TypeError('before() expects the first argument to be an array.');
  }
  return arr.slice(0, -n);
}
