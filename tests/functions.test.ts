import { functions } from '../object/functions';
import { test, expect } from 'bun:test';

test('returns only function properties (own and inherited)', () => {
  const base = {
    inheritedFn() {},
    nonFn: 'skip'
  };
  const obj = Object.create(base);
  obj.ownFn = () => {};
  obj.num = 42;

  const result = functions(obj);

  expect(Object.keys(result).sort()).toEqual(['inheritedFn', 'ownFn']);
  expect(typeof result.ownFn).toBe('function');
  expect(typeof result.inheritedFn).toBe('function');
});

test('returns empty object if no functions exist', () => {
  expect(functions({ a: 1, b: 'hi' })).toEqual({});
});

test('works on empty objects', () => {
  expect(functions({})).toEqual({});
});
