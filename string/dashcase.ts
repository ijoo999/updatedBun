import { isString } from './isString';
import { chop } from './chop';

/**
 * Converts a string to dash-case (e.g. `'a b.c' → 'a-b-c'`).
 * Similar to `slugify` but more lightweight — not URL-safe.
 */
export function dashcase(str: string): string {
  if (!isString(str)) return '';
  if (str.length === 1) return str.toLowerCase();

  const re = /[-_.\W\s]+(\w|$)/g;

  return chop(str)
    .toLowerCase()
    .replace(re, (_, ch: string) => '-' + ch);
}
