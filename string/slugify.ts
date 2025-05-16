import { isString } from './isString';
import { dashcase } from './dashcase';

/**
 * Converts a string to a URL-friendly slug by lowercasing
 * and replacing spaces/symbols with dashes.
 */
export function slugify(str: string): string {
  if (!isString(str)) return '';
  return dashcase(str);
}
