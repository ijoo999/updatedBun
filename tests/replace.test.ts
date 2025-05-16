import { replace } from '../string/replace';
import { test, expect } from 'bun:test';

test('replaces string pattern globally', () => {
  expect(replace('foo bar foo', 'foo', 'baz')).toBe('baz bar baz');
});

test('replaces RegExp match', () => {
  expect(replace('abcabc', /a/g, 'z')).toBe('zbczbc');
});

test('defaults to empty string replacement', () => {
  expect(replace('hello', 'e')).toBe('hllo');
});

test('returns original string if no pattern given', () => {
  // @ts-expect-error
  expect(replace('abc')).toBe('abc');
});

test('returns empty string for non-string input', () => {
  // @ts-expect-error
  expect(replace(null, 'a', 'z')).toBe('');
});
