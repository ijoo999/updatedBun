import { tryRequire } from '../fs/tryRequire';
import { writeFileSync, rmSync } from 'fs';
import { test, expect } from 'bun:test';

const TEST_FILE = './temp_mod.js';

test('requires an existing module file', () => {
  const result = tryRequire(TEST_FILE) as { foo: number };
  expect(result?.foo).toBe(42);
});

test('returns null if file does not exist', () => {
  expect(tryRequire('./nonexistent.js')).toBeNull();
});
