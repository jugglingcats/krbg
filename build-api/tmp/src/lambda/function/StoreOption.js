import { success, failure } from "../util/response-lib";
import { loadProfile } from "../util/keyVerification";
import { call } from "../util/dynamodb-lib";
export function StoreOption(event, context) {
    var _a = JSON.parse(event.body), key = _a.key, option = _a.option;
    console.log("Storing option", option, "for key", key);
    loadProfile(key).then(function (profile) {
        var params = {
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
        return call("update", params);
    }).then(function () {
        // re-load the profile
        return loadProfile(key);
    }).then(function (profile) {
        // console.log("RESULT OF UPDATE: ", profile);
        context.succeed(success(profile));
    }).catch(function (e) {
        context.succeed(failure(e));
    });
}
//# sourceMappingURL=StoreOption.js.map