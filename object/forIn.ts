/**
 * Iterates over all enumerable properties (own and inherited) of an object.
 * Calls the provided callback for each property.
 */
export function forIn<T extends object>(
  obj: T,
  fn: (value: any, key: string, object: T) => void
): void {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('forIn() expects a non-null object as the first argument.');
  }

  for (const key in obj) {
    fn(obj[key as keyof T], key, obj);
  }
}
