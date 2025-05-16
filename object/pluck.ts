import { prop } from './prop';
import { mapValues } from './mapValues';

/**
 * Plucks a nested key from every value in the object.
 * Returns a new object with the same keys, but with each value
 * replaced by `value[key]`.
 */
export function pluck<T extends object, K extends string | number>(
  obj: Record<string, any>,
  key: K
): Record<string, any> {
  return mapValues(obj, prop(key));
}
