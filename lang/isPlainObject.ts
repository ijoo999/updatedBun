// src/utils/lang/isPlainObject.ts

/**
 * Returns true if the value is a plain object.
 */
export function isPlainObject(val: unknown): val is object {
  if (typeof val !== 'object' || val === null) return false;

  const proto = Object.getPrototypeOf(val);
  return proto === Object.prototype || proto === null;
}
