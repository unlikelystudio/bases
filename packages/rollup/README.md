## Installation

```bash
npm install --save-dev @unlikelystudio/rollup-config

# or

yarn add -D @unlikelystudio/rollup-config
```

### In your package.json

```json
{
  "scripts": {
    "build": "rollup -c node:@unlikelystudio/rollup-config",
    "dev": "build -w"
  }
}
```
