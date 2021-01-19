const string = "sup string";

function method() {
    return "sub method";
}

const run = function () {
    return [string, method()].join(" ");
};

var api_main = { run };

export default api_main;
export { run };
