
/**
 * Returns the difference between the first array and additional arrays.
 */
export function difference<T>(arr: T[], ...others: T[][]): T[] {
  if (!Array.isArray(arr)) {
    throw new TypeError('difference() expects the first argument to be an array.');
  }

  const exclude = new Set(others.flat());
  return arr.filter(item => !exclude.has(item));
}
