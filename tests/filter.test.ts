import { filter } from '../object/filter';
import { test, expect } from 'bun:test';

test('filters object values by condition', () => {
  const input = { a: 1, b: 2, c: 3 };
  const result = filter(input, val => val > 1);
  expect(result).toEqual({ b: 2, c: 3 });
});

test('filters based on key', () => {
  const result = filter({ a: 1, skip: 2 }, (_, key) => key !== 'skip');
  expect(result).toEqual({ a: 1 });
});

test('returns empty object when all filtered out', () => {
  const result = filter({ a: 1, b: 2 }, () => false);
  expect(result).toEqual({});
});

test('throws if input is not an object', () => {
  // @ts-expect-error
  expect(() => filter(null, () => true)).toThrow();
});
