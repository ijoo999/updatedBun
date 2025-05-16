import { contains } from '../collection/contains';
import { test, expect } from 'bun:test';

test('checks if array contains value', () => {
  expect(contains(['a', 'b', 'c'], 'b')).toBe(true);
  expect(contains(['x', 'y', 'z'], 'a')).toBe(false);
});

test('checks if object contains value', () => {
  expect(contains({ a: 1, b: 2 }, 2)).toBe(true);
  expect(contains({ a: 'x', b: 'y' }, 'z')).toBe(false);
});

test('returns false for unsupported types', () => {
  // @ts-expect-error
  expect(contains(123, 'a')).toBe(false);
  // @ts-expect-error
  expect(contains(null, 'a')).toBe(false);
});
