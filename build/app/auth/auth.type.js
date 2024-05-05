"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credentials = void 0;
const user_types_1 = require("../users/user.types");
exports.Credentials = user_types_1.user.pick({ username: true, displayName: true });
