import { slugify } from '../string/slugify';
import { test, expect } from 'bun:test';

test('slugifies basic sentence', () => {
  expect(slugify('This is a title')).toBe('this-is-a-title');
});

test('handles punctuation and symbols', () => {
  expect(slugify('Hello, World!')).toBe('hello-world');
});

test('returns empty string on invalid input', () => {
  // @ts-expect-error
  expect(slugify(null)).toBe('');
});
