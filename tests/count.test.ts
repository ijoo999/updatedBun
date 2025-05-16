import { count } from '../string/count';
import { test, expect } from 'bun:test';

test('counts simple characters', () => {
  expect(count('abcabcabc', 'a')).toBe(3);
});

test('counts substrings', () => {
  expect(count('banana', 'na')).toBe(2);
});

test('returns 0 for no match', () => {
  expect(count('hello', 'z')).toBe(0);
});

test('returns 0 for empty substring', () => {
  expect(count('abc', '')).toBe(0);
});

test('returns 0 for invalid input', () => {
  // @ts-expect-error
  expect(count(null, 'a')).toBe(0);
});
