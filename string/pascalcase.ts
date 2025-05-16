import { isString } from './isString';
import { camelcase } from './camelcase';

/**
 * Converts a string to PascalCase.
 */
export function pascalcase(str: string): string {
  if (!isString(str)) return '';
  if (str.length === 1) return str.toUpperCase();

  const camel = camelcase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}
