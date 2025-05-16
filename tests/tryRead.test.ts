import { tryRead } from '../fs/tryRead';
import { test, expect } from 'bun:test';
import { writeFileSync, unlinkSync } from 'fs';

const TEST_FILE = './temp_test.txt';

test('reads file contents correctly', () => {
  const result = tryRead(TEST_FILE);
  expect(result).toBe('hello world');
});

test('returns null if file does not exist', () => {
    expect(tryRead('./nonexistent.txt')).toBeNull();
});

