import {makeDynamoCall} from "../util/dynamodb-lib"
import {failure, success} from "../util/response-lib";
import {validateRecaptcha} from "../util/recaptcha";
import {Environment} from "../util/env";
import {EmailService} from "../util/EmailService";
import {UserProfile} from "../../common/UserProfile";
import * as jwt from "jsonwebtoken"

const uuid = require('uuid');

export function Signup(event: any, context: any) {
    const jwtSecret=Environment.jwtSecret;

    console.log("Request to add: ", event.body);

    const data = JSON.parse(event.body);
    const timestamp = new Date().getTime();
    console.log("New signup: ", data);

    // TODO: validate the email

    let verificationKey = uuid.v1();

    const profile: UserProfile = {
        username: data.username,
        email: data.email,
        verificationKey: verificationKey,
        roles: [],
        created: timestamp,
    };

    validateRecaptcha(data.recaptcha).then(() => {
        if (Environment.is("SKIP_PUT")) {
            console.log("Database put is disabled in config");
            return Promise.resolve({ok: true});
        }
        // Recaptcha ok, go ahead and create
        const params = {
            TableName: "ClubUsers",
            Expected: {
                email: {
                    Exists: false
                }
            },
            Item: profile
        };

        console.log("Adding new profile: ", data.email);
        return makeDynamoCall("put", params);
    }).then(() => {
        return EmailService.sendWelcomeEmail(profile)
    }).then(() => {
        context.succeed(success(profile));
    }).catch(e => {
        console.log("Call failed: ", e);
        if (e.code === "ConditionalCheckFailedException") {
            const token = jwt.sign({}, jwtSecret, {expiresIn: '1h'});
            context.succeed(failure({token: token}, 409))
        } else {
            context.succeed(failure({message: e.message}));
        }
    });
}