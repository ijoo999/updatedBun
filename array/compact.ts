/**
 * Remove all falsey values from an array.
 *
 * ```js
 * compact([null, a, undefined, 0, false, b, c, '']);
 * //=> [a, b, c]
 * ```
 *
 * @name .compact
 * @param {Array} `arr`
 * @return {Array}
 * @api public
 */

export function compact<T>(arr: T[]): NonNullable<T>[] {
  if (!Array.isArray(arr)) {
    throw new TypeError('compact() expects an array.');
  }
  return arr.filter(Boolean) as NonNullable<T>[];
}