import { identity } from '../function/identity';
import { test, expect } from 'bun:test';


test('returns same number', () => {
  expect(identity(5)).toBe(5);
});

test('returns same string', () => {
  expect(identity('hello')).toBe('hello');
});

test('returns same object reference', () => {
  const obj = { a: 1 };
  expect(identity(obj)).toBe(obj);
});
