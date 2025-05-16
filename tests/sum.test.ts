import { sum } from '..//math/sum';
import { test, expect } from 'bun:test';

test('sums flat list of numbers', () => {
  expect(sum(1, 2, 3)).toBe(6);
});

test('sums nested arrays of numbers', () => {
  expect(sum([1, [2, [3]]])).toBe(6);
});

test('sums mixed input of arrays and values', () => {
  expect(sum([1, 2], 3, [4])).toBe(10);
});

test('ignores non-numeric values', () => {
  expect(sum([1, 'a', null, [2, undefined], () => {}, 3])).toBe(6);
});

test('returns 0 if no valid numbers are present', () => {
  expect(sum('a', null, undefined)).toBe(0);
});
