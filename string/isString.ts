/**
 * Returns true if the input is a string (primitive or String object).
 */
export function isString(val: unknown): val is string {
  return typeof val === 'string' || val instanceof String;
}
