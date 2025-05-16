import { pluck } from '..//object/pluck';
import { test, expect } from 'bun:test';

test('plucks values by key from object values', () => {
  const users = {
    user1: { name: 'Alice', age: 30 },
    user2: { name: 'Bob', age: 25 }
  };
  const result = pluck(users, 'name');
  expect(result).toEqual({ user1: 'Alice', user2: 'Bob' });
});

test('returns undefined for missing keys', () => {
  const data = { a: {}, b: { x: 2 } };
  expect(pluck(data, 'x')).toEqual({ a: undefined, b: 2 });
});
