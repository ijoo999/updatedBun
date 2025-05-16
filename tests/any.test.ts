import { any } from '../collection/any';
import { test, expect } from 'bun:test';

test('checks existence in arrays', () => {
  expect(any('b', ['a', 'b', 'c'])).toBe(true);
  expect(any('x', ['a', 'b', 'c'])).toBe(false);
});

test('checks existence in strings', () => {
  expect(any('b', 'abc')).toBe(true);
  expect(any('z', 'abc')).toBe(false);
});

test('checks existence in object values', () => {
  expect(any(2, { a: 1, b: 2 })).toBe(true);
  expect(any('x', { a: 'y', b: 'z' })).toBe(false);
});

test('returns false for unsupported types', () => {
  expect(any('a', 123)).toBe(false);
  expect(any('a', null)).toBe(false);
  expect(any('a', undefined)).toBe(false);
});
