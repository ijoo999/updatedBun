import { sentencecase } from '../string/sentencecase';
import { test, expect } from 'bun:test';

test('capitalizes first letter', () => {
  expect(sentencecase('hello world')).toBe('Hello world');
});

test('returns capitalized letter for single-char strings', () => {
  expect(sentencecase('a')).toBe('A');
});

test('leaves rest of string unchanged', () => {
  expect(sentencecase('fOO')).toBe('FOO');
});

test('returns empty string on invalid input', () => {
  // @ts-expect-error
  expect(sentencecase(null)).toBe('');
});
