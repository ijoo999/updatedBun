import { reduce } from '../object/reduce';
import { test, expect } from 'bun:test';

test('reduces object values into a new object', () => {
  const input = { a: 'foo', b: 'bar' };
  const result = reduce(input, (acc: Record<string, string>, val, key) => {
    acc[key] = val.toUpperCase();
    return acc;
  }, {} as Record<string, string>);
  expect(result).toEqual({ a: 'FOO', b: 'BAR' });
});

test('reduces to a number', () => {
  const input = { a: 1, b: 2, c: 3 };
  const result = reduce(input, (sum, val) => sum + val, 0);
  expect(result).toBe(6);
});

test('supports thisArg binding', () => {
  const ctx = { multiplier: 10 };
  const input = { a: 1, b: 2 };
  const result = reduce(input, function (this: any, acc, val) {
    acc.push(val * this.multiplier);
    return acc;
  }, [] as number[], ctx);
  expect(result).toEqual([10, 20]);
});

test('throws on invalid input', () => {
  // @ts-expect-error
  expect(() => reduce(null, () => {}, {})).toThrow();
});
