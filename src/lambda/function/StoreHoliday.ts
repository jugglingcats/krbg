import {success, failure} from "../util/response-lib";
import {loadProfile} from "../util/keyVerification";
import {makeDynamoCall} from "../util/dynamodb-lib";
import {UserProfile} from "../../common/UserProfile";

export function StoreHoliday(event: any, context: any) {
    const {key, holiday} = JSON.parse(event.body);

    console.log("Storing holiday option", holiday, "for key", key);

    loadProfile(key).then((profile: UserProfile) => {
        const params = {
            TableName: "ClubUsers",
            AttributeUpdates: {
                holiday: holiday ? {
                    Action: "PUT",
                    Value: holiday
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