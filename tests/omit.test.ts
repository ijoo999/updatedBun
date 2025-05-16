import { omit } from '../object/omit';
import { test, expect } from 'bun:test';

test('omits specified keys from object', () => {
  const result = omit({ a: 1, b: 2, c: 3 }, ['b', 'c']);
  expect(result).toEqual({ a: 1 });
});

test('returns full object if keysToOmit is empty', () => {
  const result = omit({ x: 1, y: 2 }, []);
  expect(result).toEqual({ x: 1, y: 2 });
});

test('returns empty object if all keys omitted', () => {
  const result = omit({ x: 1 }, ['x']);
  expect(result).toEqual({});
});

test('throws on invalid input', () => {
  // @ts-expect-error
  expect(() => omit(null, ['a'])).toThrow();
});
