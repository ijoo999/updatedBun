import { result } from '../object/result';
import { test, expect } from 'bun:test';

test('returns value for non-function key', () => {
  const obj = { a: 42 };
  expect(result(obj, 'a')).toBe(42);
});

test('calls function if value is a function', () => {
  const obj = {
    x: 5,
    getX() {
      return this.x;
    }
  };
  expect(result(obj, 'getX')).toBe(5);
});

test('returns undefined if key does not exist', () => {
  const obj = { a: 1 };
  expect(result(obj, 'missing' as any)).toBeUndefined();
});

test('calls function with object as context', () => {
  const obj = {
    val: 100,
    getVal() {
      return this.val;
    }
  };
  expect(result(obj, 'getVal')).toBe(100);
});
