import { map } from '../array/map';
import { test, expect } from 'bun:test';

test('maps array with transformation', () => {
  const result = map(['a', 'b', 'c'], (el) => el + el);
  expect(result).toEqual(['aa', 'bb', 'cc']);
});

test('maps array with index included', () => {
  const result = map(['a', 'b', 'c'], (el, i) => `${i}${el}`);
  expect(result).toEqual(['0a', '1b', '2c']);
});

test('supports optional thisArg', () => {
  const ctx = { prefix: '_' };
  const result = map(['a', 'b'], function (this: any, el, i) {
    return this.prefix + i + el;
  }, ctx);
  expect(result).toEqual(['_0a', '_1b']);
});

test('throws if input is not an array', () => {
  // @ts-expect-error
  expect(() => map(null, () => {})).toThrow('map() expects the first argument to be an array.');
});
