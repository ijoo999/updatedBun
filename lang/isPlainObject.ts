// src/utils/lang/isPlainObject.ts

/**
 * Returns true if the value is a plain object.
 *
 * A plain object is one created by `{}`, `new Object()`,
 * or `Object.create(null)`, and not an array, function, class instance, etc.
 *
 * @param val - The value to check
 * @returns true if plain object, false otherwise
 */
export function isPlainObject(val: unknown): val is object {
  if (typeof val !== 'object' || val === null) return false;

  const proto = Object.getPrototypeOf(val);
  return proto === Object.prototype || proto === null;
}
