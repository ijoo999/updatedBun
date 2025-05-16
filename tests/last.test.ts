import { last } from '../array/last';
import { test, expect } from 'bun:test';

test('returns last item if no second arg', () => {
  expect(last(['a', 'b', 'c'])).toBe('c');
});

test('returns last n items if number is passed', () => {
  expect(last(['a', 'b', 'c', 'd'], 2)).toEqual(['c', 'd']);
});

test('returns first match using predicate', () => {
  expect(last([1, 2, 3], x => x > 1)).toBe(2); // same order as original impl
});

test('returns undefined if predicate matches nothing', () => {
  expect(last(['a', 'b'], x => x === 'z')).toBeUndefined();
});

test('throws if input is not an array', () => {
  // @ts-expect-error
  expect(() => last(null)).toThrow('last() expects the first argument to be an array.');
});
