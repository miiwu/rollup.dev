(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.main = global.main || {}, global.main.src = {})));
}(this, (function (exports) { 'use strict';

    var string = "hello string";

    var method = function method() {
      return "hello method";
    };
    var main = {
      string: string,
      method: method
    };

    exports.default = main;
    exports.method = method;
    exports.string = string;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
