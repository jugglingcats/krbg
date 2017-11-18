import {failure, success} from "../util/response-lib";
import {Environment} from "../util/env";
import {makeDynamoCall} from "../util/dynamodb-lib";
import {EmailService, standardEmailScan} from "../util/EmailService";
import {UserProfile} from "../../common/UserProfile";
import {loadProfile} from "../util/keyVerification";

export function CronSendReminder() {
    return makeDynamoCall("scan", standardEmailScan).then((f: any) => {
        const unconfirmed = f.Items.filter((profile: UserProfile) => profile.option === undefined);
        const confirmedCount = f.Items.filter((profile: UserProfile) => profile.option === "yes")

        return Promise.all(unconfirmed.map((profile: UserProfile) => {
            return EmailService.sendReminderEmail(profile, confirmedCount);
        }));
    });
}

export function SendReminder(event: any, context: any) {
    const {key} = JSON.parse(event.body);

    loadProfile(key, "admin")
        .then(CronSendReminder)
        .then(() => {
            context.succeed(success());
        })
        .catch((e: any) => {
            context.succeed(failure({message: e.message}));
        });
}
