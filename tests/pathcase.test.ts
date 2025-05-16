import { pathcase } from '../string/pathcase';
import { test, expect } from 'bun:test';

test('converts mixed delimiters to slashes', () => {
  expect(pathcase('a-b_c.d e')).toBe('a/b/c/d/e');
});

test('returns lowercase single character', () => {
  expect(pathcase('X')).toBe('x');
});

test('cleans up leading/trailing punctuation', () => {
  expect(pathcase('--a--')).toBe('a');
});

test('returns empty string for invalid input', () => {
  // @ts-expect-error
  expect(pathcase(null)).toBe('');
});
