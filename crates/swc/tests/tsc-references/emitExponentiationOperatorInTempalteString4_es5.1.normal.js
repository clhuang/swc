// @target: es5
import _type_of from "@swc/helpers/src/_type_of.mjs";
var t1 = 10;
var t2 = 10;
var s;
// With TemplateTail
"".concat(Math.pow(t1, -t2), " world");
"".concat(Math.pow(-t1, t2) - t1, " world");
"".concat(Math.pow(-++t1, t2) - t1, " world");
"".concat(Math.pow(-t1++, t2) - t1, " world");
"".concat(Math.pow(~t1, Math.pow(t2, --t1)), " world");
"".concat(_type_of(Math.pow(t1, Math.pow(t2, t1))), " world");
// TempateHead & TemplateTail are empt
"".concat(Math.pow(t1, -t2), " hello world ").concat(Math.pow(t1, -t2));
"".concat(Math.pow(-t1, t2) - t1, " hello world ").concat(Math.pow(-t1, t2) - t1);
"".concat(Math.pow(-++t1, t2) - t1, " hello world ").concat(Math.pow(t1, Math.pow(-++t1, -t1)));
"".concat(Math.pow(-t1++, t2) - t1, " hello world ").concat(Math.pow(t2, Math.pow(-t1++, -t1)));
"".concat(Math.pow(~t1, Math.pow(t2, --t1)), " hello world ").concat(Math.pow(~t1, Math.pow(t2, --t1)));
"".concat(_type_of(Math.pow(t1, Math.pow(t2, t1))), " hello world ").concat(_type_of(Math.pow(t1, Math.pow(t2, t1))));
// With templateHead
"hello ".concat(Math.pow(-t1, t2) - t1);
"hello ".concat(Math.pow(-++t1, t2) - t1);
"hello ".concat(Math.pow(-t1++, t2) - t1);
"hello ".concat(Math.pow(~t1, Math.pow(t2, --t1)));
"hello ".concat(_type_of(Math.pow(t1, Math.pow(t2, t1))));
