import {failure, success} from "../util/response-lib";
import {makeDynamoCall} from "../util/dynamodb-lib";
import {EmailService, standardEmailScan} from "../util/EmailService";
import {UserProfile} from "../../common/UserProfile";
import {loadProfile} from "../util/keyVerification";

export function CronSendReminder() {
    return makeDynamoCall("scan", standardEmailScan).then((f: any) => {
        const unconfirmed = f.Items.filter((profile: UserProfile) => profile.option === undefined);
        const confirmedCount = f.Items
            .filter((p: UserProfile) => p.option === "yes")
            .reduce((total: number, current: UserProfile) => {
                const friends: number = current.friends || 0;
                return Number(total + 1) + Number(friends);
            }, 0);

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
