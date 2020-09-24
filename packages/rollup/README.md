## Installation

```bash
npm install --save-dev @unlikelystudio/bases-rollup rollup rollup-plugin-peer-deps-external typescript @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-typescript2

# or

yarn add -D @unlikelystudio/bases-rollup rollup rollup-plugin-peer-deps-external typescript @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-typescript2
```

### In your package.json

```json
{
  "main": "build/index.js",
  "module": "build/index.es.js",
  "scripts": {
    "build": "rollup -c node:@unlikelystudio/bases-rollup",
    "dev": "rollup -c node:@unlikelystudio/bases-rollup -w"
  }
}
```
