import { isString } from './isString';

/**
 * Right-aligns a string within a given width using non-breaking spaces.
 * If width is not provided, defaults to the string’s current length (no padding).
 */
export function rightAlign(str: string, width?: number): string {
  if (!isString(str)) return '';
  const total = width ?? str.length;
  const pad = Math.max(0, total - str.length);
  return '&nbsp;'.repeat(pad) + str;
}
