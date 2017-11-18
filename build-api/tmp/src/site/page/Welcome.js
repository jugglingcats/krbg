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
import { ProfileLink } from "../App";
var Welcome = (function (_super) {
    __extends(Welcome, _super);
    function Welcome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Welcome.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("p", { className: "App-intro" }, "You've been subscribed to Kensal Rise Backgammon!"),
            React.createElement("p", null, "We've sent you a welcome email to the email address you provided. Use the link in the email to manage your profile or unsubscribe."),
            React.createElement("p", null,
                "Or go straight ",
                React.createElement(ProfileLink, { verificationKey: this.props.match.params.key }, "to your profile page"))));
    };
    return Welcome;
}(React.Component));
export { Welcome };
//# sourceMappingURL=Welcome.js.map