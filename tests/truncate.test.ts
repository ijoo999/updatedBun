import { truncate } from '../string/truncate';
import { test, expect } from 'bun:test';

test('removes HTML and truncates string', () => {
  const html = '<span>Hello <strong>world</strong></span>';
  expect(truncate(html, 5)).toBe('Hello');
});

test('returns full string if shorter than limit', () => {
  expect(truncate('<b>Hi</b>', 10)).toBe('Hi');
});

test('returns empty string for non-string input', () => {
  // @ts-expect-error
  expect(truncate(null, 5)).toBe('');
});
