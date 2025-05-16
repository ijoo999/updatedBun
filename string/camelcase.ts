import { isString } from './isString';
import { chop } from './chop';

/**
 * Converts a string into camelCase.
 */
export function camelcase(str: string): string {
  if (!isString(str)) return '';
  if (str.length === 1) return str.toLowerCase();

  const re = /[-_.\W\s]+(\w|$)/g;

  return chop(str).replace(re, (_, ch: string) => ch.toUpperCase());
}
