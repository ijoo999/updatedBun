import { typeOf } from '../lang/typeOf';

/**
 * Returns the value of `obj[key]`. If the value is a function,
 * it is called with `obj` as its context (`this`) and the return value is returned.
 */
export function result<T extends object>(
  obj: T,
  key: keyof T
): unknown {
  const val = obj?.[key];

  if (typeof val === 'undefined') return;

  return typeOf(val) === 'function' && val !== null ? (val as unknown as Function).call(obj) : val;
}
