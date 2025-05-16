/**
 * Casts a value to an array. If it's already an array, returns it as-is.
 */
export function arrayify<T>(val: T | T[]): T[] {
  return Array.isArray(val) ? val : [val];
}
