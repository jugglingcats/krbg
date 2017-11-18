import { call } from "../util/dynamodb-lib";
import { EmailService } from "../util/EmailService";
import { failure, success } from "../util/response-lib";
import * as jwt from "jsonwebtoken";
export function ResendEmail(event, context) {
    var data = JSON.parse(event.body);
    new Promise(function (resolve, reject) {
        try {
            jwt.verify(data.token, "oneflewoverthecuckoosnest");
            resolve();
        }
        catch (e) {
            reject({ message: "Key verification failed" });
        }
    }).then(function () {
        var params = {
            TableName: "ClubUsers",
            Key: {
                email: data.email
            }
        };
        return call("get", params).then(function (result) {
            return EmailService.sendWelcomeEmail(result.Item);
        });
    }).then(function () {
        context.succeed(success());
    }).catch(function (e) {
        context.succeed(failure({ message: e.message }));
    });
}
//# sourceMappingURL=ResendEmail.js.map