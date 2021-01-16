import filesize from "rollup-plugin-filesize";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import clear from "rollup-plugin-clear";

const isProd = process.env.NODE_ENV === "production";

function generate(output) {
    output.forEach((element, index, array) => {
        array[index].file = `dist/${element.name}.js`;
    });

    return {
        input: "src/main.js",
        output,
        plugins: [
            resolve(),
            commonjs(),
            filesize(),
            babel({ babelHelpers: "runtime", exclude: ["node_modules/**"] }),
            clear({
                targets: ["./dist"],
                watch: true, // default: false
            }),
        ],
    };
}

export default {
    ...generate([
        { name: "bundle.src", format: "umd" },
        { name: "bundle.min", format: "umd" },
    ]),
};
