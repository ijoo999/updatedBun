// src/utils/lang/isEmpty.ts

/**
 * Returns true if the given value is "empty":
 * - Empty string: ''
 * - Empty array: []
 * - Empty object: {}
 * - null or undefined
 * - false
 *
 * Returns false if value has content:
 * - Non-empty string/array/object
 * - true
 * - numbers
 * - functions
 */
export function isEmpty(val: unknown): boolean {
  if (val == null) return true; // null or undefined

  if (typeof val === 'string' || Array.isArray(val)) {
    return val.length === 0;
  }

  if (typeof val === 'object') {
    return Object.keys(val as object).length === 0;
  }

  return false;
}
