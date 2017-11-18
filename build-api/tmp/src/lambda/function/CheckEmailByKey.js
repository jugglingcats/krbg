import { failure, success } from "../util/response-lib";
import { loadProfile } from "../util/keyVerification";
export function CheckEmailByKey(event, context) {
    var key = event.queryStringParameters.key;
    loadProfile(key).then(function (profile) {
        context.succeed(success(profile));
    }).catch(function (e) {
        context.succeed(failure({ message: e.message }));
    });
}
//# sourceMappingURL=CheckEmailByKey.js.map