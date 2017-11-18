import {failure, success} from "../util/response-lib";
import {makeDynamoCall} from "../util/dynamodb-lib";
import {EmailService, standardEmailScan} from "../util/EmailService";
import {UserProfile} from "../../common/UserProfile";
import {loadProfile} from "../util/keyVerification";

export function CronSendFinalEmail() {
    return makeDynamoCall("scan", standardEmailScan).then((f: any) => {
        return Promise.all(f.Items.map((profile: UserProfile) => {
            return EmailService.sendFinalEmail(profile, f.Items);
        }))
    })
}

export function SendFinalEmail(event: any, context: any) {
    const {key} = JSON.parse(event.body);

    loadProfile(key, "admin")
        .then(CronSendFinalEmail)
        .then(() => {
            context.succeed(success());
        })
        .catch((e: any) => {
            context.succeed(failure({message: e.message}));
        });
}
