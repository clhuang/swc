// @target: es5
// @downlevelIteration: true
import _sliced_to_array from "@swc/helpers/src/_sliced_to_array.mjs";
import _throw from "@swc/helpers/src/_throw.mjs";
function foo(_$param, param) {
    var _$param = _$param !== null ? _$param : _throw(new TypeError("Cannot destructure undefined")), foo = param.foo, bar = param.bar;
}
function baz(param, param1) {
    var _param = _sliced_to_array(param, 0), foo = param1.foo, bar = param1.bar;
}
function one(param, _$param) {
    var _param = _sliced_to_array(param, 0), _$param = _$param !== null ? _$param : _throw(new TypeError("Cannot destructure undefined"));
}
function two(param, param1) {
    var _param = _sliced_to_array(param, 0), _param1 = _sliced_to_array(param1, 3), a = _param1[0], b = _param1[1], c = _param1[2];
}
