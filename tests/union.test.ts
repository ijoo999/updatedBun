import { union } from '../array/union';
import { test, expect } from 'bun:test';

test('removes duplicates from single array', () => {
  expect(union(['a', 'b', 'c', 'c'])).toEqual(['a', 'b', 'c']);
});

test('combines multiple arrays without duplicates', () => {
  expect(union(['a', 'b'], ['b', 'c'], ['c', 'd'])).toEqual(['a', 'b', 'c', 'd']);
});

test('returns empty array if no input', () => {
  expect(union()).toEqual([]);
});

test('throws if any input is not an array', () => {
  // @ts-expect-error
  expect(() => union(['a'], null)).toThrow('union() expects all arguments to be arrays.');
});
