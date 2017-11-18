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
import * as mailer from "nodemailer";
import { default as rhm, Email, Box, Item, Span, A } from "react-html-email";
import * as React from "react";
import { Environment } from "./env";
import { peopleCount } from "../../common/utils";
var aws = require('aws-sdk');
var ses = new aws.SES({
    region: 'eu-west-1'
});
var transport = mailer.createTransport({
    SES: ses
});
var css = "\n@media only screen and (max-device-width: 480px) {\n  font-size: 20px !important;\n}\n\n".trim();
var userBadge = {
    display: "inline-block",
    padding: "5px 8px 5px 8px",
    margin: "0px 4px 4px 4px",
    border: "solid 1px grey",
    borderRadius: "5px"
};
function userbadge(p) {
    return React.createElement(Span, { style: userBadge, key: p.username }, p.username);
}
var Para = (function (_super) {
    __extends(Para, _super);
    function Para() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Para.prototype.render = function () {
        return (React.createElement(Box, { cellSpacing: 10, width: "100%" },
            React.createElement(Item, null,
                React.createElement(Span, null, this.props.children))));
    };
    return Para;
}(React.Component));
var OptionLinks = (function (_super) {
    __extends(OptionLinks, _super);
    function OptionLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OptionLinks.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Para, null,
                React.createElement(StatusUpdateLink, { profile: this.props.profile, status: "yes" }, "Yes I'll be there!")),
            React.createElement(Para, null,
                React.createElement(StatusUpdateLink, { profile: this.props.profile, status: "no" }, "Sorry I can't come this week"))));
    };
    return OptionLinks;
}(React.Component));
var ProfileLink = (function (_super) {
    __extends(ProfileLink, _super);
    function ProfileLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProfileLink.prototype.render = function () {
        var href = Environment.siteLink("profile/" + this.props.profile.verificationKey);
        return React.createElement(A, { title: "Link", href: href }, this.props.children);
    };
    return ProfileLink;
}(React.Component));
var StatusUpdateLink = (function (_super) {
    __extends(StatusUpdateLink, _super);
    function StatusUpdateLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatusUpdateLink.prototype.render = function () {
        var href = Environment.siteLink("status/" + this.props.profile.verificationKey + "/" + this.props.status);
        return React.createElement(A, { title: "Link", href: href }, this.props.children);
    };
    return StatusUpdateLink;
}(React.Component));
function sendEmail(subject, profile, body) {
    return new Promise(function (resolve, reject) {
        transport.sendMail({
            from: "Alfie Kirkpatrick [Backgammon] <bg@akirkpatrick.com>",
            to: profile.email,
            subject: subject,
            text: "Please email alfie@akirkpatrick.com if this email is wrongly formatted",
            html: rhm.renderEmail(React.createElement(Email, { headCss: css },
                React.createElement(Para, null,
                    "Dear ",
                    profile.username,
                    ","),
                body,
                React.createElement(Para, null,
                    "You can manage your preferences or unsubscribe at any time using your\u00A0",
                    React.createElement(ProfileLink, { profile: profile }, "Profile Page"))))
        }, function (err, data) {
            if (err) {
                console.log("Error sending email: ", err);
                reject(err);
            }
            else {
                resolve({ ok: true });
            }
        });
    });
}
var EmailService = (function () {
    function EmailService() {
    }
    EmailService.sendWelcomeEmail = function (profile) {
        return sendEmail("Welcome to Kensal Rise Backgammon!", profile, (React.createElement("div", null,
            React.createElement(Para, null, "Welcome to the Kensal Rise Backgammon Club. We send out regular emails to club members to find out who plans to come each week."),
            React.createElement(Para, null, "The club meets each week on Thursday at The Island in Kensal Rise from 8.30pm."))));
    };
    EmailService.sendStartOfWeekEmail = function (profile) {
        return sendEmail("Backgammon this week...", profile, (React.createElement("div", null,
            React.createElement(Para, null, "It's that time of the week again. Please let us know if you plan to come along to Backgammon this week."),
            React.createElement(OptionLinks, { profile: profile }))));
    };
    EmailService.sendReminderEmail = function (profile, attendence) {
        return sendEmail("Backgammon this week... (reminder)", profile, (React.createElement("div", null,
            React.createElement(Para, null,
                "Currently there are ",
                peopleCount(attendence),
                " confirmed for this week."),
            React.createElement(Para, null, "Please let us know if you can make it so we can confirm final numbers. If not enough people confirm we might cancel the event this week."),
            React.createElement(OptionLinks, { profile: profile }))));
    };
    EmailService.sendFinalEmail = function (profile, users) {
        var confirmed = users.filter(function (p) { return p.option === "yes"; });
        var denied = users.filter(function (p) { return p.option === "no"; });
        var title = confirmed.length > 3 ? "Backgammon this week... (final numbers)" :
            "Backgammon this week... only " + confirmed.length + " confirmed!";
        return sendEmail(title, profile, (React.createElement("div", null,
            React.createElement(Para, null,
                "Currently there ",
                peopleCount(confirmed.length),
                " confirmed for this week."),
            confirmed.length > 0 && React.createElement(Para, null, confirmed.map(function (p) { return userbadge(p); })),
            denied.length > 0 && (React.createElement("div", null,
                React.createElement(Para, null, "The following people can't make it"),
                React.createElement(Para, null, denied.map(function (p) { return userbadge(p); })))),
            React.createElement(Para, null,
                "There are ",
                users.length,
                " people in total on the email list. Note that some people who play regularly aren't on this list."),
            profile.option && (React.createElement("div", null,
                React.createElement(Para, null,
                    "If your situation has changed and you ",
                    profile.option === "xxx" ? "cannot" : "can",
                    " make it after all,\u00A0",
                    React.createElement(ProfileLink, { profile: profile }, "change your status"),
                    "."))),
            profile.option == undefined && (React.createElement("div", null,
                React.createElement(Para, null, "It's not too late to let us know if you're coming!"),
                React.createElement(OptionLinks, { profile: profile }))))));
    };
    return EmailService;
}());
export { EmailService };
//# sourceMappingURL=EmailService.js.map