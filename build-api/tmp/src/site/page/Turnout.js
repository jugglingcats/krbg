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
import { ScaleLoader } from "react-spinners";
import { peopleCount } from "../../common/utils";
import { ProfileLink } from "../App";
var Count = (function (_super) {
    __extends(Count, _super);
    function Count() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Count.prototype.render = function () {
        var _this = this;
        var count = this.props.items.filter(function (p) { return p.option == _this.props.option; }).length;
        return React.createElement("span", null, peopleCount(count));
    };
    return Count;
}(React.Component));
var Turnout = (function (_super) {
    __extends(Turnout, _super);
    function Turnout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Turnout.prototype.componentDidMount = function () {
        var _this = this;
        this.props.controller.turnout().then(function (t) { return _this.setState({
            turnout: t,
            ready: true
        }); });
    };
    Turnout.prototype.renderGroup = function (filter) {
        return this.state.turnout.filter(function (t) { return t.option === filter; }).map(function (t, index) { return (React.createElement("div", { className: "App-userbadge", key: filter + '-' + index }, t.username)); });
    };
    Turnout.prototype.render = function () {
        return this.state.ready && (React.createElement("div", null,
            React.createElement("p", { className: "App-intro" }, "Current responses for this week"),
            React.createElement("form", { className: "pure-form pure-form-stacked" },
                React.createElement("fieldset", null,
                    React.createElement("legend", null,
                        "There ",
                        React.createElement(Count, { items: this.state.turnout, option: "yes" }),
                        " who confirmed they are coming"),
                    this.renderGroup("yes")),
                React.createElement("fieldset", null,
                    React.createElement("legend", null,
                        "There ",
                        React.createElement(Count, { items: this.state.turnout, option: "no" }),
                        " who indicated they cannot make it"),
                    this.renderGroup("no"))),
            React.createElement("p", null,
                "There are ",
                this.state.turnout.length,
                " people in total on the email list. Some people don't subscribe to club emails but still play regularly!"),
            React.createElement("p", null,
                "If you need to update your status for this week, visit ",
                React.createElement(ProfileLink, { verificationKey: this.props.match.params.key }, "your profile page"),
                "."))) || React.createElement("div", null,
            React.createElement("p", { className: "App-intro" }, "Fetching attendance information for this week"),
            React.createElement(ScaleLoader, { color: 'blue', height: 12, loading: true }));
    };
    return Turnout;
}(React.Component));
export { Turnout };
//# sourceMappingURL=Turnout.js.map