import { forIn } from './forIn';

/**
 * Returns an array of all enumerable property names of `obj` whose values are functions.
 * Includes both own and inherited properties.
 */
export function methods(obj: object): string[] {
  const keys: string[] = [];

  forIn(obj, (val, key) => {
    if (typeof val === 'function') {
      keys.push(key);
    }
  });

  return keys;
}
