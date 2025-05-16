/**
 * Returns the lowercase type of the given value.
 */
export function typeOf(val: unknown): string {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
}
