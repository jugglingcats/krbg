import { loadProfile } from "../util/keyVerification";
import { call } from "../util/dynamodb-lib";
import { failure, success } from "../util/response-lib";
export function Unsubscribe(event, context) {
    var key = JSON.parse(event.body).key;
    loadProfile(key).then(function (profile) {
        var params = {
            TableName: "ClubUsers",
            Key: {
                email: profile.email
            }
        };
        return call("delete", params);
    }).then(function () {
        context.succeed(success());
    }).catch(function (e) {
        context.succeed(failure(e.message));
    });
}
//# sourceMappingURL=Unsubscibe.js.map