import { difference } from '../array/difference';
import { test, expect } from 'bun:test';


test('returns difference between two arrays', () => {
  const result = difference(['a', 'b', 'c', 'd'], ['b', 'c']);
  expect(result).toEqual(['a', 'd']);
});

test('returns all items if no others provided', () => {
  const result = difference(['a', 'b', 'c']);
  expect(result).toEqual(['a', 'b', 'c']);
});

test('throws on non-array input', () => {
  // @ts-expect-error
  expect(() => difference(null)).toThrow();
});
