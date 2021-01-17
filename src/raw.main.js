import { string } from "./sup.js"; // sup
import { method } from "./sub.js"; // sub

const run = function () {
    return string + " " + method();
};

export { run };

export default { run };
