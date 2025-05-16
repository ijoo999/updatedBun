import { forOwn } from './forOwn';

/**
 * Returns an array of an object’s own enumerable property names.
 */
export function keys(obj: object): string[] {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('keys() expects a non-null object.');
  }

  if (Object.keys) {
    return Object.keys(obj);
  }

  const result: string[] = [];
  forOwn(obj, (_, key) => result.push(key));
  return result;
}
