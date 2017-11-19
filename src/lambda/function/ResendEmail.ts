import {makeDynamoCall} from "../util/dynamodb-lib";
import {EmailService} from "../util/EmailService";
import {UserProfile} from "../../common/UserProfile";
import {failure, success} from "../util/response-lib";
import * as jwt from "jsonwebtoken"
import {Environment} from "../util/env";

export function ResendEmail(event: any, context: any) {
    const data = JSON.parse(event.body);
    const jwtSecret = Environment.jwtSecret;

    new Promise((resolve, reject) => {
        try {
            jwt.verify(data.token, jwtSecret);
            resolve();
        } catch (e) {
            reject({message: "Key verification failed"});
        }
    }).then(() => {
        const params = {
            TableName: "ClubUsers",
            Key: {
                email: data.email
            }
        };
        return makeDynamoCall("get", params).then((result: any) => {
            return EmailService.sendWelcomeEmail(result.Item)
        })
    }).then(() => {
        context.succeed(success());
    }).catch(e => {
        context.succeed(failure({message: e.message}));
    })
}