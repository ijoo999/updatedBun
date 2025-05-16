import { isString } from './isString';

/**
 * Trims whitespace and non-word characters from both ends of a string.
 */
export function chop(str: string): string {
  if (!isString(str)) return '';
  const re = /^[-_.\W\s]+|[-_.\W\s]+$/g;
  return str.trim().replace(re, '');
}
