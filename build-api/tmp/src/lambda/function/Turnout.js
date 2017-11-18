import { success, failure } from "../util/response-lib";
import { loadProfile } from "../util/keyVerification";
import { call } from "../util/dynamodb-lib";
export function Turnout(event, context) {
    var key = event.queryStringParameters.key;
    loadProfile(key).then(function () {
        return call("scan", {
            TableName: "ClubUsers"
        });
    }).then(function (f) {
        return f.Items.map(function (profile) {
            return {
                username: profile.username,
                option: profile.option
            };
        });
    }).then(function (items) {
        context.succeed(success({
            result: items
        }));
    }).catch(function (e) {
        context.succeed(failure(e));
    });
}
//# sourceMappingURL=Turnout.js.map