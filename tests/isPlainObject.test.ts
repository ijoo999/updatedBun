import { isPlainObject } from '../lang/isPlainObject';
import { test, expect } from 'bun:test';


test('plain objects', () => {
  expect(isPlainObject({})).toBe(true);
  expect(isPlainObject({ a: 1 })).toBe(true);
  expect(isPlainObject(Object.create(Object.prototype))).toBe(true);
  expect(isPlainObject(Object.create(null))).toBe(true);
});

test('non-plain objects', () => {
  class Foo {}
  expect(isPlainObject([])).toBe(false);
  expect(isPlainObject(() => {})).toBe(false);
  expect(isPlainObject(new Foo())).toBe(false);
  expect(isPlainObject(null)).toBe(false);
  expect(isPlainObject('string')).toBe(false);
  expect(isPlainObject(123)).toBe(false);
});
