var string = "hello string";

var method = function method() {
    return "hello method";
};
var main = {
    string: string,
    method: method,
};

export default main;
export { method, string };
