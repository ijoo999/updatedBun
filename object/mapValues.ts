import { forOwn } from './forOwn';

/**
 * Creates a new object with the same keys as the input,
 * where each value is the result of calling the provided callback.
 */
export function mapValues<T extends object, R>(
  obj: T,
  callback: (this: unknown, value: T[keyof T], key: keyof T, object: T) => R,
  thisArg?: unknown
): { [K in keyof T]: R } {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('mapValues() expects a non-null object.');
  }

  const result: any = {};
  const boundFn = callback.bind(thisArg);

  forOwn(obj, (value, key, original) => {
    result[key] = boundFn(value, key, original);
  });

  return result;
}
