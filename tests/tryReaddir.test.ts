import { tryReaddir } from '../fs/tryReaddir';
import { mkdirSync, writeFileSync, rmSync } from 'fs';
import { test, expect } from 'bun:test';

const TEST_DIR = './temp_test_dir';

test('reads directory contents', () => {
  const files = tryReaddir(TEST_DIR);
  expect(files).toContain('file.txt');
});

test('returns empty array for nonexistent dir', () => {
  expect(tryReaddir('./nonexistent')).toEqual([]);
});
