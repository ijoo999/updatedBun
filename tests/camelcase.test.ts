import { camelcase } from '../string/camelcase';
import { test, expect } from 'bun:test';

test('converts hyphenated strings', () => {
  expect(camelcase('foo-bar-baz')).toBe('fooBarBaz');
});

test('converts underscored and dotted strings', () => {
  expect(camelcase('foo_bar.baz')).toBe('fooBarBaz');
});

test('converts spaced strings', () => {
  expect(camelcase('foo bar baz')).toBe('fooBarBaz');
});

test('returns lowercase single-letter strings', () => {
  expect(camelcase('A')).toBe('a');
});

test('returns empty string on invalid input', () => {
  // @ts-expect-error
  expect(camelcase(null)).toBe('');
  // @ts-expect-error
  expect(camelcase(undefined)).toBe('');
});
