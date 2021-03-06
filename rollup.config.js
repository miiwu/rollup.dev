import clear from "rollup-plugin-clear";
import babel from "@rollup/plugin-babel";
import eslint from "@rollup/plugin-eslint";
import prettier from "rollup-plugin-prettier";
import filesize from "rollup-plugin-filesize";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

import { terser } from "rollup-plugin-terser";

/**
 * Generate the rollup configuration
 * @param {array} input 入口配置数组
 * @param {array} output 出口配置数组
 * @param {array} plugins 共有的入口插件数组
 * @example * - optional | **text** - emphasize
 * |generate(
 * |    [
 * |        {
 * |            // 完整的入口文件为："src/" + this.name + this.file
 * |            name: "main", // {string} 入口文件名
 * |            file: ".js", // {string} 入口文件类型
 * |            spread: { external: [""] }, // {object} * 入口配置的其余部分，会使用展开符展开
 * |            tag(array) { return ["tag.", ...array]; }, // {function} * 修正出口配置的文件名
 * |            plugins(array) { return [...array, commonjs()]; }, // {function} * 修正入口配置的插件，有时候需要注意**顺序**
 * |        }
 * |    ], // input
 * |    [
 * |        {
 * |            // 完整的出口文件为："dist/" + ([input.name + this.name + this.file]^ | input.tag([...]^))
 * |            name: ".src", // {string} 出口文件名的后半部分
 * |            file: `.mjs`, // {string} 出口文件类型
 * |            format: "esm", // {string} * 出口文件模块类型
 * |            ... // {any} * 出口配置的其余部分，自接写即可
 * |        },
 * |    ], // output
 * |    [
 * |        ... // {any} * 插件配置，自接写即可
 * |    ], // plugins
 * |)
 */

function generate(input, output, plugins) {
    function insert(source, callback) {
        if ("function" === typeof callback) return callback(source);
        return source;
    } // 插入回调函数

    input.forEach((input, index, array) => {
        let temp = [];

        output.forEach((output) => {
            temp.push(
                Object.assign({}, output, {
                    name: insert([input.name, output.name], input.tag).join(""),
                    file: insert(["dist/", input.name, output.name, output.file], input.tag).join(""),
                })
            );
        }); // 替换 output

        array[index] = {
            input: `src/${input.name}${input.file}`,
            output: temp,
            plugins: insert(plugins || [], input.plugins),
            ...(input.spread || {}),
        }; // 替换 input
    }); // 迭代 source

    return input;
}

export default generate(
    [
        {
            name: "raw.main",
            file: ".js",
            tag(array) {
                array.splice(3, 0, ".ncp");
                return array;
            },
        }, // ncp - no commonjs plugin
        {
            name: "api.main",
            file: ".js",
            tag(array) {
                array.splice(3, 0, ".ncp");
                return array;
            },
        }, // ncp - no commonjs plugin
        {
            name: "raw.main",
            file: ".js",
            plugins(array) {
                return [...array, commonjs()];
            },
        },
        {
            name: "api.main",
            file: ".js",
            plugins(array) {
                return [...array, commonjs()];
            },
        },
    ],
    [
        { name: ".src", file: `.mjs`, format: "esm", plugins: [prettier({ parser: "babel" })] },
        { name: ".src", file: `.cjs`, format: "umd", plugins: [prettier({ parser: "babel" })], exports: "named" },
        { name: ".min", file: `.mjs`, format: "esm", plugins: [terser()] },
        { name: ".min", file: `.cjs`, format: "umd", plugins: [terser()], exports: "named" },
    ],
    [
        clear({
            targets: ["./dist"],
        }),
        babel({ babelHelpers: "runtime", exclude: ["node_modules/**"] }),
        eslint({ fix: true }),
        filesize(),
        resolve(),
    ]
);
