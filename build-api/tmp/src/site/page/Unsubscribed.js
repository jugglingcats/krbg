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
import { Link } from "react-router-dom";
var Unsubscribed = (function (_super) {
    __extends(Unsubscribed, _super);
    function Unsubscribed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Unsubscribed.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("p", { className: "App-intro" }, "You've been unsubscribed"),
            React.createElement("p", null, "You'll no longer receive emails from us, but of course you're still welcome on Thursdays!"),
            React.createElement("p", null,
                "If you want to subscribe again at any point just ",
                React.createElement(Link, { to: "/" }, "use the form on our homepage"),
                ".")));
    };
    return Unsubscribed;
}(React.Component));
export { Unsubscribed };
//# sourceMappingURL=Unsubscribed.js.map