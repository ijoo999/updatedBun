/**
 * Partially applies arguments to the end of the provided function’s argument list.
 * Optionally binds a `this` context for the function.
 */
export function partialRight<T extends (...args: any[]) => any>(
  ctxOrFn: object | T,
  fnOrArg: T | any,
  ...args: any[]
): (...callArgs: any[]) => ReturnType<T> {
  const ctx = typeof ctxOrFn === 'function' ? undefined : ctxOrFn;
  const fn = typeof ctxOrFn === 'function' ? ctxOrFn as T : fnOrArg as T;

  return function (...callArgs: any[]) {
    return fn.apply(ctx, [...callArgs, ...args]);
  };
}
