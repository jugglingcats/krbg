import * as AWS from 'aws-sdk';

import {aws_region} from "../index";

AWS.config.update({region: aws_region});

export function makeDynamoCall(action: string, params: any) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient({region: "eu-west-1"});
    if (!dynamoDb[action]) {
        console.log("DynamoDb function does not exist: ", action, dynamoDb);
    }
    return dynamoDb[action](params).promise();
}