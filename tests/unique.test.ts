import { unique } from '../array/unique';
import { test, expect } from 'bun:test';

test('removes duplicate values from array', () => {
  expect(unique(['a', 'b', 'c', 'c'])).toEqual(['a', 'b', 'c']);
});

test('returns same array if all values are unique', () => {
  expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
});

test('returns empty array if input is empty', () => {
  expect(unique([])).toEqual([]);
});

test('throws if input is not an array', () => {
  // @ts-expect-error
  expect(() => unique(null)).toThrow('unique() expects an array.');
});
