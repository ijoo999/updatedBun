import { ellipsis } from '..//string/ellipsis';
import { test, expect } from 'bun:test';


test('truncates and adds ellipsis', () => {
  expect(ellipsis('hello world', 5)).toBe('hello…');
});

test('truncates and adds custom suffix', () => {
  expect(ellipsis('lorem ipsum dolor', 5, '...')).toBe('lorem...');
});

test('returns empty string if input is invalid', () => {
  // @ts-expect-error
  expect(ellipsis(null, 5)).toBe('');
});
