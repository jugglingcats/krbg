import {loadProfile} from "../util/keyVerification";
import {makeDynamoCall} from "../util/dynamodb-lib";
import {failure, success} from "../util/response-lib";

export function Unsubscribe(event: any, context: any) {
    const {key} = JSON.parse(event.body);

    loadProfile(key).then((profile: any) => {
        const params = {
            TableName: "ClubUsers",
            Key: {
                email: profile.email
            }
        };

        return makeDynamoCall("delete", params);
    }).then(() => {
        context.succeed(success());
    }).catch(e => {
        context.succeed(failure(e.message));
    });
}
