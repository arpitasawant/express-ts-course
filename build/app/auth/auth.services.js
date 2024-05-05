"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../users/user.service"));
const auth_responses_1 = require("./auth.responses");
const userDetails = (credentials) => {
    try {
        const user = user_service_1.default.findOne(credentials);
        // const { password, ...restOfTheUser } = user;
        return user;
    }
    catch (e) {
        throw auth_responses_1.AuthResponses.INVALID_CREDENTAILS;
    }
};
exports.default = {
    userDetails
};
