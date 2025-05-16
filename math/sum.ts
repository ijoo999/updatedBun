/**
 * Returns the sum of all numeric values provided.
 */
export function sum(...inputs: unknown[]): number {
  const flattenDeep = (arr: unknown[]): number[] =>
    arr.flat(Infinity).filter((val): val is number =>
      typeof val === 'number' && !isNaN(val)
    );

  return flattenDeep(inputs).reduce((acc, val) => acc + val, 0);
}
