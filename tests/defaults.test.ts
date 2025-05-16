import { defaults } from '../object/default';
import { test, expect } from 'bun:test';

test('fills in undefined keys from source', () => {
  const result = defaults({ a: 1 } as Record<string, any>, { a: 10, b: 2 });
  expect(result).toEqual({ a: 1, b: 2 });
});

test('applies defaults from multiple sources', () => {
  const result = defaults({ a: 1 } as Record<string, any>, { b: 2 }, { c: 3 });
  expect(result).toEqual({ a: 1, b: 2, c: 3 });
});

test('does not overwrite defined values', () => {
  const result = defaults({ a: 0 }, { a: 42 });
  expect(result).toEqual({ a: 0 });
});

test('throws if target is not an object', () => {
  // @ts-expect-error
  expect(() => defaults(null, { a: 1 })).toThrow();
});
