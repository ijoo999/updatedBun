import { isString } from './isString';

/**
 * Counts the number of non-overlapping occurrences of `substring` in `str`.
 */
export function count(str: string, sub: string): number {
  if (!isString(str) || !isString(sub) || sub === '') return 0;
  return str.split(sub).length - 1;
}
