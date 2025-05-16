import { wordwrap } from '../string/wordwrap';
import { test, expect } from 'bun:test';

test('wraps string to default width', () => {
  const input = 'a b c d e f g';
  const wrapped = wordwrap(input, { width: 5, newline: '\n' });
  expect(wrapped).toContain('\n');
});

test('returns original if string is short', () => {
  const input = 'short';
  expect(wordwrap(input, { width: 10 })).toBe('short');
});

test('returns empty string on invalid input', () => {
  // @ts-expect-error
  expect(wordwrap(null)).toBe('');
});
