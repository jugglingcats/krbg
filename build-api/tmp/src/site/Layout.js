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
import * as React from "react";
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.render = function () {
        return (React.createElement("div", { className: "App" },
            React.createElement("div", { className: "pure-g" },
                React.createElement("div", { className: "pure-u-1 pure-u-md-1-5" }),
                React.createElement("div", { className: "pure-u-1 pure-u-md-3-5" },
                    React.createElement("div", { className: "BodyContent" }, this.props.children)),
                React.createElement("div", { className: "pure-u-1 pure-u-md-1-5" }))));
    };
    return Layout;
}(React.Component));
export { Layout };
//# sourceMappingURL=Layout.js.map