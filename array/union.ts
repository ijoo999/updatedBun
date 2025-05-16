/**
 * Combines multiple arrays into one, removing duplicate values.
 */
export function union<T>(...arrays: T[][]): T[] {
  const result = new Set<T>();

  for (const arr of arrays) {
    if (!Array.isArray(arr)) {
      throw new TypeError('union() expects all arguments to be arrays.');
    }
    for (const item of arr) {
      result.add(item);
    }
  }

  return Array.from(result);
}
