import { sort } from '../array/sort';
import { test, expect } from 'bun:test';

test('sorts array of strings by default', () => {
  expect(sort(['b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
});

test('sorts array of numbers using comparator', () => {
  const result = sort([3, 1, 2], (a, b) => a - b);
  expect(result).toEqual([1, 2, 3]);
});

test('sorts array of objects by key', () => {
  const input = [{ a: 'c' }, { a: 'a' }];
  const result = sort(input, 'a');
  expect(result).toEqual([{ a: 'a' }, { a: 'c' }]);
});

test('returns empty array if input is empty', () => {
  expect(sort([])).toEqual([]);
});

test('throws if input is not an array', () => {
  // @ts-expect-error
  expect(() => sort(null)).toThrow('sort() expects the first argument to be an array.');
});
