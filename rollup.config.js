import clear from "rollup-plugin-clear";
import babel from "@rollup/plugin-babel";
import filesize from "rollup-plugin-filesize";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

import { terser } from "rollup-plugin-terser";

function generate(source, config) {
    config.forEach((element, index, array) => {
        array[index].file = ["dist/", element.name, element.file]; // ["dist/", ".src", ".js"]
        array[index].name = [element.name]; // [".src"]
    }); // 预处理 config

    source.forEach(function (input, index, array) {
        let output = [];

        config.forEach(function (element, index, array) {
            element.name.splice(0, 0, input.name);
            element.file.splice(1, 0, input.name);

            output.push(Object.assign({}, element, { name: element.name.join(""), file: element.file.join("") }));

            element.name.splice(0, 1);
            element.file.splice(1, 1);
        }); // 替换 source

        array[index] = {
            input: `src/${input.name}${input.file}`,
            output,
            plugins: [
                clear({
                    targets: ["./dist"],
                }),
                babel({ babelHelpers: "runtime", exclude: ["node_modules/**"] }),
                filesize(),
                commonjs(),
                resolve(),
            ],
        };
    }); // 迭代 source

    return source;
}

export default generate(
    [
        { name: "main", file: ".js" },
        { name: "sub", file: ".js" },
    ],
    [
        { name: ".src", file: `.js`, format: "umd" },
        { name: ".min", file: `.js`, format: "umd", plugins: [terser()] },
    ]
);
