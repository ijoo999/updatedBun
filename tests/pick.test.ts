import { pick } from '../object/pick';
import { test, expect } from 'bun:test';


test('picks only specified keys', () => {
  const result = pick({ a: 1, b: 2, c: 3 }, ['a', 'c']);
  expect(result).toEqual({ a: 1, c: 3 });
});

test('returns empty object if keys list is empty', () => {
  const result = pick({ a: 1, b: 2 }, []);
  expect(result).toEqual({});
});

test('throws if input is not an object', () => {
  // @ts-expect-error
  expect(() => pick(null, ['a'])).toThrow();
});
