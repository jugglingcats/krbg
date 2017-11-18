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
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
var Screen2 = (function (_super) {
    __extends(Screen2, _super);
    function Screen2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Screen2.prototype.componentDidMount = function () {
        console.log("SCREEN2 MOUNTED");
    };
    Screen2.prototype.render = function () {
        return React.createElement("div", null,
            "Screen2",
            React.createElement(Link, { to: "/" }, "SCREEN1"));
    };
    Screen2 = __decorate([
        withRouter
    ], Screen2);
    return Screen2;
}(React.Component));
export { Screen2 };
//# sourceMappingURL=Screen2.js.map