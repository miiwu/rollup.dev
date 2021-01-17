import { string } from "./sup.js"; // sup
import { method } from "./sub.js"; // sub

const run = function () {
    return [string, method()].join(" ");
};

export { run };

export default { run };
