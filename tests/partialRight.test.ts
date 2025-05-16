import { partialRight } from '../function/partialRight';
import { test, expect } from 'bun:test';


test('partially applies arguments to the end of the function call', () => {
  function greet(first: string, last: string) {
    return `${first} ${last}`;
  }

  const name = partialRight(greet, 'Woodward');
  expect(name('Brian')).toBe('Brian Woodward');
});

test('binds context if object is passed as first argument', () => {
  const ctx = { title: 'Dr.' };
  function label(this: any, first: string, last: string) {
    return `${this.title} ${first} ${last}`;
  }

  const tagged = partialRight(ctx, label, 'Strange');
  expect(tagged('Stephen')).toBe('Dr. Stephen Strange');
});
