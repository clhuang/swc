import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
function Mixin(baseClass) {
    var MixinClass = function(baseClass) {
        "use strict";
        _inherits(MixinClass, baseClass);
        var _super = _create_super(MixinClass);
        function MixinClass() {
            return _class_call_check(this, MixinClass), _super.apply(this, arguments);
        }
        return MixinClass.prototype.mixinMethod = function() {}, MixinClass;
    }(baseClass);
    return MixinClass;
}
var ConcreteBase = function() {
    "use strict";
    function ConcreteBase() {
        _class_call_check(this, ConcreteBase);
    }
    return ConcreteBase.prototype.baseMethod = function() {}, ConcreteBase;
}(), AbstractBase = function() {
    "use strict";
    _class_call_check(this, AbstractBase);
}, DerivedFromConcrete = function(_superClass) {
    "use strict";
    _inherits(DerivedFromConcrete, _superClass);
    var _super = _create_super(DerivedFromConcrete);
    function DerivedFromConcrete() {
        return _class_call_check(this, DerivedFromConcrete), _super.apply(this, arguments);
    }
    return DerivedFromConcrete;
}(Mixin(ConcreteBase)), wasConcrete = new DerivedFromConcrete();
wasConcrete.baseMethod(), wasConcrete.mixinMethod();
var DerivedFromAbstract = function(_superClass) {
    "use strict";
    _inherits(DerivedFromAbstract, _superClass);
    var _super = _create_super(DerivedFromAbstract);
    function DerivedFromAbstract() {
        return _class_call_check(this, DerivedFromAbstract), _super.apply(this, arguments);
    }
    return DerivedFromAbstract.prototype.abstractBaseMethod = function() {}, DerivedFromAbstract;
}(Mixin(AbstractBase)), wasAbstract = new DerivedFromAbstract();
wasAbstract.abstractBaseMethod(), wasAbstract.mixinMethod();
