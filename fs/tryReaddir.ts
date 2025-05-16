import { readdirSync } from 'fs';

/**
 * Attempts to read the contents of a directory.
 * Returns an empty array if the directory does not exist or an error occurs.
 */
export function tryReaddir(dir: string): string[] {
  try {
    return readdirSync(dir);
  } catch {
    return [];
  }
}
