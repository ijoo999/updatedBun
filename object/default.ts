/**
 * Assigns default properties to an object. Only undefined keys will be filled in.
 */
export function defaults<T extends object>(
  target: T,
  ...sources: Partial<T>[]
): T {
  if (typeof target !== 'object' || target === null) {
    throw new TypeError('defaults() expects the first argument to be an object.');
  }

  for (const source of sources) {
    if (typeof source !== 'object' || source === null) continue;

    for (const key in source) {
      if (source.hasOwnProperty(key) && target[key as keyof T] === undefined) {
        target[key as keyof T] = source[key as keyof T]!;
      }
    }
  }

  return target;
}
