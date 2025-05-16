import { isString } from './isString';
import { truncate } from './truncate';

/**
 * Truncates a string to a specified length and appends an ellipsis (or custom string).
 */
export function ellipsis(str: string, limit: number, suffix = '…'): string {
  if (!isString(str)) return '';
  return truncate(str, limit) + suffix;
}
