import { isPlainObject } from '../lang/isPlainObject';

/**
 * Shallowly extends a target object with properties from one or more source objects.
 * Only copies from plain objects and only own properties.
 */


export function extend<T extends object, U extends object[]>(target: T, ...sources: U): T & U[number] {
  if (!isPlainObject(target)) return {} as T;

  for (const source of sources) {
    if (isPlainObject(source)) {
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          (target as any)[key] = source[key as keyof typeof source];
        }
      }
    }
  }

  return target;
}
