import { some } from '../object/some';
import { test, expect } from 'bun:test';

test('returns true if any value passes', () => {
  const obj = { a: 1, b: 2, c: 3 };
  expect(some(obj, val => val === 2)).toBe(true);
});

test('returns false if no values pass', () => {
  const obj = { a: 1, b: 2 };
  expect(some(obj, val => val > 10)).toBe(false);
});

test('stops iteration early on match', () => {
  const obj = { a: 1, b: 2, c: 3 };
  const visited: string[] = [];

  some(obj, (val, key) => {
    visited.push(key);
    return val === 2;
  });

  expect(visited).toEqual(['a', 'b']); // stops at match
});

test('supports thisArg', () => {
  const ctx = { limit: 5 };
  const obj = { a: 1, b: 10 };
  const result = some(
    obj,
    function (this: any, val) {
      return val > this.limit;
    },
    ctx
  );
  expect(result).toBe(true);
});

test('throws if input is not an object', () => {
  // @ts-expect-error
  expect(() => some(null, () => true)).toThrow();
});
