// No errors expected for basic overloads of construct signatures
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var C = function C(x) {
    "use strict";
    _class_call_check(this, C);
};
var r1 = new C(1, "");
var C2 = function C2(x) {
    "use strict";
    _class_call_check(this, C2);
};
var r2 = new C2(1, "");
var i;
var r3 = new i(1, "");
var i2;
var r4 = new i2(1, "");
var a;
var r5 = new a(1, "");
var b;
var r6 = new b(1, "");
