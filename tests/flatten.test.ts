import { flatten } from '../array/flatten';
import { test, expect } from 'bun:test';

test('flattens deeply nested arrays', () => {
  const result = flatten(['a', ['b', ['c']], 'd', ['e']]);
  expect(result).toEqual(['a', 'b', 'c', 'd', 'e']);
});

test('flattens mixed-type values', () => {
  const input = [1, [2, [3, [4]]], 5];
  const output = flatten<number>(input);
  expect(output).toEqual([1, 2, 3, 4, 5]);
});

test('flattens array of empty arrays', () => {
  expect(flatten([[], [[]], [[[]]]])).toEqual([]);
});

test('throws if input is not an array', () => {
  // @ts-expect-error
  expect(() => flatten(null)).toThrow('flatten() expects an array.');
});
