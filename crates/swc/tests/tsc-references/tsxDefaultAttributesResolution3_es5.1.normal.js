// @filename: file.tsx
// @jsx: preserve
// @noLib: true
// @skipLibCheck: true
// @libFiles: react.d.ts,lib.d.ts
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var React = require("react");
var Poisoned = /*#__PURE__*/ function(_Component) {
    "use strict";
    _inherits(Poisoned, _Component);
    var _super = _create_super(Poisoned);
    function Poisoned() {
        _class_call_check(this, Poisoned);
        return _super.apply(this, arguments);
    }
    var _proto = Poisoned.prototype;
    _proto.render = function render() {
        return /*#__PURE__*/ React.createElement("div", null, "Hello");
    };
    return Poisoned;
}(React.Component);
// Error
var p = /*#__PURE__*/ React.createElement(Poisoned, {
    x: true
});
export { };
