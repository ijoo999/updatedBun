/**
 * Determines whether the given value is an array.
 */
export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}
