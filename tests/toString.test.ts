import { toString } from '../string/toString';
import { test, expect } from 'bun:test';

test('converts number to string', () => {
  expect(toString(123)).toBe('123');
});

test('converts boolean to string', () => {
  expect(toString(true)).toBe('true');
});

test('returns empty string for null/undefined', () => {
  expect(toString(null)).toBe('');
  expect(toString(undefined)).toBe('');
});

test('preserves strings', () => {
  expect(toString('hello')).toBe('hello');
});
