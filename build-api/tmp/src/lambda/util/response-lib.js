var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
export function success(info) {
    if (info === void 0) { info = {}; }
    return buildResponse(200, __assign({ ok: true }, info));
}
export function failure(info, code) {
    if (info === void 0) { info = {}; }
    if (code === void 0) { code = 500; }
    return buildResponse(code, __assign({ ok: false }, info));
}
function buildResponse(statusCode, info) {
    console.log("Building response: ", statusCode, info);
    return {
        statusCode: statusCode,
        headers: {
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Credentials': true,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    };
}
//# sourceMappingURL=response-lib.js.map