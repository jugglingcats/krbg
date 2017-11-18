var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import { withRouter } from "react-router-dom";
import { ScaleLoader } from 'react-spinners';
import { inject } from "mobx-react";
var Recaptcha = require("react-recaptcha");
var SignUp = (function (_super) {
    __extends(SignUp, _super);
    function SignUp() {
        var _this = _super.call(this) || this;
        _this.state = {
            username: "",
            email: "",
            emailExists: false
        };
        return _this;
    }
    SignUp.prototype.signUp = function (e) {
        var _this = this;
        e.preventDefault();
        this.setState({
            emailExists: false
        });
        this.props.controller.signup({
            username: this.state.username,
            email: this.state.email,
            recaptcha: this.state.recaptcha
        }).then(function (r) {
            if (r.exists) {
                _this.setState({
                    emailExists: true,
                    emailResendToken: r.token
                });
            }
            else {
                return _this.props.history.push("/welcome/" + r.profile.verificationKey);
            }
        });
    };
    SignUp.prototype.resendEmail = function () {
        var _this = this;
        this.setState({
            requestEmail: true
        });
        this.props.controller.requestEmail({
            email: this.state.email,
            token: this.state.emailResendToken
        }).then(function () {
            return _this.props.history.push("/resentEmail");
        });
    };
    SignUp.prototype.updateEmail = function (e) {
        this.setState({
            emailExists: false,
            email: e.target.value,
        });
    };
    SignUp.prototype.updateUsername = function (e) {
        this.setState({
            username: e.target.value
        });
    };
    SignUp.prototype.verifyCallback = function (e) {
        this.setState({ recaptcha: e });
    };
    SignUp.prototype.render = function () {
        var updateUsername = this.updateUsername.bind(this);
        var updateEmail = this.updateEmail.bind(this);
        var resendEmail = this.resendEmail.bind(this);
        var signUp = this.signUp.bind(this);
        var verifyCallback = this.verifyCallback.bind(this);
        var callback = function (p) {
        };
        return (React.createElement("div", null,
            React.createElement("p", { className: "App-intro" }, "Welcome to Kensal Rise Backgammon. The club meets every Thursday at The Island pub from 8.30pm."),
            React.createElement("p", null, "To register your interest please enter your name and email below. We send weekly reminder emails to members."),
            React.createElement("form", { className: "pure-form pure-form-stacked" },
                React.createElement("fieldset", null,
                    React.createElement("legend", null, "Sign up to Kensal Rise Backgammon"),
                    React.createElement("label", { htmlFor: "username" }, "Name"),
                    React.createElement("input", { id: "username", type: "text", placeholder: "Enter your name", required: true, onChange: updateUsername, value: this.state.username }),
                    React.createElement("label", { htmlFor: "email" }, "Email"),
                    React.createElement("input", { id: "email", type: "email", placeholder: "Enter your email", onChange: updateEmail, value: this.state.email }),
                    this.state.emailExists && React.createElement("div", { className: "Error" },
                        "This email is already registered. Enter a different email or\u00A0",
                        React.createElement("a", { href: '#', onClick: resendEmail }, "request an email"),
                        " you can then use to manage your profile."),
                    this.state.requestEmail || React.createElement("div", { className: "Recaptcha" },
                        React.createElement(Recaptcha, { render: "explicit", onloadCallback: callback, verifyCallback: verifyCallback, sitekey: "6LeVoTMUAAAAAEsZ1Pr5kaTV-18vSfm1jsB04nbQ" })),
                    React.createElement("button", { className: "pure-button pure-button-primary", onClick: signUp, disabled: this.state.email == undefined || this.state.recaptcha == undefined },
                        this.props.controller.busy &&
                            React.createElement(ScaleLoader, { color: 'white', height: 12, loading: true }),
                        this.props.controller.busy ||
                            React.createElement("span", null, "Sign Up!"))))));
    };
    SignUp = __decorate([
        inject("controller"),
        withRouter
    ], SignUp);
    return SignUp;
}(React.Component));
export { SignUp };
//# sourceMappingURL=SignUp.js.map