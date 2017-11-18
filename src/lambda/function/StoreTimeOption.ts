import {success, failure} from "../util/response-lib";
import {loadProfile} from "../util/keyVerification";
import {makeDynamoCall} from "../util/dynamodb-lib";
import {UserProfile} from "../../common/UserProfile";

export function StoreTimeOption(event: any, context: any) {
    const {key, time} = JSON.parse(event.body);

    console.log("Storing time option", time, "for key", key);

    loadProfile(key).then((profile: UserProfile) => {
        const params = {
            TableName: "ClubUsers",
            AttributeUpdates: {
                time: time ? {
                    Action: "PUT",
                    Value: time
                } : {
                    Action: "DELETE"
                }
            },
            Key: {
                email: profile.email
            }
        };

        return makeDynamoCall("update", params);
    }).then(() => {
        // re-load the profile
        return loadProfile(key);
    }).then((profile) => {
        context.succeed(success(profile));
    }).catch(e => {
        context.succeed(failure(e));
    });
}