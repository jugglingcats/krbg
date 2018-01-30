import {makeDynamoCall} from "../util/dynamodb-lib";
import {loadProfile} from "../util/keyVerification";
import {failure, success} from "../util/response-lib";

export function CronRollUsers() {
    console.log("Rolling users...");

    // fetch all users option/time then for each of them remove option/time and append to history
    return makeDynamoCall("scan", {
        TableName: "ClubUsers",
        ProjectionExpression: "email, #option, #time, holiday",
        ExpressionAttributeNames: {'#option': 'option', '#time': 'time'}
    }).then((result: any) => {
        return Promise.all(result.Items.map((r: any) => {
            if (r.holiday) {
                --r.holiday || delete r.holiday;
            }
            return makeDynamoCall("update", {
                TableName: "ClubUsers",
                AttributeUpdates: {
                    option: {Action: "DELETE"},
                    time: {Action: "DELETE"},
                    friends: {Action: "DELETE"},
                    holiday: r.holiday ? {
                        Action: "PUT",
                        Value: r.holiday
                    } : {
                        Action: "DELETE"
                    },
                    history: {
                        Action: "ADD", Value: [{
                            option: r.option,
                            time: r.time
                        }]
                    }
                },
                Key: {
                    email: r.email
                }
            })
        }))
    })
}

export function RollUsers(event: any, context: any) {
    const {key} = JSON.parse(event.body);

    loadProfile(key, "admin")
        .then(CronRollUsers)
        .then(() => {
            context.succeed(success());
        })
        .catch((e: any) => {
            context.succeed(failure({message: e.message}));
        });
}
