import { isString } from './isString';
import wrap from 'word-wrap';

/**
 * Wraps a string’s words to a given width using `word-wrap`.
 */
export function wordwrap(
  str: string,
  options?: Parameters<typeof wrap>[1]
): string {
  if (!isString(str)) return '';
  return wrap(str, options);
}
