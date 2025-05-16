import { dashcase } from '../string/dashcase';
import { test, expect } from 'bun:test';

test('converts spaces and symbols to dashes', () => {
  expect(dashcase('a b.c d_e')).toBe('a-b-c-d-e');
});

test('returns lowercase for one-letter strings', () => {
  expect(dashcase('A')).toBe('a');
});

test('removes leading/trailing punctuation before dashing', () => {
  expect(dashcase('--Hello world--')).toBe('hello-world');
});

test('returns empty string for invalid input', () => {
  // @ts-expect-error
  expect(dashcase(null)).toBe('');
});
