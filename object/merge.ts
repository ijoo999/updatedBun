import { isPlainObject } from '../lang/isPlainObject';
import { hasOwn } from './hasOwn';

/**
 * Deeply merges one or more source objects into a target object.
 * Only plain objects are deeply merged — other values are assigned directly.
 */
export function merge<T extends object>(
  target: T,
  ...sources: Partial<T>[]
): T {
  if (!isPlainObject(target)) return {} as T;

  for (const source of sources) {
    if (!isPlainObject(source)) continue;

    for (const key in source) {
      if (hasOwn(source, key)) {
        const sourceVal = source[key as keyof T];
        const targetVal = target[key as keyof T];

        if (isPlainObject(sourceVal) && isPlainObject(targetVal)) {
          target[key as keyof T] = merge({ ...targetVal }, sourceVal) as any;
        } else {
          target[key as keyof T] = sourceVal as T[keyof T];
        }
      }
    }
  }

  return target;
}
