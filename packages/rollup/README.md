## Installation

```bash
npm install --save-dev @unlikelystudio/bases-rollup

# or

yarn add -D @unlikelystudio/bases-rollup
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
