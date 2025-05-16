import { before } from '../array/before';
import { test, expect } from 'bun:test';

test('excludes last n items', () => {
  expect(before(['a', 'b', 'c'], 1)).toEqual(['a', 'b']);
  expect(before(['a', 'b', 'c'], 2)).toEqual(['a']);
});

test('returns empty array if n >= arr.length', () => {
  expect(before(['a', 'b'], 2)).toEqual([]);
  expect(before(['a', 'b'], 5)).toEqual([]);
});

test('returns full array if n is 0', () => {
  expect(before(['x', 'y', 'z'], 0)).toEqual(['x', 'y', 'z']);
});

test('throws if first argument is not an array', () => {
  // @ts-expect-error
  expect(() => before(null, 1)).toThrow('before() expects the first argument to be an array.');
});
