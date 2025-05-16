/**
 * Safely converts a value to a string.
 * Returns an empty string if the value is `null` or `undefined`.

 */
export function toString(val: unknown): string {
  return val == null ? '' : String(val);
}
