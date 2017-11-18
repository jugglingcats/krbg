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
import * as React from "react";
import { ScaleLoader } from "react-spinners";
import { observer } from "mobx-react";
var Admin = (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.sendBeginWeekEmail = function (e) {
        e.preventDefault();
        return this.props.controller.sendBeginWeekEmail();
    };
    Admin.prototype.sendReminderEmail = function (e) {
        e.preventDefault();
        return this.props.controller.sendReminderEmail();
    };
    Admin.prototype.sendFinalEmail = function (e) {
        e.preventDefault();
        return this.props.controller.sendFinalEmail();
    };
    Admin.prototype.render = function () {
        var sendBeginWeekEmail = this.sendBeginWeekEmail.bind(this);
        var sendReminderEmail = this.sendReminderEmail.bind(this);
        var sendFinalEmail = this.sendFinalEmail.bind(this);
        return (React.createElement("div", null,
            React.createElement("p", { className: "App-intro" }, "Welcome to admin"),
            React.createElement("form", { className: "pure-form pure-form-stacked" },
                React.createElement("fieldset", null,
                    React.createElement("legend", null, "Send a message to all subscribers"),
                    React.createElement("textarea", { className: "App-email-message", rows: 10 }),
                    React.createElement("button", { className: "pure-button pure-button-primary" }, "Send")),
                React.createElement("fieldset", null,
                    React.createElement("legend", null, "Manually send weekly emails"),
                    this.props.controller.busy &&
                        React.createElement(ScaleLoader, { color: 'blue', height: 12, loading: true })
                        ||
                            React.createElement("div", { className: "pure-control-group App-centered" },
                                React.createElement("button", { onClick: sendBeginWeekEmail, className: "pure-button pure-button-primary" }, "Begin Week"),
                                React.createElement("button", { onClick: sendReminderEmail, className: "pure-button pure-button-primary" }, "Reminder"),
                                React.createElement("button", { onClick: sendFinalEmail, className: "pure-button pure-button-primary" }, "Final"))))));
    };
    Admin = __decorate([
        observer
    ], Admin);
    return Admin;
}(React.Component));
export { Admin };
//# sourceMappingURL=Admin.js.map