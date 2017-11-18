import { failure, success } from "../util/response-lib";
import { call } from "../util/dynamodb-lib";
import { EmailService } from "../util/EmailService";
import { loadProfile } from "../util/keyVerification";
export function BeginWeek(event, context) {
    var key = JSON.parse(event.body).key;
    // TODO: C: reset people's option at start of week!!!!
    loadProfile(key, "admin").then(function () {
        return call("scan", {
            TableName: "ClubUsers"
        });
    }).then(function (f) {
        return Promise.all(f.Items.map(function (profile) {
            return EmailService.sendStartOfWeekEmail(profile);
        }));
    }).then(function () {
        context.succeed(success());
    }).catch(function (e) {
        context.succeed(failure({ message: e.message }));
    });
}
//# sourceMappingURL=BeginWeek.js.map