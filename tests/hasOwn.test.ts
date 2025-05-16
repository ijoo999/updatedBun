import { hasOwn } from '../object/hasOwn';
import { test, expect } from 'bun:test';

test('returns true for own property', () => {
  const obj = { x: 1 };
  expect(hasOwn(obj, 'x')).toBe(true);
});

test('returns false for inherited property', () => {
  const base = { x: 1 };
  const obj = Object.create(base);
  expect(hasOwn(obj, 'x')).toBe(false);
});

test('works with symbols', () => {
  const sym = Symbol('s');
  const obj = { [sym]: 123 };
  expect(hasOwn(obj, sym)).toBe(true);
});
