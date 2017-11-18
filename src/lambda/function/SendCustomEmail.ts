import {failure, success} from "../util/response-lib";
import {makeDynamoCall} from "../util/dynamodb-lib";
import {EmailService, standardEmailScan} from "../util/EmailService";
import {UserProfile} from "../../common/UserProfile";
import {loadProfile} from "../util/keyVerification";

export function SendCustomEmail(event: any, context: any) {
    const {key, text, allUsers} = JSON.parse(event.body);

    const scan = allUsers ? {TableName: "ClubUsers"} : standardEmailScan;

    loadProfile(key, "admin")
        .then(() => {
            return makeDynamoCall("scan", scan).then((f: any) => {
                return Promise.all(f.Items.map((profile: UserProfile) => {
                    return EmailService.sendCustomEmail(profile, text);
                }))
            })
        })
        .then(() => {
            context.succeed(success());
        })
        .catch((e: any) => {
            context.succeed(failure({message: e.message}));
        });
}
