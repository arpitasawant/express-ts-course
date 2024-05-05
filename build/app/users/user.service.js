"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repo_1 = __importDefault(require("./user.repo"));
const user_responses_1 = require("./user.responses");
// import { AuthResponses } from "../auth/auth.responses";
const find = (query) => user_repo_1.default.find(query);
function findOne(query, safe = false) {
    const result = user_repo_1.default.findOne(query);
    if (!result) {
        if (safe)
            return false;
        throw user_responses_1.userResponses.USER_NOT_FOUND;
    }
    return result;
}
const insertOne = (user) => {
    const didInsert = user_repo_1.default.insertOne(user);
    if (didInsert)
        return user_responses_1.userResponses.INSERT_SUCCESSFUL;
    throw user_responses_1.userResponses.INSERT_FAILED;
};
const updateOne = (userData) => {
    const didDelete = user_repo_1.default.updateOne(userData);
    if (didDelete)
        return user_responses_1.userResponses.UPDATE_SUCCESSFUL;
    throw user_responses_1.userResponses.UPDATE_FAILED;
};
const deleteOne = (id) => {
    const didDelete = user_repo_1.default.deleteOne(id);
    if (didDelete)
        return user_responses_1.userResponses.DELETE_SUCCESSFUL;
    throw user_responses_1.userResponses.DELETE_FAILED;
};
exports.default = {
    find,
    findOne,
    insertOne,
    updateOne,
    deleteOne,
};
