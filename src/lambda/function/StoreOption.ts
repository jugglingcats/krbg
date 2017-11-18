import {success, failure} from "../util/response-lib";
import {loadProfile} from "../util/keyVerification";
import {makeDynamoCall} from "../util/dynamodb-lib";
import {UserProfile} from "../../common/UserProfile";

export function StoreOption(event: any, context: any) {
    const {key, option} = JSON.parse(event.body);

    console.log("Storing option", option, "for key", key);

    loadProfile(key).then((profile: UserProfile) => {
        const params = {
            TableName: "ClubUsers",
            AttributeUpdates: {
                option: {
                    Action: "PUT",
                    Value: option
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
        // console.log("RESULT OF UPDATE: ", profile);
        context.succeed(success(profile));
    }).catch(e => {
        context.succeed(failure(e));
    });
}