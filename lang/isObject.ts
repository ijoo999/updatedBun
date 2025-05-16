/**
 * Returns `true` if the given value is an object (excluding arrays and null).
 */
export function isObject(val: unknown): val is Record<string, unknown> {
  return typeof val === 'object' && val !== null && !Array.isArray(val);
}
