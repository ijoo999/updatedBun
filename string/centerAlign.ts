import { isString } from './isString';

/**
 * Pads a string with non-breaking spaces to center it in the given width.
 * Defaults to using the string's length as width, so result appears centered visually.
 */
export function centerAlign(str: string, width?: number): string {
  if (!isString(str)) return '';

  const len = str.length;
  const totalWidth = width ?? len;

  if (totalWidth <= len) return str;

  const padTotal = totalWidth - len;
  const left = Math.floor(padTotal / 2);
  const right = padTotal - left;

  return '&nbsp;'.repeat(left) + str + '&nbsp;'.repeat(right);
}
