var string = "sup string";

function method() {
    return "sub method";
}

var run = function run() {
    return string + " " + method();
};
var raw_main = {
    run: run,
};

export default raw_main;
export { run };
