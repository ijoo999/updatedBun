import { after } from '../array/after';
import { test, expect } from 'bun:test';

test('returns elements after index', () => {
  const result = after(['a', 'b', 'c'], 1);
  expect(result).toEqual(['c']);
});

test('returns full array if n is 0', () => {
  expect(after(['x', 'y', 'z'], 0)).toEqual(['x', 'y', 'z']);
});

test('returns empty array if n >= arr.length', () => {
  expect(after(['a', 'b'], 2)).toEqual([]);
});

test('throws if first argument is not an array', () => {
  // @ts-expect-error
  expect(() => after(null, 1)).toThrow('after() expects the first argument to be an array.');
});
