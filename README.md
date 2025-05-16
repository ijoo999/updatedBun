# utils-modern

A modern, minimal rewrite of outdated JavaScript utilities originally from `jonschlinkert/utils`.  
Written in TypeScript, tested and bundled using Bun.

## Features

- Type-safe utility functions
- No external dependencies
- Tree-shakeable ES modules
- Tested with Bun

## Build Instructions

```bash
bun build src/utils/index.ts --outdir dist --minify --format esm
