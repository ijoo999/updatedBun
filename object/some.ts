import { forOwn } from './forOwn';

/**
 * Checks if at least one own property of the object passes the callback test.
 *
 * Returns `true` as soon as the callback returns `true`, otherwise `false`.
 */
export function some<T extends object>(
  obj: T,
  cb: (this: unknown, value: T[keyof T], key: keyof T, obj: T) => boolean,
  thisArg?: unknown
): boolean {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('some() expects a non-null object.');
  }

  const boundFn = cb.bind(thisArg);
  let result = false;

  forOwn(obj, (val, key) => {
    if (boundFn(val, key, obj)) {
      result = true;
      return false; // early exit (emulates break)
    }
  });

  return result;
}
