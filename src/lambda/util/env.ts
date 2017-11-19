export class Environment {
    static get debug(): boolean {
        return Boolean(process.env.DEBUG).valueOf();
    }

    static get validateRecaptcha(): boolean {
        return Environment.is("RECAPTCHA");
    }

    static is(param: string): boolean {
        return process.env[param] === "true";
    }

    static siteLink(page: string) {
        const base = process.env["SITE_URL"];
        if (!base) {
            console.log("No SITE_URL environent var -- did you forget to add in template.yml?");
            throw "No SITE_URL environent var -- did you forget to add in template.yml?"
        }
        return base + "/" + page;
    }

    static get jwtSecret(): string {
        return Environment.get("JWT_SECRET", "*** JwtSecret Parameter (Deploy GenerateChangeSet) ***");
    }

    static get recaptchaSecret(): string {
        return Environment.get("RECAPTCHA_SECRET", "*** RecaptchaSecret Parameter (Deploy GenerateChangeSet) ***");
    }

    static get(param: string, defaultValue?: string): string {
        let value = process.env[param];
        if (!value) {
            if (!defaultValue) {
                throw new Error("Env variable not defined: " + param);
            }
            value = defaultValue;
            console.log("Used default value for environment variable: ", param, defaultValue);
        }
        return value;
    }
}