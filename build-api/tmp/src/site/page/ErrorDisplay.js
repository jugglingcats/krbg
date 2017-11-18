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
import { inject } from "mobx-react";
import { Link } from "react-router-dom";
var ErrorDisplay = (function (_super) {
    __extends(ErrorDisplay, _super);
    function ErrorDisplay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorDisplay.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("p", { className: "App-intro" }, "Oh dear something went wrong!"),
            React.createElement("p", null, "You can try refreshing the page, otherwise please try again later."),
            React.createElement("p", null,
                "If you unsubscribed, links you were sent in email will no longer work. You should ",
                React.createElement(Link, { to: "/" }, "subscribe again"),
                "."),
            React.createElement("pre", null, this.props.controller.errorText)));
    };
    ErrorDisplay = __decorate([
        inject("controller")
    ], ErrorDisplay);
    return ErrorDisplay;
}(React.Component));
export { ErrorDisplay };
//# sourceMappingURL=ErrorDisplay.js.map