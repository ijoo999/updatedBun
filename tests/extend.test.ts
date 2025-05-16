import { extend } from '../object/extend';
import { test, expect } from 'bun:test';

test('merges plain object properties', () => {
  const result = extend({ a: 1 }, { b: 2 });
  expect(result).toEqual({ a: 1, b: 2 });
});

test('skips non-plain source objects', () => {
  const result = extend({ a: 1 }, new Date() as any);
  expect(result).toEqual({ a: 1 });
});

test('returns {} if target is not a plain object', () => {
  // @ts-expect-error
  expect(extend(null, { a: 1 })).toEqual({});
  // @ts-expect-error
  expect(extend([], { a: 1 })).toEqual({});
});

test('merges from multiple sources', () => {
  const result = extend({}, { a: 1 }, { b: 2 }, { c: 3 });
  expect(result).toEqual({ a: 1, b: 2, c: 3 });
});
