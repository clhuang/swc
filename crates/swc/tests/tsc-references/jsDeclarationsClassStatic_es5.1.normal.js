// @allowJs: true
// @checkJs: true
// @target: es5
// @outDir: ./out
// @declaration: true
// @filename: source.js
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
var Handler = /*#__PURE__*/ function() {
    "use strict";
    function Handler() {
        _class_call_check(this, Handler);
    }
    var _proto = Handler.prototype;
    _proto.process = function process() {};
    _create_class(Handler, null, [
        {
            key: "OPTIONS",
            get: function get() {
                return 1;
            }
        }
    ]);
    return Handler;
}();
Handler.statische = function() {};
var Strings = {
    a: "A",
    b: "B"
};
module.exports = Handler;
module.exports.Strings = Strings /**
 * @typedef {Object} HandlerOptions
 * @property {String} name
 * Should be able to export a type alias at the same time.
 */ ;
