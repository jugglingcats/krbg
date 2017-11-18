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
import { inject, observer } from "mobx-react";
import { ErrorDisplay } from "./page/ErrorDisplay";
import { Route, withRouter } from "react-router";
import { SignUp } from "./page/SignUp";
import { Welcome } from "./page/Welcome";
import { StatusUpdate } from "./page/StatusUpdate";
import { validatedComponent } from "./KeyVerification";
import { Turnout } from "./page/Turnout";
import { ResentEmail } from "./page/ResentEmail";
import { ProfilePage } from "./page/Profile";
import { Unsubscribed } from "./page/Unsubscribed";
import { Admin } from "./page/Admin";
import { Link } from "react-router-dom";
var ProfileLink = (function (_super) {
    __extends(ProfileLink, _super);
    function ProfileLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProfileLink.prototype.render = function () {
        return React.createElement(Link, { to: "/profile/" + this.props.verificationKey }, this.props.children);
    };
    return ProfileLink;
}(React.Component));
export { ProfileLink };
// Note order of annotations is important!
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        if (this.props.controller.error) {
            console.log("CONTROLLER IN ERROR - SHOW ERROR DISPLAY");
            return React.createElement(ErrorDisplay, null);
        }
        return (React.createElement("div", null,
            React.createElement(Route, { exact: true, path: "/", component: SignUp }),
            React.createElement(Route, { path: "/admin/:key", component: validatedComponent(Admin) }),
            React.createElement(Route, { path: "/resentEmail", component: ResentEmail }),
            React.createElement(Route, { path: "/welcome/:key", component: validatedComponent(Welcome) }),
            React.createElement(Route, { path: "/profile/:key", component: validatedComponent(ProfilePage) }),
            React.createElement(Route, { path: "/status/:key/:option", component: validatedComponent(StatusUpdate) }),
            React.createElement(Route, { path: "/confirmed/:key", component: validatedComponent(Turnout) }),
            React.createElement(Route, { path: "/unsubscribed", component: Unsubscribed })));
    };
    App = __decorate([
        inject("controller"),
        withRouter,
        observer
    ], App);
    return App;
}(React.Component));
export { App };
//# sourceMappingURL=App.js.map