// @strict: true
// @noUnusedLocals: true
// @target: esnext, es2022
import _class_private_field_init from "@swc/helpers/src/_class_private_field_init.mjs";
var _brand_check_brand = new WeakSet();
var _unused = /*#__PURE__*/ new WeakMap(), _brand = /*#__PURE__*/ new WeakMap();
class Foo {
    isFoo(v) {
        // This should count as using/reading '#brand'
        return _brand_check_brand.has(v);
    }
    constructor(){
        _class_private_field_init(this, _unused, {
            writable: true,
            value: void 0 // expect unused error
        });
        _class_private_field_init(this, _brand, {
            writable: true,
            value: void _brand_check_brand.add(this)
        }) // expect no error
        ;
    }
}
