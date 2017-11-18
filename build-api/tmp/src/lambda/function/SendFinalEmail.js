import { failure, success } from "../util/response-lib";
import { call } from "../util/dynamodb-lib";
import { EmailService } from "../util/EmailService";
export function SendFinalEmail(event, context) {
    call("scan", {
        TableName: "ClubUsers"
    }).then(function (f) {
        return Promise.all(f.Items.map(function (profile) {
            return EmailService.sendFinalEmail(profile, f.Items);
        }));
    }).then(function () {
        context.succeed(success());
    }).catch(function (e) {
        context.succeed(failure({ message: e.message }));
    });
}
//# sourceMappingURL=SendFinalEmail.js.map