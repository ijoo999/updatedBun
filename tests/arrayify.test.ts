import { arrayify } from '../array/arrayify';
import { test, expect } from 'bun:test';

test('wraps non-array values in an array', () => {
  expect(arrayify('a')).toEqual(['a']);
  expect(arrayify(123)).toEqual([123]);
});

test('returns arrays unchanged', () => {
  expect(arrayify(['a'])).toEqual(['a']);
});
