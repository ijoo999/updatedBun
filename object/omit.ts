/**
 * Creates a shallow copy of an object, omitting the specified keys.
 */
export function omit<T extends object, K extends keyof T>(
  obj: T,
  keysToOmit: K[]
): Omit<T, K> {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('omit() expects a non-null object as the first argument.');
  }

  const result = {} as Omit<T, K>;

  for (const key in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, key) &&
      !keysToOmit.includes(key as unknown as K)
    ) {
      (result as any)[key] = obj[key as unknown as K];
    }
  }

  return result;
}
