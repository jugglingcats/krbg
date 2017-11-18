var fs = require('fs');
export function get(event, context) {
    var contents = fs.readFileSync("build/index.html");
    context.succeed({
        statusCode: 200,
        body: contents.toString(),
        headers: { 'Content-Type': 'text/html' }
    });
}
export { Signup } from "./function/Signup";
export { CheckEmailByKey } from "./function/CheckEmailByKey";
export { BeginWeek } from "./function/BeginWeek";
export { SendReminder } from "./function/SendReminder";
export { SendFinalEmail } from "./function/SendFinalEmail";
export { StoreOption } from "./function/StoreOption";
export { StoreTimeOption } from "./function/StoreTimeOption";
export { Turnout } from "./function/Turnout";
export { ResendEmail } from "./function/ResendEmail";
export { Unsubscribe } from "./function/Unsubscibe";
//# sourceMappingURL=index.js.map