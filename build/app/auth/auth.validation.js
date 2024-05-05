"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDetailsValidation = void 0;
const validator_1 = require("../utilities/validator");
const auth_type_1 = require("./auth.type");
exports.userDetailsValidation = [
    (0, validator_1.body)(auth_type_1.Credentials)
];
