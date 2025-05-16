/**
 * Iterates over an object's own enumerable properties (ignores inherited ones).
 * Calls the given function for each key-value pair.
 */
export function forOwn<T extends object>(
  obj: T,
  fn: (value: T[keyof T], key: keyof T, object: T) => void
): void {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('forOwn() expects a non-null object as the first argument.');
  }

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      fn(obj[key as keyof T], key as keyof T, obj);
    }
  }
}
