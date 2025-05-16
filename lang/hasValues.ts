/**
 * Returns true if the input has any meaningful value.
 */
export function hasValues(input: unknown): boolean {
  if (input == null) return false;

  if (typeof input === 'string' || Array.isArray(input)) {
    return input.length > 0;
  }

  if (typeof input === 'object') {
    return Object.keys(input as object).length > 0;
  }

  return true; // covers booleans, numbers, functions, symbols, etc.
}
