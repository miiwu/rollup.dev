# rollup.dev

Try on rollup.

## 用到的插件

-   @rollup/plugin-babel
-   @rollup/plugin-commonjs
-   @rollup/plugin-eslint
-   @rollup/plugin-node-resolve
-   rollup-plugin-clear
-   rollup-plugin-filesize
-   rollup-plugin-prettier
-   rollup-plugin-terser

## 输出结果

> Node.js v15.6.0

-   <details>
    <summary>build</summary>

    > `pure` 模式下的 `raw.main.src.mjs`，可以看出 `treeshake` 有作用

    > `commonjs` & `resolve` 这俩插件一般成对使用。

    ```js
    > Executing task: npm run build <

    > rollup.dev@1.0.0 build
    > rollup -c

    cleared:  ${Your Workspace Folder}\rollup.dev\dist

    src/raw.main.js → dist/raw.main.src.mjs, dist/raw.main.src.cjs, dist/raw.main.min.mjs, dist/raw.main.min.cjs...
    ┌────────────────────────────────────────┐
    │                                        │
    │   Destination: dist/raw.main.src.mjs   │
    │   Bundle Size:  210 B                  │
    │   Minified Size:  171 B                │
    │   Gzipped Size:  130 B                 │
    │                                        │
    └────────────────────────────────────────┘
    ┌────────────────────────────────────────┐
    │                                        │
    │   Destination: dist/raw.main.src.cjs   │
    │   Bundle Size:  830 B                  │
    │   Minified Size:  424 B                │
    │   Gzipped Size:  274 B                 │
    │                                        │
    └────────────────────────────────────────┘
    ┌────────────────────────────────────────┐
    │                                        │
    │   Destination: dist/raw.main.min.mjs   │
    │   Bundle Size:  99 B                   │
    │   Minified Size:  98 B                 │
    │   Gzipped Size:  103 B                 │
    │                                        │
    └────────────────────────────────────────┘
    ┌────────────────────────────────────────┐
    │                                        │
    │   Destination: dist/raw.main.min.cjs   │
    │   Bundle Size:  425 B                  │
    │   Minified Size:  424 B                │
    │   Gzipped Size:  274 B                 │
    │                                        │
    └────────────────────────────────────────┘
    created dist/raw.main.src.mjs, dist/raw.main.src.cjs, dist/raw.main.min.mjs, dist/raw.main.min.cjs in 738ms

    src/api.main.js → dist/api.main.src.mjs, dist/api.main.src.cjs, dist/api.main.min.mjs, dist/api.main.min.cjs...
    ┌────────────────────────────────────────┐
    │                                        │
    │   Destination: dist/api.main.src.mjs   │
    │   Bundle Size:  215 B                  │
    │   Minified Size:  178 B                │
    │   Gzipped Size:  138 B                 │
    │                                        │
    └────────────────────────────────────────┘
    ┌────────────────────────────────────────┐
    │                                        │
    │   Destination: dist/api.main.src.cjs   │
    │   Bundle Size:  835 B                  │
    │   Minified Size:  448 B                │
    │   Gzipped Size:  287 B                 │
    │                                        │
    └────────────────────────────────────────┘
    ┌────────────────────────────────────────┐
    │                                        │
    │   Destination: dist/api.main.min.mjs   │
    │   Bundle Size:  123 B                  │
    │   Minified Size:  116 B                │
    │   Gzipped Size:  120 B                 │
    │                                        │
    └────────────────────────────────────────┘
    ┌────────────────────────────────────────┐
    │                                        │
    │   Destination: dist/api.main.min.cjs   │
    │   Bundle Size:  449 B                  │
    │   Minified Size:  442 B                │
    │   Gzipped Size:  286 B                 │
    │                                        │
    └────────────────────────────────────────┘
    created dist/api.main.src.mjs, dist/api.main.src.cjs, dist/api.main.min.mjs, dist/api.main.min.cjs in 735ms

    src/raw.main.js → dist/raw.main.src.babel.mjs, dist/raw.main.src.babel.cjs, dist/raw.main.min.babel.mjs, dist/raw.main.min.babel.cjs...
    ┌──────────────────────────────────────────────┐
    │                                              │
    │   Destination: dist/raw.main.src.babel.mjs   │
    │   Bundle Size:  218 B                        │
    │   Minified Size:  163 B                      │
    │   Gzipped Size:  127 B                       │
    │                                              │
    └──────────────────────────────────────────────┘
    ┌──────────────────────────────────────────────┐
    │                                              │
    │   Destination: dist/raw.main.src.babel.cjs   │
    │   Bundle Size:  945 B                        │
    │   Minified Size:  458 B                      │
    │   Gzipped Size:  280 B                       │
    │                                              │
    └──────────────────────────────────────────────┘
    ┌──────────────────────────────────────────────┐
    │                                              │
    │   Destination: dist/raw.main.min.babel.mjs   │
    │   Bundle Size:  93 B                         │
    │   Minified Size:  92 B                       │
    │   Gzipped Size:  100 B                       │
    │                                              │
    └──────────────────────────────────────────────┘
    ┌──────────────────────────────────────────────┐
    │                                              │
    │   Destination: dist/raw.main.min.babel.cjs   │
    │   Bundle Size:  459 B                        │
    │   Minified Size:  458 B                      │
    │   Gzipped Size:  280 B                       │
    │                                              │
    └──────────────────────────────────────────────┘
    created dist/raw.main.src.babel.mjs, dist/raw.main.src.babel.cjs, dist/raw.main.min.babel.mjs, dist/raw.main.min.babel.cjs in 986ms

    src/api.main.js → dist/api.main.src.babel.mjs, dist/api.main.src.babel.cjs, dist/api.main.min.babel.mjs, dist/api.main.min.babel.cjs...
    ┌──────────────────────────────────────────────┐
    │                                              │
    │   Destination: dist/api.main.src.babel.mjs   │
    │   Bundle Size:  18.82 KB                     │
    │   Minified Size:  8.63 KB                    │
    │   Gzipped Size:  3.07 KB                     │
    │                                              │
    └──────────────────────────────────────────────┘
    ┌──────────────────────────────────────────────┐
    │                                              │
    │   Destination: dist/api.main.src.babel.cjs   │
    │   Bundle Size:  21.56 KB                     │
    │   Minified Size:  6.13 KB                    │
    │   Gzipped Size:  2.65 KB                     │
    │                                              │
    └──────────────────────────────────────────────┘
    ┌──────────────────────────────────────────────┐
    │                                              │
    │   Destination: dist/api.main.min.babel.mjs   │
    │   Bundle Size:  5.79 KB                      │
    │   Minified Size:  5.7 KB                     │
    │   Gzipped Size:  2.49 KB                     │
    │                                              │
    └──────────────────────────────────────────────┘
    ┌──────────────────────────────────────────────┐
    │                                              │
    │   Destination: dist/api.main.min.babel.cjs   │
    │   Bundle Size:  6.13 KB                      │
    │   Minified Size:  6.06 KB                    │
    │   Gzipped Size:  2.61 KB                     │
    │                                              │
    └──────────────────────────────────────────────┘
    created dist/api.main.src.babel.mjs, dist/api.main.src.babel.cjs, dist/api.main.min.babel.mjs, dist/api.main.min.babel.cjs in 1.6s
    ```

    </details>

-   <details>
    <summary>esm.test</summary>

    ```js
    > Executing task: npm run esm.test <

    > rollup.dev@1.0.0 esm.test
    > node ./test/demo.mjs

    { run: [Function: r] } { run: [Function: r] }
    sup string sub method
    sup string sub method
    ```

    </details>

-   <details>
    <summary>cjs.test</summary>

    ```js
    > Executing task: npm run cjs.test <

    > rollup.dev@1.0.0 cjs.test
    > node ./test/demo.cjs

    { default: { run: [Function: Tt] }, run: [Function: Tt] } { default: { run: [Function: Tt] }, run: [Function: Tt] }
    sup string sub method
    sup string sub method
    ```

    </details>
