"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.save = function (data) {
        localStorage.setItem('token', JSON.stringify(data.token));
        localStorage.setItem('user', JSON.stringify(data.user));
    };
    AuthService.prototype.clear = function () {
        localStorage.clear();
    };
    AuthService.prototype.get = function () {
        var result = {
            token: JSON.parse(localStorage.getItem('token')),
            user: JSON.parse(localStorage.getItem('user'))
        };
        return result;
    };
    AuthService.prototype.is_login = function () {
        if (localStorage.getItem('token').length && localStorage.getItem('user').length) {
            return true;
        }
        return false;
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
