import { isString } from './isString';
import { chop } from './chop';

/**
 * Replaces spaces in a string with hyphens.
 * Cleans leading/trailing junk via `chop`.
 */
export function hyphenate(str: string): string {
  if (!isString(str)) return '';
  return chop(str).split(' ').join('-');
}
