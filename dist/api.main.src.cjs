(function (global, factory) {
    typeof exports === "object" && typeof module !== "undefined"
        ? factory(exports)
        : typeof define === "function" && define.amd
        ? define(["exports"], factory)
        : ((global = typeof globalThis !== "undefined" ? globalThis : global || self),
          factory(
              ((global.api = global.api || {}), (global.api.main = global.api.main || {}), (global.api.main.src = {}))
          ));
})(this, function (exports) {
    "use strict";

    const string = "sup string";

    function method() {
        return "sub method";
    }

    const run = function () {
        return [string, method()].join(" ");
    };

    var api_main = { run };

    exports.default = api_main;
    exports.run = run;

    Object.defineProperty(exports, "__esModule", { value: true });
});
