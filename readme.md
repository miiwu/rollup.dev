# rollup.dev
Try on rollup.

## 用到的插件

- @rollup/plugin-babel
- @rollup/plugin-commonjs
- @rollup/plugin-eslint
- @rollup/plugin-node-resolve
- rollup-plugin-clear
- rollup-plugin-filesize
- rollup-plugin-prettier
- rollup-plugin-terser

## 输出结果

```js
> Executing task: npm run build <

> rollup.dev@1.0.0 build
> rollup -c

cleared:  ${Your Workspace Folder}\dist

src/main.js → dist/main.src.js, dist/main.min.mjs, dist/main.min.cjs...
┌───────────────────────────────────┐
│                                   │
│   Destination: dist/main.src.js   │
│   Bundle Size:  198 B             │
│   Minified Size:  143 B           │
│   Gzipped Size:  111 B            │
│                                   │
└───────────────────────────────────┘
┌────────────────────────────────────┐
│                                    │
│   Destination: dist/main.min.mjs   │
│   Bundle Size:  141 B              │
│   Minified Size:  140 B            │
│   Gzipped Size:  113 B             │
│                                    │
└────────────────────────────────────┘
┌────────────────────────────────────┐
│                                    │
│   Destination: dist/main.min.cjs   │
│   Bundle Size:  425 B              │
│   Minified Size:  424 B            │
│   Gzipped Size:  270 B             │
│                                    │
└────────────────────────────────────┘
created dist/main.src.js, dist/main.min.mjs, dist/main.min.cjs in 1.2s

src/sub.js → dist/sub.src.js, dist/sub.min.mjs, dist/sub.min.cjs...
┌──────────────────────────────────┐
│                                  │
│   Destination: dist/sub.src.js   │
│   Bundle Size:  101 B            │
│   Minified Size:  77 B           │
│   Gzipped Size:  74 B            │
│                                  │
└──────────────────────────────────┘
┌───────────────────────────────────┐
│                                   │
│   Destination: dist/sub.min.mjs   │
│   Bundle Size:  79 B              │
│   Minified Size:  78 B            │
│   Gzipped Size:  80 B             │
│                                   │
└───────────────────────────────────┘
┌───────────────────────────────────┐
│                                   │
│   Destination: dist/sub.min.cjs   │
│   Bundle Size:  364 B             │
│   Minified Size:  363 B           │
│   Gzipped Size:  248 B            │
│                                   │
└───────────────────────────────────┘
created dist/sub.src.js, dist/sub.min.mjs, dist/sub.min.cjs in 587ms
```

