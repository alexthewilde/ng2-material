var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var checkbox_1 = require('../checkbox/checkbox');
var MdSwitch = (function (_super) {
    __extends(MdSwitch, _super);
    function MdSwitch(tabindex) {
        _super.call(this, tabindex);
    }
    MdSwitch = __decorate([
        core_1.Component({
            selector: 'md-switch',
            inputs: ['checked', 'disabled'],
            host: {
                'role': 'checkbox',
                '[attr.aria-checked]': 'checked',
                '[attr.aria-disabled]': 'disabled_',
                '(keydown)': 'onKeydown($event)',
                '(click)': 'toggle($event)'
            }
        }),
        core_1.View({
            templateUrl: 'ng2-material/components/switcher/switch.html',
            directives: [],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Attribute('tabindex')), 
        __metadata('design:paramtypes', [String])
    ], MdSwitch);
    return MdSwitch;
})(checkbox_1.MdCheckbox);
exports.MdSwitch = MdSwitch;
//# sourceMappingURL=switch.js.map