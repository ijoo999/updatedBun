import { first } from '../array/first';
import { test, expect } from 'bun:test';

test('returns first item when no second arg is provided', () => {
  expect(first(['a', 'b', 'c'])).toBe('a');
});

test('returns first n items when number is passed', () => {
  expect(first(['a', 'b', 'c', 'd'], 2)).toEqual(['a', 'b']);
});

test('returns first match using predicate', () => {
  expect(first([1, 2, 3, 4], x => x > 2)).toBe(3);
});

test('returns undefined if predicate matches nothing', () => {
  expect(first([1, 2, 3], x => x > 10)).toBeUndefined();
});

test('throws if first arg is not array', () => {
  // @ts-expect-error
  expect(() => first(null)).toThrow('first() expects the first argument to be an array.');
});
