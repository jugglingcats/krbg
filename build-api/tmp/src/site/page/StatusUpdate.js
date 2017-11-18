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
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { TimeOptionSelection } from "../component/TimeOptionSelection";
var StatusUpdate = (function (_super) {
    __extends(StatusUpdate, _super);
    function StatusUpdate() {
        var _this = _super.call(this) || this;
        _this.state = {
            confirmed: false
        };
        return _this;
    }
    StatusUpdate.prototype.componentDidMount = function () {
        var _this = this;
        var option = this.props.match.params.option;
        this.props.controller.storeOption(option).then(function () {
            _this.setState({
                confirmed: true
            });
        }).catch(); // framework takes care of error
    };
    StatusUpdate.prototype.render = function () {
        var option = this.props.match.params.option;
        var userProfile = this.props.controller.verified.profile;
        if (option && !this.state.confirmed) {
            return (React.createElement("div", null,
                React.createElement("p", { className: "App-intro" },
                    "Hold tight ",
                    userProfile.username,
                    ", storing your selection!"),
                React.createElement(ScaleLoader, { color: 'blue', height: 12, loading: true })));
        }
        return (React.createElement("section", null,
            React.createElement("p", { className: "App-intro" },
                option == "yes" && React.createElement("span", null, "You've indicated you will attend this week!"),
                option == "no" && React.createElement("span", null, "Sorry you can't make it this week!")),
            option === "yes" && React.createElement(TimeOptionSelection, { controller: this.props.controller }),
            React.createElement("p", null,
                React.createElement(Link, { className: "pure-button pure-button-primary", to: '/confirmed/' + this.props.match.params.key }, "See who else is coming"))));
    };
    StatusUpdate = __decorate([
        observer
    ], StatusUpdate);
    return StatusUpdate;
}(React.Component));
export { StatusUpdate };
//# sourceMappingURL=StatusUpdate.js.map