/**
 * Returns `true` if the given `value` exists in the `target`.
 */
export function any(value: unknown, target: unknown): boolean {
  if (Array.isArray(target) || typeof target === 'string') {
    return target.includes(value as never);
  }

  if (typeof target === 'object' && target !== null) {
    return Object.values(target).includes(value);
  }

  return false;
}
