import {success, failure} from "../util/response-lib";
import {loadProfile} from "../util/keyVerification";
import {makeDynamoCall} from "../util/dynamodb-lib";
import {UserProfile} from "../../common/UserProfile";
import {profileUpdate} from "../util/profileUpdate";

export function StoreUserDetails(event: any, context: any) {
    const {key, username, surname} = JSON.parse(event.body);

    console.log("Storing personal details", username, surname, "for key", key);

    profileUpdate(key, context, {
        AttributeUpdates: {
            username: {
                Action: "PUT",
                Value: username
            },
            surname: surname ? {
                Action: "PUT",
                Value: surname
            } : {
                Action: "DELETE"
            }
        }
    });
}