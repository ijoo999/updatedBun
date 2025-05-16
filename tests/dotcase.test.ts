import { dotcase } from '../string/dotcase';
import { test, expect } from 'bun:test';

test('converts various delimiters to dots', () => {
  expect(dotcase('a-b_c.d e')).toBe('a.b.c.d.e');
});

test('removes leading/trailing punctuation', () => {
  expect(dotcase('--Hello--')).toBe('hello');
});

test('returns lowercase letter if string is one character', () => {
  expect(dotcase('A')).toBe('a');
});

test('returns empty string for invalid input', () => {
  // @ts-expect-error
  expect(dotcase(null)).toBe('');
});
