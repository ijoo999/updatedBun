/**
 * Recursively flattens an array of nested arrays into a single-level array.
 */
export function flatten<T>(arr: any[]): T[] {
  if (!Array.isArray(arr)) {
    throw new TypeError('flatten() expects an array.');
  }

  const result: T[] = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten<T>(item));
    } else {
      result.push(item);
    }
  }

  return result;
}
