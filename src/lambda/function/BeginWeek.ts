import {failure, success} from "../util/response-lib";
import {makeDynamoCall} from "../util/dynamodb-lib";
import {EmailService, standardEmailScan} from "../util/EmailService";
import {loadProfile} from "../util/keyVerification";
import {UserProfile} from "../../common/UserProfile";

export function CronBeginWeek() {
    return makeDynamoCall("scan", standardEmailScan)
        .then((result: any) => result.Items as UserProfile[])
        .then((profiles: UserProfile[]) => {
            return Promise.all(profiles.map((profile: any) => {
                return EmailService.sendStartOfWeekEmail(profile);
            }));
        });
}

export function BeginWeek(event: any, context: any) {
    const {key} = JSON.parse(event.body);

    loadProfile(key, "admin")
        .then(CronBeginWeek)
        .then(() => {
            context.succeed(success());
        })
        .catch((e: any) => {
            context.succeed(failure({message: e.message}));
        });
}
