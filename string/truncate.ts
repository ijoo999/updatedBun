import { isString } from './isString';

/**
 * Strips HTML/XML tags from a string.
 * Basic fallback for `striptags` behavior.
 */
function stripTags(input: string): string {
  return input.replace(/<\/?[^>]+(>|$)/g, '');
}

/**
 * Truncates a string to the specified length **after** stripping all HTML tags.
 */
export function truncate(str: string, length: number): string {
  if (!isString(str)) return '';
  return stripTags(str).slice(0, length);
}
