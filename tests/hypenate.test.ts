import { hyphenate } from '../string/hyphenate';
import { test, expect } from 'bun:test';

test('replaces spaces with hyphens', () => {
  expect(hyphenate('a b c')).toBe('a-b-c');
});

test('trims and then hyphenates', () => {
  expect(hyphenate('   hello world   ')).toBe('hello-world');
});

test('returns empty string for invalid input', () => {
  // @ts-expect-error
  expect(hyphenate(null)).toBe('');
});
