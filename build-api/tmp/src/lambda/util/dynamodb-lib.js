import * as AWS from 'aws-sdk';
AWS.config.update({ region: "eu-west-1" });
export function call(action, params) {
    var dynamoDb = new AWS.DynamoDB.DocumentClient({ region: "eu-west-1" });
    if (!dynamoDb[action]) {
        console.log("DynamoDb function does not exist: ", action, dynamoDb);
    }
    return dynamoDb[action](params).promise();
}
//# sourceMappingURL=dynamodb-lib.js.map