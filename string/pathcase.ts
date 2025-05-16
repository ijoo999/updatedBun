import { isString } from './isString';
import { chop } from './chop';

/**
 * Converts a string to path/case using slashes (`/`) between segments.
 */
export function pathcase(str: string): string {
  if (!isString(str)) return '';
  if (str.length === 1) return str.toLowerCase();

  const re = /[_.-\W\s]+(\w|$)/g;

  return chop(str)
    .toLowerCase()
    .replace(re, (_, ch: string) => '/' + ch);
}
