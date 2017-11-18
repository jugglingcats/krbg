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
import { TimeOption } from "../../common/UserProfile";
import { ScaleLoader } from "react-spinners";
import "../RadioButtons.css";
var tick = require("../tick.svg");
var TimeOptionSelection = (function (_super) {
    __extends(TimeOptionSelection, _super);
    function TimeOptionSelection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    TimeOptionSelection.prototype.componentDidMount = function () {
        this.setState({
            time: this.props.controller.verified.profile.time
        });
    };
    TimeOptionSelection.prototype.selectTime = function (e) {
        this.setState({
            time: e,
            saved: false
        });
    };
    TimeOptionSelection.prototype.storeTimeOption = function (clear) {
        var _this = this;
        this.setState({
            saved: false
        });
        this.props.controller.storeTimeOption(clear ? undefined : this.state.time)
            .then(function () {
            _this.setState({ saved: true });
        }).catch(function () {
            // we're going to error page!
        });
    };
    TimeOptionSelection.prototype.clearTimeOption = function () {
        this.setState({
            time: undefined
        });
        this.storeTimeOption(true);
    };
    TimeOptionSelection.prototype.render = function () {
        var _this = this;
        var busy = this.props.controller.busy;
        var userProfile = this.props.controller.verified.profile;
        return (React.createElement("form", { className: "pure-form" },
            React.createElement("fieldset", null,
                React.createElement("legend", null, "Let people know what time you're coming (optional)"),
                React.createElement("div", { className: "custom-radios  control-group-inline" }, Object.keys(TimeOption).map(function (option) { return (React.createElement("div", { key: option },
                    React.createElement("input", { type: "radio", id: option, name: "time", value: option, checked: _this.state.time === TimeOption[option] }),
                    React.createElement("label", { onClick: function () { return _this.selectTime(TimeOption[option]); }, htmlFor: "{option}" },
                        React.createElement("span", null,
                            React.createElement("img", { src: tick, alt: TimeOption[option] }))),
                    React.createElement("span", { className: "App-time" }, TimeOption[option]))); })),
                busy && React.createElement("div", { className: "App-standoff" },
                    React.createElement(ScaleLoader, { color: "blue", height: 12, loading: true }))
                    ||
                        React.createElement("div", { className: "pure-control-group control-group-inline" },
                            React.createElement("button", { type: "button", onClick: function (e) { return _this.storeTimeOption(); }, disabled: !this.state.time || this.state.time === userProfile.time, className: "pure-button pure-button-primary" }, "Set Time"),
                            React.createElement("button", { type: "button", onClick: function (e) { return _this.clearTimeOption(); }, disabled: !this.state.time && !userProfile.time, className: "pure-button" }, "Clear")),
                this.state.saved && React.createElement("div", null, "Your selected time was saved!"))));
    };
    return TimeOptionSelection;
}(React.Component));
export { TimeOptionSelection };
//# sourceMappingURL=TimeOptionSelection.js.map