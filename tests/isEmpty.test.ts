import { isEmpty } from '../lang/isEmpty';
import { test, expect } from 'bun:test';


test('empty string', () => {
  expect(isEmpty('')).toBe(true);
});

test('non-empty string', () => {
  expect(isEmpty('a')).toBe(false);
});

test('empty array', () => {
  expect(isEmpty([])).toBe(true);
});

test('non-empty array', () => {
  expect(isEmpty(['a'])).toBe(false);
});

test('empty object', () => {
  expect(isEmpty({})).toBe(true);
});

test('non-empty object', () => {
  expect(isEmpty({ a: 1 })).toBe(false);
});

test('null and undefined', () => {
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(undefined)).toBe(true);
});

test('numbers, booleans, functions', () => {
  expect(isEmpty(0)).toBe(false);
  expect(isEmpty(false)).toBe(false);
  expect(isEmpty(() => {})).toBe(false);
});
