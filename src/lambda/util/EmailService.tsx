import * as mailer from "nodemailer";
import {default as rhm, Email, Box, Item, Span, A} from "react-html-email";
import * as React from "react";
import {Environment} from "./env";
import {UserProfile} from "../../common/UserProfile";
import {peopleCount} from "../../common/utils";
import {AttendanceOption} from "../../common/AttendanceOption";

// scan for users not on a holiday
export const standardEmailScan = {
    TableName: "ClubUsers",
    FilterExpression: "attribute_not_exists(holiday)"
};

const aws = require('aws-sdk');
const ses = new aws.SES({
    region: "eu-west-1"
});

const transport = mailer.createTransport({
    SES: ses
});

const css = `
@media only screen and (max-device-width: 480px) {
  font-size: 20px !important;
}

`.trim();

const userBadge = {
    display: "inline-block",
    padding: "5px 8px 5px 8px",
    margin: "0px 4px 4px 4px",
    border: "solid 1px grey",
    borderRadius: "5px"
};

function userbadge(p: UserProfile) {
    return <Span style={userBadge} key={p.username}>{p.username}</Span>
}

class Para extends React.Component<any, any> {
    render() {
        return (
            <Box cellSpacing={10} width="100%">
                <Item>
                    <Span>{this.props.children}</Span>
                </Item>
            </Box>
        )
    }
}

class OptionLinks extends React.Component<{ profile: UserProfile }, any> {
    render() {
        return (<div>
            <Para>
                <StatusUpdateLink profile={this.props.profile} status="yes">Yes I'll be there!</StatusUpdateLink>
            </Para>
            <Para>
                <StatusUpdateLink profile={this.props.profile} status="no">Sorry I can't come this week</StatusUpdateLink>
            </Para>
        </div>)
    }
}

class ProfileLink extends React.Component<{ profile: UserProfile }, any> {
    render() {
        let href = Environment.siteLink("profile/" + this.props.profile.verificationKey);
        return <A title="Link" href={href}>{this.props.children}</A>
    }
}

class TurnoutLink extends React.Component<{ profile: UserProfile }, any> {
    render() {
        let href = Environment.siteLink("turnout/" + this.props.profile.verificationKey);
        return <A title="Link" href={href}>{this.props.children}</A>
    }
}

class StatusUpdateLink extends React.Component<{ status: AttendanceOption, profile: UserProfile }, any> {
    render() {
        const href = Environment.siteLink("status/" + this.props.profile.verificationKey + "/" + this.props.status);
        return <A title="Link" href={href}>{this.props.children}</A>
    }
}

function sendEmail(subject: string, profile: UserProfile, body: any) {
    return new Promise((resolve, reject) => {
        transport.sendMail({
            from: "Alfie Kirkpatrick [Backgammon] <bg@akirkpatrick.com>",
            to: profile.email,
            subject: subject,
            text: "Please email alfie@akirkpatrick.com if this email is wrongly formatted",
            html: rhm.renderEmail(
                <Email headCss={css}>
                    <Para>
                        Dear {profile.username},
                    </Para>

                    {body}

                    <Para>
                        You can manage your settings or unsubscribe at any time by viewing your&nbsp;
                        <ProfileLink profile={profile}>Profile</ProfileLink>
                    </Para>
                </Email>
            )
        }, function (err: any, data: any) {
            if (err) {
                console.log("Error sending email: ", err);
                reject(err);
            } else {
                resolve({ok: true});
            }
        });
    });
}

export class EmailService {
    static sendCustomEmail(profile: UserProfile, text: string): Promise<any> {
        return sendEmail("Message from Kensal Rise Backgammon", profile,
            (<div>
                <Para>{text}</Para>
                <Para>
                    All the best,
                    Alfie
                </Para>
            </div>)
        );
    }

    static sendWelcomeEmail(profile: UserProfile): Promise<any> {
        return sendEmail("Welcome to Kensal Rise Backgammon!", profile,
            (<div>
                <Para>
                    Welcome to the Kensal Rise Backgammon Club. We send out regular emails to club members to find out who plans to come
                    each week.
                </Para>
                <Para>
                    The club meets each week on Thursday at The Island in Kensal Rise from 8.30pm.
                </Para>
            </div>)
        );
    }

    static sendStartOfWeekEmail(profile: UserProfile) {
        return sendEmail("Backgammon this week...", profile,
            (<div>
                <Para>
                    It's that time of the week again. Please let us know if you plan to come along to Backgammon this week.
                </Para>
                <OptionLinks profile={profile}/>
            </div>)
        );
    }

    static sendReminderEmail(profile: UserProfile, attendence: number) {
        return sendEmail("Backgammon this week... (reminder)", profile,
            (<div>
                <Para>
                    Currently there are {peopleCount(attendence)} confirmed for this week.
                </Para>
                <Para>
                    Please let us know if you can make it so we can confirm final numbers. If not enough people
                    confirm we might cancel the event this week.
                </Para>
                <OptionLinks profile={profile}/>
            </div>)
        );
    }

    static sendFinalEmail(profile: UserProfile, users: Array<UserProfile>) {
        const confirmed = users.filter(p => p.option === "yes");
        const denied = users.filter(p => p.option === "no");
        const title = confirmed.length > 3 ? "Backgammon this week... (final numbers)" :
            "Backgammon this week... only " + confirmed.length + " confirmed!";

        return sendEmail(title, profile,
            (<div>
                <Para>
                    There are {peopleCount(confirmed.length)} confirmed this week.
                </Para>
                {
                    confirmed.length > 0 && <Para>
                        {confirmed.map(p => userbadge(p))}
                    </Para>
                }
                {
                    denied.length > 0 && (<div>
                        <Para>
                            The following people can't make it
                        </Para>
                        <Para>
                            {denied.map(p => userbadge(p))}
                        </Para>
                    </div>)
                }
                <Para>
                    <TurnoutLink profile={profile}>View up-to-date status and arrival times online</TurnoutLink>
                </Para>
                {/*
                <Para>
                    There are {users.length} people on the email list but some regular players don't subscribe.
                </Para>
*/}
                {
                    profile.option && (<div>
                        <Para>
                            If your situation has changed and you {profile.option === "yes" ? "cannot" : "can"} make it after all,&nbsp;
                            <ProfileLink profile={profile}>change your status</ProfileLink>.
                        </Para>
                    </div>)
                }
                {
                    profile.option == undefined && (<div>
                        <Para>
                            It's not too late to let us know if you're coming!
                        </Para>
                        <OptionLinks profile={profile}/>
                    </div>)
                }
            </div>)
        );
    }
}