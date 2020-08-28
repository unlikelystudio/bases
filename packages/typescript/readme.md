# Typescript [![npm version](https://badge.fury.io/js/%40unlikelystudio%2Fbases-typescript.svg)](https://badge.fury.io/js/%40unlikelystudio%2Fbases-typescript)

## Installation

```bash
npm install --save-dev @unlikelystudio/bases-typescript

# or

yarn add -D @unlikelystudio/bases-typescript
```

### Backend / Library

In your tsconfig.json

```json
{
  "extends": "@unlikelystudio/bases-typescript/library.json",

  "include": ["src/**/*.ts", "src/types/**/*.d.ts"],
  "exclude": ["node_modules", "**/node_modules/*"]
}
```

### Dom

In your tsconfig.json

```json
{
  "extends": "@unlikelystudio/bases-typescript/dom.json",

  "include": ["src/**/*.ts", "src/types/**/*.d.ts"],
  "exclude": ["node_modules", "**/node_modules/*"]
}
```
