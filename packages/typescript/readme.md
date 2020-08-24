# Typescript [![npm version](https://badge.fury.io/js/%40unlikelystudio%2Fbases-typescript.svg)](https://badge.fury.io/js/%40unlikelystudio%2Fbases-typescript)

## Installation

```bash
npm install --save-dev @unlikelystudio/bases-typescript

# or

yarn add -D @unlikelystudio/bases-typescript
```

In your tsconfig.json

```json
{
  "extends": "@unlikelystudio/bases-typescript/tsconfig-backend.json",

  "include": ["src/**/*.ts", "src/types/**/*.d.ts"],
  "exclude": ["node_modules", "**/node_modules/*"]
}
```
