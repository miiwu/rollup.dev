(function (global, factory) {
    typeof exports === "object" && typeof module !== "undefined"
        ? factory(exports)
        : typeof define === "function" && define.amd
        ? define(["exports"], factory)
        : ((global = typeof globalThis !== "undefined" ? globalThis : global || self),
          factory(
              ((global.raw = global.raw || {}), (global.raw.main = global.raw.main || {}), (global.raw.main.src = {}))
          ));
})(this, function (exports) {
    "use strict";

    const string = "sup string";

    function method() {
        return "sub method";
    }

    const run = function () {
        return string + " " + method();
    };

    var raw_main = { run };

    exports.default = raw_main;
    exports.run = run;

    Object.defineProperty(exports, "__esModule", { value: true });
});
