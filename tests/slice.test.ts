import { slice } from '../array/slice';
import { test, expect } from 'bun:test';

test('slices array with start and end', () => {
  const arr = ['a', 'b', 'c', 'd', 'e'];
  expect(slice(arr, 1, 4)).toEqual(['b', 'c', 'd']);
});

test('slices from start to end of array if end is not given', () => {
  const arr = ['a', 'b', 'c', 'd'];
  expect(slice(arr, 2)).toEqual(['c', 'd']);
});

test('returns full array if no start/end are given', () => {
  const arr = [1, 2, 3];
  expect(slice(arr)).toEqual([1, 2, 3]);
});

test('throws if input is not an array', () => {
  // @ts-expect-error
  expect(() => slice(null, 1)).toThrow('slice() expects the first argument to be an array.');
});
