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
import { Route, withRouter } from "react-router";
import { Screen1 } from "./Screen1";
import { Screen2 } from "./Screen2";
import { hocTest } from "./HocTest";
var TestApp = (function (_super) {
    __extends(TestApp, _super);
    function TestApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestApp.prototype.componentDidMount = function () {
        console.log("APP MOUNTED");
    };
    TestApp.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(Route, { exact: true, path: "/", component: hocTest(Screen1) }),
                React.createElement(Route, { path: "/screen2", component: hocTest(Screen2) })));
    };
    TestApp = __decorate([
        withRouter
    ], TestApp);
    return TestApp;
}(React.Component));
export { TestApp };
//# sourceMappingURL=TestApp.js.map