const fs = require('fs');

export const aws_region = "eu-west-1";

// return the app html
export function get(event: any, context: any) {
    const contents = fs.readFileSync("build/index.html");
    context.succeed({
        statusCode: 200,
        body: contents.toString(),
        headers: {'Content-Type': 'text/html'}
    });
}

// return the app manifest
export function manifest(event: any, context: any) {
    const contents = fs.readFileSync("build/manifest.json");
    context.succeed({
        statusCode: 200,
        body: contents.toString(),
        headers: {'Content-Type': 'application/json'}
    });
}

export {Signup} from "./function/Signup";
export {CheckEmailByKey} from "./function/CheckEmailByKey";

export {CronRollUsers} from "./function/RollUsers";
export {RollUsers} from "./function/RollUsers";

export {CronBeginWeek} from "./function/BeginWeek";
export {BeginWeek} from "./function/BeginWeek";

export {CronSendReminder} from "./function/SendReminder";
export {SendReminder} from "./function/SendReminder";

export {CronSendFinalEmail} from "./function/SendFinalEmail";
export {SendFinalEmail} from "./function/SendFinalEmail";

export {SendCustomEmail} from "./function/SendCustomEmail";

export {StoreOption} from "./function/StoreOption";
export {StoreTimeOption} from "./function/StoreTimeOption";
export {StoreHoliday} from "./function/StoreHoliday";
export {StoreFriends} from "./function/StoreFriends";
export {StoreUserDetails} from "./function/StoreUserDetails";

export {Turnout} from "./function/Turnout";
export {ResendEmail} from "./function/ResendEmail";
export {Unsubscribe} from "./function/Unsubscibe";
