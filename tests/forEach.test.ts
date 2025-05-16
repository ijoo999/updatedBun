import { forEach } from '../array/forEach';
import { test, expect } from 'bun:test';

test('returns transformed values using forEach alias', () => {
  const result = forEach(['a', 'b', 'c'], (el) => el + el);
  expect(result).toEqual(['aa', 'bb', 'cc']);
});

test('supports index in callback', () => {
  const result = forEach(['a', 'b', 'c'], (el, i) => `${i}${el}`);
  expect(result).toEqual(['0a', '1b', '2c']);
});

test('supports thisArg', () => {
  const ctx = { prefix: 'X' };
  const result = forEach(['a', 'b'], function (this: any, el) {
    return this.prefix + el;
  }, ctx);
  expect(result).toEqual(['Xa', 'Xb']);
});
