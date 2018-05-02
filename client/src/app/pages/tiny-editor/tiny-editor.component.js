"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('@tinymce');
require('@tinymce/themes/modern');
require('@tinymce/plugins/table');
require('@tinymce/plugins/link');
var TinyEditorComponent = (function () {
    function TinyEditorComponent() {
        this.onEditorContentChange = new core_1.EventEmitter();
    }
    TinyEditorComponent.prototype.ngOnInit = function () { };
    TinyEditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            selector: '#' + this.elementId,
            plugins: ['link', 'table'],
            skin_url: 'assets/skins/lightgray',
            apiKey: 'gzyk9l830l23ji091ikq8wso8g3kyuqoq4funirxbls5gtax',
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup change', function () {
                    var content = editor.getContent();
                    _this.onEditorContentChange.emit(content);
                });
            }
        });
    };
    TinyEditorComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    __decorate([
        core_1.Input()
    ], TinyEditorComponent.prototype, "elementId");
    __decorate([
        core_1.Output()
    ], TinyEditorComponent.prototype, "onEditorContentChange");
    TinyEditorComponent = __decorate([
        core_1.Component({
            selector: 'app-tiny-editor',
            template: '<textarea id="{{elementId}}"></textarea>',
            styleUrls: ['./tiny-editor.component.scss']
        })
    ], TinyEditorComponent);
    return TinyEditorComponent;
}());
exports.TinyEditorComponent = TinyEditorComponent;
