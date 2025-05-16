import { forIn } from './forIn';

/**
 * Returns a new object containing only the function-valued enumerable properties
 * of the input object (including inherited ones).
 */
export function functions<T extends object>(obj: T): Partial<T> {
  const result: Partial<T> = {};

  forIn(obj, (val, key) => {
    if (typeof val === 'function') {
      result[key as keyof T] = val;
    }
  });

  return result;
}
