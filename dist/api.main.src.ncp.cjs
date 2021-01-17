(function (global, factory) {
    typeof exports === "object" && typeof module !== "undefined"
        ? factory(exports)
        : typeof define === "function" && define.amd
        ? define(["exports"], factory)
        : ((global = typeof globalThis !== "undefined" ? globalThis : global || self),
          factory(
              ((global.api = global.api || {}),
              (global.api.main = global.api.main || {}),
              (global.api.main.src = global.api.main.src || {}),
              (global.api.main.src.ncp = {}))
          ));
})(this, function (exports) {
    "use strict";

    var $ = require("../internals/export");
    var IndexedObject = require("../internals/indexed-object");
    var toIndexedObject = require("../internals/to-indexed-object");
    var arrayMethodIsStrict = require("../internals/array-method-is-strict");

    var nativeJoin = [].join;

    var ES3_STRINGS = IndexedObject != Object;
    var STRICT_METHOD = arrayMethodIsStrict("join", ",");

    // `Array.prototype.join` method
    // https://tc39.es/ecma262/#sec-array.prototype.join
    $(
        { target: "Array", proto: true, forced: ES3_STRINGS || !STRICT_METHOD },
        {
            join: function join(separator) {
                return nativeJoin.call(toIndexedObject(this), separator === undefined ? "," : separator);
            },
        }
    );

    var string = "sup string";

    function method() {
        return "sub method";
    }

    var run = function run() {
        return [string, method()].join(" ");
    };
    var api_main = {
        run: run,
    };

    exports.default = api_main;
    exports.run = run;

    Object.defineProperty(exports, "__esModule", { value: true });
});
