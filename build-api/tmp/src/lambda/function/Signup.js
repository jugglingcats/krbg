import { call } from "../util/dynamodb-lib";
import { failure, success } from "../util/response-lib";
import { check } from "../util/recaptcha";
import { Environment } from "../util/env";
import { EmailService } from "../util/EmailService";
import * as jwt from "jsonwebtoken";
var uuid = require('uuid');
export function Signup(event, context) {
    console.log("Request to add: ", event.body);
    var data = JSON.parse(event.body);
    var timestamp = new Date().getTime();
    console.log("New signup: ", data);
    // TODO: validate the email
    var verificationKey = uuid.v1();
    var profile = {
        username: data.username,
        email: data.email,
        verificationKey: verificationKey,
        roles: [],
        created: timestamp,
        updated: timestamp
    };
    check(data.recaptcha).then(function () {
        if (Environment.is("SKIP_PUT")) {
            console.log("Database put is disabled in config");
            return Promise.resolve({ ok: true });
        }
        // Recaptcha ok, go ahead and create
        var params = {
            TableName: "ClubUsers",
            Expected: {
                email: {
                    Exists: false
                }
            },
            Item: profile
        };
        console.log("Adding new profile: ", data.email);
        return call("put", params);
    }).then(function (result) {
        return EmailService.sendWelcomeEmail(profile);
    }).then(function (result) {
        context.succeed(success(profile));
    }).catch(function (e) {
        console.log("Call failed: ", e);
        if (e.code === "ConditionalCheckFailedException") {
            var token = jwt.sign({}, "oneflewoverthecuckoosnest", { expiresIn: '1h' });
            context.succeed(failure({ token: token }, 409));
        }
        else {
            context.succeed(failure({ message: e.message }));
        }
    });
}
//# sourceMappingURL=Signup.js.map