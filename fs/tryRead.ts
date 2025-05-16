import { readFileSync } from 'fs';

/**
 * Attempts to read the contents of a file as UTF-8.
 * Returns `null` if the file doesn't exist or an error is thrown.
 */
export function tryRead(filepath: string): string | null {
  try {
    return readFileSync(filepath, 'utf8');
  } catch {
    return null;
  }
}
