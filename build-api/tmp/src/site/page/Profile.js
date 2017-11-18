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
import { Link } from "react-router-dom";
var ProfilePage = (function (_super) {
    __extends(ProfilePage, _super);
    function ProfilePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            unsubscribeConfirmation: false,
            optionChanged: false
        };
        return _this;
    }
    ProfilePage.prototype.setOptionYes = function (e) {
        var _this = this;
        e.preventDefault();
        this.setState({ optionChanged: false });
        this.props.controller.storeOption("yes").then(function () {
            _this.setState({ optionChanged: true });
        });
    };
    ProfilePage.prototype.setOptionNo = function (e) {
        var _this = this;
        e.preventDefault();
        this.setState({ optionChanged: false });
        this.props.controller.storeOption("no").then(function () {
            _this.setState({ optionChanged: true });
        });
    };
    ProfilePage.prototype.unsubscribePrelim = function () {
        this.setState({
            unsubscribeConfirmation: true
        });
    };
    ProfilePage.prototype.unsubscribeCancel = function () {
        this.setState({
            unsubscribeConfirmation: false
        });
    };
    ProfilePage.prototype.unsubscribeProper = function () {
        var _this = this;
        this.props.controller.unsubscribe().then(function (r) {
            return _this.props.history.push("/unsubscribed");
        });
    };
    ProfilePage.prototype.render = function () {
        var unsubscribePrelim = this.unsubscribePrelim.bind(this);
        var unsubscribeProper = this.unsubscribeProper.bind(this);
        var unsubscribeCancel = this.unsubscribeCancel.bind(this);
        var setOptionYes = this.setOptionYes.bind(this);
        var setOptionNo = this.setOptionNo.bind(this);
        var _a = this.props.controller.verified.profile, username = _a.username, option = _a.option;
        return (React.createElement("div", null,
            React.createElement("p", { className: "App-intro" },
                "Hello ",
                username,
                ", this is your Kensal Rise Backgammon profile page"),
            this.props.controller.busy &&
                React.createElement("div", null,
                    React.createElement(ScaleLoader, { color: "blue", height: 12, loading: true })) || React.createElement("div", null,
                React.createElement("form", { className: "pure-form" },
                    React.createElement("fieldset", null,
                        React.createElement("legend", null, "Your status this week"),
                        option === "yes" &&
                            React.createElement("div", null, "You've indicated you're coming this week."),
                        option === "no" &&
                            React.createElement("div", null, "You've indicated you're not coming this week."),
                        option === undefined &&
                            React.createElement("div", null, "You have not said whether you can make this week."),
                        React.createElement("div", { className: "pure-control-group" },
                            React.createElement("button", { disabled: option === "yes", onClick: setOptionYes, className: "pure-button pure-button-primary" }, "Yes I can make it"),
                            "\u00A0",
                            React.createElement("button", { disabled: option === "no", onClick: setOptionNo, className: "pure-button pure-button-primary" }, "No I can't make it"),
                            "\u00A0",
                            React.createElement(Link, { className: "pure-button", to: '/confirmed/' + this.props.match.params.key }, "See who has confirmed")),
                        this.state.optionChanged && React.createElement("div", null,
                            React.createElement("p", null, "Your selection was stored!")))),
                React.createElement("p", null),
                React.createElement("p", null, "If you no longer want to receive club emails, click the unsubscribe button below."),
                this.state.unsubscribeConfirmation && React.createElement("div", null,
                    "Are you sure you want to unsubscribe?",
                    React.createElement("div", { className: "pure-control-group" },
                        React.createElement("button", { className: "pure-button pure-button-primary", onClick: unsubscribeProper },
                            React.createElement("span", null, "Confirm")),
                        React.createElement("button", { className: "pure-button", onClick: unsubscribeCancel }, "Cancel"))),
                this.state.unsubscribeConfirmation || React.createElement("div", null,
                    React.createElement("button", { className: "pure-button pure-button-primary", onClick: unsubscribePrelim },
                        React.createElement("span", null, "Unsubscribe"))),
                this.props.controller.verified.profile.roles.some(function (r) { return r === "admin"; }) && React.createElement("div", null,
                    React.createElement("form", { className: "pure-form" },
                        React.createElement("p", null),
                        React.createElement("fieldset", null,
                            React.createElement("legend", null, "Looks like you're an admin"),
                            React.createElement(Link, { className: "pure-button pure-button-primary", to: "/admin/" + this.props.controller.verified.profile.verificationKey }, "View Admin Page")))))));
    };
    ProfilePage = __decorate([
        observer
    ], ProfilePage);
    return ProfilePage;
}(React.Component));
export { ProfilePage };
//# sourceMappingURL=Profile.js.map