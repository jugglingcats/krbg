var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { action, observable } from "mobx";
var API = "/api/";
var AppController = (function () {
    function AppController() {
        this.error = false;
    }
    AppController.doFetch = function (method, path, args) {
        switch (method) {
            case "GET":
                return fetch(API + path, {
                    method: "GET",
                });
            case "POST":
                return fetch(API + path, {
                    method: "POST",
                    body: JSON.stringify(args),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
            default:
                throw "Unknown method: " + method;
        }
    };
    AppController.prototype.request = function (method, path, args, handler) {
        var _this = this;
        this.busy = true;
        return AppController.doFetch(method, path, args).then(function (r) {
            _this.busy = false;
            if (handler[r.status]) {
                return handler[r.status](r);
            }
            if (r.status == 200) {
                return r.json();
            }
            return r.json().then(function (t) {
                return _this.setError(t.message);
            });
        }).catch(function (e) {
            _this.busy = false;
            return _this.setError(e.message);
        });
    };
    AppController.prototype.post = function (path, args, handler) {
        if (handler === void 0) { handler = {}; }
        return this.request("POST", path, args, handler);
    };
    AppController.prototype.get = function (path, handler) {
        if (handler === void 0) { handler = {}; }
        return this.request("GET", path, {}, handler);
    };
    AppController.prototype.setError = function (text) {
        this.error = true;
        this.errorText = text;
        return Promise.reject(text);
    };
    AppController.prototype.clearError = function () {
        this.error = false;
        this.errorText = "";
    };
    AppController.prototype.storeOption = function (option) {
        var _this = this;
        return this.post("storeOption", {
            key: this.verified.profile.verificationKey,
            option: option
        }).then(function (profile) {
            _this.verified.profile = profile;
        });
    };
    AppController.prototype.storeTimeOption = function (time) {
        var _this = this;
        return this.post("storeTimeOption", {
            key: this.verified.profile.verificationKey,
            time: time
        }).then(function (profile) {
            _this.verified.profile = profile;
        });
    };
    AppController.prototype.signup = function (info) {
        var handler = {
            409: function (r) {
                return r.json().then(function (obj) {
                    return Promise.resolve({
                        exists: true,
                        token: obj.token
                    });
                });
            }
        };
        return this.post("signup", {
            username: info.username,
            email: info.email,
            recaptcha: info.recaptcha
        }, handler).then(function (r) {
            if (r.exists) {
                return r;
            }
            return { exists: false, profile: r };
        });
    };
    AppController.prototype.requestEmail = function (info) {
        return this.post("resendEmail", info);
    };
    AppController.prototype.unsubscribe = function () {
        var _this = this;
        return this.post("unsubscribe", {
            key: this.verified.profile.verificationKey
        }).then(function () {
            _this.verified.verified = false;
            _this.verified.profile;
        });
    };
    AppController.prototype.hasRole = function (role) {
        if (!this.verified) {
            return false;
        }
        if (!role) {
            return true;
        }
        return this.verified.profile.roles.some(function (r) { return r === role; });
    };
    AppController.prototype.checkUser = function (key) {
        return this.verified && this.verified.verified &&
            this.verified.profile && this.verified.profile.verificationKey === key;
    };
    AppController.prototype.verify = function (key, requiredRole) {
        var _this = this;
        if (this.checkUser(key) && this.hasRole(requiredRole)) {
            return Promise.resolve(this.verified);
        }
        return this.get("verify?key=" + key).then(function (profile) {
            _this.verified = {
                verified: true,
                profile: profile
                // key: key,
                // option: profile.option,
                // email: profile.email,
                // name: profile.username
            };
            return _this.verified;
        });
    };
    AppController.prototype.turnout = function () {
        return this.get("turnout?key=" + this.verified.profile.verificationKey).then(function (r) { return r.result; });
    };
    AppController.prototype.sendBeginWeekEmail = function () {
        return this.post("sendBeginWeekEmail", { key: this.verified.profile.verificationKey });
    };
    AppController.prototype.sendReminderEmail = function () {
        return this.post("sendReminderEmail", { key: this.verified.profile.verificationKey });
    };
    AppController.prototype.sendFinalEmail = function () {
        return this.post("sendFinalEmail", { key: this.verified.profile.verificationKey });
    };
    __decorate([
        observable
    ], AppController.prototype, "error", void 0);
    __decorate([
        observable
    ], AppController.prototype, "errorText", void 0);
    __decorate([
        observable
    ], AppController.prototype, "busy", void 0);
    __decorate([
        observable
    ], AppController.prototype, "verified", void 0);
    __decorate([
        action
    ], AppController.prototype, "setError", null);
    __decorate([
        action
    ], AppController.prototype, "clearError", null);
    __decorate([
        action
    ], AppController.prototype, "storeOption", null);
    __decorate([
        action
    ], AppController.prototype, "storeTimeOption", null);
    __decorate([
        action
    ], AppController.prototype, "signup", null);
    __decorate([
        action
    ], AppController.prototype, "requestEmail", null);
    __decorate([
        action
    ], AppController.prototype, "unsubscribe", null);
    __decorate([
        action
    ], AppController.prototype, "verify", null);
    __decorate([
        action
    ], AppController.prototype, "turnout", null);
    return AppController;
}());
export { AppController };
//# sourceMappingURL=AppController.js.map