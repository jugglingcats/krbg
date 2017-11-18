import { call } from "./dynamodb-lib";
export function loadProfile(key, requiredRole) {
    var params = {
        TableName: "ClubUsers",
        FilterExpression: "verificationKey = :val",
        ExpressionAttributeValues: {
            ":val": key
        }
    };
    return call("scan", params).then(function (r) {
        if (r.Count == 0) {
            console.error("Key verification failed: ", key);
            return Promise.reject({ message: "Key verification failed. Perhaps account was deleted?" });
        }
        var item = r.Items[0];
        if (requiredRole && !item.roles.some(function (r) { return r === requiredRole; })) {
            console.error("User does not have required role: ", key);
            return Promise.reject({ message: "You do not have the required role to perform this operation" });
        }
        console.log("Resolved key: ", item);
        return item;
    });
}
//# sourceMappingURL=keyVerification.js.map