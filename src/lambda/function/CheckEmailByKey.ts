import {makeDynamoCall} from "../util/dynamodb-lib"
import {failure, success} from "../util/response-lib";
import {loadProfile} from "../util/keyVerification";

export function CheckEmailByKey(event: any, context: any) {
    const key = event.queryStringParameters.key;

    loadProfile(key).then((profile: any) => {
        context.succeed(success(profile));
    }).catch((e: any) => {
        context.succeed(failure({message: e.message}));
    })
}
