/**
 * Returns a getter function that extracts the given key from any object.
 */
export function prop<T = any>(key: string | number): (obj: Record<string | number, T>) => T | undefined {
  return function (obj) {
    return obj?.[key];
  };
}
