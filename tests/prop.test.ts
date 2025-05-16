import { prop } from '../object/prop';
import { test, expect } from 'bun:test';

test('returns property value from object', () => {
  const getName = prop('name');
  expect(getName({ name: 'Alice' })).toBe('Alice');
});

test('returns undefined for missing key', () => {
  const getAge = prop('age');
  expect(getAge({ name: 'Bob' })).toBeUndefined();
});

test('handles null or undefined objects safely', () => {
  const getX = prop('x');
  // @ts-expect-error
  expect(getX(null)).toBeUndefined();
  // @ts-expect-error
  expect(getX(undefined)).toBeUndefined();
});
