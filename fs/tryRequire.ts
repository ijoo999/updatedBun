import { resolve } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/**
 * Attempts to require a module or file, returning `null` on failure.
 */
export function tryRequire(filepath: string): unknown {
  try {
    return require(resolve(filepath));
  } catch {
    return null;
  }
}
