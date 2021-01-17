const raw = require("../dist/api.main.min.cjs");
const api = require("../dist/api.main.min.cjs");

console.log(raw, api);

console.log(raw.run());

console.log(api.run());
