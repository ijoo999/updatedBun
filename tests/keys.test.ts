import { keys } from '../object/keys';
import { test, expect } from 'bun:test';

test('returns own enumerable keys', () => {
  const obj = { a: 1, b: 2 };
  expect(keys(obj).sort()).toEqual(['a', 'b']);
});

test('ignores inherited keys', () => {
  const base = { inherited: true };
  const obj = Object.create(base);
  obj.own = true;
  expect(keys(obj)).toEqual(['own']);
});

test('throws if input is not an object', () => {
  // @ts-expect-error
  expect(() => keys(null)).toThrow();
  // @ts-expect-error
  expect(() => keys(123)).toThrow();
});
