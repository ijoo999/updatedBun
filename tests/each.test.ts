import { each } from '../array/each';
import { test, expect } from 'bun:test';

test('calls fn on each element and returns transformed array', () => {
  const result = each(['a', 'b', 'c'], (el) => el + el);
  expect(result).toEqual(['aa', 'bb', 'cc']);
});

test('supports index argument', () => {
  const result = each(['a', 'b', 'c'], (el, i) => `${i}${el}`);
  expect(result).toEqual(['0a', '1b', '2c']);
});

test('throws if input is not an array', () => {
  // @ts-expect-error
  expect(() => each(null, () => {})).toThrow('each() expects the first argument to be an array.');
});

test('uses optional thisArg', () => {
  const ctx = { prefix: 'x' };
  const result = each(['a', 'b'], function (this: any, el) {
    return this.prefix + el;
  }, ctx);
  expect(result).toEqual(['xa', 'xb']);
});
