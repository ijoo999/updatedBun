import { rightAlign } from '../string/rightAlign';
import { test, expect } from 'bun:test';

test('right-aligns string with non-breaking spaces', () => {
  expect(rightAlign('hi', 5)).toBe('&nbsp;&nbsp;&nbsp;hi');
});

test('returns same string if width equals string length', () => {
  expect(rightAlign('hello', 5)).toBe('hello');
});

test('returns empty string for invalid input', () => {
  // @ts-expect-error
  expect(rightAlign(null)).toBe('');
});
