import {AttendanceOption} from "./AttendanceOption";

export enum TimeOption {
    t2000 = "8pm",
    t2030 = "8.30pm",
    t2100 = "9pm",
    t2130 = "9.30pm"
}

export type UserProfile = {
    username: string,
    email: string,
    option?: AttendanceOption,
    verificationKey: string,
    roles: string[]
    time?: TimeOption,
    holiday?: number,
    created: number
}