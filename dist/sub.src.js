(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.sub = global.sub || {}, global.sub.src = {})));
}(this, (function (exports) { 'use strict';

	var string = "hello sub";
	var sub = {
	  string: string
	};

	exports.default = sub;
	exports.string = string;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
