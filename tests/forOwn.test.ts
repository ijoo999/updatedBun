import { forOwn } from '../object/forOwn';
import { test, expect } from 'bun:test';

test('iterates over own properties only', () => {
  const base = { a: 1 };
  const obj = Object.create(base);
  obj.b = 2;

  const keys: (string | number | symbol)[] = [];
  forOwn(obj, (_, key) => keys.push(key));

  expect(keys).toEqual(['b']);
});

test('passes value, key, and object to callback', () => {
  const result: string[] = [];
  const obj = { x: 10 };
  forOwn(obj, (val, key, context) => {
    result.push(`${key}:${val}:${context === obj}`);
  });
  expect(result[0]).toBe('x:10:true');
});

test('throws if input is not an object', () => {
  // @ts-expect-error
  expect(() => forOwn(null, () => {})).toThrow();
});
