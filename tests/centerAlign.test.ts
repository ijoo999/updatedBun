import { centerAlign } from '../string/centerAlign';
import { test, expect } from 'bun:test';

test('centers string in specified width', () => {
  const result = centerAlign('abc', 7);
  expect(result).toBe('&nbsp;&nbsp;abc&nbsp;&nbsp;');
});

test('returns original string if width is too small', () => {
  expect(centerAlign('hello', 3)).toBe('hello');
});

test('defaults to no padding if no width given', () => {
  expect(centerAlign('text')).toBe('text');
});

test('returns empty string for non-string input', () => {
  // @ts-expect-error
  expect(centerAlign(null)).toBe('');
});
