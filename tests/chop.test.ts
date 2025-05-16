import { chop } from '../string/chop';
import { test, expect } from 'bun:test';

test('removes leading and trailing non-word characters', () => {
  expect(chop('-hello-')).toBe('hello');
  expect(chop('_abc_')).toBe('abc');
  expect(chop('...hi...')).toBe('hi');
});

test('removes leading and trailing whitespace', () => {
  expect(chop('   spaced   ')).toBe('spaced');
});

test('keeps inner characters intact', () => {
  expect(chop('---a_b.c---')).toBe('a_b.c');
});

test('returns empty string for invalid input', () => {
  // @ts-expect-error
  expect(chop(null)).toBe('');
  // @ts-expect-error
  expect(chop(undefined)).toBe('');
});
