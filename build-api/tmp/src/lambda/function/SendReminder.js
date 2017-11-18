import { failure, success } from "../util/response-lib";
import { call } from "../util/dynamodb-lib";
import { EmailService } from "../util/EmailService";
export function SendReminder(event, context) {
    call("scan", {
        TableName: "ClubUsers"
    }).then(function (f) {
        var unconfirmed = f.Items.filter(function (profile) { return profile.option === undefined; });
        var confirmedCount = f.Items.filter(function (profile) { return profile.option === "yes"; });
        return Promise.all(unconfirmed.map(function (profile) {
            return EmailService.sendReminderEmail(profile, confirmedCount);
        }));
    }).then(function () {
        context.succeed(success());
    }).catch(function (e) {
        context.succeed(failure({ message: e.message }));
    });
}
//# sourceMappingURL=SendReminder.js.map