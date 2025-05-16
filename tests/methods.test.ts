import { methods } from '../object/methods';
import { test, expect } from 'bun:test';

test('returns keys for function properties (own and inherited)', () => {
  const base = { inheritedMethod() {} };
  const obj = Object.create(base);
  obj.ownMethod = () => {};
  obj.nonMethod = 42;

  const result = methods(obj).sort();
  expect(result).toEqual(['inheritedMethod', 'ownMethod']);
});

test('returns empty array if no function values', () => {
  const obj = { a: 1, b: 'test' };
  expect(methods(obj)).toEqual([]);
});

test('works with empty objects', () => {
  expect(methods({})).toEqual([]);
});
