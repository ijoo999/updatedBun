import { compact } from '../array/compact';
import { test, expect } from 'bun:test';


test('removes falsey values from an array', () => {
  const result = compact([null, 'a', undefined, 0, false, 'b', 'c', '']);
  expect(result).toEqual(['a', 'b', 'c']);
});

test('throws on non-array input', () => {
  // @ts-expect-error on purpose
  expect(() => compact(null)).toThrow('compact() expects an array.');
});
