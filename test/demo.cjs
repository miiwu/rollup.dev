const main = require("../dist/main.min.cjs");
const sub = require("../dist/sub.min.cjs");

console.log(main, sub);

console.log(main.method());

console.log(sub.string);
