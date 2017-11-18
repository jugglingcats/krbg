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
var KeyVerificationFailed = (function (_super) {
    __extends(KeyVerificationFailed, _super);
    function KeyVerificationFailed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeyVerificationFailed.prototype.render = function () {
        return (React.createElement("div", null,
            "Sorry the link you used is invalid or has expired. Please try to find a more recent email from us or ",
            React.createElement(Link, { to: "/revalidate" }, "request another email"),
            "."));
    };
    return KeyVerificationFailed;
}(React.Component));
export { KeyVerificationFailed };
//# sourceMappingURL=KeyVerificationFailed.js.map