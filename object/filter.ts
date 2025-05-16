/**
 * Filters the keys of an object using a predicate function.
 */
export function filter<T extends object>(
  obj: T,
  predicate: (value: T[keyof T], key: keyof T, obj: T) => boolean
): Partial<T> {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('filter() expects a non-null object as the first argument.');
  }

  const result: Partial<T> = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (predicate(value, key, obj)) {
        result[key] = value;
      }
    }
  }

  return result;
}
