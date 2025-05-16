import { merge } from '../object/merge';
import { test, expect } from 'bun:test';

test('deeply merges nested objects', () => {
  const result = merge(
    {},
    { user: { name: 'Alice' } },
    { user: { age: 30 } }
  );
  expect(result).toEqual({ user: { name: 'Alice', age: 30 } });
});

test('overwrites primitive values', () => {
  const result = merge({ a: 1 }, { a: 5 });
  expect(result).toEqual({ a: 5 });
});

test('skips non-plain source objects', () => {
  const result = merge({ a: 1 }, new Date() as any);
  expect(result).toEqual({ a: 1 });
});

test('returns {} if target is not plain', () => {
  // @ts-expect-error
  expect(merge(null, { a: 1 })).toEqual({});
});
