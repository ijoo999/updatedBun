import { reverse } from '../string/reverse';
import { test, expect } from 'bun:test';

test('reverses simple string', () => {
  expect(reverse('abc')).toBe('cba');
});

test('works with special characters', () => {
  expect(reverse('!@#')).toBe('#@!');
});

test('returns empty string on invalid input', () => {
  // @ts-expect-error
  expect(reverse(null)).toBe('');
});
