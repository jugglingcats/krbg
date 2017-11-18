import {failure, success} from "../util/response-lib";
import {expressionAttributeNames, loadProfile, standardProjection} from "../util/keyVerification";
import {makeDynamoCall} from "../util/dynamodb-lib";

export function Turnout(event: any, context: any) {
    const key = event.queryStringParameters.key;

    loadProfile(key).then(() => {
        return makeDynamoCall("scan", {
                TableName: "ClubUsers",
                ProjectionExpression: standardProjection,
                ExpressionAttributeNames: expressionAttributeNames
            }
        )
    }).then((f: any) => {
        return f.Items.map((profile: any) => {
            return {
                username: profile.username,
                option: profile.option,
                time: profile.time
            }
        });
    }).then((items: any) => {
        context.succeed(success({
            result: items
        }));
    }).catch(e => {
        context.succeed(failure(e));
    });
}