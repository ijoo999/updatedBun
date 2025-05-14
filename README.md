# utils-modern

A modern, minimal rewrite of outdated JavaScript utilities originally from `jonschlinkert/utils`.  
Written in TypeScript, tested and bundled using Bun.

## Features

- Type-safe utility functions
- No external dependencies
- Tree-shakeable ES modules
- Tested with Bun

## Included Functions

- `compact` – removes falsey values from an array
- `difference` – computes the difference between arrays
- `identity` – returns the input value
- `noop` – no-operation function
- `isEmpty` – checks if a value is empty
- `isPlainObject` – checks if a value is a plain object

## Build Instructions

bun build src/utils/index.ts --outdir dist --minify --format esm

## Test Instructions

bun test


