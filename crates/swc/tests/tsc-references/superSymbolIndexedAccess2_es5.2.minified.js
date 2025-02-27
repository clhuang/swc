import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _get from "@swc/helpers/src/_get.mjs";
import _get_prototype_of from "@swc/helpers/src/_get_prototype_of.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var Foo = function() {
    "use strict";
    function Foo() {
        _class_call_check(this, Foo);
    }
    return Foo.prototype[Symbol.isConcatSpreadable] = function() {
        return 0;
    }, Foo;
}(), Bar = function(Foo) {
    "use strict";
    _inherits(Bar, Foo);
    var _super = _create_super(Bar);
    function Bar() {
        return _class_call_check(this, Bar), _super.apply(this, arguments);
    }
    return Bar.prototype[Symbol.isConcatSpreadable] = function() {
        return _get(_get_prototype_of(Bar.prototype), Symbol.isConcatSpreadable, this).call(this);
    }, Bar;
}(Foo);
