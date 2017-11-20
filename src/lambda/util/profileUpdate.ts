import {loadProfile} from "./keyVerification";
import {UserProfile} from "../../common/UserProfile";
import {makeDynamoCall} from "./dynamodb-lib";
import {failure, success} from "./response-lib";

export function profileUpdate(key: string, context: any, params: any) {
    loadProfile(key).then((profile: UserProfile) => {
        return makeDynamoCall("update", {
            ...params,
            TableName: "ClubUsers",
            Key: {
                email: profile.email
            }
        });
    }).then(() => {
        // re-load the profile
        return loadProfile(key);
    }).then((profile) => {
        context.succeed(success(profile));
    }).catch(e => {
        context.succeed(failure(e));
    });

}