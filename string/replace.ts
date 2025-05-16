import { isString } from './isString';

/**
 * Replaces all occurrences of `a` in `str` with `b`.
 * Works with string or RegExp patterns.
 */
export function replace(
  str: string,
  a: string | RegExp,
  b: string = ''
): string {
  if (!isString(str)) return '';
  if (!a) return str;

  return a instanceof RegExp
    ? str.replace(a, b)
    : str.split(a).join(b);
}
