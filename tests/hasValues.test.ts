import { hasValues } from '../lang/hasValues';
import { test, expect } from 'bun:test';

test('returns true for non-empty strings', () => {
  expect(hasValues('hello')).toBe(true);
});

test('returns false for empty strings', () => {
  expect(hasValues('')).toBe(false);
});

test('returns true for non-empty arrays', () => {
  expect(hasValues(['a'])).toBe(true);
});

test('returns false for empty arrays', () => {
  expect(hasValues([])).toBe(false);
});

test('returns true for non-empty objects', () => {
  expect(hasValues({ a: 'a' })).toBe(true);
});

test('returns false for empty objects', () => {
  expect(hasValues({})).toBe(false);
});

test('returns true for numbers and booleans', () => {
  expect(hasValues(0)).toBe(true);
  expect(hasValues(false)).toBe(true);
  expect(hasValues(true)).toBe(true);
});

test('returns true for functions', () => {
  expect(hasValues(() => {})).toBe(true);
});

test('returns false for null and undefined', () => {
  expect(hasValues(null)).toBe(false);
  expect(hasValues(undefined)).toBe(false);
});
