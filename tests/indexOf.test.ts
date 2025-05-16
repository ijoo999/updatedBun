import { indexOf } from '../array/indexOf';
import { test, expect } from 'bun:test';



test('finds index of element', () => {
  expect(indexOf(['a', 'b', 'c'], 'b')).toBe(1);
  expect(indexOf(['a', 'b', 'c'], 'x')).toBe(-1);
});

test('respects start index', () => {
  expect(indexOf(['a', 'b', 'a', 'b'], 'b', 2)).toBe(3);
  expect(indexOf(['a', 'b', 'a', 'b'], 'a', 2)).toBe(2);
});

test('supports negative start index', () => {
  expect(indexOf(['a', 'b', 'a', 'b'], 'b', -2)).toBe(3);
});

test('throws if input is not an array', () => {
  // @ts-expect-error
  expect(() => indexOf(null, 'a')).toThrow('indexOf() expects the first argument to be an array.');
});
