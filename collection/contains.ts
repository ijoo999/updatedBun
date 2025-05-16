import { indexOf } from '../array/indexOf';
import { some } from '../object/some';

/**
 * Returns `true` if the given `collection` contains the specified `value`.
 */
export function contains<T>(
  collection: T[] | Record<string, T>,
  val: T
): boolean {
  if (Array.isArray(collection)) {
    return indexOf(collection, val) !== -1;
  }

  if (typeof collection === 'object' && collection !== null) {
    return some(collection, (v) => v === val);
  }

  return false;
}
