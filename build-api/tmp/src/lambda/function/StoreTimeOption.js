import { success, failure } from "../util/response-lib";
import { loadProfile } from "../util/keyVerification";
import { call } from "../util/dynamodb-lib";
export function StoreTimeOption(event, context) {
    var _a = JSON.parse(event.body), key = _a.key, time = _a.time;
    console.log("Storing time option", time, "for key", key);
    loadProfile(key).then(function (profile) {
        var params = {
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
        return call("update", params);
    }).then(function () {
        // re-load the profile
        return loadProfile(key);
    }).then(function (profile) {
        context.succeed(success(profile));
    }).catch(function (e) {
        context.succeed(failure(e));
    });
}
//# sourceMappingURL=StoreTimeOption.js.map