import { isString } from './isString';

/**
 * Converts the first character of a string to uppercase,
 * leaving the rest of the string as-is.
 */
export function sentencecase(str: string): string {
  if (!isString(str)) return '';
  if (str.length === 1) return str.toUpperCase();

  return str.charAt(0).toUpperCase() + str.slice(1);
}
