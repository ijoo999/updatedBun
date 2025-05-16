import { isArray } from '../array/isArray';
import { test, expect } from 'bun:test';

test('returns true for arrays', () => {
  expect(isArray([])).toBe(true);
  expect(isArray([1, 2, 3])).toBe(true);
});

test('returns false for non-arrays', () => {
  expect(isArray('string')).toBe(false);
  expect(isArray(42)).toBe(false);
  expect(isArray({})).toBe(false);
  expect(isArray(null)).toBe(false);
  expect(isArray(undefined)).toBe(false);
});
