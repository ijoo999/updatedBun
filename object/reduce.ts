import { forOwn } from './forOwn';

/**
 * Reduces an object to a single accumulated value by iterating over its own enumerable properties.
 */
export function reduce<T extends object, R>(
  obj: T,
  fn: (this: unknown, acc: R, val: T[keyof T], key: keyof T, obj: T) => R,
  initial: R,
  thisArg?: unknown
): R {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('reduce() expects a non-null object as the first argument.');
  }

  const boundFn = fn.bind(thisArg);
  let result = initial;

  forOwn(obj, (value, key, original) => {
    result = boundFn(result, value, key, original);
  });

  return result;
}
