import { mapValues } from '../object/mapValues';
import { test, expect } from 'bun:test';

test('maps values of an object', () => {
  const input = { a: 1, b: 2 };
  const result = mapValues(input, val => val * 2);
  expect(result).toEqual({ a: 2, b: 4 });
});

test('passes key and original object to callback', () => {
  const input = { a: 1 };
  const result = mapValues(input, (val, key, obj) => {
    return `${key}:${val}:${obj === input}`;
  });
  expect(result).toEqual({ a: 'a:1:true' });
});

test('supports optional thisArg', () => {
  const ctx = { multiplier: 3 };
  const result = mapValues(
    { x: 2 },
    function (this: any, val) {
      return val * this.multiplier;
    },
    ctx
  );
  expect(result).toEqual({ x: 6 });
});

test('throws if input is not an object', () => {
  // @ts-expect-error
  expect(() => mapValues(null, () => {})).toThrow();
});
