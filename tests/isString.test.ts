import { isString } from '../string/isString';
import { test, expect } from 'bun:test';

test('returns true for string literals', () => {
  expect(isString('hello')).toBe(true);
});

test('returns true for String objects', () => {
  expect(isString(new String('hi'))).toBe(true);
});

test('returns false for non-strings', () => {
  expect(isString(123)).toBe(false);
  expect(isString(null)).toBe(false);
  expect(isString(undefined)).toBe(false);
  expect(isString({})).toBe(false);
  expect(isString([])).toBe(false);
});
