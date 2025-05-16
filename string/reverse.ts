import { isString } from './isString';

/**
 * Reverses the characters in a string.
 */
export function reverse(str: string): string {
  if (!isString(str)) return '';
  return str.split('').reverse().join('');
}
