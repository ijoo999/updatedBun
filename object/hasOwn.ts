/**
 * Returns `true` if the given key is an own, enumerable property of the object.
 */
export function hasOwn(obj: object, key: PropertyKey): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
