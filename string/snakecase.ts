import { isString } from './isString';
import { chop } from './chop';

/**
 * Converts a string to snake_case (e.g. `'a-b c.d' → 'a_b_c_d'`).
 */
export function snakecase(str: string): string {
  if (!isString(str)) return '';
  if (str.length === 1) return str.toLowerCase();

  const re = /[-_.\W\s]+(\w|$)/g;

  return chop(str)
    .toLowerCase()
    .replace(re, (_, ch: string) => '_' + ch);
}
