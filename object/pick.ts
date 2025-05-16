/**
 * Creates a new object composed of the picked object properties.
 */
export function pick<T extends object, K extends keyof T>(
  obj: T,
  keysToPick: K[]
): Pick<T, K> {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('pick() expects a non-null object as the first argument.');
  }

  const result = {} as Pick<T, K>;

  for (const key of keysToPick) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key];
    }
  }

  return result;
}
