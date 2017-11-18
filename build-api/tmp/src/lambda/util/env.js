var Environment = (function () {
    function Environment() {
    }
    Object.defineProperty(Environment, "debug", {
        get: function () {
            return Boolean(process.env.DEBUG).valueOf();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment, "validateRecaptcha", {
        get: function () {
            return Environment.is("RECAPTCHA");
        },
        enumerable: true,
        configurable: true
    });
    Environment.is = function (param) {
        return process.env[param] === "true";
    };
    Environment.siteLink = function (page) {
        var base = process.env["SITE_URL"];
        if (!base) {
            console.log("No SITE_URL environent var -- did you forget to add in template.yml?");
            throw "No SITE_URL environent var -- did you forget to add in template.yml?";
        }
        return base + "/" + page;
    };
    Environment.get = function (param) {
        var value = process.env[param];
        if (!value) {
            throw new Error("Env variable not defined: " + param);
        }
        return value;
    };
    return Environment;
}());
export { Environment };
//# sourceMappingURL=env.js.map