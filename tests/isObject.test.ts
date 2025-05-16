import { isObject } from '../lang/isObject';
import { test, expect } from 'bun:test';

test('returns true for plain objects', () => {
  expect(isObject({})).toBe(true);
  expect(isObject({ a: 1 })).toBe(true);
});

test('returns false for arrays', () => {
  expect(isObject([])).toBe(false);
});

test('returns false for null', () => {
  expect(isObject(null)).toBe(false);
});

test('returns false for primitives and functions', () => {
  expect(isObject(123)).toBe(false);
  expect(isObject('string')).toBe(false);
  expect(isObject(false)).toBe(false);
  expect(isObject(() => {})).toBe(false);
});
