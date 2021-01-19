const string = "sup string";

function method() {
    return "sub method";
}

const run = function () {
    return string + " " + method();
};

var raw_main = { run };

export default raw_main;
export { run };
