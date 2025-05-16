import { typeOf } from '../lang/typeOf';
import { test, expect } from 'bun:test';


test('detects core types', () => {
  expect(typeOf([])).toBe('array');
  expect(typeOf({})).toBe('object');
  expect(typeOf(null)).toBe('null');
  expect(typeOf(undefined)).toBe('undefined');
  expect(typeOf(123)).toBe('number');
  expect(typeOf('hi')).toBe('string');
  expect(typeOf(true)).toBe('boolean');
  expect(typeOf(Symbol('s'))).toBe('symbol');
  expect(typeOf(() => {})).toBe('function');
});

test('detects special objects', () => {
  expect(typeOf(new Date())).toBe('date');
  expect(typeOf(new RegExp('x'))).toBe('regexp');
  expect(typeOf(new Map())).toBe('map');
  expect(typeOf(new Set())).toBe('set');
});
