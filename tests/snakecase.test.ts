import { snakecase } from '../string/snakecase';
import { test, expect } from 'bun:test';

test('converts mixed separators to underscores', () => {
  expect(snakecase('a-b c.d_e')).toBe('a_b_c_d_e');
});

test('handles one-letter input', () => {
  expect(snakecase('A')).toBe('a');
});

test('removes leading/trailing non-word characters', () => {
  expect(snakecase('--X--')).toBe('x');
});

test('returns empty string on invalid input', () => {
  // @ts-expect-error
  expect(snakecase(null)).toBe('');
});
