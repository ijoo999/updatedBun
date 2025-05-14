import { noop } from '../function/noop';
import { test, expect } from 'bun:test';

test('returns undefined', () => {
  expect(noop()).toBeUndefined();
});

test('ignores any arguments', () => {
  expect(noop(1, 'hello', { a: 1 })).toBeUndefined();
});
