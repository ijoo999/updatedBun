import { forIn } from '../object/forIn';
import { test, expect } from 'bun:test';

test('iterates over own and inherited properties', () => {
  const base = { a: 1 };
  const obj = Object.create(base);
  obj.b = 2;

  const keys: string[] = [];
  forIn(obj, (_, key) => keys.push(key));

  expect(keys.sort()).toEqual(['a', 'b']);
});

test('passes value, key, and object to callback', () => {
  const result: string[] = [];
  forIn({ x: 10 }, (val, key, obj) => {
    result.push(`${key}:${val}:${obj === obj}`);
  });
  expect(result[0]).toMatch(/^x:10:true$/);
});

test('throws if input is not an object', () => {
  // @ts-expect-error
  expect(() => forIn(null, () => {})).toThrow();
});
