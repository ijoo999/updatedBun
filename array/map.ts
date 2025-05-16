/**
 * Creates a new array populated with the results of calling a provided function
 * on every element in the array.
 */
export function map<T, R>(
  arr: T[],
  fn: (value: T, index: number, array: T[]) => R,
  thisArg?: unknown
): R[] {
  if (!Array.isArray(arr)) {
    throw new TypeError('map() expects the first argument to be an array.');
  }

  return arr.map(fn, thisArg);
}
