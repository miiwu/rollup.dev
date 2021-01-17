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

-   <details>
    <summary>build</summary>

    ```js
    > Executing task: npm run build <
    ```


    > rollup.dev@1.0.0 build
    > rollup -c
    
    cleared:  ${Your Workspace Folder}\rollup.dev\dist
    
    src/raw.main.js → dist/raw.main.src.ncp.mjs, dist/raw.main.src.ncp.cjs, dist/raw.main.min.ncp.mjs, dist/raw.main.min.ncp.cjs...
    ┌────────────────────────────────────────────┐
    │                                            │
    │   Destination: dist/raw.main.src.ncp.mjs   │
    │   Bundle Size:  218 B                      │
    │   Minified Size:  163 B                    │
    │   Gzipped Size:  127 B                     │
    │                                            │
    └────────────────────────────────────────────┘
    ┌────────────────────────────────────────────┐
    │                                            │
    │   Destination: dist/raw.main.src.ncp.cjs   │
    │   Bundle Size:  943 B                      │
    │   Minified Size:  456 B                    │
    │   Gzipped Size:  279 B                     │
    │                                            │
    └────────────────────────────────────────────┘
    ┌────────────────────────────────────────────┐
    │                                            │
    │   Destination: dist/raw.main.min.ncp.mjs   │
    │   Bundle Size:  93 B                       │
    │   Minified Size:  92 B                     │
    │   Gzipped Size:  100 B                     │
    │                                            │
    └────────────────────────────────────────────┘
    ┌────────────────────────────────────────────┐
    │                                            │
    │   Destination: dist/raw.main.min.ncp.cjs   │
    │   Bundle Size:  457 B                      │
    │   Minified Size:  456 B                    │
    │   Gzipped Size:  279 B                     │
    │                                            │
    └────────────────────────────────────────────┘
    created dist/raw.main.src.ncp.mjs, dist/raw.main.src.ncp.cjs, dist/raw.main.min.ncp.mjs, dist/raw.main.min.ncp.cjs in 1.5s
    
    src/api.main.js → dist/api.main.src.ncp.mjs, dist/api.main.src.ncp.cjs, dist/api.main.min.ncp.mjs, dist/api.main.min.ncp.cjs...
    ┌────────────────────────────────────────────┐
    │                                            │
    │   Destination: dist/api.main.src.ncp.mjs   │
    │   Bundle Size:  924 B                      │
    │   Minified Size:  631 B                    │
    │   Gzipped Size:  343 B                     │
    │                                            │
    └────────────────────────────────────────────┘
    ┌────────────────────────────────────────────┐
    │                                            │
    │   Destination: dist/api.main.src.ncp.cjs   │
    │   Bundle Size:  1.68 KB                    │
    │   Minified Size:  789 B                    │
    │   Gzipped Size:  429 B                     │
    │                                            │
    └────────────────────────────────────────────┘
    ┌────────────────────────────────────────────┐
    │                                            │
    │   Destination: dist/api.main.min.ncp.mjs   │
    │   Bundle Size:  426 B                      │
    │   Minified Size:  421 B                    │
    │   Gzipped Size:  267 B                     │
    │                                            │
    └────────────────────────────────────────────┘
    ┌────────────────────────────────────────────┐
    │                                            │
    │   Destination: dist/api.main.min.ncp.cjs   │
    │   Bundle Size:  790 B                      │
    │   Minified Size:  785 B                    │
    │   Gzipped Size:  429 B                     │
    │                                            │
    └────────────────────────────────────────────┘
    created dist/api.main.src.ncp.mjs, dist/api.main.src.ncp.cjs, dist/api.main.min.ncp.mjs, dist/api.main.min.ncp.cjs in 622ms
    
    src/raw.main.js → dist/raw.main.src.mjs, dist/raw.main.src.cjs, dist/raw.main.min.mjs, dist/raw.main.min.cjs...
    ┌────────────────────────────────────────┐
    │                                        │
    │   Destination: dist/raw.main.src.mjs   │
    │   Bundle Size:  218 B                  │
    │   Minified Size:  163 B                │
    │   Gzipped Size:  127 B                 │
    │                                        │
    └────────────────────────────────────────┘
    ┌────────────────────────────────────────┐
    │                                        │
    │   Destination: dist/raw.main.src.cjs   │
    │   Bundle Size:  846 B                  │
    │   Minified Size:  418 B                │
    │   Gzipped Size:  270 B                 │
    │                                        │
    └────────────────────────────────────────┘
    ┌────────────────────────────────────────┐
    │                                        │
    │   Destination: dist/raw.main.min.mjs   │
    │   Bundle Size:  93 B                   │
    │   Minified Size:  92 B                 │
    │   Gzipped Size:  100 B                 │
    │                                        │
    └────────────────────────────────────────┘
    ┌────────────────────────────────────────┐
    │                                        │
    │   Destination: dist/raw.main.min.cjs   │
    │   Bundle Size:  419 B                  │
    │   Minified Size:  418 B                │
    │   Gzipped Size:  270 B                 │
    │                                        │
    └────────────────────────────────────────┘
    created dist/raw.main.src.mjs, dist/raw.main.src.cjs, dist/raw.main.min.mjs, dist/raw.main.min.cjs in 630ms
    
    src/api.main.js → dist/api.main.src.mjs, dist/api.main.src.cjs, dist/api.main.min.mjs, dist/api.main.min.cjs...
    ┌────────────────────────────────────────┐
    │                                        │
    │   Destination: dist/api.main.src.mjs   │
    │   Bundle Size:  18.82 KB               │
    │   Minified Size:  8.63 KB              │
    │   Gzipped Size:  3.07 KB               │
    │                                        │
    └────────────────────────────────────────┘
    ┌────────────────────────────────────────┐
    │                                        │
    │   Destination: dist/api.main.src.cjs   │
    │   Bundle Size:  21.46 KB               │
    │   Minified Size:  6.09 KB              │
    │   Gzipped Size:  2.64 KB               │
    │                                        │
    └────────────────────────────────────────┘
    ┌────────────────────────────────────────┐
    │                                        │
    │   Destination: dist/api.main.min.mjs   │
    │   Bundle Size:  5.79 KB                │
    │   Minified Size:  5.7 KB               │
    │   Gzipped Size:  2.49 KB               │
    │                                        │
    └────────────────────────────────────────┘
    ┌────────────────────────────────────────┐
    │                                        │
    │   Destination: dist/api.main.min.cjs   │
    │   Bundle Size:  6.09 KB                │
    │   Minified Size:  6.02 KB              │
    │   Gzipped Size:  2.6 KB                │
    │                                        │
    └────────────────────────────────────────┘
    created dist/api.main.src.mjs, dist/api.main.src.cjs, dist/api.main.min.mjs, dist/api.main.min.cjs in 1.6s
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
